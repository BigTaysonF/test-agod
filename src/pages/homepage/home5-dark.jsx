import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Team from "../../components/Team/team";
import DarkTheme from "../../layouts/Dark";
import Intro4 from "../../components/Intro4/intro4";
import AboutUs3 from "../../components/About-us3/about-us3";
import Services3 from "../../components/Services3/services3";
import Services4 from "../../components/Services4/services4";
import MinimalArea2 from "../../components/Minimal-Area2/minimal-area2";

const Homepage5 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <Intro4 />
      <Team />
      <AboutUs3 />
      <Services3 />
      <MinimalArea2 />
      <Services4 />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage5;
