import Button from "../components/Button";

const AboutUs = () => {
  return (
    <div className="py-12 w-full">
      <section className="px-8 flex flex-col sm:flex-row gap-2 md:gap-4 lg:gap-8 sm:px-[5vw] md:px-[7vw] lg:px-[12vw] xl:px-[16vw]">
        <div className="relative">
          <img src="img.png" className="md:w-[400px]" alt="" />
          <img
            src="2.png"
            className="absolute -bottom-12 -right-8 hidden sm:hidden  md:hidden md:bottom-48 md:right-9"
            alt=""
          />
        </div>

        <div className="flex-1 pl-0 sm:pl-0 md:pl-0 lg:pl-8">
          <p className="text-sm pt-8 md:pt-0 font-semibold text-[#9F5FFE] mb-6 md:mb-0">
            Who we are
          </p>
          <h1 className="text-3xl font-semibold mb-8">
            We're Non-Profit Charity <br />{" "}
            <span className="border-b-4 border-[#1AD0D1]">& N</span>GO
            Organization
          </h1>

          <p className="leading-6 mb-6">
            Join us and make your life more valuable and useful, be a part of us{" "}
            <br />
            and contribute to the nation and state and the simplest for the{" "}
            <br />
            environment and yourself
          </p>

          <div className="flex gap-2 text-sm font-semibold flex-col">
            <div className="flex gap-2">
              <div className="flex h-6 text-xs text-white w-6 rounded-full justify-center items-center bg-[#1AD0D1]">
                <i class="fa-solid fa-check"></i>
              </div>
              <p>Support people in extreme need</p>
            </div>

            <div className="flex gap-2">
              <div className="flex h-6 text-xs text-white w-6 rounded-full justify-center items-center bg-[#1AD0D1]">
                <i class="fa-solid fa-check"></i>
              </div>
              <p>Larget global crowfunding community</p>
            </div>

            <div className="flex gap-2">
              <div className="flex h-6 text-xs text-white w-6 rounded-full justify-center items-center bg-[#1AD0D1]">
                <i class="fa-solid fa-check"></i>
              </div>
              <p>Make the world a better place</p>
            </div>
            <div className="flex gap-2">
              <div className="flex h-6 text-xs text-white w-6 rounded-full justify-center items-center bg-[#1AD0D1]">
                <i class="fa-solid fa-check"></i>
              </div>
              <p>Share your love for community</p>
            </div>
          </div>

          <div className="mt-8">
            <Button text={"About Us"} />
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
