export interface Project {
  name: string;
  description: string;
  startDate: string;
  status: "Not Started" | "In Progress" | "Completed";
}

export interface MemberData {
  name: string;
  email: string;
  photo: File | string | null;
}

export interface ActionCardProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export interface AddMemberProps {
  setTeamMembers: React.Dispatch<React.SetStateAction<MemberData[]>>;
  setActiveModal: React.Dispatch<
    React.SetStateAction<
      "project" | "addMember" | "team" | "description" | null
    >
  >;
}

export interface CardProps {
  obj: Project;
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  index: number;
  onClick?: () => void;
}

export interface ProjectFormData {
  name: string;
  description: string;
  startDate: string;
  status: "Not Started" | "In Progress" | "Completed";
}

export interface NewProjectFormProps {
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  setActiveModal: React.Dispatch<
    React.SetStateAction<
      "project" | "addMember" | "team" | "description" | null
    >
  >;
}

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface TeamMembersProps {
  teamMembers: MemberData[];
  setTeamMembers: React.Dispatch<React.SetStateAction<MemberData[]>>;
}

export interface ProjectDescProps {
  title: string;
  desc: string;
  date: string;
  status: "Not Started" | "In Progress" | "Completed";
  onStatusChange?: (
    newStatus: "Not Started" | "In Progress" | "Completed"
  ) => void;
}

export interface EmptyStateProps {
  title: string;
  message: string;
  actionText: string;
}
