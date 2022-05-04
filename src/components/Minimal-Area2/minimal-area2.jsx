/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea2 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.svg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Build on Fantom</h4>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Start building on Fantom using Solidity and the tools you’re
                  already familiar with: Remix, Truffle, and MetaMask. Fantom
                  supports the EVM and you can deploy your dApps just like on
                  Ethereum. In the points add :
                </p>
              </Split>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  EVM compatible
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  Oracles integrations
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  Open source
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  Robust APIs
                </li>
              </ul>
              <Link href={`/about/about-dark`}>
                <a
                  className="butn bord curve mt-40 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <span>Discover</span>
                </a>
              </Link>

              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;
