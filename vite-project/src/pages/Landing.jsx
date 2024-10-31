import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Logo from "../components/logo";

// const StyledBtn = styled.button`
//   font-size: 1.5rem;
//   background: red;
//   color: while;
// `;
const Landing = () => {
  return (
    <Wrapper>
      {/* <h1>Landing Page</h1>
      {/* <StyledBtn>styled btn</StyledBtn> */}
      {/* <div className="content">some content</div> */}
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job<span> tracking</span> app
          </h1>
          <p>
            Crisp autumn leaves crunched underfoot as golden sunlight filtered
            through colorful trees. The air was cool and fresh, carrying the
            scent of pine and earth, promising the comfort of cozy sweaters.
          </p>
          <Link to="./register" className="btn register-link ">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

// const Wrapper = styled.div`
//   background: red;
//   h1 {
//     color: white;
//   }
//   .content {
//     background: blue;
//     color: yellow;
//   }
// `;

export default Landing;
