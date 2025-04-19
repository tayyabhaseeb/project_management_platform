import Header from "./components/Header";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdPersonAddAlt } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import ActionCard from "./components/ActionCard";
import Card from "./components/Card";
import Modal from "./components/Modal";
import { useState } from "react";
import CreateProject from "./components/CreateProjectForm";
import AddMemberForm from "./components/AddMemberForm";
import TeamMembers from "./components/TeamMembers";

export default function App() {
  const [activeModal, setActiveModal] = useState<
    "project" | "addMember" | "team" | null
  >(null);

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
        <h2 className="text-center text-4xl text-[#1e6352] mb-6">
          Projects Summary
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <Modal
        title="New Project"
        isOpen={activeModal === "project"}
        onClose={() => setActiveModal(null)}
      >
        <CreateProject />
      </Modal>

      <Modal
        title="Add New Member"
        isOpen={activeModal === "addMember"}
        onClose={() => setActiveModal(null)}
      >
        <AddMemberForm />
      </Modal>

      <Modal
        title="Team Members"
        isOpen={activeModal === "team"}
        onClose={() => setActiveModal(null)}
      >
        <TeamMembers />
      </Modal>
    </main>
  );
}
