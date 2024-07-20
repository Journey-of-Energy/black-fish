import { useState } from "react";
import { motion } from "framer-motion";
import profilePhotoImage from "../assets/Images/Profile_photo.png";
import tatooGuyImage from "../assets/Images/Tatoo_guy.png";
import headerImage from "../assets/Images/BlackFish_header.svg";
import { Link } from "react-router-dom";

interface DescriptionContainerProps {
  leftPicked: boolean;
  rightPicked: boolean;
}
const DescriptionContainer: React.FC<DescriptionContainerProps> = (props) => {
  const leftPicked = props.leftPicked;
  const rightPicked = props.rightPicked;
  const descriptions = {
    dadla: {
      dadlaHeading: "Dadla",
      dadlaDescription:
        "Dadla je skúsená tatérka, ktorá sa špecializuje na detailné a osobné tetovania. Jej práca odráža vášeň pre umenie a precíznosť, pričom každé tetovanie je jedinečné a navrhnuté podľa predstáv klienta.",
    },
    blackfish: {
      blackfishHeading: "BlackFish",
      blackfishDescription:
        "Štúdio BlackFish je miestom, kde sa stretáva profesionalita s vášňou pre umenie. Špecializujeme sa na vytváranie detailných a osobných tetovaní, ktoré sú navrhnuté podľa individuálnych predstáv našich klientov. Naša filozofia je založená na precíznom prístupe k dizajnu a kvalitnej realizácii, aby každé tetovanie bolo jedinečným a významným dielom.",
    },
  };
  return (
    <motion.div
      className="absolute w-full h-[70%] l-0 bottom-0 px-[20%] py-32 bg-backround-light z-20"
      initial={{ y: "100%", opacity: 0 }}
      animate={{
        y: leftPicked || rightPicked ? "0%" : "100%",
        opacity: leftPicked || rightPicked ? 1 : 0,
      }}
      transition={{
        y: { duration: 1, delay: 2.3 },
        opacity: { duration: 0.01, delay: 0.01 },
      }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-primary-light text-[96px] text-center mb-8">
          {leftPicked
            ? descriptions.dadla.dadlaHeading
            : rightPicked
            ? descriptions.blackfish.blackfishHeading
            : null}
        </h1>
        <p className="text-white w-1/2 ">
          {leftPicked
            ? descriptions.dadla.dadlaDescription
            : rightPicked
            ? descriptions.blackfish.blackfishDescription
            : null}
        </p>
      </div>
    </motion.div>
  );
};
function Biography() {
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);
  const [picked, setPicked] = useState({
    leftPicked: false,
    rightPicked: false,
  });

  const hoveredLeft = (state: any) => {
    setLeftHovered(state);
  };
  const hoveredRight = (state: any) => {
    setRightHovered(state);
  };
  const width = window.innerWidth;
  const height = window.innerHeight;

  const rightPictureDelayValue = 1.5;
  return (
    <section className="w-screen h-100vh snap-center overflow-y-hidden ">
      <div className="w-full h-full absolute  flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[35%] h-[35%]
           fixed z-40 pointer-events-auto"
          style={{
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: picked.leftPicked || picked.rightPicked ? 0 : 1,
          }}
        />
        <Link
          to={"/"}
          className="w-96 h-96 z-50 pointer-events-auto cursor-pointer"
        />
      </div>
      {/* Description container */}
      <DescriptionContainer
        leftPicked={picked.leftPicked}
        rightPicked={picked.rightPicked}
      />
      {/* Back button */}
      <motion.div
        className="cursor-pointer"
        initial={{ display: "none", opacity: 0 }}
        animate={{
          display: picked.leftPicked || picked.rightPicked ? "flex" : "none",
          opacity: picked.leftPicked || picked.rightPicked ? 1 : 0,
        }}
        transition={{
          display: { delay: 2 },
          opacity: { duration: 1, delay: 0 },
        }}
        onClick={() => {
          setPicked((prevPicked) => ({
            ...prevPicked,
            leftPicked: false,
            rightPicked: false,
          }));
        }}
      >
        <h1 className="text-[96px] text-primary-light fixed bottom-0 z-20 cursor-pointer">
          Back
        </h1>
      </motion.div>

      <div className="w-full h-full flex">
        {/* Left Image */}
        <motion.div
          onClick={() => {
            setPicked((prevPicked) => ({ ...prevPicked, leftPicked: true }));
          }}
          style={{
            width: width,
            height: (height / 8) * 6,
            backgroundImage: `url(${profilePhotoImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            cursor: "pointer",
          }}
          initial={{
            width: width,
            height: (height / 8) * 6,
          }}
          animate={{
            width: picked.leftPicked
              ? width
              : picked.rightPicked
              ? 0
              : width / 2,
            height: height,
            opacity: !leftHovered ? 0.5 : 1,
          }}
          transition={{ width: { duration: 1, delay: 0.3 } }}
          onMouseEnter={() => {
            hoveredLeft(true);
          }}
          onMouseLeave={() => {
            hoveredLeft(false);
          }}
        />
        {/* Right Image */}
        <motion.div
          onClick={() => {
            setPicked((prevPicked) => ({ ...prevPicked, rightPicked: true }));
          }}
          style={{
            height: (height / 8) * 6,
            backgroundImage: `url(${tatooGuyImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            overflow: "hidden",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          initial={{
            width: 0,
            height: (height / 8) * 6,
            right: "100%",
          }}
          animate={{
            width: picked.rightPicked
              ? width
              : picked.leftPicked
              ? 0
              : width / 2,
            height: height,
            right: "0%",
            opacity: !rightHovered ? 0.5 : picked.leftPicked ? 0 : 1,
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
