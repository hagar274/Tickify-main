import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import googleLogo from "../images/google.png";
import facebookLogo from "../images/facebook.png";
import xLogo from "../images/X.png";
import { createGlobalStyle } from "styled-components";
import UserInfoSection from "./UserInfoSection";
import SettingsSection from "./SettingsSection";
import TripsSection from "./TripsSection";
import "./ProfileDashboard.css";

const ProfileGlobalStyle = createGlobalStyle`
  @media (max-width: 900px) {
    body {
      padding: 0 !important;
    }
  }
`;

const ProfileContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 0 auto;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  background: #f5f6fa;
  min-height: 100vh;
  @media (max-width: 900px) {
    padding: 8px 2px;
    background: #fff;
  }
  @media (max-width: 600px) {
    padding: 2px 0;
  }
`;

const ProfileHeader = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 0 8px 0;
    gap: 8px;
    width: 100vw;
    border-radius: 0 0 10px 10px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  }
  @media (max-width: 600px) {
    padding: 4px 0 4px 0;
    gap: 4px;
    margin-bottom: 6px;
    margin-right: 10px;
    width: 95vw;
    margin-top: 80px;
  }
`;

const ProfileAvatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  color: #666;
  @media (max-width: 900px) {
    width: 90px;
    height: 90px;
    font-size: 36px;
  }
  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  @media (max-width: 900px) {
    font-size: 18px;
    margin-bottom: 4px;
  }
  @media (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 2px;
  }
`;

const ProfileEmail = styled.div`
  color: #666;
  margin-bottom: 5px;
`;

const ProfilePhone = styled.div`
  color: #666;
`;

const EditProfileBtn = styled.button`
  background: #00233d;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background: #003d6b;
  }
`;

const ProfileStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;
  width: 100%;
  @media (max-width: 900px) {
    gap: 4px;
    margin-bottom: 8px;
  }
  @media (max-width: 600px) {
    gap: 2px;
    margin-bottom: 4px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
`;

const StatNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  color: #666;
  font-size: 0.9em;
`;

const ProfileSections = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const ProfileSection = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 900px) {
    padding: 8px;
  }
  @media (max-width: 600px) {
    padding: 4px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  & i {
    color: #1976d2;
  }
  @media (max-width: 900px) {
    font-size: 15px;
    margin-bottom: 8px;
  }
  @media (max-width: 600px) {
    font-size: 13px;
    margin-bottom: 4px;
  }
`;

const ReservationItem = styled.div`
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  &:last-child {
    border-bottom: none;
  }
`;

const ReservationFlight = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ReservationDates = styled.div`
  color: #666;
  font-size: 0.9em;
`;

const ReservationStatus = styled.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 15px;
  font-size: 0.8em;
  margin-top: 5px;
  background: ${({ status }) =>
    status === "active"
      ? "#e3f2fd"
      : status === "completed"
      ? "#e8f5e9"
      : status === "cancelled"
      ? "#ffebee"
      : "#eee"};
  color: ${({ status }) =>
    status === "active"
      ? "#1976d2"
      : status === "completed"
      ? "#2e7d32"
      : status === "cancelled"
      ? "#c62828"
      : "#666"};
`;

const ProfileMainContent = styled.div`
  width: 100vw;
  max-width: 1200px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 900px) {
    left: 0;
    transform: none;
    width: 100vw;
    max-width: 100vw;
  }
`;

const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-right: 16px;
  min-width: 220px;
`;
const PasswordInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
const PasswordActions = styled.div`
  display: flex;
  gap: 8px;
`;
const PasswordButton = styled.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
  &:hover {
    background: #003d6b;
  }
`;
const PasswordCancel = styled.button`
  background: #eee;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
`;

const PaymentBox = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-right: 16px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const PaymentTitle = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;
const PaymentInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
const PaymentActions = styled.div`
  display: flex;
  gap: 8px;
`;
const PaymentButton = styled.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
  &:hover {
    background: #003d6b;
  }
`;
const PaymentCancel = styled.button`
  background: #eee;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
`;

const NotificationBox = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-right: 16px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const NotificationTitle = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;
const NotificationOption = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
`;
const NotificationCheckbox = styled.input`
  accent-color: #1976d2;
`;
const NotificationActions = styled.div`
  display: flex;
  gap: 8px;
`;
const NotificationButton = styled.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
  &:hover {
    background: #003d6b;
  }
`;
const NotificationCancel = styled.button`
  background: #eee;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
`;

const SuccessMsg = styled.div`
  color: #fff;
  background: #43a047;
  padding: 4px 16px;
  border-radius: 6px;
  font-size: 14px;
  margin-right: 12px;
  display: inline-block;
`;

const LinkedAccountsBox = styled.div`
  background: #f7f9fb;
  border-radius: 12px;
  padding: 24px 18px;
  margin-top: 32px;
`;
const LinkedAccountsTitle = styled.div`
  font-weight: bold;
  font-size: 1.15em;
  color: #222;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const LinkedAccountsRowFlex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  margin-bottom: 0;
`;
const LinkedAccountCol = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  padding: 18px 24px 14px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 140px;
  @media (max-width: 600px) {
    width: 150px;
    min-width: 90px;
    padding: 10px 8px 8px 8px;
  }
`;
const LinkedAccountName = styled.span`
  font-size: 1.08em;
  font-weight: 500;
  color: #222;
`;
const LinkedAccountBtn = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 7px 28px;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #1251a3;
  }
`;
const LinkedAccountUnlink = styled.button`
  background: none;
  color: #1976d2;
  border: none;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  padding: 0 8px;
`;

const ReservationsScrollBox = styled.div`
  max-height: 220px;
  overflow-y: auto;
  padding-left: 2px;
  margin-bottom: 0.5rem;
`;

const Profile = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPaymentBox, setShowPaymentBox] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [showNotificationBox, setShowNotificationBox] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [pushNotif, setPushNotif] = useState(true);

  const [notifSaved, setNotifSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [paymentSaved, setPaymentSaved] = useState(false);

  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotError, setForgotError] = useState("");
  const [forgotMsg, setForgotMsg] = useState("");

  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
  const [pendingAvatar, setPendingAvatar] = useState(null);

  // User data state
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reservations state
  const [reservations, setReservations] = useState([]);
  const [reservationsLoading, setReservationsLoading] = useState(true);
  const [reservationsError, setReservationsError] = useState(null);

  // Fetch hotel reservations from API
  const [hotelReservations, setHotelReservations] = useState([]);
  const [hotelReservationsLoading, setHotelReservationsLoading] =
    useState(true);
  const [hotelReservationsError, setHotelReservationsError] = useState(null);

  // Dashboard layout state
  const [activeSection, setActiveSection] = useState("user");

  // Fetch user data from API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("token");
        if (!token) {
          setError("No authentication token found");
          setLoading(false);
          return;
        }

        const response = await fetch(
          "https://tickifywebsite.runasp.net/me/info",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          if (response.status === 401) {
            setError("Authentication failed. Please login again.");
            // Optionally redirect to login or clear localStorage
            localStorage.removeItem("token");
            localStorage.removeItem("isLoggedIn");
          } else {
            setError(`Failed to fetch user data: ${response.status}`);
          }
          setLoading(false);
          return;
        }

        const data = await response.json();
        setUserData(data);

        // Update localStorage with fetched data
        localStorage.setItem("firstName", data.firstName || "");
        localStorage.setItem("lastName", data.lastName || "");
        localStorage.setItem("email", data.email || "");
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Fetch reservations from API
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        setReservationsLoading(true);
        setReservationsError(null);
        const token = localStorage.getItem("token");
        if (!token) {
          setReservationsError("No authentication token found");
          setReservationsLoading(false);
          return;
        }
        const response = await fetch(
          "https://tickifywebsite.runasp.net/me/my-reservations",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          if (response.status === 401) {
            setReservationsError("Authentication failed. Please login again.");
          } else {
            setReservationsError(
              `Failed to fetch reservations: ${response.status}`
            );
          }
          setReservationsLoading(false);
          return;
        }
        const data = await response.json();
        setReservations(Array.isArray(data) ? data : []);
      } catch (err) {
        setReservationsError("Failed to fetch reservations. Please try again.");
      } finally {
        setReservationsLoading(false);
      }
    };
    fetchReservations();
  }, []);

  // Fetch hotel reservations from API
  useEffect(() => {
    const fetchHotelReservations = async () => {
      try {
        setHotelReservationsLoading(true);
        setHotelReservationsError(null);
        const token = localStorage.getItem("token");
        if (!token) {
          setHotelReservationsError("No authentication token found");
          setHotelReservationsLoading(false);
          return;
        }
        const response = await fetch(
          "https://tickifywebsite.runasp.net/me/my-Hotel-reservations",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          if (response.status === 401) {
            setHotelReservationsError(
              "Authentication failed. Please login again."
            );
          } else {
            setHotelReservationsError(
              `Failed to fetch hotel reservations: ${response.status}`
            );
          }
          setHotelReservationsLoading(false);
          return;
        }
        const data = await response.json();
        setHotelReservations(Array.isArray(data) ? data : []);
      } catch (err) {
        setHotelReservationsError(
          "Failed to fetch hotel reservations. Please try again."
        );
      } finally {
        setHotelReservationsLoading(false);
      }
    };
    fetchHotelReservations();
  }, []);

  // Helper function to format date
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      return dateString;
    }
  };

  // Helper function to get airport name without the number
  const getAirportName = (airportString) => {
    if (!airportString) return "";
    // Remove the number at the end (e.g., "Adnan Menderes Airport 11" -> "Adnan Menderes Airport")
    return airportString.replace(/\s+\d+$/, "");
  };

  // Use API data if available, fallback to localStorage
  const firstName =
    userData?.firstName || localStorage.getItem("firstName") || "";
  const lastName = userData?.lastName || localStorage.getItem("lastName") || "";
  const emailLS = userData?.email || localStorage.getItem("email") || "";
  const phoneLS = localStorage.getItem("phone") || "";
  const fullName =
    firstName && lastName
      ? `${firstName} ${lastName}`
      : localStorage.getItem("fullName") || "اسم المستخدم";

  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState(fullName);
  const [editEmail, setEditEmail] = useState(emailLS);
  const [editPhone, setEditPhone] = useState(phoneLS);
  const [saveMsg, setSaveMsg] = useState("");

  const [linkedGoogle, setLinkedGoogle] = useState(false);
  const [linkedFacebook, setLinkedFacebook] = useState(false);
  const [linkedTwitter, setLinkedTwitter] = useState(false);

  const handlePasswordClick = (e) => {
    e.preventDefault();
    setShowPasswordForm((prev) => !prev);
  };
  const handlePasswordSave = (e) => {
    e.preventDefault();
    setPasswordSaved(true);
    setShowPasswordForm(false);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setTimeout(() => setPasswordSaved(false), 2000);
  };
  const handlePasswordCancel = (e) => {
    e.preventDefault();
    setShowPasswordForm(false);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handlePaymentClick = (e) => {
    e.preventDefault();
    setShowPaymentBox((prev) => !prev);
  };
  const handlePaymentSave = (e) => {
    e.preventDefault();
    setPaymentSaved(true);
    setShowPaymentBox(false);
    setCardNumber("");
    setCardName("");
    setExpiry("");
    setCvv("");
    setTimeout(() => setPaymentSaved(false), 2000);
  };
  const handlePaymentCancel = (e) => {
    e.preventDefault();
    setShowPaymentBox(false);
    setCardNumber("");
    setCardName("");
    setExpiry("");
    setCvv("");
  };

  const handleNotificationClick = (e) => {
    e.preventDefault();
    setShowNotificationBox((prev) => !prev);
  };
  const handleNotificationSave = (e) => {
    e.preventDefault();
    setNotifSaved(true);
    setShowNotificationBox(false);
    setTimeout(() => setNotifSaved(false), 2000);
  };
  const handleNotificationCancel = (e) => {
    e.preventDefault();
    setShowNotificationBox(false);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPendingAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Dashboard layout with tabbed navigation
  const tabList = [
    { key: "user", label: "Account" },
    { key: "settings", label: "Settings" },
    { key: "trips", label: "Reservations" },
  ];

  return (
    <div className="dashboard-layout">
      <div className="dashboard-tabs">
        {tabList.map((tab) => (
          <button
            key={tab.key}
            className={`dashboard-tab${
              activeSection === tab.key ? " active" : ""
            }`}
            onClick={() => setActiveSection(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <main className="dashboard-main">
        {activeSection === "user" && (
          <UserInfoSection
            userData={userData}
            loading={loading}
            error={error}
          />
        )}
        {activeSection === "settings" && <SettingsSection />}
        {activeSection === "trips" && (
          <TripsSection
            trips={reservations}
            loading={reservationsLoading}
            error={reservationsError}
            hotelReservations={hotelReservations}
            hotelReservationsLoading={hotelReservationsLoading}
            hotelReservationsError={hotelReservationsError}
            setHotelReservations={setHotelReservations}
          />
        )}
      </main>
    </div>
  );
};

export default Profile;
