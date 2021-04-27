import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const resetPassword = () => {
  return (
    <section>
      <div className="max-w-md w-full block m-auto">
        <h1 className="text-xl mb-6 text-center font-bold font-lora primary-gradient">
          Password reset
        </h1>
        <form>
          <Input
            label={"New Password"}
            type={"password"}
            customClass={"w-full mb-6"}
          />
          <Input
            label={"Confirm Password"}
            type={"password"}
            customClass={"w-full mb-6"}
          />
          <Button type={"submit"} customClass={"w-full mt-12"}>
            Reset Password
          </Button>
        </form>
      </div>
    </section>
  );
};

export default resetPassword;
