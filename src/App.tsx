import Header from "./components/Header";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdPersonAddAlt } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import ActionCard from "./components/ActionCard";
import Card from "./components/Card";
import Modal from "./components/Modal";
import { useState } from "react";
import CreateProjectForm from "./components/CreateProjectForm";
import AddMemberForm from "./components/AddMemberForm";
import TeamMembers from "./components/TeamMembers";
import { MemberData, Project } from "./models/Project";
import Footer from "./components/Footer";
import NoProjects from "./components/NoProjects";
import NoTeamMembers from "./components/NoTeamMembers";

export default function App() {
  const [activeModal, setActiveModal] = useState<
    "project" | "addMember" | "team" | "description" | null
  >(null);

  const [projects, setProjects] = useState<Project[]>([]);
  const [teamMembers, setTeamMembers] = useState<MemberData[]>([]);

  return (
    <main className="flex flex-col">
      <Header />

      <div className="px-2 py-4 flex items-center justify-center gap-4">
        <ActionCard
          icon={<MdOutlineAddCircleOutline />}
          label="New Project"
          onClick={() => setActiveModal("project")}
        />
        <ActionCard
          icon={<MdPersonAddAlt />}
          label="Add New Members"
          onClick={() => setActiveModal("addMember")}
        />
        <ActionCard
          icon={<GoPeople />}
          label="Team Members"
          onClick={() => setActiveModal("team")}
        />
      </div>

      <div className="p-4 min-h-screen">
        <h2 className="text-center text-4xl text-[#1e6352] mt-6 mb-10">
          Projects Summary
        </h2>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((obj, index) => (
              <Card
                key={index}
                obj={obj}
                setProjects={setProjects}
                index={index}
              />
            ))}
          </div>
        ) : (
          <NoProjects />
        )}
      </div>

      <Modal
        title="New Project"
        isOpen={activeModal === "project"}
        onClose={() => setActiveModal(null)}
      >
        <CreateProjectForm
          setProjects={setProjects}
          setActiveModal={setActiveModal}
        />
      </Modal>

      <Modal
        title="Add New Member"
        isOpen={activeModal === "addMember"}
        onClose={() => setActiveModal(null)}
      >
        <AddMemberForm
          setTeamMembers={setTeamMembers}
          setActiveModal={setActiveModal}
        />
      </Modal>

      <Modal
        title="Team Members"
        isOpen={activeModal === "team"}
        onClose={() => setActiveModal(null)}
      >
        {teamMembers.length > 0 ? (
          <TeamMembers
            teamMembers={teamMembers}
            setTeamMembers={setTeamMembers}
          />
        ) : (
          <NoTeamMembers />
        )}
      </Modal>
      <Footer />
    </main>
  );
}
