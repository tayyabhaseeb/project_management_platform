import EmptyState from "./EmptyState";

const NoTeamMembers = () => {
  return (
    <EmptyState
      title="No Team Members Yet"
      message="Click on"
      actionText="Add New Members"
    />
  );
};

export default NoTeamMembers;
