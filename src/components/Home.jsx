import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaPlane } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import dubaiImg from "../images/dubai.jpg";
import istanbulImg from "../images/istanbul.jpg";
import maldivesImg from "../images/maldives.jpg";
import parisImg from "../images/paris.jpg";
import heroImg from "../images/home.jpg";
const { Range } = Slider;

const WelcomeContainer = styled.div`
  max-width: 1400px;
  margin-top: -60px;
  margin-right: 20px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 0 10px;
  }

`;

const HeroSection = styled.section`
  background: url(${heroImg});
  background-size: cover;
  background-position: center;
  color: var(--white);
  padding-top: 65px;
  padding-right: 32px;
  padding-bottom: 125px;
  padding-left: 32px;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 3rem;
  width: 80rem;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 16px;
    border-radius: 10px;
  }

`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }

`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  } 
`;

/* Service Tabs */
const ServiceTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

`;

const ServiceTab = styled.button`
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid transparent;
  border-radius: 8px;
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;


  &:hover {
    background: rgba(255, 255, 255, 0.2);
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

  svg {
    font-size: 1.2rem;
  }
    
  @media (max-width: 768px) {
    width: 50%;
    justify-content: center;
  }
`;

/* Search Box Styles */
const SearchBox = styled.div`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(17, 16, 16, 0.57);
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  align-items: end;
  padding: 10px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input,
  select {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;



    &:focus {
      outline: none;
    }

    &.error {
      border: 2px solid red !important;
      box-shadow: 0 0 5px rgba(255, 0, 0, 0.3) !important;
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


  &:hover {
    background: #f5f5f5;
  }

  i {
    font-size: 1.2rem;
  }
    
  @media (max-width: 768px) {
    margin: 0 auto;
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
  width: 120px;
  grid-column: 2 / 3;
  justify-self: end;


  &:hover {
    background: #ff8c00;
    transform: translateY(-2px);
  }
    
  @media (max-width: 768px) {
    justify-self: center;
    grid-column: auto;
    width: 100%;
  }
`;

const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--light-gray);
  border-radius: 10px;
  transition: transform 0.3s ease;


  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  i {
    font-size: 2.5rem;
    color: var(--accent-color);
    margin-bottom: 1rem;

  }

  h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);

  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const OffersSection = styled.section`
  padding: 3rem 0;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

`;

const OfferCard = styled.div`
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s cubic-bezier(0.4,0,0.2,1);
  will-change: transform, box-shadow;
  
  &:hover {
    transform: scale(1.045);
    box-shadow: 0 8px 24px rgba(25, 118, 210, 0.13), 0 2px 10px rgba(0,0,0,0.12);
    z-index: 2;
  }
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


  h3 {
    margin-bottom: 0.5rem;
    color: #333;

  }

  .offer-price {
    color: #1976d2;
    font-weight: bold;
    margin-bottom: 0.5rem;

    
  }

  p {
    color: #666;
    
  }
`;

const GlobalMobileBodyStyle = createGlobalStyle`
  @media (max-width: 768px) {
    body {
      padding-left: 0px !important;
      padding-top: 0px !important;
    }
  }
`;

const Home = () => {
  const { language } = useLanguage();
  const [activeService, setActiveService] = useState("flights");
  const [loading, setLoading] = useState(true);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [cabinClass, setCabinClass] = useState("economy");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState("");

  // Example options for demonstration
  const departureOptions = [
    { value: "", label: language === "ar" ? "اختر الدولة" : "Select Country" },
    { value: "Egypt", label: language === "ar" ? "مصر" : "Egypt" },
    { value: "UAE", label: language === "ar" ? "الإمارات" : "UAE" },
    { value: "Turkey", label: language === "ar" ? "تركيا" : "Turkey" },
  ];
  const arrivalOptions = [
    { value: "", label: language === "ar" ? "اختر الدولة" : "Select Country" },
    { value: "Turkey", label: language === "ar" ? "تركيا" : "Turkey" },
    { value: "France", label: language === "ar" ? "فرنسا" : "France" },
    { value: "Germany", label: language === "ar" ? "ألمانيا" : "Germany" },
  ];
  const classOptions = [
    { value: "economy", label: language === "ar" ? "اقتصادي" : "Economy" },
    { value: "business", label: language === "ar" ? "رجال أعمال" : "Business" },
    {
      value: "firstclass",
      label: language === "ar" ? "الدرجة الأولى" : "FirstClass",
    },
    { value: "vip", label: language === "ar" ? "كبار الشخصيات" : "VIP" },
  ];

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSearchLoading(true);
    setSearchError("");
    try {
      const apiUrl = `https://tickifywebsite.runasp.net/api/Flights/search-default?DepartureDate=${departureDate}T00:00:00&DepartureAirportCountry=${encodeURIComponent(
        origin
      )}&ArrivalAirportCountry=${encodeURIComponent(
        destination
      )}&ClassType=${cabinClass.toUpperCase()}&MinPrice=300&MaxPrice=`;
      const response = await fetch(apiUrl);
      if (response.status === 404) {
        navigate("/flights/results", {
          state: {
            origin,
            destination,
            departureDate,
            cabinClass,
            results: [],
            noFlights: true,
          },
        });
        return;
      }
      if (!response.ok) throw new Error("فشل البحث عن الرحلات");
      const results = await response.json();
      if (Array.isArray(results) && results.length === 0) {
        navigate("/flights/results", {
          state: {
            origin,
            destination,
            departureDate,
            cabinClass,
            results: [],
            noFlights: true,
          },
        });
        return;
      }
      navigate("/flights/results", {
        state: {
          origin,
          destination,
          departureDate,
          cabinClass,
          results,
        },
      });
    } catch {
      setSearchError("حدث خطأ أثناء البحث عن الرحلات");
    } finally {
      setSearchLoading(false);
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
      <GlobalMobileBodyStyle />
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
              <FaPlane />
              {language === "ar" ? "رحلات طيران" : "Flights"}
            </ServiceTab>
          </ServiceTabs>

          <SearchBox>
            <SearchForm onSubmit={handleSubmit}>
              <OriginDestinationGroup>
                <FormGroup>
                  <input
                    type="text"
                    id="origin"
                    list="departure-options"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className={errors.origin ? "error" : ""}
                    placeholder={
                      language === "ar" ? "مدينة المغادرة" : "Departure city"
                    }
                  />
                  <datalist id="departure-options">
                    {departureOptions.map(
                      (opt) =>
                        opt.value && (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        )
                    )}
                  </datalist>
                </FormGroup>
                <SwapButton type="button" onClick={handleSwap}>
                  <i className="fas fa-exchange-alt"></i>
                </SwapButton>
                <FormGroup>
                  <input
                    type="text"
                    id="destination"
                    list="arrival-options"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className={errors.destination ? "error" : ""}
                    placeholder={
                      language === "ar" ? "مدينة الوصول" : "Arrival city"
                    }
                  />
                  <datalist id="arrival-options">
                    {arrivalOptions.map(
                      (opt) =>
                        opt.value && (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        )
                    )}
                  </datalist>
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
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className={errors.departureDate ? "error" : ""}
                />
              </FormGroup>
              <FormGroup>
                <select
                  id="cabin-class"
                  value={cabinClass}
                  onChange={(e) => setCabinClass(e.target.value)}
                >
                  {classOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </FormGroup>
              <SearchButton type="submit" disabled={searchLoading}>
                {searchLoading
                  ? language === "ar"
                    ? "جاري البحث..."
                    : "Searching..."
                  : language === "ar"
                  ? "ابحث"
                  : "Search"}
              </SearchButton>
            </SearchForm>
          </SearchBox>
        </HeroSection>

        {searchError && (
          <div style={{ color: "red", marginTop: 8 }}>{searchError}</div>
        )}

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

export default Home;
