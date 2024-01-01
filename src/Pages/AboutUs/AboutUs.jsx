const AboutPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-extrabold mb-4 text-center">About Us</h1>
        <p className="text-xl text-center mb-8">
          Welcome to our website! We are a passionate team dedicated to
          providing high-quality products and services to our customers.
        </p>
        <p className="text-xl text-center">
          Our mission is to make a difference by offering innovative solutions
          and excellent customer support.
        </p>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-extrabold mb-4">Our Team</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-1/2 md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://i.ibb.co/fFwmCm0/acl-creative-copy-810x545.jpg"
                  alt="Team Member 1"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-700">Co-Founder</p>
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://i.ibb.co/fMSC5xJ/austin-distel-7uo-Mmz-Pd2-JA-unsplash.jpg"
                  alt="Team Member 2"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-700">Founder</p>
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://i.ibb.co/chnBMLJ/tumblr-936ef8d53a6262dcfbd2eee67458a99e-684dfb2d-1280.jpg"
                  alt="Team Member 3"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Alice Johnson</h3>
                <p className="text-gray-700">Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
