import { useState } from "react";
import { CardProps } from "../models/Project";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "./Modal";

const Card: React.FC<CardProps> = ({ obj, setProjects, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(obj.status);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setProjects((prev) => prev.filter((_, i) => i !== index));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as
      | "Not Started"
      | "In Progress"
      | "Completed";
    setSelectedStatus(newStatus);
    setProjects((prev) =>
      prev.map((project, i) =>
        i === index ? { ...project, status: newStatus } : project
      )
    );
  };

  return (
    <>
      <div
        className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow relative cursor-pointer"
        onClick={() => setIsModalOpen(true)}
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
          {obj.description.length > 80
            ? obj.description.slice(0, 80) + "..."
            : obj.description}
        </p>
        <p className="text-gray-500 text-sm">Start Date: {obj.startDate}</p>

        <div className="mt-4 flex justify-end">
          <MdDeleteOutline
            className="text-gray-500 hover:text-red-600 hover:scale-125 transition-all duration-200 cursor-pointer"
            size={20}
            onClick={handleDelete}
          />
        </div>
      </div>

      <Modal
        title="Description Of Project"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-[#1e6352]">{obj.name}</h3>
          <p className="text-gray-700">{obj.description}</p>
          <p className="text-sm text-gray-500">Start Date: {obj.startDate}</p>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Update Status:
            </label>
            <select
              value={selectedStatus}
              onChange={handleStatusChange}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e6352]"
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Card;
