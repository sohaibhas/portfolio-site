import React from "react";
import { SiStrapi, SiHiveBlockchain, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2>A Growing Protocol Ecosystem</h2>
        <p>
          The Defi Protocol System empowers developers, liquidity providers, and
          traders to Paricipate in a financial marketplace that is open and
          accessible to all.
        </p>
        <div className="card-container">
          <div className="card">
            <AboutCard
              icon={<SiHiveBlockchain className="icon" />}
              heading="Reliable, tamper-proof network"
              text="Use decentralization, trueted nodes, premium data, and cryptographics proofs to connet highly accurate and available data.APls to any smart contract"
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<SiFsecure className="icon" />}
              heading="Reliable, tamper-proof network"
              text="Use decentralization, trueted nodes, premium data, and cryptographics proofs to connet highly accurate and available data.APls to any smart contract"
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<SiStrapi className="icon" />}
              heading="Reliable, tamper-proof network"
              text="Use decentralization, trueted nodes, premium data, and cryptographics proofs to connet highly accurate and available data.APls to any smart contract"
            />
          </div>
          <div className="card">
            <AboutCard icon={<VscServerProcess className="icon" />} heading="Reliable, tamper-proof network"
              text="Use decentralization, trueted nodes, premium data, and cryptographics proofs to connet highly accurate and available data.APls to any smart contract"/>
          </div>
        </div>
        <a href="/" className="btn">
          Use Defi
        </a>
      </div>
    </div>
  );
};

export default About;
