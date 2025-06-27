import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLanguage } from '../context/LanguageContext';

const CancellationGlobalStyle = createGlobalStyle`
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

/* Cancellation Policy Page Styles */
const CancellationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, var(--primary-color), #0066ff);
  color: white;
  padding: 3rem 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 35, 61, 0.2);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const PolicySection = styled.section`
  background: var(--white);
  border-radius: 15px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--primary-color);

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    padding-bottom: 0.8rem;
  }

  .icon {
    font-size: 2rem;
    color: var(--primary-color);
    margin-left: 1rem;
    background: linear-gradient(135deg, var(--primary-color), #0066ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-left: 0.8rem;
    }
  }

  h2 {
    color: var(--primary-color);
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }
`;

const PolicyContent = styled.div`
  h3 {
    color: #333;
    margin: 1.5rem 0 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin: 1.2rem 0 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
      margin: 1rem 0 0.6rem;
    }

    .sub-icon {
      font-size: 1.2rem;
      color: var(--primary-color);
      margin-left: 0.5rem;

      @media (max-width: 768px) {
        font-size: 1rem;
        margin-left: 0.4rem;
      }
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
  }

  li {
    position: relative;
    padding: 0.8rem 0 0.8rem 2rem;
    color: #555;
    line-height: 1.6;
    font-size: 1rem;
    border-bottom: 1px solid #f0f0f0;
    padding-right: 2rem;

    &:last-child {
      border-bottom: none;
    }

    @media (max-width: 768px) {
      font-size: 0.95rem;
      padding: 0.6rem 0 0.6rem 1.5rem;
      line-height: 1.5;
      padding-right: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      padding: 0.5rem 0 0.5rem 1.2rem;
      line-height: 1.4;
      padding-right: 1.2rem;
    }

    &:before {
      content: "✓";
      color: #28a745;
      position: absolute;
      right: 0.5rem;
      font-weight: bold;
      font-size: 1.1rem;

      @media (max-width: 768px) {
        font-size: 1rem;
        right: 0.4rem;
      }

      @media (max-width: 480px) {
        font-size: 0.9rem;
        right: 0.3rem;
      }
    }
  }

  p {
    color: #555;
    line-height: 1.6;
    margin: 1rem 0;
    font-size: 1rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
    border-right: 4px solid var(--primary-color);

    @media (max-width: 768px) {
      font-size: 0.95rem;
      line-height: 1.5;
      margin: 0.8rem 0;
      padding: 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      line-height: 1.4;
      margin: 0.6rem 0;
      padding: 0.6rem;
    }
  }
`;

const ImportantNote = styled.div`
  background: linear-gradient(135deg, #fff3cd, #ffeaa7);
  border: 1px solid #ffc107;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1.5rem 0;
  }

  h4 {
    color: #856404;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  p {
    color: #856404;
    margin: 0;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
`;

const Cancellation = () => {
  const { language } = useLanguage();
  
  return (
    <>
      <CancellationGlobalStyle />
      <CancellationContainer>
        <PageHeader>
          <h1>{language === 'ar' ? 'سياسة الإلغاء' : 'Cancellation Policy'}</h1>
          <p>
            {language === 'ar' 
              ? 'نفهم أن الخطط قد تتغير. تعرف على سياسات الإلغاء الخاصة بنا لجميع خدمات السفر'
              : 'We understand that plans can change. Learn about our cancellation policies for all travel services'
            }
          </p>
        </PageHeader>
        
        <PolicySection>
          <SectionHeader>
            <i className="fas fa-plane icon"></i>
            <h2>{language === 'ar' ? '1. رحلات الطيران' : '1. Flight Bookings'}</h2>
          </SectionHeader>
          <PolicyContent>
            <h3>
              <i className="fas fa-ticket-alt sub-icon"></i>
              {language === 'ar' ? 'التذاكر القابلة للإلغاء' : 'Cancellable Tickets'}
            </h3>
            <ul>
              <li>
                {language === 'ar' 
                  ? 'يمكن إلغاء الحجز قبل 24 ساعة من موعد الرحلة'
                  : 'Reservations can be cancelled 24 hours before the flight time'
                }
              </li>
              <li>
                {language === 'ar' 
                  ? 'يتم خصم رسوم إدارية بنسبة 10% من قيمة التذكرة'
                  : 'An administrative fee of 10% will be deducted from the ticket value'
                }
              </li>
              <li>
                {language === 'ar' 
                  ? 'يتم استرداد المبلغ المتبقي خلال 5-7 أيام عمل'
                  : 'The remaining amount will be refunded within 5-7 business days'
                }
              </li>
            </ul>

            <h3>
              <i className="fas fa-ban sub-icon"></i>
              {language === 'ar' ? 'التذاكر غير القابلة للإلغاء' : 'Non-Cancellable Tickets'}
            </h3>
            <ul>
              <li>
                {language === 'ar' 
                  ? 'لا يمكن إلغاء التذاكر الاقتصادية غير القابلة للإلغاء'
                  : 'Economy non-cancellable tickets cannot be cancelled'
                }
              </li>
              <li>
                {language === 'ar' 
                  ? 'يمكن تغيير التاريخ مقابل رسوم إضافية'
                  : 'Date changes are possible for an additional fee'
                }
              </li>
            </ul>
          </PolicyContent>
        </PolicySection>

        <PolicySection>
          <SectionHeader>
            <i className="fas fa-hotel icon"></i>
            <h2>{language === 'ar' ? '2. حجوزات الفنادق' : '2. Hotel Bookings'}</h2>
          </SectionHeader>
          <PolicyContent>
            <h3>
              <i className="fas fa-check-circle sub-icon"></i>
              {language === 'ar' ? 'الحجوزات القابلة للإلغاء' : 'Cancellable Bookings'}
            </h3>
            <ul>
              <li>
                {language === 'ar' 
                  ? 'يمكن إلغاء الحجز قبل 48 ساعة من موعد الوصول'
                  : 'Reservations can be cancelled 48 hours before check-in'
                }
              </li>
              <li>
                {language === 'ar' 
                  ? 'لا يتم خصم أي رسوم إضافية'
                  : 'No additional fees will be charged'
                }
              </li>
              <li>
                {language === 'ar' 
                  ? 'يتم استرداد المبلغ كاملاً خلال 3-5 أيام عمل'
                  : 'Full refund will be processed within 3-5 business days'
                }
              </li>
            </ul>

            <h3>
              <i className="fas fa-exclamation-triangle sub-icon"></i>
              {language === 'ar' ? 'الحجوزات المتأخرة' : 'Late Cancellations'}
            </h3>
            <ul>
              <li>
                {language === 'ar' 
                  ? 'الإلغاء خلال 24 ساعة من الوصول: خصم ليلة واحدة'
                  : 'Cancellation within 24 hours of check-in: One night charge'
                }
              </li>
            </ul>
          </PolicyContent>
        </PolicySection>

        <PolicySection>
          <SectionHeader>
            <i className="fas fa-car icon"></i>
            <h2>{language === 'ar' ? '3. حجوزات السيارات' : '3. Car Rentals'}</h2>
          </SectionHeader>
          <PolicyContent>
            <h3>
              <i className="fas fa-key sub-icon"></i>
              {language === 'ar' ? 'الحجوزات القابلة للإلغاء' : 'Cancellable Bookings'}
            </h3>
            <ul>
              <li>
                {language === 'ar' 
                  ? 'يمكن إلغاء الحجز قبل 24 ساعة من موعد الاستلام'
                  : 'Reservations can be cancelled 24 hours before pickup time'
                }
              </li>
              <li>
                {language === 'ar' 
                  ? 'يتم خصم رسوم إدارية بنسبة 5% من قيمة الحجز'
                  : 'An administrative fee of 5% will be deducted from the booking value'
                }
              </li>
              <li>
                {language === 'ar' 
                  ? 'يتم استرداد المبلغ المتبقي خلال 3-5 أيام عمل'
                  : 'The remaining amount will be refunded within 3-5 business days'
                }
              </li>
            </ul>
          </PolicyContent>
        </PolicySection>

        <PolicySection>
          <SectionHeader>
            <i className="fas fa-exclamation-circle icon"></i>
            <h2>{language === 'ar' ? '4. حالات خاصة' : '4. Special Cases'}</h2>
          </SectionHeader>
          <PolicyContent>
            <h3>
              <i className="fas fa-shield-alt sub-icon"></i>
              {language === 'ar' ? 'الإلغاء بسبب ظروف قاهرة' : 'Cancellation Due to Force Majeure'}
            </h3>
            <ul>
              <li>
                {language === 'ar' 
                  ? 'في حالة الكوارث الطبيعية أو الأوبئة'
                  : 'In case of natural disasters or pandemics'
                }
              </li>
              <li>
                {language === 'ar' 
                  ? 'في حالة إغلاق المطارات أو الفنادق'
                  : 'In case of airport or hotel closures'
                }
              </li>
              <li>
                {language === 'ar' 
                  ? 'في حالة القيود الحكومية المفروضة على السفر'
                  : 'In case of government-imposed travel restrictions'
                }
              </li>
            </ul>
            <p>
              {language === 'ar' 
                ? 'في هذه الحالات، يتم استرداد المبلغ كاملاً أو إعادة جدولة الحجز دون أي رسوم إضافية.'
                : 'In these cases, a full refund will be provided or the booking will be rescheduled without any additional fees.'
              }
            </p>
          </PolicyContent>
        </PolicySection>

        <ImportantNote>
          <h4>
            <i className="fas fa-info-circle" style={{ marginLeft: '0.5rem' }}></i>
            {language === 'ar' ? 'ملاحظة مهمة' : 'Important Note'}
          </h4>
          <p>
            {language === 'ar' 
              ? 'جميع طلبات الإلغاء يجب أن تتم من خلال موقعنا الإلكتروني أو تطبيقنا أ, التواصل معنا عبر الإيميل'
              : 'All cancellation requests must be made through our website, mobile app, or by contacting us via email'
            }
          </p>
        </ImportantNote>
      </CancellationContainer>
    </>
  );
};

export default Cancellation;
