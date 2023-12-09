import Image from "next/image";

const Transactions = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Latest Transactions</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Amount</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 4 }, (_, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="py-2 px-4">
                <div className="flex items-center">
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="ml-2">John Doe</span>
                </div>
              </td>
              <td className="py-2 px-4">
                <span
                  className={`py-1 px-2 rounded-full ${
                    index % 2 === 0
                      ? "bg-yellow-200 text-yellow-700"
                      : "bg-green-200 text-green-700"
                  }`}
                >
                  {index % 2 === 0 ? "Pending" : "Done"}
                </span>
              </td>
              <td className="py-2 px-4">14.02.2024</td>
              <td className="py-2 px-4">$3.200</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
