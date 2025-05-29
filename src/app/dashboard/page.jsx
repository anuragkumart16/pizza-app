"use client";

import Navbar from "@/components/organisms/Navbar";
import BigHeading from "@/components/atoms/BigHeading";
import StatsCard from "@/components/molecules/StatsCard";
import StatsHolder from "@/components/molecules/StatsHolder";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function page() {

  const router = useRouter();
  const { isLoggedIn, user } = useAuth();

  // checking if user is logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [router, isLoggedIn]);
  return (
    <>
      <Navbar />
      <div className="flex flex-col  m-4 mb-6 items-center justify-center">
        <div className="flex flex-row mt-6 items-start justify-start">
          <BigHeading styles={"self-start"}>Hello,{user?.username||"User"}!</BigHeading>
        </div>
        <div className="flex flex-row gap-11 m-4 mt-8 mb-8 items-center justify-center">
          <StatsCard
            text={"Total sales"}
            head={"$200,000"}
            increment={"+10%"}
          />
          <StatsCard text={"Orders"} head={"500"} increment={"+5%"} />
          <StatsCard text={"Revenue"} head={"$150,000"} increment={"+8%"} />
        </div>
      </div>
      <StatsHolder />
    </>
  );
}

export default page;
