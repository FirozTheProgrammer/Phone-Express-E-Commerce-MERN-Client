import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const PhoneCollections = () => {
  const phones = useLoaderData();
  const { name } = useParams();
  const brand = phones.filter((phone) => phone.brand == name);

  return (
    <div className="">
      <h2 className="text- 2xl md:text-5xl text-black font-bold text-center my-5">
        OUR ABAILABLE PRODUCTS
      </h2>
      <div className=" flex justify-between m-2">
        <div className="">
          {brand.map((phone) => (
            <PhoneCard key={phone._id} phone={phone}></PhoneCard>
          ))}

          {brand.length == 0 ? (
            <p className="text-green-600 font-bold text-4xl text-center">
              <span className="text-center">Product Not Available !</span>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneCollections;
