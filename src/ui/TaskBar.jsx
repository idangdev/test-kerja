import { NavLink } from "react-router-dom";

function TaskBar() {
  return (
    <div className="flex justify-center items-center h-[50px] bg-lime-400">
      <ul className="flex gap-2 justify-end items-center px-5">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/bookings">Bookings</NavLink>
      </ul>
    </div>
  );
}

export default TaskBar;
