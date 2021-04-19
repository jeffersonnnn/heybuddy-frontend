import React from "react";
import Input from "./Input";
import Button from "./Button";

const LandingMain = () => {
  return (
    <div className="pt-32">
      <h1 className="text-2xl pb-6 text-center font-bold font-lora primary-gradient">
        Be the best buddy to <br />
        your significant other(s) and ‘friends’.
      </h1>
      <p className="text-lg mb-4 text-center text-grey">
        Create circles for your friends and significant others and start setting{" "}
        <br />
        reminders for special events, create catalogues for gifts <br />
        and interests, plan out special dates.
      </p>
      <small className="text-center mb-8 text-red text-base block">
        Coming soon, sign up for early access
      </small>
      <div className="flex justify-center items-center">
        <Input
          customClass={"w-96 mr-3"}
          placeholder={"Enter your email address"}
        />
        <Button customClass={"w-48"}>Sign me up</Button>
      </div>
    </div>
  );
};

export default LandingMain;
