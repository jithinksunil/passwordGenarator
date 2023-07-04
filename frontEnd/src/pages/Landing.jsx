import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Body from "../components/Body";

function Landing() {
  return (
    <div className="h-screen flex flex-col">
      <NavBar/>
      <Body/>
    </div>
  );
}

export default Landing;
