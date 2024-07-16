import { useState } from "react";
import { motion } from "framer-motion";

function Biography() {
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);
  const [leftPicked, setLeftPicked] = useState(false);
  const [rightPicked, setRightPicked] = useState(false);
  const hoveredLeft = (state: any) => {
    setLeftHovered(state);
  };
  const hoveredRight = (state: any) => {
    setRightHovered(state);
  };
  const width = window.innerWidth;
  const height = window.innerHeight;
  const profilePhotoImage = "../../public/Images/Profile_photo.png";
  const tatooGuyImage = "../../public/Images/Tatoo_guy.png";
  const rightPictureDelayValue = 1.5;
  return (
    <section className="w-screen h-100vh snap-center overflow-y-hidden ">
      <motion.div
        className="absolute w-full h-[70%] l-0 bottom-0 px-[20%] py-32 bg-backround-light z-20"
        initial={{ y: "100%" }}
        animate={{ y: leftPicked ? "0%" : "100%" }}
        transition={{ duration: 1, delay: 2.3 }}
      >
        <h1 className="text-primary-light ">aôlsdkj</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          doloribus temporibus? Ratione necessitatibus deserunt illum. Possimus,
          consequuntur magnam? Quidem, velit! Blanditiis nostrum similique
          labore dignissimos consequatur eum tempora quod dicta.
        </p>
      </motion.div>
      <motion.div
        className="cursor-pointer"
        initial={{ display: "none", opacity: 0 }}
        animate={{
          display: leftPicked || rightPicked ? "flex" : "none",
          opacity: leftPicked || rightPicked ? 1 : 0,
        }}
        transition={{
          display: { delay: 2 },
          opacity: { duration: 1, delay: 0 },
        }}
        onClick={() => {
          setLeftPicked(false), setRightPicked(false);
        }}
      >
        <h1 className="text-[96px] text-primary-light fixed bottom-0 z-20 cursor-pointer">
          Back
        </h1>
      </motion.div>

      <div className="w-full h-full flex">
        <motion.div
          onClick={() => {
            setLeftPicked(true);
          }}
          style={{
            width: width,
            height: (height / 8) * 6,
            backgroundImage: `url(${profilePhotoImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          initial={{
            width: width,
            height: (height / 8) * 6,
          }}
          animate={{
            width: leftPicked ? width : rightPicked ? 0 : width / 2,
            height: height,
            opacity: leftHovered ? 0.5 : 1,
          }}
          transition={{ width: { duration: 1, delay: 0.3 } }}
          onMouseEnter={() => {
            hoveredLeft(true);
          }}
          onMouseLeave={() => {
            hoveredLeft(false);
          }}
        />
        <motion.div
          onClick={() => {
            setRightPicked(true);
          }}
          style={{
            height: (height / 8) * 6,
            backgroundImage: `url(${tatooGuyImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
          initial={{
            width: 0,
            height: (height / 8) * 6,
            right: "100%",
          }}
          animate={{
            width: rightPicked ? width : leftPicked ? 0 : width / 2,
            height: height,
            right: "0%",
            opacity: rightHovered ? 0.5 : leftPicked ? 0 : 1,
          }}
          transition={{
            width: { duration: 1, delay: rightPictureDelayValue },
            opacity: { duration: 1, delax: rightPictureDelayValue },
            height: { duration: 1, delay: rightPictureDelayValue },
            right: { duration: 1, delay: rightPictureDelayValue },
          }}
          onMouseEnter={() => {
            hoveredRight(true);
          }}
          onMouseLeave={() => {
            hoveredRight(false);
          }}
        />
      </div>
    </section>
  );
}

export default Biography;
