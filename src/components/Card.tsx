function Card() {
  return (
    <a
      href="#"
      className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center justify-between mb-2">
        <h5 className="text-xl font-bold tracking-tight text-[#1e6352]">
          Website Redesign
        </h5>
        <span className="text-sm px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 font-medium">
          In Progress
        </span>
      </div>

      <p className="text-gray-700 mb-1">Revamp the company website</p>
      <p className="text-gray-500 text-sm">Start Date: May 10, 2024</p>
    </a>
  );
}

export default Card;
