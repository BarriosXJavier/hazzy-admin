import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div>
       <p>This is a protected page</p>
       <UserButton afterSignOutUrl="/"/>
    </div>
  );
}

export default SetupPage;