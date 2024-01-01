const getStoredCar = () => {
  const storedCard = localStorage.getItem("Cars");
  if (storedCard) {
    return JSON.parse(storedCard);
  }
  return [];
};

const saveCar = (id) => {
  const storedCars = getStoredCar();
  const exists = storedCars.find((jobId) => jobId === id);
  if (!exists) {
    storedCars.push(id);
    localStorage.setItem("Cars", JSON.stringify(storedCars));
  }
};

export { getStoredCar, saveCar };
