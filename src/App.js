import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import Header from "./components/header";
import HotspotBanner from "./components/hostpotBanner";
import DownloadInfo from "./components/downloadInfo";
import Register from "./components/register";
import Footer from "./components/footer";
import SupportListIcon from "./components/supportListIcon";
import EnventAndPromo from "./components/eventAndPromo";

function App() {
  const viewWidthDevice = window.innerWidth;
  if (viewWidthDevice > 992) {
    return (
      <div className="App">
        <Header />
        <Fullpage>
          <FullpageNavigation />
          <FullPageSections>
            <FullpageSection>
              <HotspotBanner />
              <DownloadInfo />
            </FullpageSection>

            <FullpageSection>
              <Register />
            </FullpageSection>

            <FullpageSection>
              <EnventAndPromo />
            </FullpageSection>

            <FullpageSection>
              <Footer />
            </FullpageSection>
          </FullPageSections>
        </Fullpage>
        <SupportListIcon />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header />
        <HotspotBanner />
        <DownloadInfo />
        <Register />
        <EnventAndPromo />
        <Footer />
      </div>
    );
  }
}

export default App;
