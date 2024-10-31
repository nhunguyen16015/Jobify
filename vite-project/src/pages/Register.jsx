import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Mon" />
        <FormRow
          type="text"
          name="lastName"
          lableText="last name"
          defaultValue="Kute"
        />
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow
          type="text"
          name="email"
          defaultValue="nhunguyen16015@gmail.com"
        />
        <FormRow type="text" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" classname="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
