import EmptyState from "./EmptyState";

const NoProjects = () => {
  return (
    <EmptyState
      title="No Projects Yet"
      message="Click on"
      actionText="New Project"
    />
  );
};

export default NoProjects;
