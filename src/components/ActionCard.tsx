import React from "react";
import { ActionCardProps } from "../models/Project";

const ActionCard: React.FC<ActionCardProps> = ({ icon, label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md border-solid border-2 p-2 flex flex-col items-center justify-center gap-2 text-center w-28 h-24 rounded-md md:w-60 md:h-32 hover:cursor-pointer"
    >
      <div className="text-2xl text-[#1e6352] md:text-3xl">{icon}</div>
      <h2 className="text-sm text-[#1e6352] md:text-lg md:font-bold">
        {label}
      </h2>
    </div>
  );
};

export default ActionCard;
