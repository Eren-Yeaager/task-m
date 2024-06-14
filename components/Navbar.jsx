import React from "react";
import { ModeToggle } from "./mode-toggle";
const Navbar = () => {
  return (
    <div className="flex py-3 flex-wrap justify-around">
      <ModeToggle />
      <h1 className="text-lg font-semibold">Task M</h1>
      <ul className=" flex gap-[40px] text-m">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
