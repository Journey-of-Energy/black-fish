function ProductContainer() {
  return (
    <div className="w-full h-[40vh] flex flex-col justify-between">
      <div className="bg-white w-full h-[70%]" />
      <div className="flex justify-between -mt-4">
        <h2 className="text-white text-2xl">Title</h2>
        <h2 className="text-white text-2xl">300 EUR</h2>
      </div>
      <div className="flex justify-between ">
        <div>
          <p className="text-white mobile:text-[8px] laptop:text-[12px]">EAR</p>
          <p className="text-white mobile:text-[8px] laptop:text-[12px]">
            2 COLORS/3 SIZES
          </p>
        </div>
        <p className="text-white mobile:text-[8px] laptop:text-[12px] self-end">
          3 in stock
        </p>
      </div>
    </div>
  );
}
function Eshop() {
  return (
    <section className="w-screen  grid laptop:grid-cols-3 mobile:grid-cols-2 laptop:gap-x-4 laptop:gap-y-16 mobile:gap-x-2 mobile:gap-y-8 laptop:py-16 laptop:px-64 mobile:p-4">
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
    </section>
  );
}

export default Eshop;
