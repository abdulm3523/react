import About from "./Components/About";
import CallToAction from "./Components/CallToAction";
import Contact from "./Components/Contact";
import Faq from "./Components/Faq";
import Fearures from "./Components/Features";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Properties from "./Components/Properties";
import Team from "./Components/Team";
const App = () => {
  return (
    <>
      {/* Header start here */}
      <Header />

      {/* Header end here */}

      {/* Hero section */}

      <Hero
        title={"We'll build house of your dream"}
        subTitle={
          "We have 9000 more review and our customers trust on out property and quality products."
        }
      />

      {/* Hero section end here */}

      {/* Features Section Start */}
      <Fearures />
      {/*  Features Section End  */}

      {/* Properties section start here */}
      <Properties />
      {/* Properties section end here */}

      {/* About section */}
      <About />
      {/* About end */}

      {/* CTA SECTION */}
      <CallToAction />
      {/* CTA SECTION END*/}

      {/* FAQ SECTION START HERE */}
      <Faq />
      {/* FAQ SECTION END HERE */}

      {/* TEAM SECTION START HERE */}
      <Team />
      {/* TEAM SECTION END HERE */}
      {/* CONTACT SECTION START HERE */}
      <Contact />
      {/* CONTACT SECTION END HERE */}

      {/* Footer start here */}
      <Footer />
      {/* Footer end here */}
    </>
  );
};

export default App;
