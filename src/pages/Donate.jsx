import Button from "../components/Button";

const Donate = () => {
  return (
    <div className="my-12 w-full">
      <section className="px-8 sm:px-[5vw] md:px-[7vw] lg:px-[12vw] xl:px-[16vw]">
        <p className="text-sm font-semibold text-[#9F5FFE] pt-12 mb-6">
          Support us
        </p>
        <h1 className="text-3xl font-semibold mb-12 capitalize">
          Donate to the less <br /> Needy
        </h1>

        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label
              for="name"
              className="block text-lg font-semibold text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label
              for="email"
              className="block text-lg font-semibold text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label
              for="amount"
              className="block text-lg font-semibold text-gray-700"
            >
              Donation Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              required
              placeholder="Enter amount in USD"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div class="mb-4">
            <label
              for="charity"
              class="block text-lg font-semibold text-gray-700"
            >
              Choose a Charity Organization
            </label>
            <select
              id="charity"
              name="charity"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="charity1">Environmental Protection</option>
              <option value="charity2">Child Education</option>
              <option value="charity3">Health & Wellness</option>
              <option value="charity4">Animal Welfare</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              for="payment-method"
              className="block text-lg font-semibold text-gray-700"
            >
              Choose Payment Method
            </label>
            <select
              id="payment-method"
              name="payment-method"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>
          <Button text={"Donate Now"} />
        </form>
      </section>
    </div>
  );
};
export default Donate;
