import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const layout1 = () => {
  const [circle, setcircle] = useState(0);

  useGSAP(() => {
    gsap.to(".circlediv", {
      x: circle,
    });
  }, [circle]);

  // useEffect(() => {
  //   setInterval(() => {
  //     circle === 1000 ? setcircle(-800) : setcircle(circle + 100);
  //   }, 1000);
  // }, [circle]);

  console.log(circle);

  return (
    <div className="mt-5">
      <div className="w-52 h-52 bg-purple-500 m-auto rounded-full shadow-lg border-black circlediv"></div>
    </div>
  );
};

export default layout1;
