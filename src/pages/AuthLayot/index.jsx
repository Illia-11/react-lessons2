import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <>
      <header style={{ padding: "20px" }}>Auth Header</header>
      <main>
        <Outlet />
      </main>
      <footer style={{ padding: "20px" }}>Footer</footer>
    </>
  );
}