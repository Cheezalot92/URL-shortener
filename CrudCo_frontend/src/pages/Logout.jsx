import React from "react";

const Logout = () => {
  const handleLogout = () => {
    localStorage.clear();

    window.location.href = "/";
  };

  return (
    <div>
      <h1>Time to go! 👋🏾</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;