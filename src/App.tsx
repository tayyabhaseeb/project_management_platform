import Header from "./components/Header";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdPersonAddAlt } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import ActionCard from "./components/ActionCard";
import Card from "./components/Card";

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
      {/* <div className="bg-red-500 p-4">
        <h2 className="text-center text-4xl">Projects Summary</h2>
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div> */}
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
    </main>
  );
}
