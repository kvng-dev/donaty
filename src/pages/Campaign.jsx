import Card from "../components/Card";

const Campaign = () => {
  return (
    <div className="mt-12 bg-gray-100 w-full">
      <section className="px-8 sm:px-[5vw] md:px-[7vw] lg:px-[12vw] xl:px-[16vw]">
        <p className="text-sm font-semibold text-[#9F5FFE] pt-12 mb-6">
          Our Campaign
        </p>
        <h1 className="text-3xl font-semibold mb-8">
          Giving Help To Those <br /> Who Need It
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pb-8">
          <Card
            img={"Rectangle 390.png"}
            target={"10,000"}
            goal={"5,200"}
            text={"Fundraising for children and refugees from donbass"}
          />
          <Card
            img={"Rectangle 390(1).png"}
            target={"10,400"}
            goal={"1,200"}
            text={"Food, water and medicine for shelter on the Dnieper"}
          />
          <Card
            img={"Rectangle 390(2).png"}
            target={"64,000"}
            goal={"25,200"}
            text={"massive invasion of Palestine, war in the Gaza strip"}
          />
          <Card text={"Fundraising for children and refugees from donbass"} />
        </div>
      </section>
    </div>
  );
};
export default Campaign;
