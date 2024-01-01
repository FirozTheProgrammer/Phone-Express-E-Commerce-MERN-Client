const Banner = () => {
  return (
    <div>
      <div
        className=" min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/M88bQWL/arnel-hasanovic-4o-WSXde-AS2g-unsplash-350.webp)",
        }}
      >
        <div className="hero-overlay min-h-screen  bg-black bg-opacity-50">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="md:w-3/6 space-y-10 mt-44 pl-4 text-center md:text-left">
              <h1 className="mb-5 md:text-4xl lg:text-6xl text-white font-bold mt-5">
                Elevate Your Digital Life with Phone Express
              </h1>
              <p className="mb-5 text-3xl text-white font-bold">
                Unbox the Future
              </p>
              <button className=" btn btn-success text-lg font-bold px-5 py-3 rounded-md mr-5">
                Buy Now
              </button>
              <button className="btn text-lg font-bold px-5 py-3 rounded-md">
                About Us
              </button>
            </div>
            <div className="md:w-3/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
