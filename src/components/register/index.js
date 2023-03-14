import Button from "../ui/button";
import InputField from "../ui/inputField";
import Select from "../ui/select";
import Typography from "../ui/typography";
import styles from "./styles.module.scss";

function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img
          src="/image/decoratorMinions.png"
          alt="decoratorMinions"
          className={styles.decorImage}
        />
        <div className={styles.register}>
          <div className={styles.heading}>
            <Typography variant={"Heading_4"}>Stay in the Know!</Typography>
            <Typography variant={"Subtitle_4"}>
              Don't get left behind! <br />
              Subscribe to our newsletters today!
            </Typography>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <InputField type="text" placeholder="Name" id="name" name="name" />
            <InputField
              type="text"
              placeholder="Email"
              id="email"
              name="email"
            />
            <Select
              id="country"
              placeholder="Country"
              options={["Country 1", "Country 2", "Country 3"]}
            />
            <Select
              id="platform"
              placeholder="Platform"
              options={["Platform 1", "Platform 2", "Platform 3"]}
            />

            <div className={styles.checkbox}>
              <InputField
                type="checkbox"
                label="By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy."
                id="policy"
                name="policy"
              />
              <InputField
                type="checkbox"
                label="I agree to receive promotional offers relating to all Gameloft games and services."
                id="promo"
                name="promo"
              />
            </div>

            <Button
              variant={"small"}
              title={"Button"}
              onClick={() => alert("submit")}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
