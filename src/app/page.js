import React from "react";

function Home() {
  return (
    <main>
      <h1 className="text-center font-bold text-6xl">Hello world!</h1>
      <div className="fixed inset-0-z-10 bg-slate-950">
        {/* {interactive background} */}
      </div>
      <div className="relative z-10">{/* {portfolio window} */}</div>
    </main>
  );
}

export default Home;
