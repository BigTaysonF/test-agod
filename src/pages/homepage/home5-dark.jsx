import React from "react";
import Navbar from "../../components/Navbar/navbar";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import Footer from "../../components/Footer/footer";
import Team from "../../components/Team/team";
import DarkTheme from "../../layouts/Dark";
import Works3 from "../../components/Works3/works3";
import Intro4 from "../../components/Intro4/intro4";
import AboutUs3 from "../../components/About-us3/about-us3";
import Services3 from "../../components/Services3/services3";
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
      <AboutUs3 />
      <Works3 />
      <Services3 />
      <AboutUs3 />
      <MinimalArea2 />
      <FullTestimonials classText="pb-0" />
      <Team />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage5;
