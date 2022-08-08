import React, { Fragment } from "react";
import NavBar from "./NavBar";

type LayoutProps = {
  children: React.ReactNode;
}

export default function NavBarLayout( { children } : LayoutProps ) {
  return (
    <Fragment>
      <NavBar />
      <main>{children}</main>
    </Fragment>
  )
};