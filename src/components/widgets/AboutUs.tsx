import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="bg-custom-radial text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div className="relative flex flex-col md:flex-row items-center justify-center">
          <div className="absolute  mt-20 mr-36 rounded-lg overflow-hidden shadow-lg w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/about1.png" // Replace with your image path
              alt="Person"
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative top-0 left-0 z-10 ml-36  rounded-lg overflow-hidden shadow-lg w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/about2.png" // Replace with your image path
              alt="City"
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="max-w-lg mt-6 md:mt-0 text-center md:text-left">
          <h2 className="text-5xl font-extrabold mb-4 font-rockstar">ABOUT US</h2>
          <p className="mb-6 font-poppins">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            Lorem Ipsum Has Been The Industry&apos;s Standard Dummy Text Ever Since The 1500s,
            When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
          </p>
          <button className="bg-white text-red-700 font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-100">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
