import { useState } from "react";
import EmailGate from "@/components/EmailGate";
import Dashboard from "@/components/Dashboard";

const DashboardPage = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const handleEmailSubmit = (email: string) => {
    setUserEmail(email);
    // Here you would typically validate the email and set user session
  };

  if (!userEmail) {
    return <EmailGate onEmailSubmit={handleEmailSubmit} />;
  }

  return <Dashboard userEmail={userEmail} />;
};

export default DashboardPage;
