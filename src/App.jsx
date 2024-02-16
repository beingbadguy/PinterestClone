import { Nav } from "./components/Nav";
import { Cards } from "./components/Cards";
import React from "react";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const CardsRef = useRef();

  // console.log(CardsRef.current);

  return (
    <div className="flex flex-col justify-center items-center">
      <Nav formfocus={CardsRef}></Nav>
      <Cards cardref={CardsRef}></Cards>
    </div>
  );
}

export default App;
