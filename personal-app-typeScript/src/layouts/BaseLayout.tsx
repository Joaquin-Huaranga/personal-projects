import React from "react";
import { HeaderLayout } from "./HeaderLayout.tsx";
import { FooterLayout } from "./FooterLayout.tsx";
import { Outlet } from "react-router-dom";

export const BaseLayout = () => {
  return (
    <div>
      <HeaderLayout />
      <main>
        <Outlet />
      </main>
      <FooterLayout />
    </div>
  );
};
