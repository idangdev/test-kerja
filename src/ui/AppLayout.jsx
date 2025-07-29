import { Outlet } from "react-router-dom";
import TaskBar from "./TaskBar";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <TaskBar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
