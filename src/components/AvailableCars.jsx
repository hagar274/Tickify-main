import React, { useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { createGlobalStyle } from 'styled-components';
import carsImage from '../images/cars.jpg';

const cars = [
  {
    id: 1,
    name: { ar: 'تويوتا كورولا', en: 'Toyota Corolla' },
    type: { ar: 'اقتصادية', en: 'Economic' },
    price: 45,
    image: carsImage,
  },
  {
    id: 2,
    name: { ar: 'هوندا CR-V', en: 'Honda CR-V' },
    type: { ar: 'دفع رباعي', en: '4WD' },
    price: 65,
    image: carsImage,

  },
  {
    id: 3,
    name: { ar: 'بي إم دبليو الفئة الخامسة', en: 'BMW 5 Series' },
    type: { ar: 'فاخرة', en: 'Luxury' },
    price: 95,
    image: carsImage,

  },
  {
    id: 4,
    name: { ar: 'هيونداي إلنترا', en: 'Hyundai Elantra' },
    type: { ar: 'اقتصادية', en: 'Economic' },
    price: 40,
    image: carsImage,

  },
  {
    id: 5,
    name: { ar: 'مرسيدس E-Class', en: 'Mercedes E-Class' },
    type: { ar: 'فاخرة', en: 'Luxury' },
    price: 120,
    image: carsImage,

  },
  {
    id: 6,
    name: { ar: 'كيا سبورتاج', en: 'Kia Sportage' },
    type: { ar: 'دفع رباعي', en: '4WD' },
    price: 70,
    image: carsImage,

  },
];

const PageContainer = styled.div`
  width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  @media (max-width: 900px) {
    margin: 0;
    width: 100vw;
    max-width: none;
  }
  @media (max-width: 600px) {
    margin: 0;
    width: 100vw;
    max-width: none;
  }
`;
const Title = styled.h2`
  text-align: center;
  color: #1976d2;
  margin-bottom: 32px;
`;
const CarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const CarCard = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px #eee;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CarImg = styled.img`
  width: 100%;
  max-width: 200px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`;
const BookBtn = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 16px;
  font-weight: 600;
  transition: background 0.2s;
  &:hover {
    background: #1251a3;
  }
`;
// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.35);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalContent = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  padding: 32px 28px 24px 28px;
  min-width: 320px;
  max-width: 95vw;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  left: 12px;
  background: #eee;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  color: #333;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #ccc; }
`;
const FormLabel = styled.label`
  font-weight: 600;
  color: #00233d;
  margin-bottom: 4px;
`;
const ConfirmBtn = styled.button`
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  width: 100%;
  transition: background 0.2s;
  &:hover {
    background: #218838;
  }
`;

const AvailableCarsGlobalStyle = createGlobalStyle`
  @media (max-width: 900px) {
    body {
      padding: 0 !important;
    }
  }
`;

const AvailableCars = () => {
  const { language } = useLanguage();
  const [modalCar, setModalCar] = useState(null);
  const [formData, setFormData] = useState({ date: '', time: '' });
  const today = new Date().toISOString().split('T')[0];

  const openModal = (car) => {
    setModalCar(car);
    setFormData({ date: '', time: '' });
  };
  const closeModal = () => {
    setModalCar(null);
  };
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
      icon: 'question',
      title: language === 'ar' ? 'تأكيد الحجز' : 'Confirm Booking',
      text: language === 'ar' ? 'هل أنت متأكد أنك تريد حجز هذه السيارة؟' : 'Are you sure you want to book this car?',
      showCancelButton: true,
      confirmButtonText: language === 'ar' ? 'نعم، احجز' : 'Yes, Book',
      cancelButtonText: language === 'ar' ? 'إلغاء' : 'Cancel',
      reverseButtons: language === 'ar',
    });
    if (result.isConfirmed) {
      setModalCar(null);
      await Swal.fire({
        icon: 'success',
        title: language === 'ar' ? 'تم الحجز بنجاح!' : 'Booking successful!',
        confirmButtonText: language === 'ar' ? 'حسناً' : 'OK',
      });
    }
  };

  return (
    <>
      <AvailableCarsGlobalStyle />
      <PageContainer>
        <Title>{language === 'ar' ? 'السيارات المتاحة' : 'Available Cars'}</Title>
        <CarsGrid>
          {cars.map(car => (
            <CarCard key={car.id}>
              <CarImg src={car.image} alt={language === 'ar' ? car.name.ar : car.name.en} />
              <h3 style={{color:'#1976d2',marginBottom:8}}>{language === 'ar' ? car.name.ar : car.name.en}</h3>
              <div style={{color:'#444',marginBottom:6}}>{language === 'ar' ? car.type.ar : car.type.en}</div>
              <div style={{color:'#28a745',fontWeight:600,marginBottom:8}}>{car.price}$ / {language === 'ar' ? 'يوم' : 'day'}</div>
              <BookBtn onClick={() => openModal(car)}>
                {language === 'ar' ? 'احجز الآن' : 'Book Now'}
              </BookBtn>
            </CarCard>
          ))}
        </CarsGrid>
        {modalCar && (
          <ModalOverlay onClick={closeModal}>
            <ModalContent onClick={e => e.stopPropagation()}>
              <CloseBtn onClick={closeModal} title={language === 'ar' ? 'إغلاق' : 'Close'}>&times;</CloseBtn>
              <h3 style={{color:'#1976d2',textAlign:'center',marginBottom:8}}>
                {language === 'ar' ? 'حجز سيارة' : 'Car Booking'}
              </h3>
              <div style={{textAlign:'center',marginBottom:8}}>
                <b>{language === 'ar' ? modalCar.name.ar : modalCar.name.en}</b>
                <span style={{color:'#888',margin:'0 8px'}}>|</span>
                <span>{language === 'ar' ? modalCar.type.ar : modalCar.type.en}</span>
              </div>
              <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:12}}>
                <FormLabel>{language === 'ar' ? 'تاريخ الوصول' : 'Arrival Date'}</FormLabel>
                <input
                  type="date"
                  min={today}
                  value={formData.date}
                  onChange={e => handleInputChange('date', e.target.value)}
                  required
                  style={{padding:'8px',borderRadius:6,border:'1px solid #ccc'}}
                />
                <FormLabel>{language === 'ar' ? 'وقت الوصول' : 'Arrival Time'}</FormLabel>
                <input
                  type="time"
                  value={formData.time}
                  onChange={e => handleInputChange('time', e.target.value)}
                  required
                  style={{
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1.5px solid #ccc',
                    fontSize: '1rem',
                    boxShadow: '0 1px 4px rgba(25, 118, 210, 0.07)',
                    outline: 'none',
                    transition: 'border 0.2s',
                    marginBottom: '4px',
                  }}
                  onFocus={e => e.target.style.border = '1.5px solid #1976d2'}
                  onBlur={e => e.target.style.border = '1.5px solid #ccc'}
                />
                <ConfirmBtn type="submit">{language === 'ar' ? 'تأكيد الحجز' : 'Confirm Booking'}</ConfirmBtn>
              </form>
            </ModalContent>
          </ModalOverlay>
        )}
      </PageContainer>
    </>
  );
};

export default AvailableCars; 