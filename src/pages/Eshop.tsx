import storeImage from "../assets/Images/Store_image.png";
function Eshop() {
  return (
    <section className="w-screen h-screen snap-center">
      <div
        className="w-full h-[80%] tranlaty"
        style={{
          backgroundImage: `url(${storeImage})`,

          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
    </section>
  );
}

export default Eshop;
