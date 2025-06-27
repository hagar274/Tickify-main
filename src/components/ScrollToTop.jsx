import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // التحقق من موضع التمرير وإظهار/إخفاء الزر
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // التمرير إلى أعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <ScrollButton 
      onClick={scrollToTop} 
      className={isVisible ? 'visible' : ''}
      aria-label="العودة إلى أعلى الصفحة"
    >
      <MdOutlineKeyboardDoubleArrowUp />
    </ScrollButton>
  );
};

export default ScrollToTop;
