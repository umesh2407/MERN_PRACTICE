import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="bg-black text-white w-full h-full">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
};

export default App;
