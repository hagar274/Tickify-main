import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const HelpGlobalStyle = createGlobalStyle`
  @media (max-width: 900px) {
    body {
      padding-top: 0 !important;
      padding-left: 0 !important;
    }
    .main-content {
      padding-top: 0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
`;

/* Help Page Styles */
const HelpContainer = styled.div`
    max-width: 1200px;
    margin: -0px auto;
    padding: 2rem;

    h1 {
    text-align: center;
    color: #00233D;
    margin-bottom: 3rem;
    font-size: 2.5rem;
}
`;

const FaqItem = styled.div`
    margin-bottom: 2rem;
    padding: 1.5rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    h3 {
    color: #00233D;
    margin-bottom: 1rem;
    font-size: 1.4rem;
}

    p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1rem;
}

    ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 1rem 0;
}

    ul li {
    position: relative;
    padding: 0.5rem 0 0.5rem 1.5rem;
    color: #555;
    line-height: 1.6;
}

   &:before {
    content: "•";
    color: #1976d2;
    position: absolute;
    right: -10px;
    font-size: 1.2rem;
}

    a {
    color: #1976d2;
    text-decoration: none;
}

   &:hover {
    text-decoration: underline;
}
`;

const HelpSection = styled.section`
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
    color: #00233D;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    border-bottom: 2px solid #1976d2;
    padding-bottom: 0.5rem;
}
`;

const ContactMethods =styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
`;

const ContactItem = styled.div`
    text-align: center;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    svg{
    font-size: 2.5rem;
    color: #1976d2;
    margin-bottom: 1rem;
}

    h3 {
    color: #00233D;
    margin-bottom: 1rem;
    font-size: 1.4rem;
}

    p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 0.5rem;
}

    a {
    color: #1976d2;
    text-decoration: none;
}

    &:hover {
    text-decoration: underline;
}
`;
const Help = () => {
  const { language } = useLanguage();

  return (
    <>
      <HelpGlobalStyle />
      <HelpContainer>
        <h1>{language === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'}</h1>

        <FaqItem>
          <h3>كيف يمكنني حجز رحلة طيران؟</h3>
          <p>يمكنك حجز رحلة طيران بسهولة من خلال اتباع الخطوات التالية:</p>
          <ul>
            <li>اختر وجهة سفرك وتاريخ الرحلة</li>
            <li>حدد عدد المسافرين</li>
            <li>اختر الرحلة المناسبة من النتائج</li>
            <li>أدخل بيانات المسافرين</li>
            <li>اختر طريقة الدفع المناسبة</li>
          </ul>
        </FaqItem>

        <FaqItem>
         <h3>كيف يمكنني إلغاء حجز؟</h3>
         <p>يمكنك إلغاء حجزك من خلال:</p>
         <p>يرجى مراجعة <Link to="/cancellation">سياسة الإلغاء</Link> للاطلاع على الشروط والأحكام.</p>
        </FaqItem>


        <FaqItem>
         <h3>كيف يمكنني تعديل حجز؟</h3>
         <p>يمكنك تعديل حجزك من خلال:</p>
         <p>يمكنك تعديل تفاصيل حجزك مثل التاريخ أو الوجهة أو عدد المسافرين من خلال حسابك الشخصي. يرجى مراعاة أن بعض التعديلات قد تكون خاضعة لرسوم إضافية حسب سياسة التعديل الخاصة بالخدمة المقدمة.</p>
          </FaqItem>

          <HelpSection>
              <h2>طرق التواصل معنا</h2>
              <ContactMethods>
                  <ContactItem>
                      <FaPhoneAlt />
                      <h3>اتصل بنا</h3>
                      <p>123456789</p>
                      <p>متاح على مدار الساعة</p>
                  </ContactItem>

                  <ContactItem>
                      
                      <FaEnvelope />
                      <h3>راسلنا عبر البريد الإلكتروني</h3>
                      <p><a href="mailto:bessie.ferry32@ethereal.email">bessie.ferry32@ethereal.email</a></p>
                      <p>الرد خلال 24 ساعة</p>
                  </ContactItem>
              </ContactMethods>        
          </HelpSection>
      </HelpContainer>
    </>
  );
};

export default Help;
