import React, { useState } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLanguage } from '../context/LanguageContext';
import hotelImage from '../images/hotel.jpg'; 

const HotelsContainer = styled.div`
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

const HotelsHero = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hotelImage});
  background-size: cover;
  background-position: center;
  color: var(--white);
  padding: 6rem 2rem;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 3rem;
  margin-top: -8rem;
  margin-right: -10rem;
  margin-left: -10rem;
  width: 65rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    margin: -4rem -1rem 2rem -1rem;
    width: auto;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.8rem;
    margin: -3rem -0.5rem 1.5rem -0.5rem;
    border-radius: 8px;
  }
`;

const HotelsHeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.6rem;
  }
`;

const HotelsHeroSubtitle = styled.p`
  font-size: 1.5rem;
  opacity: 0.9;
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

const ServiceIndicatorButton = styled.button`
  display: block;
  margin: 0 auto 1.5rem auto;
  padding: 1rem 1rem;
  background: var(--white);
  color: var(--primary-color);
  border: 2px solid var(--accent-color);
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.85rem;
    margin-bottom: 0.8rem;
  }

  &:hover {
    transform: scale(1.03);
  }

  i {
    margin-left: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  html[dir="rtl"] & i {
    margin-right: 0.5rem;
    margin-left: 4px;
  }
`;

const HotelSearchSection = styled.section`
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

const HotelSearchBox = styled.div`
  background-color: var(--white);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0);
  margin: 0 auto;
  max-width: 1100px;

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 8px;
  }
`;

const HotelSearchForm = styled.form`
  display: flex;
  align-items: stretch;
  gap: 0;
  flex-wrap: wrap;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--white);
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const HotelFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px 15px;
  border: none;
  background: none;
  position: relative;

  label {
    color: #888;
    font-size: 0.8rem;
    margin-bottom: 3px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 0.75rem;
    }

    @media (max-width: 480px) {
      font-size: 0.7rem;
      margin-bottom: 2px;
    }
  }

  input,
  select {
    padding: 0;
    border: none;
    font-size: 1rem;
    outline: none;
    background: none;
    width: 100%;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }

    &.error {
      border: 1px solid red;
      border-radius: 8px;
      padding: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 6px;
  }
`;

const DestinationInputBox = styled(HotelFormGroup)`
  background-color: var(--white); 
  border: none;
  border-right: 1px solid #eee;
  border-radius: 0;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;

  label {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 3px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 0.75rem;
    }

    @media (max-width: 480px) {
      font-size: 0.7rem;
      margin-bottom: 2px;
    }
  }

  input[type="text"] {
    border: none;
    padding: 0;
    font-size: 1rem;
    color: var(--primary-color);
    background: none;
    outline: none;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 768px) {
    border-right: none;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 6px;
  }
`;

const DateGroup = styled.div`
  display: flex;
  gap: 0;
  background: var(--white);
  padding: 10px 15px;
  border: none;
  border-right: 1px solid #eee;
  border-radius: 0;
  align-items: center;
  flex-grow: 1;

  ${HotelFormGroup} {
    flex: 1;
    border: none;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 768px) {
    border-right: none;
    flex-direction: column;
    gap: 0;
    padding: 0;

    ${HotelFormGroup}:first-child {
      border-left: none;
      padding-left: 0;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }

    ${HotelFormGroup}:second-child {
      border: none;
      padding: 0;
    }
  }
`;

const GuestSelectionBox = styled(HotelFormGroup)`
  background-color: var(--white);
  border: none;
  border-right: 1px solid #eee;
  border-radius: 0;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  flex-grow: 1;

  label {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 3px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    border-right: none;
  }
`;

const GuestDisplayContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--primary-color);
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  i {
    margin-right: 0.5rem;
    color: var(--secondary-color);
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  html[dir="rtl"] & i {
    margin-right: 0;
    margin-left: 0.5rem;
  }
`;

const HotelSearchButton = styled.button`
  background: var(--secondary-color);
  color: var(--white);
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  text-transform: none;
  letter-spacing: normal;
  width: auto;
  min-width: 120px;
  flex-shrink: 0;
  align-self: center;
  margin-left: 10px;

  &:hover {
    background: #0085d8;
    transform: none;
  }

  i {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    border-radius: 8px;
    margin-top: 0;
    margin-left: 0;
    align-self: stretch;
  }
`;

const Hotels = () => {
  const { language } = useLanguage();
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!destination.trim()) {
      newErrors.destination = true;
    }
    if (!checkIn) {
      newErrors.checkIn = true;
    }
    if (!checkOut) {
      newErrors.checkOut = true;
    }
    if (!guests || guests < 1) {
      newErrors.guests = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with search
      console.log('Form is valid, proceeding with search');
    }
  };

  return (
    <HotelsContainer>
      <HotelsHero>
        <HotelsHeroTitle>
          {language === 'ar' ? 'ابحث عن أفضل الفنادق' : 'Find the Best Hotels'}
        </HotelsHeroTitle>
        <HotelsHeroSubtitle>
          {language === 'ar' 
            ? 'اكتشف مجموعة واسعة من الفنادق الفاخرة والاقتصادية'
            : 'Discover a wide range of luxury and budget hotels'}
        </HotelsHeroSubtitle>
      </HotelsHero>

      <ServiceIndicatorButton>
        <i className="fas fa-hotel"></i>
        {language === 'ar' ? 'الفنادق' : 'Hotels'}
      </ServiceIndicatorButton>

      <HotelSearchSection>
        <HotelSearchBox>
          <HotelSearchForm onSubmit={handleSubmit}>
            <HotelFormGroup>
              <label>{language === 'ar' ? 'الوجهة' : 'Destination'}</label>
              <DestinationInputBox>
                <i className="fas fa-map-marker-alt"></i>
                <input 
                  type="text" 
                  placeholder={language === 'ar' ? 'أين تريد أن تذهب؟' : 'Where do you want to go?'}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className={errors.destination ? 'error' : ''}
                />
              </DestinationInputBox>
            </HotelFormGroup>

            <DateGroup>
              <HotelFormGroup>
                <label>{language === 'ar' ? 'تاريخ الوصول' : 'Check-in'}</label>
                <input 
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className={errors.checkIn ? 'error' : ''}
                />
              </HotelFormGroup>
              <HotelFormGroup>
                <label>{language === 'ar' ? 'تاريخ المغادرة' : 'Check-out'}</label>
                <input 
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className={errors.checkOut ? 'error' : ''}
                />
              </HotelFormGroup>
            </DateGroup>

            <HotelFormGroup>
              <label>{language === 'ar' ? 'الضيوف' : 'Guests'}</label>
              <GuestSelectionBox>
                <GuestDisplayContent>
                  <i className="fas fa-user"></i>
                  <input 
                    type="number" 
                    min="1" 
                    placeholder={language === 'ar' ? 'عدد الضيوف' : 'Number of guests'}
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className={errors.guests ? 'error' : ''}
                  />
                </GuestDisplayContent>
              </GuestSelectionBox>
            </HotelFormGroup>

            <HotelSearchButton type="submit">
              {language === 'ar' ? 'بحث' : 'Search'}
            </HotelSearchButton>
          </HotelSearchForm>
        </HotelSearchBox>
      </HotelSearchSection>
    </HotelsContainer>
  );
};

export default Hotels;
