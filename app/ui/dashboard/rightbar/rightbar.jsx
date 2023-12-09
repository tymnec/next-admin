import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* First Item */}
      <div className="flex items-center bg-gray-100 p-4 rounded-lg">
        <div className="w-24 h-24 overflow-hidden rounded-full">
          <Image src="/astronaut.png" alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-red-500">🔥 Available Now</span>
          <h3 className="text-xl font-semibold">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="text-gray-500">Takes 4 minutes to learn</span>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 mt-4 rounded">
            <MdPlayCircleFilled className="mr-2" />
            Watch
          </button>
        </div>
      </div>

      {/* Second Item */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="text-green-500">🚀 Coming Soon</span>
          <h3 className="text-xl font-semibold ml-2">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
        </div>
        <span className="text-gray-500">Boost your productivity</span>
        <p className="text-gray-700 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          eius libero perspiciatis recusandae possimus.
        </p>
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 mt-4 rounded">
          <MdReadMore className="mr-2" />
          Learn
        </button>
      </div>
    </div>
  );
};

export default Rightbar;
