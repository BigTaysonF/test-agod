import React from "react";
import Link from "next/link";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";


const Intro4 = ({ sliderRef, blackStar }) => {
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1>
                <span className="color-font">AGOD Ecosystem</span><br /> THE NEXT-GEN OF FUNDING <br />
              </h1>
              <h4>
              <span className="color-font">We use blockchain to collectively fund & support startups at a global scale.</span>
              </h4>
            </div>
            <br />
            <div className="butay">
            <Link href="https://ablocexchange.medium.com/agod-protocol-white-papers-35fd12738b4d">
                <a>
                  <span>White Paper</span>
                </a>
              </Link>
              <Link href="https://ablocexchange.medium.com/agod-protocol-white-papers-35fd12738b4d">
                <a>
                  <span>How Blockchain Works</span>
                </a>
              </Link>
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
