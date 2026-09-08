import React from "react";

import Projects from "../components/Projects";
import Intro from "../components/Intro";

function Home() {
  return (
    <main className="isolate overflow-hidde px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 pt-24 font-(family-name:--font-comic-relief)">
      {/* <div className="fixed inset-0-z-10 bg-slate-950">
        {/* {interactive background} */}
      {/* </div> */}
      <Intro />
      <Projects />
    </main>
  );
}

export default Home;
