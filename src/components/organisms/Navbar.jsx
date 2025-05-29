"use client";

import React from "react";
import LogoGrp from "../molecules/LogoGrp";
import NavText from "../atoms/NavText";
import Btn from "../atoms/Btn";
import Avatar from "./../atoms/Avatar";
import { useRouter } from "next/navigation";
import { useAuth } from "./../../hooks/useAuth";

function Navbar() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  return (
    <div className="flex flex-row p-5 items-center justify-between h-[8vh] border-b border-gray-200">
      <LogoGrp />
      <div className="flex flex-row items-center gap-8">
        {!isLoggedIn && (
          <>
            <NavText path={"/"}>Home</NavText>
            <NavText>About</NavText>
            <NavText>Contact</NavText>
            <Btn onclick={() => router.push("/")}>Login</Btn>
          </>
        )}
        {isLoggedIn && (
          <>
            <NavText path={"/orders"}>Orders</NavText>
            <NavText >Menu</NavText>
            <NavText path={"/dashboard"}>Dashboard</NavText>
            <NavText path="/logout">Logout</NavText>
            <Avatar />
          </>
        )}

      </div>
    </div>
  );
}

export default Navbar;
