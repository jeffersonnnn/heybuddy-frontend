import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const forgotPassword = () => {
  return (
    <div className="pt-12">
      <h1 className="text-2xl pb-6 text-center font-bold font-lora primary-gradient">
        Forgot your password?
      </h1>
      <p className="text-lg mb-4 text-center text-grey">
        Enter your email and we'll send you a <br className="tablet2x:hidden" />{" "}
        link to reset your password
      </p>
      <form className="flex justify-center items-center">
        <Input
          type={"text"}
          customClass={"w-96 mr-3"}
          placeholder={"Enter your email address"}
        />
        <Button customClass={"w-48"}>Confirm</Button>
      </form>
    </div>
  );
};

export default forgotPassword;
