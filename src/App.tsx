import Header from "./components/Header";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdPersonAddAlt } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import ActionCard from "./components/ActionCard";

export default function App() {
  return (
    <main className="flex flex-col">
      <Header />
      <div className=" px-2 py-4 flex items-center justify-center gap-4">
        <ActionCard
          icon={<MdOutlineAddCircleOutline />}
          label={"New Project"}
        />
        <ActionCard icon={<MdPersonAddAlt />} label={"Add New Members"} />
        <ActionCard icon={<GoPeople />} label={"Team Members"} />
      </div>
    </main>
  );
}
