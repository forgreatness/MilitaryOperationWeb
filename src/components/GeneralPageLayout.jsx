import { Navigate, useOutlet } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { MainAppBar } from "./AppBar";

export const GeneralLayout = () => {
  const outlet = useOutlet();
  const { user, is2FAVerified } = useAuth();

  if (user && is2FAVerified) {
    return <Navigate to="/dashboard/profile" replace />;
  }

  // return (
  //   <div>
  //     <MainAppBar
  //       pages={[
  //         { label: "Home", path: "/" },
  //         { label: "Login", path: "/login" }
  //       ]}
  //     />
  //     {outlet}
  //   </div>
  // );

  return (
    <div>
      <MainAppBar
        pages={[
          { label: "Home", path: "/" },
          { label: "Login", path: "/login" }
        ]} />
      {outlet}
    </div>
  );
};
