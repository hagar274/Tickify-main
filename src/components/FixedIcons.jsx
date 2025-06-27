import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FixedIconsContainer = styled.div`
  position: fixed;
  left: ${props => props.isSidebarOpen ? '300px' : '1rem'};
  top: 30%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1002;
  transition: all 0.3s ease;
  opacity: ${props => props.isSidebarOpen ? 0 : 1};
  visibility: ${props => props.isSidebarOpen ? 'hidden' : 'visible'};
  pointer-events: ${props => props.isSidebarOpen ? 'none' : 'auto'};

  @media (max-width: 768px) {
    display: none;
  }
`;

const IconLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  color: #1976d2;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  i {
    font-size: 1.5rem;
  }
  
  &:hover {
    background: #1976d2;
    color: white;
    transform: scale(1.1);
  }

  &.active {
    background: var(--white);
    color: var(--primary-color);
    border-color: var(--accent-color);
  }

  &.active:hover {
    background: var(--white);
    transform: scale(1.03);
  }
`;

const IconText = styled.span`
  position: absolute;
  right: 60px;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  color: #333;
  font-size: 0.9rem;
  opacity: ${props => props.isSidebarOpen ? 1 : 0};
  visibility: ${props => props.isSidebarOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  white-space: nowrap;
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const FixedIcons = () => {
  const { isSidebarOpen } = useSidebar();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  };

  const icons = [
    { to: '/', icon: 'plane', text: 'رحلات طيران' },
    isLoggedIn
      ? { to: '/logout', icon: 'sign-out-alt', text: 'تسجيل الخروج', logout: true }
      : { to: '/login', icon: 'sign-in-alt', text: 'تسجيل الدخول' },
    { to: '/app', icon: 'mobile-alt', text: 'التطبيق' },
    { to: '/help', icon: 'question-circle', text: 'مساعدة' }
  ];

  return (
    <FixedIconsContainer isSidebarOpen={isSidebarOpen}>
      {icons.map((item, index) => (
        <IconWrapper key={index}>
          {item.logout ? (
            <IconLink as="a" href="/" onClick={handleLogout}>
              <i className={`fas fa-${item.icon}`}></i>
            </IconLink>
          ) : (
            <IconLink 
              to={item.to} 
              className={location.pathname === item.to ? 'active' : ''}
            >
              <i className={`fas fa-${item.icon}`}></i>
            </IconLink>
          )}
          <IconText isSidebarOpen={isSidebarOpen}>{item.text}</IconText>
        </IconWrapper>
      ))}
    </FixedIconsContainer>
  );
};

export default FixedIcons;