"use client";

import React from "react";
import InputGrp from "../molecules/InputGrp";
import Btn from "../atoms/Btn";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6 w-[40%] justify-center items-center mt-8 border-t-2 border-[var(--color-secondary)] p-4 pt-10">
      <InputGrp type={"email"} placeholder={"Enter your email"}>
        Email
      </InputGrp>
      <InputGrp type={"password"} placeholder={"Enter your password"}>
        Password
      </InputGrp>
      <Btn onclick={() => router.push("/dashboard")}>Sign in</Btn>
    </form>
  );
}

export default LoginForm;
