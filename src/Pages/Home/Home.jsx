import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Services from "./Services";
import BrandCard from "./BrandCard";
import LatestPhoneSection from "./LatestPhoneSection";

const Home = () => {
  const phoneBrands = useLoaderData();

  return (
    <div className="bg-slate-300">
      <Banner></Banner>
      <div className="py-10 max-w-7xl  mx-auto">
        <div className="text-center">
          <h2 className="text-black text-4xl font-bold mb-2">All Phones</h2>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
            {phoneBrands.map((phoneBrand) => (
              <BrandCard
                key={phoneBrand.id}
                phoneBrand={phoneBrand}
              ></BrandCard>
            ))}
          </div>
        </div>
      </div>
      <Services></Services>
      <LatestPhoneSection></LatestPhoneSection>
    </div>
  );
};

export default Home;
