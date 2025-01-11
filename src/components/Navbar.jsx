const Navbar = () => {
  return (
    <div className="flex justify-between items-center mb-8 mt-2 px-8 sm:px-[5vw] md:px-[7vw] lg:px-[12vw] xl:px-[16vw]">
      <div className="flex items-center gap-2">
        <img src="logo.png" alt="" />
        <p className="font-semibold">Donaty</p>
      </div>

      <div className="md:flex items-center font-medium gap-8 text-[#9F5FFE]">
        <div className="md:flex hidden items-center gap-8">
          <a href="#">Home</a>
          <a href="#">Who we are</a>
          <a href="#">Our Campaign</a>
          <a href="#">News</a>
        </div>

        <button className="border text-[#9F5FFE] border-[#9F5FFE] p-2 md:px-4 md:py-3 rounded-lg flex items-center gap-4 hover:animate-pulse">
          <p className="">Donate Now</p>
          <i className="fa-solid fa-heart"></i>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
