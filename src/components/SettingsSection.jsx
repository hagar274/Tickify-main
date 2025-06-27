import React from "react";
import { FaLink, FaEnvelopeOpenText, FaKey } from "react-icons/fa";

const SettingsSection = (props) => {
  return (
    <div className="settings-section">
      <h2>Settings</h2>
      <div className="settings-cards-grid">
        {/* Reset Password */}
        <div className="settings-card">
          <div className="settings-card-header">
            <FaKey className="settings-icon" />
            <span>Reset Password</span>
          </div>
          <div className="settings-card-body">
            <input
              className="settings-input"
              type="password"
              placeholder="Current Password"
            />
            <input
              className="settings-input"
              type="password"
              placeholder="New Password"
            />
            <input
              className="settings-input"
              type="password"
              placeholder="Confirm New Password"
            />
            <button className="settings-btn">Reset Password</button>
          </div>
        </div>
        {/* Forgot Email */}
        <div className="settings-card">
          <div className="settings-card-header">
            <FaEnvelopeOpenText className="settings-icon" />
            <span>Forgot Email</span>
          </div>
          <div className="settings-card-body">
            <input
              className="settings-input"
              type="email"
              placeholder="Enter your email"
            />
            <button className="settings-btn">Send Reset Link</button>
          </div>
        </div>
        {/* Linked Accounts */}
        <div className="settings-card">
          <div className="settings-card-header">
            <FaLink className="settings-icon" />
            <span>Linked Accounts</span>
          </div>
          <div className="settings-card-body">
            <div className="linked-account-row">
              <img
                src="/src/images/google.png"
                alt="Google"
                className="linked-icon"
              />
              <span>Google</span>
              <button className="settings-btn settings-btn-secondary">
                Unlink
              </button>
            </div>
            <div className="linked-account-row">
              <img
                src="/src/images/facebook.png"
                alt="Facebook"
                className="linked-icon"
              />
              <span>Facebook</span>
              <button className="settings-btn settings-btn-secondary">
                Link
              </button>
            </div>
            <div className="linked-account-row">
              <img src="/src/images/X.png" alt="X" className="linked-icon" />
              <span>X</span>
              <button className="settings-btn settings-btn-secondary">
                Link
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* TODO: Integrate with real API data and logic */}
    </div>
  );
};
export default SettingsSection;
