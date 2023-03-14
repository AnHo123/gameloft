import classNames from "classnames";
import { useEffect, useState } from "react";
import CartItem from "../cardItem";
import Typography from "../ui/typography";
import styles from "./styles.module.scss";

const cardList = [
  {
    title: "short title here",
    imgSrc: "/image/card01.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit...",
  },
  {
    title: "short title here",
    imgSrc: "/image/card02.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit...",
  },
  {
    title: "short title here",
    imgSrc: "/image/card03.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit...",
  },
  {
    title: "short title here",
    imgSrc: "/image/card04.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit...",
  },
  {
    title: "short title here",
    imgSrc: "/image/card05.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit...",
  },
];

function EnventAndPromo() {
  const [indexCard, setIndexCard] = useState(0);
  const [timer, setTimer] = useState();
  const [isClickPagination, setClickPagination] = useState(false);

  useEffect(() => {
    setTimer(
      setTimeout(() => {
        setIndexCard((indexCard + 1) % cardList?.length);
        setClickPagination(false);
      }, 3000)
    );
  }, [indexCard]);

  const calcIndex = (index, length) => {
    const result = index % length;
    return result >= 0 ? result : result + length;
  };

  const handleClearTimeout = () => {
    const viewWidthDevice = window.innerWidth;
    if (viewWidthDevice > 992) clearTimeout(timer);
  };

  const handleSetTimeout = () => {
    setTimer(
      setTimeout(() => {
        setIndexCard((indexCard + 1) % cardList?.length);
      }, 3000)
    );
  };

  const handleCreatePaginationList = (total) => {
    let result = [];
    for (let i = 1; i <= total; i++) {
      result.push(i);
    }
    return result;
  };

  const handleClickPagination = (index) => {
    setIndexCard(index);
    handleClearTimeout();
    setClickPagination(true);
  };

  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <Typography variant={"Heading_1"} className={styles.title}>
          Special Events & Promotional
        </Typography>
        <Typography variant={"Subtitle_1"} className={styles.subTitle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos.
        </Typography>
      </div>
      <div className={classNames(styles.cardList, styles.snapInline)}>
        {Array.isArray(cardList) &&
          cardList.length > 0 &&
          cardList.map((card, index) => {
            const indexLeft1 = calcIndex(indexCard - 1, cardList.length);
            const indexLeft2 = calcIndex(indexCard - 2, cardList.length);
            const indexRight1 = calcIndex(indexCard + 1, cardList.length);
            const indexRight2 = calcIndex(indexCard + 2, cardList.length);

            return (
              <div
                className={classNames(
                  isClickPagination && styles.transitionNone,
                  styles.cardItemHide,
                  indexCard === index && styles.cardItemActive,
                  indexLeft1 === index && styles.cardItemLeft1,
                  indexLeft2 === index && styles.cardItemLeft2,
                  indexRight1 === index && styles.cardItemRight1,
                  indexRight2 === index && styles.cardItemRight2
                )}
              >
                <CartItem
                  title={card?.title}
                  imgSrc={card?.imgSrc}
                  description={card?.description}
                  onMouseEnter={handleClearTimeout}
                  onMouseLeave={handleSetTimeout}
                  active={index === indexCard}
                />
              </div>
            );
          })}
      </div>
      <div className={styles.pagination}>
        {Array.isArray(handleCreatePaginationList(cardList?.length)) &&
          cardList?.length > 0 &&
          handleCreatePaginationList(cardList?.length)?.map((item, index) => (
            <div>
              <div
                className={classNames(
                  styles.paginationItem,
                  index === indexCard && styles.active
                )}
                onClick={() => handleClickPagination(index)}
              >
                {item}

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stop-color="#e91e63" />
                      <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                  </defs>
                  <circle cx="25" cy="25" r="21" stroke-linecap="round" />
                </svg>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default EnventAndPromo;
