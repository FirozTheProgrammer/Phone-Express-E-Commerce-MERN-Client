const latestPhones = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    description:
      "Experience the latest in mobile technology with the iPhone 13 Pro.",
    originalText: "The quick brown fox jumps over the lazy dog.",
    image: "https://i.ibb.co/VY14zq4/p1003516-1-300.webp",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    description:
      "Discover the Samsung Galaxy S22 - a powerful and sleek phone designed for your daily needs.",
    originalText: "An apple a day keeps the doctor away.",
    image: "https://i.ibb.co/bm3TN0R/dsc04960-300.jpg",
  },
  {
    id: 3,
    name: "Google Pixel 8",
    description:
      "Stay connected and productive with the Google Pixel 6 - the latest in Google's mobile technology.",
    originalText: "To be or not to be, that is the question.",
    image:
      "https://i.ibb.co/wzZP1qr/samuel-angor-vn6-A4-UKMR3-I-unsplash-300.webp",
  },
];

const LatestPhoneSection = () => {
  return (
    <section className="bg-green-50 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Latest Phones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPhones.map((phone) => (
            <div key={phone.id} className="bg-white rounded-lg shadow-md">
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {phone.name}
                </h3>
                <p className="text-gray-600">{phone.description}</p>
                <p className="text-gray-500 mt-2">
                  Original Text: {phone.originalText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPhoneSection;
