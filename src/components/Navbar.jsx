import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useLanguage } from "../context/LanguageContext";
import { useSidebar } from "../context/SidebarContext";
import { isLoggedIn as checkAuth } from "../context/checkAuth";

const Nav = styled.nav`
  background: #00233d;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 0;

  i {
    margin-left: 0.5rem;
    font-size: normal;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;

    i {
      font-size: 1.7rem;
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 8px;
  position: fixed;

  left: 1rem;
  z-index: 1002;

  @media (max-width: 768px) {
    top: 0.8rem;
    left: 0.8rem;
    gap: 1rem;
  }
`;

const LangSwitch = styled.button`
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.2rem;
  margin-right: 0.5rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(360deg);
  }
`;

const CustomIconBtn = styled.button`
  display: flex;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.5rem;
  margin-right: 8px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(10, 39, 64, 0.08);
  transition: color 0.2s;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1.7em;
    margin-right: 4px;
  }

  &:hover,
  &focus {
    background: none;
    color: #ffb300;
    outline: none;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 59px;
  left: ${(props) => (props.isOpen ? "0" : "-300px")};
  width: 280px;
  height: 100vh;
  background: #ffff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
  z-index: 1500;
  // padding: 1.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    top: 70px;
    width: 250px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #666;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    top: 0.8rem;
    right: 0.8rem;
    font-size: 1.1rem;
  }

  &:hover {
    color: #1976d2;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0 0;
  flex: 1;

  @media (max-width: 768px) {
    margin: 1.5rem 0 0 0;
  }
`;

const SidebarItem = styled.li`
  margin-bottom: 0.5rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #00233d;
    padding: 0.75rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    // font-size: 1rem;
    flex-direction: row-reverse;
    gap: 1.5rem;

    @media (max-width: 768px) {
      padding: 0.6rem;
      gap: 1rem;
    }

    &:hover {
      background: #f5f5f5;
      color: #1976d2;
    }

    i {
      margin-left: 0.5rem;
      margin-right: 0;
      // width: 20px;
      text-align: center;
      font-size: 1.2rem;
      color: rgb(25, 118, 210);
    }
    span {
      flex-grow: 0.4;
      text-align: left;
      // opacity: 0;
      // transition: opacity 0.3s ease;

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }
`;
const SidebarSeparator = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 1rem 0;

  @media (max-width: 768px) {
    margin: 0.8rem 0;
  }
`;

const Navbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const [isLoggedIn, setIsLoggedIn] = useState(() => checkAuth());
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleStorage = () => setIsLoggedIn(checkAuth());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setIsSidebarOpen(false);
    navigate("/");
  };

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo to="/">
            <i className="fas fa-plane-departure"></i>
            Tickify
          </Logo>
          <NavMenu>
            <LangSwitch onClick={toggleLanguage}>
              <i className="fas fa-globe"></i>
            </LangSwitch>
            {isLoggedIn && (
              <Link
                to="/profile"
                style={{
                  color: "#fff",
                  marginRight: "8px",
                  fontSize: "1.6rem",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                {avatar ? (
                  <img
                    src={avatar}
                    alt="avatar"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #fff",
                      background: "#eee",
                    }}
                  />
                ) : (
                  <i className="fas fa-user-circle"></i>
                )}
              </Link>
            )}
            <CustomIconBtn onClick={toggleSidebar}>
              <i className="fas fa-bars"></i>
            </CustomIconBtn>
          </NavMenu>
        </NavContainer>
      </Nav>

      <Sidebar isOpen={isSidebarOpen}>
        <CloseButton onClick={closeSidebar}>
          <i className="fas fa-times"></i>
        </CloseButton>

        <SidebarMenu>
          <SidebarItem>
            <Link to="/">
              <i className="fas fa-plane"></i>
              <span>رحلات طيران</span>
            </Link>
          </SidebarItem>

          <SidebarSeparator />

          {isLoggedIn ? (
            <SidebarItem>
              <a
                href="/"
                onClick={handleLogout}
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#00233d",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  flexDirection: "row-reverse",
                  gap: "1.5rem",
                }}
              >
                <i className="fas fa-sign-out-alt"></i>
                <span>تسجيل الخروج</span>
              </a>
            </SidebarItem>
          ) : (
            <SidebarItem>
              <Link to="/login">
                <i className="fas fa-sign-in-alt"></i>
                <span>تسجيل الدخول</span>
              </Link>
            </SidebarItem>
          )}
          <SidebarItem>
            <Link to="/app">
              <i className="fas fa-mobile-alt"></i>
              <span>التطبيق</span>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link to="/help">
              <i className="fas fa-question-circle"></i>
              <span>مساعدة</span>
            </Link>
          </SidebarItem>
        </SidebarMenu>
      </Sidebar>
    </>
  );
};

export default Navbar;
