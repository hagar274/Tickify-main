import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaCar, FaCarSide, FaCarAlt } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';
import carImage from '../images/cars.jpg';

const Main = styled.main`
  max-width: 1400px;
  // margin-right: 20px;
  margin-right: -20px
  padding: 0 32px;
  // margin-top: 0;
  margin-top: -95px;
  width: 110%;
  // padding-right: 10rem;

  @media (max-width: 768px) {
    margin-top: 2px;
    padding: 0 20px;
  }
`;

const ErrorState = styled.div`
  border-color: #dc3545 !important;
`;

const PlaceholderImage = styled.img`
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.875rem;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${carImage});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 20px;
  margin-bottom: 40px;
  border-radius: 15px;


  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;

    h1 {
      font-size: 2rem;
    }
  }
`;

const SearchSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  backdrop-filter: blur(10px);
  border-radius: 10px;
`;

const SearchContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  align-items: end;
  justify-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  position: relative;

  label {
    margin-bottom: 5px;
    color: #333;
    font-weight: 500;
  }

  input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    width: 100%;

    &.error {
      border-color: #dc3545 !important;
    }
  }

  .error-message {
    color: #dc3545;
    font-size: 0.875rem;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    pointer-events: none;
    background: white;
    padding: 0 5px;

    &.show {
      display: block;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchButton = styled.button`
  background: #0071bd;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-width: auto;
  width: 120px;
  align-self: center;
  grid-column: 1 / -1;

  &:hover {
    background: #0071bd;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin: 10px auto;
    width: 120px;
  }
`;

/* Car Categories */
const CarCategoriesSection = styled.section`
    padding: 3rem 2rem;
    max-width: 1200px;
    margin: 0 auto;

    h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--primary-color);
}
`;

const CategoryGrid = styled.div`
    display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
    grid-template-columns: 1fr;
    }
`;

const CategoryCard = styled.div`
    background: var(--white);
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2.5rem;
    color: #0071bd;
    margin-bottom: 1rem;
  }

  h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
  }
`;

/* Featured Cars */
const FeaturedCars = styled.section`
    padding: 3rem 2rem;

    h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--primary-color);
  }
`;

const CarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const CarCard = styled.div`
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;

    &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const CarInfo = styled.div`
    padding: 1rem;
    // flex-grow: 1;

    h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  p.car-type {
    color: #666;
    margin-bottom: 0.5rem;
  }

  p.car-price {
    color: var(--secondary-color);
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
    
`;
const BookButton = styled.button`
    background: #0071bd;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    display: block;
    // margin: 0 auto;
    margin: 15px 100px;
    width: 120px;

  &:hover {
    background: #005a9e;
  }
`;
const Cars = () => {
  const { language } = useLanguage();

  return (
    <Main>
      <HeroSection>
        <h1>{language === 'ar' ? 'ابحث عن سيارتك' : 'Find your car'}</h1>
        <p>{language === 'ar' ? 'اختر من مجموعتنا الواسعة من السيارات لرحلتك' : 'Choose from our wide range of cars for your trip.'}</p>

        <SearchSection>
          <SearchContainer>
            <SearchForm id="carSearchForm">
              <FormGroup>
                <label htmlFor="location">
                  {language === 'ar' ? 'موقع الاستلام' : 'Pickup location'}
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder={language === 'ar' ? "أين تريد استلام السيارة؟" : "Where do you want to pick up the car?"}
                />
                <div className="error-message">يرجى إدخال موقع الاستلام</div>
              </FormGroup>

              <FormGroup>
                <label htmlFor="pickup-date">{language === 'ar' ? 'تاريخ الاستلام' : 'Pickup date'}</label>
                <input type="date" id="pickup-date" />
              </FormGroup>

              <FormGroup>
                <label htmlFor="return-date">{language === 'ar' ? 'تاريخ الإرجاع' : 'Return date'}</label>
                <input type="date" id="return-date" />
              </FormGroup>

              <SearchButton type="submit">
                <i className="fas fa-search"></i>
                {language === 'ar' ? 'ابحث' : 'Search'}
              </SearchButton>
            </SearchForm>
          </SearchContainer>
        </SearchSection>
      </HeroSection>

      <CarCategoriesSection>
        <h2>{language === 'ar' ? ' الفئات الشائعة' : 'Popular Categories'}</h2>
        <CategoryGrid>
          <CategoryCard>
            <FaCar />
            <h3>{language === 'ar' ? 'اقتصادية' : 'Economic'}</h3>
            <p>{language === 'ar' ? 'موفرة للوقود وبأسعار معقولة' : 'Fuel-efficient and affordable'}</p>
          </CategoryCard>

          <CategoryCard>
            <FaCarSide />
            <h3>{language === 'ar' ? 'صغيرة' : 'small'}</h3>
            <p>{language === 'ar' ? 'مثالية للقيادة في المدينة' : 'Ideal for city driving'}</p>
          </CategoryCard>

          <CategoryCard>
            <FaCarAlt  />
            <h3>{language === 'ar' ? 'دفع رباعي' : '4WD'}</h3>
            <p>{language === 'ar' ? 'واسعة ومتعددة الاستخدامات' : 'Spacious and versatile'}</p>
          </CategoryCard>

          <CategoryCard>
            <FaCarSide />
            <h3>{language === 'ar' ? 'فاخرة' : 'luxurious'}</h3>
            <p>{language === 'ar' ? 'راحة وأناقة فائقة' : 'Ultimate comfort and elegance'}</p>
          </CategoryCard>
        </CategoryGrid>
      </CarCategoriesSection>

        <FeaturedCars>
          <h2>{language === 'ar' ? 'سيارات مميزة' : 'distinctive cars'}</h2>
          <CarGrid>
            <CarCard>
              <CarInfo>
                <h3>{language === 'ar' ? 'تويوتا كورولا' : 'Toyota Corolla'}</h3>
                <p className="car-type">{language === 'ar' ?'اقتصادية' : 'Economic'}</p>
                <p className="car-price">{language === 'ar' ? '45$ / يوم' : '45$ / day'}</p>
              </CarInfo>
              <BookButton>
                {language === 'ar' ? 'احجز الآن' : 'Book now'}
              </BookButton>
            </CarCard>

            <CarCard>
              <CarInfo>
                <h3>{language === 'ar' ? 'هوندا CR-V' : 'Honda CR-V'}</h3>
                <p className="car-type">{language === 'ar' ?'دفع رباعي' : '4WD'}</p>
                <p className="car-price">{language === 'ar' ? '65$ / يوم' : '65$ / day'}</p>
              </CarInfo>
              <BookButton>
                {language === 'ar' ? 'احجز الآن' : 'Book now'}
              </BookButton>
            </CarCard>

            <CarCard>
              <CarInfo>
                <h3>{language === 'ar' ? 'بي إم دبليو الفئة الخامسة' : 'BMW 5 Series'}</h3>
                <p className="car-type">{language === 'ar' ?'فاخرة' : 'luxurious'}</p>
                <p className="car-price">{language === 'ar' ? '95$ / يوم' : '95$ / day'}</p>
              </CarInfo>
              <BookButton>
                {language === 'ar' ? 'احجز الآن' : 'Book now'}
              </BookButton>
            </CarCard>
          </CarGrid>
        </FeaturedCars>
    </Main>
  );
};

export default Cars;