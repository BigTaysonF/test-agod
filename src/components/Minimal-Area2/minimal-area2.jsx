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
                We are building on Fantom. An advanced DAG-based aBFT consensus algorithm. 
                Blockchains built on Fantom are fast, secure, and highly scalable:
                </p>
              </Split>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                Fully compatible with the Ethereum Virtual Machine (EVM). 
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                Web3JS API and RPC support. 
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                Smart contracts written in Solidity or Vyper.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                Compiled and deployed on Ethereum, are fully compatible with the Opera Network.
                </li>
              </ul>
              <br />
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                AGOD Ecosystem hopes to build the infrastructure for a more connected and efficient 
                future where people will be able to take advantage of the technological breakthroughs 
                to improve the quality of their lives.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;
