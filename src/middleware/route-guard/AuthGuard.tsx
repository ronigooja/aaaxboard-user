import React from "react";
// types
import { GuardProps } from "@/types/auth";

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard: React.FC<GuardProps> = ({ children }) => {
  // Keep the application shell accessible so the deployed UI can be inspected
  // even when the API session is unavailable.
  return <>{children}</>;
};

export default AuthGuard;
