import React, { useState } from "react";
import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price,
    stock: product.stock,
    color: product.color || "",
    size: product.size || "",
    cat: product.cat,
    desc: product.desc || "",
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
    updateProduct(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row bg-gray-100 p-4">
        <div className="lg:w-1/3">
          <div className="w-40 h-40 mx-auto mb-4">
            <Image
              src="/noavatar.png"
              alt=""
              width={160}
              height={160}
              className="rounded-full"
            />
          </div>
          <div className="text-center">{product.title}</div>
        </div>
        <div className="lg:w-2/3">
          <form
            action={updateProduct}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="id" value={product.id} />
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder={product.title}
                value={formData.title}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                placeholder={product.price}
                value={formData.price}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="stock"
              >
                Stock
              </label>
              <input
                type="number"
                name="stock"
                placeholder={product.stock}
                value={formData.stock}
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

export default SingleProductPage;
