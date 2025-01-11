const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="mb-8 mt-2 sm:px-[5vw] md:px-[7vw] lg:px-[12vw] xl:px-[16vw] px-8">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          <div className="mb-4 sm:col-span-2">
            <div className="flex items-center gap-2">
              <img src="logo.png" className="" alt="" />
              <p className="font-semibold">Donaty</p>
            </div>

            <p className="text-xs lg:text-sm text-[#6F7775] my-8">
              Whatever it is that you care about, there will <br /> be a charity
              working on it. Charities help in <br /> lots of different ways
            </p>

            <div className="flex text-xl text-[#1ad0d1] gap-4">
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>

          <div className="space-y-3 text-[#6F7775] text-sm">
            <h1 className="font-semibold text-black">Menu</h1>
            <p>Donations</p>
            <p>Features</p>
            <p>Categories</p>
            <p>Volunteer</p>
            <p>About us</p>
          </div>
          <div className="space-y-3 sm:col-span-2 md:col-span-1 text-[#6F7775] text-sm">
            <h1 className="font-semibold text-black">How it work?</h1>
            <p>Contact us</p>
            <p>FAQ</p>
            <p>Help</p>
          </div>
          <div className="space-y-4 text-sm">
            <h1 className=" font-semibold">Contact Info</h1>
            <div className="flex gap-2  items-center">
              <div className="w-8 h-8 text-white rounded-full flex justify-center items-center bg-[#1ad0d1]">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="text-xs">
                <p>Call us</p>
                <p>+1-206-156 2849</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 text-white rounded-full flex justify-center items-center bg-[#1ad0d1]">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="text-xs">
                <p>Mail Us </p>
                <p>info@donaty.com</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8  text-white rounded-full flex justify-center items-center bg-[#1ad0d1]">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="text-xs">
                <p>Visit Us</p>
                <p>123 Main St, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
