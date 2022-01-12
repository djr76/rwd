import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        } `
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-blue-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl font-bold italic flex justify-center cusrsive pb-24">
          Web Development Projects
        </h1>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-2xl bg-white p-16 filter drop-shadow">
                <h3 className="cursive text-green-500 text-5xl font0bold mb-2 hover:text-red-600 hover: transition duration-500 ease-in-out hover: transform hover:scale-105">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <p className="my-2 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <span>
                    <strong className="font-bold">Location</strong>:{" "}
                    {project.place}
                  </span>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
