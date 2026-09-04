import React from "react";

function Home() {
  return (
    <main className="relative isolate overflow-hidde px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 pt-24 ">
      {/* <div className="fixed inset-0-z-10 bg-slate-950">
        {/* {interactive background} */}
      {/* </div> */} 
      <div className="justify-center p-10">
        <h1 className="text-7xl font-bold text-ctp-green">KiwiSweet</h1>
        <p className="">Welcome to my portfolio!</p>
      </div>
      <div className="relative p-8">
        <div className="flex flex-row gap-4">
          <h1 className=" basis-1/2 text-center font-bold text-6xl">Hello world!</h1></div>
      {/* <div className="h-[200vh] bg-slate-800">Scroll test content</div> */}
      </div>
    </main>
  );
}

export default Home;
