const services = [
  {
    id: 1,
    title: "Customer Support",
    description: "24/7 customer support for all your inquiries and concerns.",
    image:
      "https://i.ibb.co/2PQMV6S/clay-banks-Ox6-SW103-Kt-M-unsplash-300.jpg",
  },
  {
    id: 2,
    title: "After Sale Service",
    description:
      "We provide excellent after-sale service to ensure your satisfaction.",
    image:
      "https://i.ibb.co/CQGhVzq/arlington-research-n-FLm-PAf9d-Vc-unsplash-300.jpg",
  },
  {
    id: 3,
    title: "Replacement Guarantee",
    description:
      "Our products come with a replacement guarantee for your peace of mind.",
    image:
      "https://i.ibb.co/fpDpHFq/insung-yoon-d-RUq-U4-Rpe-OE-unsplash-300.jpg",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
