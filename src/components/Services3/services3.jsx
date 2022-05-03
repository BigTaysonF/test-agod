import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";

const Services3 = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                ENTER THE HUB
              </h6>
              <h3 className="wow color-font">The heart of the chain</h3>
              <h3 className="item wow fadeIn">
                <p>
                  Serving as the economic center of AGOD protocol, the Hub is
                  the ecosystem that provides vital services to the apps and
                  services within.
                </p>
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-lg-4 mb-1 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-monitor"></i>
              </span>
              <h5>Abloc CEX</h5>
              <p>
                The People’s Exchange. Designed for the community, better
                returns, lower fees, great interface.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 mb-1 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-bolt-outline"></i>
              </span>
              <h5>Decentralized Exchange</h5>
              <p>
                Multichain enhanced exchange, swapping digital assets
                multichain, with very low fees and instant transaction
                confirmation.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 mb-1 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-cube"></i>
              </span>
              <h5>Dreamhub</h5>
              <p>
                NFT Marketplace. Set to operate a next-gen decentralized NFT
                marketplace.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 mb-1 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>Pandora’s Finance</h5>
              <p>
                Crypto Startup Enhancer, combining the power of a protocol that
                builds native DAO tooling interfaces.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 mb-1 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>Wallet</h5>
              <p>
                Not just another DeFi wallet. The bridge between the real world
                assets and crypto is now possible, rewards, banking system,
                bring your wallet with you everywhere.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3;