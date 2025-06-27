import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaEye, FaBullseye, FaStar } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';
import aboutImage from '../images/about.jpg';
import hagarImg from '../images/hager.jpg';
import hadirImg from '../images/hadir.jpg';
import fatmaImg from '../images/fatma.jpg';
import karimImg from '../images/karim.jpg';
import alaaImg from '../images/alaa.jpg';

/* About Page Styles */
const AboutContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
`;

const AboutPageWrapper = styled.div`
  padding-left: 0px;
  padding-top: 100px;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 80px;
  }
`;

/* About Section */
const AboutHero = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${aboutImage});
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: var(--white);
  padding: 6rem 2rem;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 4rem;
  margin-top: -120px;
  margin-left: -110px;
  margin-right: -15px;


  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;

  }

  p {
    font-size: 1.5rem;
    opacity: 0.9;

  }
  @media (max-width: 768px) {
    padding: 4rem 1rem;
    margin-top: -60px;
    margin-left: 0;
    margin-right: 0;

    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

/* Vision & Mission Section */
const VisionMission = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  }

`;

const Box = styled.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;


  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;

  }

  h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;

  
  }
    
  @media (max-width: 768px) {
    padding: 1.5rem;

    svg {
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }

    h2 {
      font-size: 1.4rem;
    }
  }
`;

/* Values Section */
const ValuesSection = styled.section`
  margin-bottom: 4rem;


  h2 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 2rem;

  }
    
  @media (max-width: 768px) {
    margin-bottom: 3rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

`;

const ValueCard = styled.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;


  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1rem;

  }

  h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;

  }

  
  @media (max-width: 768px) {
    padding: 1.5rem;

    svg {
      font-size: 1.5rem;
      margin-bottom: 0.8rem;
    }

    h3 {
      font-size: 1.2rem;
    }
  }
`;

/* Team Section */
const TeamSection = styled.section`
  margin-bottom: 4rem;

  h2 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 2rem;

  }
    
  @media (max-width: 768px) {
    margin-bottom: 3rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  

`;

const TeamMember = styled.div`
    background: var(--white);
    border-radius: 15px;
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.49);

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: var(--primary-color);
    margin: 0;
    text-align: right;
    font-size: 1.1rem;
    margin-bottom: 0.2rem;

  }

  p {
    color: var(--text-color);
    color: var(--text-color);
    text-align: right;
    margin: 0;
    font-size: 0.9rem;

  }
    
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    h3 {
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 0.4rem;
    }

    p {
      text-align: center;
      font-size: 1rem;
    }
  }
`;

const MemberImage = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    margin-left: 16px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    // Special adjustment for hadir
    img[alt="Hadir El-Sayeed"] {
      object-position: center 20%;
    }
  
    &:has(img[alt="Hadir El-Sayeed"]) img {
      object-position: center 20%;
    }
       @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 1rem;
}
  `;

const AboutGlobalStyle = createGlobalStyle`
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

const About = () => {
  const { language } = useLanguage();

  return (
    <>
      <AboutGlobalStyle />
      <AboutContainer>
        <AboutPageWrapper>
          <AboutHero>
            <h1>{language === 'ar' ? 'من نحن' : 'About Us'}</h1>
            <p>
              {language === 'ar' ? 
            'نحن نؤمن بأن السفر يجب أن يكون تجربة سهلة وممتعة للجميع'
              : 'We believe that travel should be an easy and enjoyable experience for everyone.'}
            </p>
          </AboutHero>

          <VisionMission>
            <Box>
              <FaEye />
              <h2>{language === 'ar' ? 'رؤيتنا' : 'Our Vision'}</h2>
              <p>
                {language === 'ar'
                  ? 'نسعى لأن نكون المنصة الأولى في الشرق الأوسط لتقديم خدمات السفر المتميزة'
                  : 'We strive to be the premier platform in the Middle East for providing premium travel services.'}
              </p>
            </Box>
            <Box>
              <FaBullseye />
              <h2>{language === 'ar' ? 'مهمتنا' : 'Our Mission'}</h2>
              <p>
                {language === 'ar'
                  ? 'تقديم  حلول سفر مبتكرة وخدمات متميزة تلبي احتياجات عملائنا بأفضل الأسعار'
                  : 'Providing innovative travel solutions and distinguished services that meet our customers needs at the best prices.'}
              </p>
            </Box>
          </VisionMission>

          <ValuesSection>
            <h2>{language === 'ar' ? 'قيمنا' : 'Our Values'}</h2>
            <ValuesGrid>
              <ValueCard>
                <FaStar />
                <h3>{language === 'ar' ? 'الجودة' : 'Quality'}</h3>
                <p>
                  {language === 'ar'
                    ? 'نلتزم بتقديم خدمات عالية الجودة تلبي توقعات عملائنا'
                    : 'We are committed to providing high-quality services that meet our customers expectations.'}
                </p>
              </ValueCard>
              <ValueCard>
                <i className="fas fa-handshake"></i>
                <h3>{language === 'ar' ? 'الموثوقية' : 'Reliability'}</h3>
                <p>
                  {language === 'ar' ?
                    'نحرص على بناء علاقات قوية مع عملائنا وشركائنا'
                    : 'We are keen to build strong relationships with our clients and partners.'}
                </p>
              </ValueCard>
              <ValueCard>
                <i className="fas fa-lightbulb"></i>
                <h3>{language === 'ar' ? 'الابتكار' : 'Innovation'}</h3>
                <p>
                  {language === 'ar'
                    ? 'نواكب أحدث التقنيات لتقديم تجربة سفر فريدة'
                    : 'We keep pace with the latest technologies to provide a unique travel experience.'}
                </p>
              </ValueCard>
              <ValueCard>
                <i className="fas fa-users"></i>
                <h3>{language === 'ar' ? 'العمل الجماعي' : 'Teamwork'}</h3>
                <p> 
                  {language === 'ar' ? 'نؤمن بقوة العمل الجماعي في تحقيق أهدافنا' : 'We believe in the power of teamwork to achieve our goals.'}
                  </p>
            </ValueCard>
            </ValuesGrid>
          </ValuesSection>

          <TeamSection>
            <h2>{language === 'ar' ? 'فريقنا' : 'Our Team'}</h2>
            <TeamGrid>
              <TeamMember>
                <MemberImage>
                  <img src={hadirImg} alt="Hadir El-Sayeed" />
                </MemberImage>
                <div class="member-info">
                <h3> {language === 'ar' ? 'هدير السيد' : 'Hadeer El-Sayeed'} </h3>
                <p>UI/UX Designer</p>
                </div>
              </TeamMember>
              <TeamMember>
                <MemberImage>
                  <img src={hagarImg} alt="Hagar Abd-Elmejeed" />
                </MemberImage>
                <div class="member-info">
                <h3> {language === 'ar' ? 'هاجر عبدالمجيد' : 'Hagar Abd-Elmejeed'} </h3>
                <p>Frontend Developer</p>
                </div>
              </TeamMember>
              <TeamMember>
                <MemberImage>
                  <img src={fatmaImg} alt="fatma radwan" />
                </MemberImage>
                <div class="member-info">
                <h3> {language === 'ar' ? 'فاطمة رضوان' : 'Fatma Radwan'} </h3>
                <p>Frontend Developer</p>
                </div>
              </TeamMember>
                <TeamMember>
                <MemberImage>
                  <img src={karimImg} alt="Kareem Fathy" />
                </MemberImage>
                <div class="member-info">
                <h3> {language === 'ar' ? 'كريم فتحي' : 'Kareem Fathy'} </h3>
                <p>Backend Developer</p>
                </div>
              </TeamMember>
                <TeamMember>
                <MemberImage>
                  <img src={alaaImg} alt="Alaa Yasser" />
                </MemberImage>
                <div class="member-info">
                <h3> {language === 'ar' ? 'الاء ياسر' : 'Alaa Yasser'} </h3>
                <p>Backend Developer</p>
                </div>
              </TeamMember>
                <TeamMember>
                <MemberImage>
                  <img src="/src/images/team3.jpg" alt="Team Member" />
                </MemberImage>
                <div class="member-info">
                <h3> {language === 'ar' ? 'يوسف علاء' : 'Yousef alaa'} </h3>
                <p>Flutter Developer</p>
                </div>
              </TeamMember>
            </TeamGrid>
          </TeamSection>
        </AboutPageWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
