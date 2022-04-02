import main from "../assets/images/main.svg";
import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/index";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>Tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            magni minus consectetur ipsa doloremque quibusdam possimus enim
            inventore, nam laboriosam voluptatem dignissimos hic, fugit quidem
            natus. Itaque earum ad saepe et illo nemo deserunt corrupti non
            aliquam nesciunt exercitationem error dicta similique, maxime
            necessitatibus ea, porro, adipisci quidem sunt veritatis!
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
