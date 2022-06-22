import React, { useState } from "react";
import Link from "next/link";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";
import ReactModal from "react-modal";
import {useRef, useEffect} from 'react';


const Intro4 = ({ sliderRef, blackStar }) => {
  const ref = useRef(null);

  useEffect(() => {
    // 👇️ use a ref (best)
    const el2 = ref.current;
    console.log(el2);

    // 👇️ use document.getElementById()
    // should only be used when you can't set a ref prop on the element
    // (you don't have access to the element)
    const el = document.getElementById('container');
    console.log(el);
  }, []);
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div ref={ref} id="container" className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1>
              <img src="/img/slider-2.png"></img><br />
              </h1>
              <h4>
              <span className="color-font">Integrating the best blockchain services to offer users and investors top notch investing opportunities with great rewards.</span>
              </h4>
            </div>
            <br />
            <div className="butay">
            <a href="https://ablocexchange.medium.com/agod-protocol-white-papers-35fd12738b4d">
                  <i className="fas fa-file"></i>
                </a>
                <span>
                  White Paper
                </span>
                <a href="https://youtu.be/SSo_EIwHSd4">
                  <i className="fab fa-youtube"></i>
                </a>
                <span>
                  How Blockchains Works
                </span>
                </div>
          </div>
        </div>
      </div>

      <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />

        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro4;
