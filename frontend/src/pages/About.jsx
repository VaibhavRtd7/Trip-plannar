/* eslint-disable react/no-unescaped-entities */

export default function About() {
  return (
    <>
    <div className="bg-gray-200 p-8 mt-8">
        <div className="bg-gradient-to-r from-blue-300 to-purple-200 p-8 text-black rounded-lg">
            <h1 className="text-4xl font-bold mb-4">Welcome to <span className="text-yellow-300"> FirstFight Travels</span> !!</h1>

            <p className="text-lg leading-7 mb-6">At <span className="font-semibold"> FirstFight Travels!</span>, we believe that every journey is a story waiting to be told. Our mission is to inspire, guide, and simplify the travel experience for adventurers like you.</p>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Who We Are:</h2>
                <p className="text-lg leading-7">We are a passionate team of travel enthusiasts dedicated to making your trip planning seamless and enjoyable. Whether you're a seasoned globetrotter or embarking on your first adventure, we are here to be your trusted companion throughout the entire journey.</p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">What Sets Us Apart:</h2>
                <ul className="list-disc list-inside text-lg leading-7">
                    <li><span className="font-semibold">Personalization:</span> Your journey is unique, and so is our approach. We tailor our recommendations based on your preferences, ensuring that every trip is a reflection of your individuality.</li>
                    <li><span className="font-semibold">Comprehensive Information:</span> From hidden gems to popular attractions, we provide a wealth of information to help you make informed decisions about your itinerary.</li>
                    <li><span className="font-semibold">User-Friendly Platform:</span> We've designed an intuitive and user-friendly platform to simplify the process, allowing you to focus on the excitement of your upcoming adventure.</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Our Vision:</h2>
                <p className="text-lg leading-7">We envision a world where travel is not just a destination but a transformative experience. By offering a platform that encourages exploration, connection, and discovery, we aim to redefine the way you plan and embark on your travels.</p>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4">Get Started:</h2>
                <p className="text-lg leading-7 mb-6">Ready to embark on your next adventure? Start planning with <span className="font-semibold text-yellow-300"> FirstFight Travels</span> today and turn your travel dreams into reality!</p>

                <p className="text-lg leading-7">Thank you for choosing <span className="font-semibold"> FirstFight Travels</span> as your travel companion. Let's explore the world together!</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <Card title="Global Reach" description="Discover destinations around the world." />
            <Card title="Guided Exploration" description="Explore with confidence using our guides." />
            <Card title="Personalized Favorites" description="Save your favorite spots for future trips." />
            <Card title="Reliable Information" description="Trustworthy details for informed decisions." />
        </div>
    </div>

    {/* Contact Information */}
    <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us:</h2>
          <ul className=" list-inside text-lg leading-7">
            <li>
              <span className="font-semibold">Meet:</span> Vatika Atrium, 3rd floor, Golf Course Road, Sector - 53, Gurugram
            </li>
            <li>
              <span className="font-semibold">Call:</span> 1800-103-5567, +91-455 000 00
            </li>
            <li>
              <span className="font-semibold">Write:</span> 
              <a href="mailto:firstfight@gmail.com" className="text-yellow-300">firstflight@gmail.com</a>
            </li>
          </ul>
        </div>

    </>
);
}

// eslint-disable-next-line react/prop-types
const Card = ({ title, description }) => {
  return (
      <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
      </div>
  );
};

