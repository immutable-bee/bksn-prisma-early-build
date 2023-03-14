import { Login } from "../compontents/Login";
import { signOut, useSession } from "next-auth/react";

const Index = () => {
  const { data: session } = useSession();
  if (!session) {
    return <Login className="auth-page" />;
  } else {
    return (
      <div>
        <h1>Logged In!</h1>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }
};

export default Index;
