interface TeamMember {
  id: number;
  name: string;
  email: string;
  photo: string;
}

const members: TeamMember[] = [
  {
    id: 1,
    name: "Alice Williams",
    email: "alice.williams@example.com",
    photo: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    photo: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Charlie Miller",
    email: "charlie.miller@example.com",
    photo: "https://i.pravatar.cc/150?img=8",
  },
];

const TeamMembers: React.FC = () => {
  return (
    <div className="space-y-4">
      {members.map((member) => (
        <div
          key={member.id}
          className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
        >
          <img
            src={member.photo}
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
      ))}
    </div>
  );
};

export default TeamMembers;
