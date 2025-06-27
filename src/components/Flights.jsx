import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useLanguage } from "../context/LanguageContext";
import dubaiImg from "../images/dubai.jpg";
import istanbulImg from "../images/istanbul.jpg";
import maldivesImg from "../images/maldives.jpg";
import parisImg from "../images/paris.jpg";
import heroImg from "../images/home.jpg";

const WelcomeContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const HeroSection = styled.section`
 background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url(${heroImg});
  background-size: cover;
  background-position: center;
  color: #ffffff;
  text-align: center;
  padding: 100px 20px;
  border-radius: 15px;
  margin-bottom: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 60px 20px;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    padding: 40px 15px;
    margin-bottom: 1.5rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const ServiceTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 1rem;
  }
`;

const ServiceTab = styled.button`
  padding: 1rem 2rem;
  border: 2px solid transparent;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    border-radius: 6px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  i {
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
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

const SearchBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(17, 16, 16, 0.57);
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 0 0.5rem;
    border-radius: 8px;
  }
`;

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
      margin-bottom: 0.4rem;
    }
  }

  input,
  select {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;

    @media (max-width: 768px) {
      padding: 0.6rem;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      padding: 0.5rem;
      font-size: 0.85rem;
      border-radius: 6px;
    }

    &:focus {
      outline: none;
    }

    &.error {
      border-color: red;
    }
  }
`;

const OriginDestinationGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: flex-end;
  grid-column: 1 / span 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    grid-column: 1;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`;

const SwapButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-color);
  cursor: pointer;
  padding: 0 10px;
  align-self: center;
  transition: background 0.3s ease;
  flex-shrink: 0;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-radius: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    padding: 0 6px;
  }

  &:hover {
    background: #f5f5f5;
  }

  i {
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-right: 22rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      margin-right: 12rem;
    }
  }
`;

const SearchButton = styled.button`
  background: #1976d2;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 1rem;
  grid-column: 1 / span 2;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
    grid-column: 1;
  }

  &:hover {
    background: #ff8c00;
    transform: translateY(-2px);
  }
`;

const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 0;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 2rem 0;
  }
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--light-gray);
  border-radius: 10px;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  i {
    font-size: 2.5rem;
    color: var(--accent-color);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }
  }

  h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);

    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
    }
  }

  p {
    color: #666;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }
`;

const OffersSection = styled.section`
  padding: 3rem 0;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const OfferCard = styled.div`
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const OfferImage = styled.div`
  height: 200px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 160px;
  }
`;

const OfferContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .offer-price {
    color: #1976d2;
    font-weight: bold;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  p {
    color: #666;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const Flights = () => {
  const { language } = useLanguage();
  const [activeService, setActiveService] = useState("flights");
  const [loading, setLoading] = useState(true);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [errors, setErrors] = useState({});

  const handleSwap = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!origin.trim()) {
      newErrors.origin = true;
    }
    if (!destination.trim()) {
      newErrors.destination = true;
    }
    if (!departureDate) {
      newErrors.departureDate = true;
    }
    if (!returnDate) {
      newErrors.returnDate = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with search
      console.log("Form is valid, proceeding with search");
    }
  };

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="loader-circle"></div>
          <div className="loader-icon">
            <i className="fas fa-plane-departure"></i>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <WelcomeContainer>
        <HeroSection>
          <HeroTitle>
            {language === "ar" ? "رحلتك تبدأ هنا" : "Your journey Start Here"}
          </HeroTitle>
          <HeroSubtitle>
            {language === "ar"
              ? "احجز رحلاتك وفنادقك وسياراتك بأفضل الأسعار"
              : "Book your flights, hotels and cars at the best prices."}
          </HeroSubtitle>

          <ServiceTabs>
            <ServiceTab
              className={activeService === "flights" ? "active" : ""}
              onClick={() => setActiveService("flights")}
            >
              <i className="fas fa-plane"></i>

              {language === "ar" ? "رحلات طيران" : "Flights"}
            </ServiceTab>
            <ServiceTab
              className={activeService === "hotels" ? "active" : ""}
              onClick={() => setActiveService("hotels")}
            >
              <i className="fas fa-hotel"></i>
              {language === "ar" ? "الفنادق" : "Hotels"}
            </ServiceTab>
            <ServiceTab
              className={activeService === "cars" ? "active" : ""}
              onClick={() => setActiveService("cars")}
            >
              <i className="fas fa-car"></i>
              {language === "ar" ? "السيارات" : "Cars"}
            </ServiceTab>
          </ServiceTabs>

          <SearchBox>
            <SearchForm onSubmit={handleSubmit}>
              <OriginDestinationGroup>
                <FormGroup>
                  <label htmlFor="origin">
                    {language === "ar" ? "من" : "From"}
                  </label>
                  <input
                    type="text"
                    id="origin"
                    placeholder={
                      language === "ar" ? "مدينة المغادرة" : "Departure city"
                    }
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className={errors.origin ? "error" : ""}
                  />
                </FormGroup>
                <SwapButton type="button" onClick={handleSwap}>
                  <i className="fas fa-exchange-alt"></i>
                </SwapButton>
                <FormGroup>
                  <label htmlFor="destination">
                    {language === "ar" ? "إلى" : "To"}
                  </label>
                  <input
                    type="text"
                    id="destination"
                    placeholder={
                      language === "ar" ? "مدينة الوصول" : "Arrival city"
                    }
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className={errors.destination ? "error" : ""}
                  />
                </FormGroup>
              </OriginDestinationGroup>

              <FormGroup>
                <label htmlFor="departure-date">
                  {language === "ar" ? "تاريخ المغادرة" : "Departure Date"}
                </label>
                <input
                  type="date"
                  id="departure-date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className={errors.departureDate ? "error" : ""}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="return-date">
                  {language === "ar" ? "تاريخ العودة" : "Return Date"}
                </label>
                <input
                  type="date"
                  id="return-date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className={errors.returnDate ? "error" : ""}
                />
              </FormGroup>
              <SearchButton type="submit">
                {language === "ar" ? "ابحث" : "Search"}
              </SearchButton>
            </SearchForm>
          </SearchBox>
        </HeroSection>

        <FeaturesSection>
          <FeatureCard>
            <i className="fas fa-globe"></i>
            <h3>{language === "ar" ? "وجهات متعددة" : "Multiple parties"}</h3>
            <p>
              {language === "ar"
                ? "اكتشف أكثر من 1000 وجهة حول العالم"
                : "Discover over 1,000 destinations around the world"}
            </p>
          </FeatureCard>

          <FeatureCard>
            <i className="fas fa-tag"></i>
            <h3>{language === "ar" ? "أفضل الأسعار" : "Best Prices"}</h3>
            <p>
              {language === "ar"
                ? "نضمن لك أفضل الأسعار مع خيارات متعددة"
                : "We guarantee the best prices with Multipl options"}
            </p>
          </FeatureCard>
          <FeatureCard>
            <i className="fas fa-headset"></i>
            <h3>{language === "ar" ? "دعم 24/7" : "24/7 support"}</h3>
            <p>
              {language === "ar"
                ? " فريق دعم متكامل لمساعدتك في أي وقت"
                : "A full support team to help you at any time"}
            </p>
          </FeatureCard>
          <FeatureCard>
            <i className="fas fa-lock"></i>
            <h3>{language === "ar" ? "دفع آمن" : "Secure payment"}</h3>
            <p>
              {language === "ar"
                ? "نضمن لك أمان معاملاتك وحماية بياناتك"
                : "We guarantee the security of your transactions and the protection of your data."}
            </p>
          </FeatureCard>
        </FeaturesSection>

        <OffersSection>
          <h2>{language === "ar" ? "أفضل العروض" : "Best offers"}</h2>
          <OffersGrid>
            <OfferCard>
              <OfferImage image={dubaiImg} />
              <OfferContent>
                <h3>
                  {language === "ar" ? "عرض دبي المميز" : "Dubai Special Offer"}
                </h3>
                <p className="offer-price">
                  {language === "ar"
                    ? "يبدأ من 1999 ريال"
                    : "Starting from 1999 SAR"}
                </p>
                <p>
                  {language === "ar"
                    ? "3 ليالي في فندق 5 نجوم مع تذاكر الطيران"
                    : "3 nights in a 5-star hotel with flight tickets"}
                </p>
              </OfferContent>
            </OfferCard>

            <OfferCard>
              <OfferImage image={istanbulImg} />
              <OfferContent>
                <h3>{language === "ar" ? "رحلة إسطنبول" : "Istanbul trip"}</h3>
                <p className="offer-price">
                  {language === "ar"
                    ? "يبدأ من 2499 ريال"
                    : "Starting from 2499 SAR"}
                </p>
                <p>
                  {language === "ar"
                    ? "5 ليالي شاملة الفندق والطيران"
                    : "5 nights including hotel and flight"}
                </p>
              </OfferContent>
            </OfferCard>

            <OfferCard>
              <OfferImage image={maldivesImg} />
              <OfferContent>
                <h3>{language === "ar" ? "جزر المالديف" : "Maldives"}</h3>
                <p className="offer-price">
                  {language === "ar"
                    ? "يبدأ من 4999 ريال"
                    : "Starting from 4999 riyals"}
                </p>
                <p>
                  {language === "ar"
                    ? "7 ليالي في منتجع فاخر مع الطيران"
                    : "7 nights in a luxury resort with flights"}
                </p>
              </OfferContent>
            </OfferCard>

            <OfferCard>
              <OfferImage image={parisImg} />
              <OfferContent>
                <h3>{language === "ar" ? "باريس _ فرنسا" : "Paris, France"}</h3>
                <p className="offer-price">
                  {language === "ar"
                    ? "يبدأ من 3999 ريال"
                    : "Starting from 3999 riyals"}
                </p>
                <p>
                  {language === "ar"
                    ? "4 ليالي في فندق 5 نجوم مع تذاكر الطيران"
                    : "4 nights in a 5-star hotel with flight tickets"}
                </p>
              </OfferContent>
            </OfferCard>
          </OffersGrid>
        </OffersSection>
      </WelcomeContainer>
    </>
  );
};

export default Flights;
