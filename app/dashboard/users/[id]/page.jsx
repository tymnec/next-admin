import React, { useState } from "react";
import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    password: "",
    phone: user.phone,
    address: user.address,
    isAdmin: user.isAdmin,
    isActive: user.isActive,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your update function here using formData
    updateUser(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row bg-gray-100 p-4">
        <div className="lg:w-1/3">
          <div className="w-40 h-40 mx-auto mb-4">
            <Image
              src={user.img || "/noavatar.png"}
              alt=""
              width={160}
              height={160}
              className="rounded-full"
            />
          </div>
          <div className="text-center">{user.username}</div>
        </div>
        <div className="lg:w-2/3">
          <form
            action={updateUser}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="id" value={user.id} />
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder={user.username}
                value={formData.username}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder={user.email}
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* Add the rest of your form fields in a similar way */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
