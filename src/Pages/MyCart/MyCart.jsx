import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCar } from "../../Utiliti/Localstorage";

const MyCart = () => {
  const cars = useLoaderData();

  const [addCartitems, setaddCartitems] = useState([]);

  useEffect(() => {
    const getCarId = getStoredCar();
    if (cars.length > 0) {
      const cartAddItem = [];
      for (const id of getCarId) {
        const addCar = cars.find((car) => car._id == id);
        cartAddItem.push(addCar);
      }
      setaddCartitems(cartAddItem);
    }
  }, [cars]);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center font-bold text-4xl my-10">
        My Cart :{addCartitems.length}
      </h2>
      <div className="my-32">
        {addCartitems.map((item) => (
          <div key={item._id}>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Rating</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                          <div className="text-sm opacity-50">{item.type}</div>
                        </div>
                      </div>
                    </td>
                    <td>{item.brand}</td>
                    <td>{item.rating}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
