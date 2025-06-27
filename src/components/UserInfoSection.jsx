import React from "react";
const UserInfoSection = ({ userData, loading, error }) => {
  if (loading) return <div>Loading user info...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!userData) return <div>No user data.</div>;
  return (
    <div className="user-info-card">
      <h2>Account Information</h2>
      <div>
        <b>Name:</b> {userData.firstName} {userData.lastName}
      </div>
      <div>
        <b>Email:</b> {userData.email}
      </div>
      <div>
        <b>Phone:</b> {userData.phone || "N/A"}
      </div>
      {/* TODO: Add edit/save logic and API integration */}
    </div>
  );
};
export default UserInfoSection;
