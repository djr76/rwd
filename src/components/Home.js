import React from "react";
import image from "../archa.jpg";
<link rel="stylesheet" href="home.css" />


export default function Home() {
  return (
    <main>
    <img src={image} alt="Gateway Arch" className="absolute object-cover w-full h-full" />
      <section className="relative flex justify-center pr-2 pt-24 lg:pt-64 px-8">
      <div space-y-6>
        <h1 id="op" className="text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name pt-12 align-text-bottom">Welcome!</h1>
        </div>
      </section>
      
      
      
    </main>
  );
}
 