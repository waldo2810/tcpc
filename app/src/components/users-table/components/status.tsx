export const UserStatus = ({ status }: { status: UserStatus }) => {
  if (status === "Active") {
    return (
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 bg-green-500 rounded-full" />
        <p>{status}</p>
      </div>
    );
  }
  if (status === "Inactive") {
    return (
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 bg-red-500 rounded-full" />
        <p>{status}</p>
      </div>
    );
  }
};
