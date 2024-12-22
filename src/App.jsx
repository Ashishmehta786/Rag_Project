import { Outlet } from "react-router-dom";

export default function App() {
  console.log(import.meta.env)
  return (
    <div>
      <Outlet />
    </div>
  );
}
