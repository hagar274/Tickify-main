import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLanguage } from '../context/LanguageContext';

const FooterContainer = styled.footer`
  background: var(--primary-color);
  color: var(--white);
  padding: 3rem 0 1rem;
  margin-top: 4rem;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  @media (max-width: 768px) {
    padding: 2rem 0 1rem;
    // margin-top: 2rem;
    // margin-right: -11rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 10rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: var(--white);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.8rem;
      
      @media (max-width: 768px) {
        margin-bottom: 0.6rem;
      }
      
      a {
        color: var(--white);
        text-decoration: none;
        transition: color 0.3s ease;
        // font-size: 0.95rem;
        
        @media (max-width: 768px) {
          font-size: 0.9rem;
        }
        
        &:hover {
          color: var(--accent-color);
        }
      }
    }
  }
`;

const ContactInfo = styled.div`
  p {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    // font-size: 0.95rem;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin-bottom: 0.8rem;
    }
    
    i {
      color: var(--secondary-color);
      width: 20px;
      text-align: center;
    }
    
    a {
      color: var(--white);
      text-decoration: none;
      
      &:hover {
        color: #1976d2;
      }
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding-top: 1.5rem;
    margin-top: 1.5rem;
  }
`;

const Footer = () => {
  const { language } = useLanguage();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>{language === 'ar' ? 'عن تيكيفاي' : 'About Tickify'}</h3>
          <ul>
            <li><Link to="/about">{language === 'ar' ? 'من نحن' : 'About Us'}</Link></li>
            <li><Link to="/terms">{language === 'ar' ? 'الشروط والأحكام' : 'Terms and Conditions'}</Link></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>{language === 'ar' ? 'المساعدة' : 'Help'}</h3>
          <ul>
            <li><Link to="/cancellation">{language === 'ar' ? 'سياسة الإلغاء' : 'Cancellation Policy'}</Link></li>
            <li><span>{language === 'ar' ? 'اتصل بنا' : 'Contact Us'}</span></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>{language === 'ar' ? 'معلومات التواصل' : 'Contact information'}</h3>
          <ContactInfo>
            <p>
              <i className="fas fa-phone"></i> 
            <span> 123456789 + </span> 
            </p>
            <p>
              <i className="fas fa-envelope"></i> 
              <a href='mailto:bessie.ferry32@ethereal.email'>bessie.ferry32@ethereal.email</a>
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
               {language === 'ar' ? 'المنصورة , مصر' : 'Mansoura, Egypt'}
            </p>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p> {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved.'} &copy; 2025 Tickify </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 