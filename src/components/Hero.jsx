import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative">
      <div className="hero"></div>

      <div className="sm:px-[5vw] md:px-[7vw] lg:px-[12vw] xl:px-[16vw] grid md:grid-cols-2 gap-12 px-8 py-16 h-full">
        <div className="space-y-4">
          <p className="text-xs font-bold text-[#9F5FFE] uppercase">
            trusted charity company
          </p>
          <h1 className="lg:text-5xl sm:text-5xl leading-normal md:text-5xl text-4xl font-bold capitalize">
            Let{"'s"} Help and make <br className="md:hidden 2xl:block" />{" "}
            people smile by <span className="text-[#9F5FFE]">giving</span>{" "}
            <br className="hidden lg:hidden 2xl:block xl" /> of yours
          </h1>
          <p className="text-[#989898] text-sm lg:text-base lg:py-12">
            No matter how small the donation you give will mean a lot to them,
            let
            {"'s"} donate <br className="hidden sm:block md:hidden" /> now to
            help fellow humans in need
          </p>

          <div className="pt-12">
            <Button text={"Get Started"} />
          </div>
        </div>

        <div className="bg-white relative rounded-md space-y-8 p-8 w-full lg:w-full shadow-lg">
          <div className="w-[248px] h-[419px] absolute bg-[#1AD0D1] z-[-1] -bottom-3 -right-3 rounded-md"></div>
          <img
            src="icon_charity.png"
            className="absolute z-10 -right-4 -top-14 w-16"
            alt=""
          />
          <Button text={"Education"} />

          <h2 className="text-2xl font-bold leading-normal capitalize">
            help children get out of poverty & have a future
          </h2>

          <p className="text-[#989898] text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa.
          </p>

          <div className="bg-gray-100 rounded flex flex-col justify-center p-6">
            <span className="ml-16 text-sm text-[#1AD0D1]">29%</span>
            <div className="progress-container">
              <div className="progress-bar" />
            </div>
            <div className="flex mt-2 justify-between text-xs">
              <p>
                $5,0480 <span>Raised</span>
              </p>
              <p>
                $20,000 <span>Goal</span>
              </p>
            </div>
          </div>

          <div className="flex justify-between gap-4">
            <button className="px-12 flex gap-2 items-center border py-4">
              <i className="fa-brands fa-apple"></i>
              <p>Pay</p>
            </button>

            <button className="px-12 flex gap-2 items-center border py-4">
              <img src="google.png" alt="" />
              <p>Pay</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
