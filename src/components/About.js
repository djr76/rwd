import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import image from "../aboutme.png";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div></div>;

  return (
    <main>{
      <img src={image} alt="Gateway Arch" className="absolute object-cover w-full h-full" />
    }
    
      <div className="container mx-auto relative">
      <h1 className="text-4xl font-bold text-blue-800 italic flex justify-center cusrsive pt-12 pb-12">About Me</h1>
        <section className="rounded-lg shadow-4xl lg:flex p-20">
          <div className="text-lg flex flex-col justify-center grid grid-cols-2">
            <h1 className="cursive text-6xl text-blue-800 mb-4">
              {" "}
              <span className="text-blue-800">{author.name}</span>
              <span>
                <img
                  src={urlFor(author.authorImage).url()}
                  alt={author.name}
                  className="rounded w-48 h-64 lg:w-64 lg:h-96 mr-8 pt-6"
                />
              </span>
            </h1>
            <div>
              <BlockContent
                block={author.bio}
                projectId="7cv6ef0b"
                dataset="production"
              ></BlockContent>
            </div>
          </div>
          <div className="text-lg flex flex-col justify-center">
            <ul class="list-none text-xl space-y-6 ">
              <li id="li-1" class="text-blue-800 tracking-wide">
                I enjoy creativity and problem solving in Web Development.
              </li>
              <li id="li-2" class="text-blue-800 tracking-wide">
                I believe the foundation of a thriving business is client
                satisfaction.
              </li>
              <li id="li-3" class="text-blue-800 tracking-wide">
                I am passionate about the improvement of my product.
              </li>
              <li id="li-4" class="text-blue-800 tracking-wide">I am a naive of Saint Louis, Missouri.</li>
              <li id="li-5" class="text-blue-800 tracking-wide">I moved to New Jersey in 2020.</li>
              <li id="li-6" class="text-blue-800 tracking-wide">I enjoy hiking and weekend trips with my wife.</li>
              <li id="li-7" class="text-blue-800 tracking-wide">I train Brazilian Jiu-Jitsu.</li>
              <li id="li-8" class="text-blue-800 tracking-wide">I am a St. Louis Blues fan.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

// import React from "react"

// export default function About(){
//   return <h1> About page</h1>
// }

