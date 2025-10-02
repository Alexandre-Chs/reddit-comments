import { Outlet, useNavigate } from "@tanstack/react-router";
import { logout } from "../api/logout";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate({ to: "/login" });
  };

  return (
    <div>
      LAYOUT DASHBOARD
      <button onClick={handleLogout}>- logout</button>
      <Outlet />
    </div>
  );
};

export default DashboardPage;
