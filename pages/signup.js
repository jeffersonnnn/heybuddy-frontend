import React from "react";
import HeaderMain from "../components/HeaderMain";
import Input from "../components/Input";
import Button from "../components/Button";

const signup = () => {
  return (
    <section className="page">
      <HeaderMain />
      <div className="max-w-md w-full block m-auto">
        <h1 className="text-xl pb-6 text-center font-bold font-lora primary-gradient">
          Create account
        </h1>
        <form>
          <div className="flex mb-6">
            <Input
              type={"text"}
              label={"First name"}
              customClass={"w-full mr-3"}
              formFieldClass={"mr-3"}
            />
            <Input type={"text"} label={"Last name"} customClass={"w-full"} />
          </div>
          <Input
            label={"Email address"}
            type={"email"}
            customClass={"w-full mb-6"}
          />
          <Input
            label={"Password"}
            type={"password"}
            customClass={"w-full mb-7"}
          />
          <Button customClass={"w-full mt-4"}>Proceed</Button>
        </form>
      </div>
    </section>
  );
};

export default signup;
