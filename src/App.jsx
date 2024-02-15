import { Nav } from "./components/Nav";
import { Cards } from "./components/Cards";
import React from "react";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="flex flex-col justify-center items-center">
      <Nav></Nav>
      <Cards></Cards>
    </div>
  );
}

export default App;
