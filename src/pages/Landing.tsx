import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};
function Landing() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [paralaxX, setParalaxX] = useState(0);
  const mousePosition = useMousePosition();
  const stringPos = JSON.stringify(mousePosition);
  useEffect(() => {
    const x = mousePosition.x;
    const y = mousePosition.y;
    setMouseX(x);
    setMouseY(y);
    console.log(mouseX);
  }, [stringPos]);

  const calculateParalax = (position, maxDistance, factor) => {
    return (position - maxDistance / 1000) * factor;
  };
  const headerImage = "../../public/Images/BlackFish_header.svg";
  const tatooGuyImage = "../../public/Images/Tatoo_guy.png";
  const profilePhotoImage = "../../public/Images/Profile_photo.png";
  const storeImage = "../../public/Images/Store_image.png";
  const portfolioText = "../../public/Images/PortfolioText.png";
  const biographyText = "../../public/Images/BiographyText.png";
  const storeText = "../../public/Images/StoreText.png";

  return (
    <div className=" snap-y snap-mandatory h-screen w-screen overflow-x-hidden ">
      {/* Main section */}
      <section className="w-screen h-screen bg-backround-light  snap-center ">
        <div className="w-full h-full flex items-center justify-center">
          <motion.div
            className="w-[100vw] h-full "
            style={{
              backgroundImage: `url(${headerImage})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            initial={{ width: "61%", height: "61%" }}
            animate={{ width: "100vw", height: "100%" }}
            transition={{ duration: 1 }}
          />
        </div>
      </section>
      <section className="w-screen h-screen snap-center grid grid-cols-12 grid-rows-8 ">
        <div
          className="w-full h-64  col-span-12"
          style={{ transform: "translateY(-50%)" }}
        >
          <motion.div
            className="w-full h-64  "
            style={{
              backgroundImage: `url(${portfolioText})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",

              y: calculateParalax(mouseY, window.innerHeight, -0.005),
              x: calculateParalax(mouseX, window.innerWidth, -0.005),
            }}
          />
        </div>

        <div className="w-full h-full col-span-12 row-start-1 row-end-7">
          <Link to={"/portfolio"}>
            <div
              className="w-full h-full "
              style={{
                backgroundImage: `url(${tatooGuyImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </Link>
        </div>
      </section>
      <section className="w-screen h-screen snap-center grid grid-cols-12 grid-rows-8">
        <div
          className="w-full h-64  col-span-12"
          style={{ transform: "translateY(-50%)" }}
        >
          <motion.div
            className="w-full h-64  "
            style={{
              backgroundImage: `url(${biographyText})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",

              y: calculateParalax(mouseY, window.innerHeight, -0.005),
              x: calculateParalax(mouseX, window.innerWidth, -0.005),
            }}
          />
        </div>

        <div className="w-full h-full col-span-12 row-start-1 row-end-7">
          <Link to={"/biography"}>
            <div
              className="w-full h-full "
              style={{
                backgroundImage: `url(${profilePhotoImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </Link>
        </div>
      </section>
      <section className="w-screen h-screen snap-center grid grid-cols-12 grid-rows-8">
        <div
          className="w-full h-64  col-span-12"
          style={{ transform: "translateY(-50%)" }}
        >
          <motion.div
            className="w-full h-64  "
            style={{
              backgroundImage: `url(${storeText})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",

              y: calculateParalax(mouseY, window.innerHeight, -0.005),
              x: calculateParalax(mouseX, window.innerWidth, -0.005),
            }}
          />
        </div>

        <div className="w-full h-full col-span-12 row-start-1 row-end-7">
          <Link to={"/eshop"}>
            <div
              className="w-full h-full "
              style={{
                backgroundImage: `url(${storeImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Landing;
