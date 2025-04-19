import { EmptyStateProps } from "../models/Project";

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message,
  actionText,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-center text-[#1e6352]">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500">
        {message}{" "}
        <span className="font-semibold text-[#1e6352]">"{actionText}"</span>
      </p>
    </div>
  );
};

export default EmptyState;
