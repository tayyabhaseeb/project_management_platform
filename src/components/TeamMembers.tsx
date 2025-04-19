import { TeamMembersProps } from "../models/Project";
import { MdDeleteOutline } from "react-icons/md";

const TeamMembers: React.FC<TeamMembersProps> = ({
  teamMembers,
  setTeamMembers,
}) => {
  return (
    <div className="space-y-4">
      {teamMembers.map((member, index) => {
        const photoSrc =
          typeof member.photo === "string"
            ? member.photo
            : member.photo instanceof File
            ? URL.createObjectURL(member.photo)
            : undefined;

        return (
          <div
            key={index}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={photoSrc}
                alt={member.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-md font-semibold text-[#1e6352]">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.email}</p>
              </div>
            </div>

            <MdDeleteOutline
              className="text-gray-500 hover:text-red-600 hover:scale-125 transition-all duration-200 cursor-pointer"
              size={20}
              onClick={() =>
                setTeamMembers((prev) => prev.filter((_, i) => i !== index))
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default TeamMembers;
