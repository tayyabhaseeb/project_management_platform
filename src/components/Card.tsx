import { CardProps } from "../models/Project";
import { MdDeleteOutline } from "react-icons/md";

const Card: React.FC<CardProps> = ({ obj, setProjects, index }) => {
  return (
    <a
      href="#"
      className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
    >
      <div className="flex items-center justify-between mb-2">
        <h5 className="text-xl font-bold tracking-tight text-[#1e6352]">
          {obj.name}
        </h5>
        <span
          className={`text-sm px-2 py-1 rounded-full ${
            obj.status === "Not Started"
              ? "bg-red-100 text-red-800"
              : obj.status === "In Progress"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
          } font-medium`}
        >
          {obj.status}
        </span>
      </div>

      <p className="text-gray-700 mb-1">
        {obj.description && obj.description.length > 80
          ? obj.description.slice(0, 80) + "..."
          : obj.description}
      </p>
      <p className="text-gray-500 text-sm">Start Date: {obj.startDate}</p>

      <div className="mt-4 flex justify-end">
        <MdDeleteOutline
          className="text-gray-500 hover:text-red-600 hover:scale-125 transition-all duration-200 cursor-pointer"
          size={20}
          onClick={() =>
            setProjects((prev) => prev.filter((_, i) => i !== index))
          }
        />
      </div>
    </a>
  );
};

export default Card;
