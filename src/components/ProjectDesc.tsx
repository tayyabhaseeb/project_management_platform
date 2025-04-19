import { useState } from "react";
import { ProjectDescProps } from "../models/Project";

const ProjectDesc: React.FC<ProjectDescProps> = ({
  title,
  desc,
  date,
  status,
  onStatusChange,
}) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as
      | "Not Started"
      | "In Progress"
      | "Completed";
    setCurrentStatus(newStatus);
    if (onStatusChange) onStatusChange(newStatus);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#1e6352]">{title}</h2>
      <p className="text-gray-700">{desc}</p>
      <p className="text-sm text-gray-500">Start Date: {date}</p>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Change Status
        </label>
        <select
          value={currentStatus}
          onChange={handleStatusChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default ProjectDesc;
