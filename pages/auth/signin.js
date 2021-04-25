import React from "react";
import Link from "next/link";
import Input from "../../components/Input";
import Button from "../../components/Button";

const signin = () => {
  return (
    <section>
      <div className="max-w-md w-full block m-auto">
        <h1 className="text-xl mb-6 text-center font-bold font-lora primary-gradient">
          Sign in
        </h1>
        <p className="font-workSans mb-8 font-bold text-base text-grey2 text-center">
          Welcome back
        </p>
        <form>
          <Input
            label={"Email address"}
            type={"email"}
            customClass={"w-full mb-6"}
          />
          <Input
            label={"Password"}
            type={"password"}
            customClass={"w-full mb-5"}
          />
          <Link href="#">
            <a className="font-workSans text-base text-red font-bold text-right block">
              Forgot your password?
            </a>
          </Link>
          <Button customClass={"w-full mt-12"}>Sign in</Button>
        </form>
        <div className="text-center mt-12">
          <span className="font-workSans text-base pr-1">
            Are you new here?
          </span>
          <span>
            <Link href="auth/signin">
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

export default signin;
