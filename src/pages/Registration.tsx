import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router";

function Registration() {
  return (
    <>
      <div>Registration</div>
      <Link to="/login" className={buttonVariants({ variant: "default" })}>
        Login
      </Link>
    </>
  );
}

export default Registration;
