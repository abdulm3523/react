import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Fearures from "./Components/Features";
import Properties from "./Components/Properties";
const App = () => {
  return (
    <>
      {/* Header start here */}
      <Header />

      {/* Header end here */}

      {/* Hero section */}

      <Hero
        title={'We\'ll build house of your dream'}
        subTitle={'We have 9000 more review and our customers trust on out property and quality products.'}
      />

      {/* Hero section end here */}

      {/* Features Section Start */}
      <Fearures/>
      {/*  Features Section End  */}

      {/* Properties section start here */}
      <Properties />
      {/* Properties section end here */}
    </>
  )
}

export default App