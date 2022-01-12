import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-100">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-blue-600 hover:text-black text-6xl font-bold cursive tracking-widest"
          >
            Derek
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-blue-400 bg-blue-100"
            className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-600 hover:text-black text transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-110"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-blue-400 bg-blue-100"
            className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-600 hover:text-black text transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-110"
          >
            My Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-blue-400 bg-blue-100"
            className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-600 hover:text-black text transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-110"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6 flex space-x-3">
            <SocialIcon url="https://www.instagram.com/" className="mar-4" target="_blank" fgColor="#ffff" style={{ height:35, width:35}}/>
            <SocialIcon url="https://www.facebook.com/djr76jits/" className="mar-4" target="_blank" fgColor="#ffff" style={{ height:35, width:35}}/>
            <SocialIcon url="https://www.youtube.com/channel/UCxc4icTZadSdFQN3Xv_ko4A" className="mar-4" target="_blank" fgColor="#ffff" style={{ height:35, width:35}}/>
        </div>
      </div>
    </header>
  );
}


// import React from "react"

// export default function NavBar(){
//   return <h1> NavBar page</h1>
// }