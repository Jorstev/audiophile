import CategorySection from "../features/category/CategorySection";

function Home() {
  return (
    <div>
      <section className="relative z-0 text-center">
        <img
          className="h-[32rem] w-full object-cover object-bottom"
          src="/src/assets/home/mobile/image-header.jpg"
          alt="image-header"
        />
        <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white h-96 flex flex-col justify-between py-11">
          <span className="text-white text-sm font-200 tracking-[0.6em]">
            NEW PRODUCT
          </span>
          <h1 className="text-4xl tracking-wide font-600">
            XX99 MARK II HEADPHONES
          </h1>
          <span className="font-200 text-sm tracking-wide text-gray-300 leading-6">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </span>
          <div>
            <button className="px-7 py-4 bg-[#D87D4A] text-xs tracking-widest">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </section>
      <section>
        <CategorySection />
      </section>
      <section className="bg-[#D87D4A] mx-6 py-24 h-[35rem] rounded-lg">
        <img
          className=""
          src="\src\assets\home\desktop\pattern-circles.svg"
          alt="pattern"
        />
      </section>
    </div>
  );
}

export default Home;
