import BestGear from "../features/category/BestGear";
import CategorySection from "../features/category/CategorySection";
import Button from "../ui/Button";
import Footer from "../ui/Footer";

function Home() {
  return (
    <div>
      <section className="relative z-0 text-center min-w-[360px]">
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
            <Button type={"primaryLink"} text={"SEE PRODUCT"} />
          </div>
        </div>
      </section>

      <CategorySection />

      <section className="px-6 flex flex-col space-y-6 min-w-[360px]">
        <div className="relative bg-[#D87D4A]  h-[37.5rem] rounded-lg flex flex-col justify-evenly items-center text-white text-center py-7 overflow-hidden">
          <img
            className=" absolute top-0 left-0 transform scale-170"
            src="\src\assets\home\desktop\pattern-circles.svg"
            alt="pattern"
          />
          <div>
            <img
              className="w-44"
              src="/src/assets/product-zx9-speaker/mobile/image-removebg-preview.svg"
              alt="zx9-speaker-image"
            />
          </div>
          <div>
            <h3 className="text-4xl tracking-wide font-600 text-white">
              ZX9 <span className="block">SPEAKER</span>
            </h3>
          </div>
          <span className="font-200 px-4 text-[15px]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </span>
          <Button type={"quaternaryLink"} text={"SEE PRODUCT"} />
        </div>
        <div className="relative h-80 rounded-lg flex flex-col justify-evenly py-16 pl-5">
          <img
            className="absolute w-full h-full object-cover top-0 left-0 rounded-lg z-0"
            src="/src/assets/home/mobile/image-speaker-zx7.jpg"
            alt="image-speaker-zx7"
          />

          <h3 className="text-[28px] tracking-wide font-600 z-10 ">
            ZX7 SPEAKER
          </h3>
          <div className="z-10">
            <Button type={"tertiaryLink"} text={"SEE PRODUCT"} />
          </div>
        </div>
        <div className="flex flex-col space-y-6 md:flex-row">
          <div className="rounded-lg h-52 w-full">
            <img
              className="rounded-lg w-full h-full object-cover"
              src="/src/assets/home/mobile/image-earphones-yx1.jpg"
              alt="image-earphones"
            />
          </div>
          <div className="bg-[#f1f1f1] rounded-lg h-52 w-full flex flex-col justify-evenly py-6 pl-5">
            <h3 className="text-[28px] tracking-wide font-600">
              YX1 EARPHONES
            </h3>
            <div>
              <Button type={"tertiaryLink"} text={"SEE PRODUCT"} />
            </div>
          </div>
        </div>
      </section>
      <BestGear />
      <Footer />
    </div>
  );
}

export default Home;
