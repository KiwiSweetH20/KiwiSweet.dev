import React from "react";

import Projects from "../components/Projects";
import Intro from "../components/Intro";

function Home() {
  return (
    <div className="flex flex-col p-3 py-32 sm:py-32 md:py-32 lg:py-32 lg:px-0 sm:pt-15 pt-20 mx-auto font-(family-name:--font-comic-relief)">
      <Intro />
      <Projects />
    </div>
  );
}

export default Home;
