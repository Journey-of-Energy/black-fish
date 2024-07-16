function Eshop() {
  const storeImage = "../../public/Images/Store_image.png";
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
