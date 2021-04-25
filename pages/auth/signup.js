import React from "react";
import Link from "next/link";
import HeaderMain from "../../components/HeaderMain";
import Input from "../../components/Input";
import Button from "../../components/Button";

const signup = () => {
  return (
    <section className="page">
      <HeaderMain />
      <div className="max-w-md w-full block m-auto">
        <h1 className="text-xl pb-6 text-center font-bold font-lora primary-gradient">
          Create account
        </h1>
        <form>
          <div className="flex mb-6 phone2x:block justify-between">
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
        <div className="text-center mt-12">
          <span className="font-workSans text-base pr-1">
            Already have an account?
          </span>
          <span>
            <Link href="/auth/signin">
              <a className="font-workSans text-base text-red font-bold">
                Sign in here
              </a>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default signup;
