import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLanguage } from '../context/LanguageContext';

const TermsGlobalStyle = createGlobalStyle`
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

/* Terms and Conditions Page Styles */
const TermsContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    background: var(--white);
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        margin: 1rem;
        padding: 1.5rem;
    }

    @media (max-width: 480px) {
        margin: 0.5rem;
        padding: 1rem;
    }
`;

const TermsHeader = styled.div`
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid #f0f0f0;

    h1 {
        color: var(--primary-color);
        font-size: 2.5rem;
        margin-bottom: 1rem;
        font-weight: bold;

        @media (max-width: 768px) {
            font-size: 2rem;
        }

        @media (max-width: 480px) {
            font-size: 1.8rem;
        }
    }

    p {
        color: #666;
        font-size: 1.1rem;
        max-width: 600px;
        margin: 0 auto;

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }
`;

const TermsSection = styled.section`
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;

    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    h2 {
        color: var(--primary-color);
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        @media (max-width: 768px) {
            font-size: 1.3rem;
            margin-bottom: 1rem;
        }

        @media (max-width: 480px) {
            font-size: 1.2rem;
            margin-bottom: 0.8rem;
        }
    }

    p {
        color: #333;
        line-height: 1.7;
        margin-bottom: 1rem;
        font-size: 1rem;
        text-align: justify;

        @media (max-width: 768px) {
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 0.8rem;
        }

        @media (max-width: 480px) {
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 0.6rem;
        }
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 1rem 0;
    }

    li {
        color: #333;
        margin-bottom: 0.8rem;
        padding-right: 1.5rem;
        position: relative;
        font-size: 1rem;
        line-height: 1.6;

        @media (max-width: 768px) {
            font-size: 0.95rem;
            margin-bottom: 0.6rem;
            padding-right: 1.2rem;
        }

        @media (max-width: 480px) {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
            padding-right: 1rem;
        }

        &:before {
            content: "•";
            color: var(--primary-color);
            position: absolute;
            right: 0;
            font-weight: bold;
            font-size: 1.2rem;
        }
    }
`;

const ImportantNote = styled.div`
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 2rem 0;
    
    h3 {
        color: #856404;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        font-weight: 600;
    }
    
    p {
        color: #856404;
        margin: 0;
        font-size: 0.95rem;
    }
`;

const ContactInfo = styled.div`
    background: #f8f9fa;
    border-radius: 8px;
    padding: 1.5rem;
    margin-top: 2rem;
    text-align: center;
    
    h3 {
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
    
    p {
        color: #666;
        margin: 0.5rem 0;
        font-size: 0.95rem;
    }
`;

const Terms = () => {
    const { language } = useLanguage();

    return (
        <>
            <TermsGlobalStyle />
            <TermsContainer>
                <TermsHeader>
                    <h1>
                        <i className="fas fa-file-contract" style={{ marginLeft: language === 'ar' ? '0.5rem' : '0', marginRight: language === 'ar' ? '0' : '0.5rem' }}></i>
                        {language === 'ar' ? 'الشروط والأحكام' : 'Terms and Conditions'}
                    </h1>
                    <p>
                        {language === 'ar' 
                            ? 'يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا'
                            : 'Please read these terms and conditions carefully before using our services.'}
                    </p>
                </TermsHeader>

                <TermsSection>
                    <h2>
                        <i className="fas fa-info-circle"></i>
                        {language === 'ar' ? '1. مقدمة' : '1. Introduction'}
                    </h2>
                    <p>
                        {language === 'ar'
                            ? 'مرحباً بك في تيكيفاي، منصة حجز السفر الرائدة في الشرق الأوسط. باستخدامك لموقعنا الإلكتروني أو تطبيقنا، فإنك توافق على الالتزام بهذه الشروط والأحكام بالكامل.'
                            : 'Welcome to Tickify, the leading travel booking platform in the Middle East. By using our website or application, you agree to fully comply with these terms and conditions.'}
                    </p>
                </TermsSection>

                <TermsSection>
                    <h2>
                        <i className="fas fa-user-check"></i>
                        {language === 'ar' ? '2. استخدام الموقع' : '2. Use of Website'}
                    </h2>
                    <p>
                        {language === 'ar'
                            ? 'يجب استخدام موقعنا بشكل قانوني وأخلاقي. يحظر أي استخدام غير مصرح به أو ضار أو يسيء للآخرين.'
                            : 'Our website must be used legally and ethically. Any unauthorized, harmful, or abusive use is prohibited.'}
                    </p>
                    <ul>
                        <li>
                            {language === 'ar'
                                ? 'يجب أن تكون عمرك 18 عاماً أو أكثر لاستخدام خدمات الحجز'
                                : 'You must be 18 years or older to use booking services'}
                        </li>
                        <li>
                            {language === 'ar'
                                ? 'يجب تقديم معلومات دقيقة وصحيحة عند إنشاء الحساب'
                                : 'You must provide accurate and correct information when creating an account'}
                        </li>
                        <li>
                            {language === 'ar'
                                ? 'يحظر استخدام الموقع لأي أغراض غير مشروعة'
                                : 'Using the website for any illegal purposes is prohibited'}
                        </li>
                    </ul>
                </TermsSection>

                <TermsSection>
                    <h2>
                        <i className="fas fa-credit-card"></i>
                        {language === 'ar' ? '3. الحجوزات والمدفوعات' : '3. Bookings and Payments'}
                    </h2>
                    <p>
                        {language === 'ar'
                            ? 'جميع الحجوزات تخضع لسياسة الإلغاء الخاصة بنا. يجب إتمام المدفوعات بالكامل قبل تأكيد الحجز.'
                            : 'All bookings are subject to our cancellation policy. Payments must be completed in full before booking confirmation.'}
                    </p>
                    <ul>
                        <li>
                            {language === 'ar'
                                ? 'الأسعار المعروضة شاملة الضرائب والرسوم'
                                : 'Displayed prices include taxes and fees'}
                        </li>
                        <li>
                            {language === 'ar'
                                ? 'يمكن إلغاء الحجز وفقاً لسياسة الإلغاء المطبقة'
                                : 'Bookings can be cancelled according to the applicable cancellation policy'}
                        </li>
                        <li>
                            {language === 'ar'
                                ? 'نحن نستخدم أنظمة دفع آمنة ومشفرة'
                                : 'We use secure and encrypted payment systems'}
                        </li>
                    </ul>
                </TermsSection>

                <TermsSection>
                    <h2>
                        <i className="fas fa-shield-alt"></i>
                        {language === 'ar' ? '4. الخصوصية والأمان' : '4. Privacy and Security'}
                    </h2>
                    <p>
                        {language === 'ar'
                            ? 'نحن نحمي خصوصية مستخدمينا ونلتزم بحماية بياناتهم الشخصية وفقاً لأحدث معايير الأمان.'
                            : 'We protect our users\' privacy and are committed to protecting their personal data according to the latest security standards.'}
                    </p>
                    <ul>
                        <li>
                            {language === 'ar'
                                ? 'نحن لا نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك'
                                : 'We do not share your personal information with third parties without your consent'}
                        </li>
                        <li>
                            {language === 'ar'
                                ? 'نستخدم تقنيات تشفير متقدمة لحماية بياناتك'
                                : 'We use advanced encryption technologies to protect your data'}
                        </li>
                    </ul>
                </TermsSection>

                <TermsSection>
                    <h2>
                        <i className="fas fa-exclamation-triangle"></i>
                        {language === 'ar' ? '5. المسؤولية القانونية' : '5. Legal Liability'}
                    </h2>
                    <p>
                        {language === 'ar'
                            ? 'لا نتحمل المسؤولية عن أي خسائر أو أضرار ناتجة عن استخدام موقعنا أو خدماتنا، إلا في حدود المسؤولية القانونية المطبقة.'
                            : 'We are not liable for any losses or damages resulting from the use of our website or services, except within the limits of applicable legal liability.'}
                    </p>
                </TermsSection>

                <TermsSection>
                    <h2>
                        <i className="fas fa-edit"></i>
                        {language === 'ar' ? '6. التغييرات والتحديثات' : '6. Changes and Updates'}
                    </h2>
                    <p>
                        {language === 'ar'
                            ? 'نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إخطار المستخدمين بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على الموقع.'
                            : 'We reserve the right to modify these terms and conditions at any time. Users will be notified of any significant changes via email or website notification.'}
                    </p>
                </TermsSection>

                <ImportantNote>
                    <h3>
                        <i className="fas fa-exclamation-circle"></i>
                        {language === 'ar' ? 'ملاحظة مهمة' : 'Important Note'}
                    </h3>
                    <p>
                        {language === 'ar'
                            ? 'باستمرارك في استخدام موقعنا، فإنك تؤكد أنك قد قرأت وفهمت هذه الشروط والأحكام وتوافق على الالتزام بها.'
                            : 'By continuing to use our website, you confirm that you have read and understood these terms and conditions and agree to comply with them.'}
                    </p>
                </ImportantNote>
            </TermsContainer>
        </>
    );
};

export default Terms;
