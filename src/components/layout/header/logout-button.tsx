"use client";
import Cookies from "js-cookie";

export default function LogoutButton() {

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.href = "/login";
  };

  return (
    <button onClick={handleLogout} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      Logout
    </button>
  );
}
