import { useAuth } from "./useAuth";

function UserInfo() {
  const { user } = useAuth();

  return (
    <div className="flex items-center gap-2 px-1 text-left text-sm">
      <span
        data-slot="avatar"
        className="relative flex size-8 shrink-0 overflow-hidden h-8 w-8 rounded-lg"
      >
        <img
          data-slot="avatar-image"
          className="aspect-square size-full"
          alt="shadcn"
          src="../../user.jpg"
        />
      </span>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{user?.fullName}</span>
        <span className="truncate text-xs">{user?.email}</span>
      </div>
    </div>
  );
}

export default UserInfo;
