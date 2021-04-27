import React from "react";
import Input from "./Input";
import Button from "./Button";
import Link from "next/link";

const LandingMain = () => {
  return (
    <div className="pt-12">
      <h1 className="text-2xl pb-6 text-center font-bold font-lora primary-gradient">
        Be the best buddy to <br className="tablet2x:hidden" />
        your significant other(s) and ‘friends’.
      </h1>
      <p className="text-lg mb-4 text-center text-grey">
        Create circles for your friends and significant others and start setting{" "}
        <br className="tablet2x:hidden" />
        reminders for special events, create catalogues for gifts{" "}
        <br className="tablet2x:hidden" />
        and interests, plan out special dates.
      </p>
      <Link href="/auth/signup">
        <a className="text-center mb-8 text-red text-base block">
          Coming soon, sign up for early access
        </a>
      </Link>
      <div className="flex justify-center items-center">
        <Input
          type={"text"}
          customClass={"w-96 mr-3"}
          placeholder={"Enter your email address"}
        />
        <Link href="/auth/signup">
          <a>
            <Button customClass={"w-48"}>Sign me up</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default LandingMain;
