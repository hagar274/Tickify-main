import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useLocation } from "react-router-dom";

const ResultsContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  margin-top: 0px;
  @media (max-width: 900px) {
    width: 80vw;
    max-width: 100vw;

    padding: 1rem 2px;
  }
  @media (max-width: 600px) {
    padding: 0.5rem 0;
    width: 70vw;
    max-width: 100vw;
  }
`;

const ResultsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }
`;

const HotelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  width: 1250px;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    width: 1000px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 0.7rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 0.4rem;
  }
`;

const HotelCard = styled.div`
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  }
  @media (max-width: 600px) {
    border-radius: 6px;
    box-shadow: none;
  }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  @media (max-width: 900px) {
    height: 120px;
  }
  @media (max-width: 600px) {
    height: 90px;
  }
`;

const HotelInfo = styled.div`
  padding: 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    padding: 0.7rem;
  }
  @media (max-width: 600px) {
    padding: 0.4rem;
  }
`;

const HotelName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  @media (max-width: 900px) {
    font-size: 1.05rem;
  }
`;

const HotelLocation = styled.p`
  color: #888;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  @media (max-width: 900px) {
    font-size: 0.95rem;
  }
`;

const HotelRating = styled.div`
  color: #f5b50a;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

const HotelPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const BookButton = styled.button`
  background: #00233d;
  color: var(--white);
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  align-self: flex-end;
  &:hover {
    background: #0085d8;
  }
`;

const HotelResultsGlobalStyle = createGlobalStyle`
  @media (max-width: 900px) {
    body {
    
      padding-top: 60px !important;
      padding-bottom:0px !important;
      padding-right:0px !important;
      padding-left:0px !important;

    }
  }
`;

const HotelResults = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [availableRooms, setAvailableRooms] = useState([]);
  const [loadingRooms, setLoadingRooms] = useState(false);
  const [roomsError, setRoomsError] = useState(null);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(null);
  const [bookingRoomLoading, setBookingRoomLoading] = useState(false);

  const todayDate = new Date().toISOString().split("T")[0];

  const roomTypes = [
    { id: 0, type: language === "ar" ? "Single" : "Single", price: 100 },
    { id: 1, type: language === "ar" ? "Double" : "Double", price: 150 },
    { id: 2, type: language === "ar" ? "Twin" : "Twin", price: 170 },
    { id: 3, type: language === "ar" ? "Suite" : "Suite", price: 250 },
    { id: 4, type: language === "ar" ? "Deluxe" : "Deluxe", price: 300 },
    { id: 5, type: language === "ar" ? "Family" : "Family", price: 350 },
  ];

  // Get reservationId or country from location.state
  const reservationId = location.state && location.state.reservationId;
  const country =
    location.state && location.state.destination
      ? location.state.destination
      : "Egypt";

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token");
        let url = "";
        if (reservationId) {
          url = `https://tickifywebsite.runasp.net/api/Hotel/Search?FlightReservationId=${reservationId}`;
        } else {
          url = `https://tickifywebsite.runasp.net/api/Hotel/Search?Country=${encodeURIComponent(
            country
          )}`;
        }
        const response = await fetch(url, {
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
          },
        });
        if (!response.ok) {
          let errorMsg =
            language === "ar"
              ? "فشل جلب بيانات الفنادق"
              : "Failed to fetch hotels";
          try {
            const errData = await response.json();
            if (
              errData.code === "Empty Results." &&
              errData.description ===
                "You Must Reserve a Flight To This Country First."
            ) {
              errorMsg =
                language === "ar"
                  ? "يجب عليك حجز رحلة إلى هذا البلد أولاً قبل حجز فندق."
                  : "You must reserve a flight to this country first before booking a hotel.";
            } else if (errData.description) {
              errorMsg = errData.description;
            }
          } catch {}
          throw new Error(errorMsg);
        }
        const data = await response.json();
        setHotels(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
        setHotels([]);
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, [reservationId, country, language]);

  // Map room type string to number
  const mapRoomTypeToNumber = (type) => {
    switch (type.toLowerCase()) {
      case "single":
        return 0;
      case "double":
        return 1;
      case "twin":
        return 2;
      case "suite":
        return 3;
      case "deluxe":
        return 4;
      case "family":
        return 5;
      default:
        return "";
    }
  };

  const handleOpenModal = (hotel) => {
    setSelectedHotelId(hotel.id);
    setShowModal(true);
    setCheckInDate("");
    setCheckOutDate("");
    setBookingSuccess(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowResults(false);
    setShowConfirm(false);
    setBookingSuccess(false);
  };

  const overrideStyle = `
    .main-content.hotel-results-margin-fix {
      margin-top: 0px !important;
    }
  `;

  return (
    <>
      <HotelResultsGlobalStyle />
      <style>{overrideStyle}</style>
      <ResultsContainer as="section" className="hotel-results-margin-fix">
        <ResultsTitle>
          {language === "ar" ? "الفنادق المتاحة " : "Hotel Results"}
        </ResultsTitle>
        {loading ? (
          <div
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              margin: "2rem 0",
            }}
          >
            {language === "ar" ? "جاري تحميل الفنادق..." : "Loading hotels..."}
          </div>
        ) : error ? (
          <div
            style={{
              color: "#c62828",
              background: "#fff0f0",
              border: "1px solid #f8bdbd",
              borderRadius: 8,
              padding: "1.2rem 1rem",
              textAlign: "center",
              fontSize: "1.1rem",
              margin: "2rem 0",
              maxWidth: 500,
              marginLeft: "auto",
              marginRight: "auto",
              fontWeight: 500,
            }}
          >
            <i
              className="fas fa-exclamation-triangle"
              style={{ marginRight: 8 }}
            ></i>
            {error}
          </div>
        ) : hotels.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              margin: "2rem 0",
              color: "#888",
            }}
          >
            {language === "ar"
              ? "لا توجد فنادق متاحة في هذه الوجهة."
              : "No hotels available for this destination."}
          </div>
        ) : (
          <HotelsGrid>
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id || hotel.hotelId}>
                <HotelInfo>
                  <HotelName>
                    {language === "ar"
                      ? hotel.name_ar || hotel.name
                      : hotel.name}
                  </HotelName>
                  <HotelLocation>
                    <i
                      className="fas fa-map-marker-alt"
                      style={{
                        color: "#0085d8",
                        marginRight: language === "ar" ? 0 : 8,
                        marginLeft: language === "ar" ? 8 : 0,
                      }}
                    ></i>
                    {language === "ar"
                      ? hotel.location_ar || hotel.location
                      : hotel.location}
                  </HotelLocation>
                  {hotel.rating && (
                    <HotelRating>
                      <i className="fas fa-star"></i> {hotel.rating}
                    </HotelRating>
                  )}
                  {hotel.price && (
                    <HotelPrice>
                      {language === "ar"
                        ? `ابتداءً من ${hotel.price}$ / ليلة`
                        : `From $${hotel.price} / night`}
                    </HotelPrice>
                  )}
                  <BookButton onClick={() => handleOpenModal(hotel)}>
                    {language === "ar" ? "احجز الآن" : "Book Now"}
                  </BookButton>
                </HotelInfo>
              </HotelCard>
            ))}
          </HotelsGrid>
        )}
        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.3)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: "32px 24px",
                minWidth: 320,
                maxWidth: 400,
                boxShadow: "0 4px 16px #0002",
                position: "relative",
              }}
            >
              <button
                onClick={handleCloseModal}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: "none",
                  border: "none",
                  fontSize: 22,
                  cursor: "pointer",
                  color: "#888",
                }}
              >
                &times;
              </button>
              {!bookingSuccess && !showConfirm && !showResults && (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (checkOutDate <= checkInDate) {
                      setErrors({
                        checkOutDate: true,
                        checkInDate: true,
                        dateMsg: true,
                      });
                      return;
                    }
                    setErrors({});
                    setLoadingRooms(true);
                    setRoomsError(null);
                    setAvailableRooms([]);

                    const roomTypeNum = mapRoomTypeToNumber(selectedRoomType);
                    try {
                      const token = localStorage.getItem("token");
                      const url = `https://tickifywebsite.runasp.net/api/Hotels/${selectedHotelId}/Rooms/select?checkInDate=${checkInDate}T22:06:15.774Z&checkOutDate=${checkOutDate}T22:06:15.774Z&RoomType=${roomTypeNum}&BedType&OpptionalBedType`;
                      const response = await fetch(url, {
                        headers: {
                          Authorization: token ? `Bearer ${token}` : undefined,
                        },
                      });
                      if (!response.ok) {
                        throw new Error(
                          language === "ar"
                            ? "فشل جلب الغرف المتاحة"
                            : "Failed to fetch available rooms"
                        );
                      }
                      const data = await response.json();
                      setAvailableRooms(Array.isArray(data) ? data : []);
                    } catch (err) {
                      setRoomsError(err.message);
                    } finally {
                      setLoadingRooms(false);
                      setShowResults(true);
                    }
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    marginTop: 8,
                  }}
                >
                  <h3 style={{ textAlign: "center", marginBottom: 8 }}>
                    {language === "ar" ? "بيانات الحجز" : "Booking Details"}
                  </h3>
                  <select
                    value={selectedRoomType}
                    onChange={(e) => setSelectedRoomType(e.target.value)}
                    style={{
                      padding: "8px",
                      borderRadius: 6,
                      border: "1px solid #ccc",
                      marginBottom: 8,
                    }}
                    required
                  >
                    <option value="" disabled>
                      {language === "ar" ? "نوع الغرفة" : "Room Type"}
                    </option>
                    {roomTypes.map((room) => (
                      <option key={room.id} value={room.type}>
                        {room.type}
                      </option>
                    ))}
                  </select>
                  <label style={{ fontWeight: 500 }}>
                    {language === "ar" ? "تاريخ الوصول" : "Check-in Date"}
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    min={todayDate}
                    required
                    style={{
                      padding: "8px",
                      borderRadius: 6,
                      border: errors.checkInDate
                        ? "2px solid red"
                        : "1px solid #ccc",
                      boxShadow: errors.checkInDate
                        ? "0 0 0 2px #ff000055"
                        : undefined,
                    }}
                  />
                  <label style={{ fontWeight: 500 }}>
                    {language === "ar" ? "تاريخ المغادرة" : "Check-out Date"}
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    min={todayDate}
                    required
                    style={{
                      padding: "8px",
                      borderRadius: 6,
                      border: errors.checkOutDate
                        ? "2px solid red"
                        : "1px solid #ccc",
                      boxShadow: errors.checkOutDate
                        ? "0 0 0 2px #ff000055"
                        : undefined,
                    }}
                  />
                  {errors.dateMsg && (
                    <div style={{ color: "red", fontSize: 13, marginTop: 2 }}>
                      {language === "ar"
                        ? "تاريخ المغادرة يجب أن يكون بعد تاريخ الوصول"
                        : "Check-out date must be after check-in date"}
                    </div>
                  )}
                  <button
                    type="submit"
                    style={{
                      marginTop: 10,
                      background: "#1976d2",
                      color: "#fff",
                      border: "none",
                      borderRadius: 6,
                      padding: "10px 0",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {language === "ar" ? "عرض النتائج" : "Show Results"}
                  </button>
                </form>
              )}
              {showResults && (
                <div style={{ margin: "0 0 0 0", position: "relative" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 12,
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: 18 }}>
                      {language === "ar"
                        ? "الغرف المتاحة:"
                        : "Available Rooms:"}
                    </span>
                    <button
                      style={{
                        background: "none",
                        color: "#1976d2",
                        border: "none",
                        fontWeight: 700,
                        fontSize: 15,
                        cursor: "pointer",
                        padding: "6px 12px",
                        borderRadius: 6,
                        transition: "background 0.2s",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.background = "#f0f4fa")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.background = "none")
                      }
                      onClick={() => {
                        setShowResults(false);
                      }}
                    >
                      {language === "ar" ? (
                        <span style={{ fontSize: 18, marginLeft: 2 }}>◀</span>
                      ) : null}
                      {language === "ar" ? "رجوع" : "Back"}
                      {language !== "ar" ? (
                        <span style={{ fontSize: 18, marginLeft: 2 }}>⬅</span>
                      ) : null}
                    </button>
                  </div>
                  {loadingRooms ? (
                    <div
                      style={{
                        textAlign: "center",
                        margin: "1.5rem 0",
                        color: "#1976d2",
                      }}
                    >
                      {language === "ar"
                        ? "جاري تحميل الغرف..."
                        : "Loading rooms..."}
                    </div>
                  ) : roomsError ? (
                    <div
                      style={{
                        textAlign: "center",
                        margin: "1.5rem 0",
                        color: "#c62828",
                      }}
                    >
                      {roomsError}
                    </div>
                  ) : availableRooms.length === 0 ? (
                    <div
                      style={{
                        textAlign: "center",
                        margin: "1.5rem 0",
                        color: "#888",
                      }}
                    >
                      {language === "ar"
                        ? "لا توجد غرف متاحة لهذا البحث."
                        : "No available rooms for this search."}
                    </div>
                  ) : (
                    <div
                      style={{
                        height: 350,
                        overflowY: "auto",
                        paddingRight: 8,
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                      }}
                    >
                      {availableRooms.map((room, idx) => (
                        <label
                          key={room.id || idx}
                          style={{
                            background: "#f8f8f8",
                            borderRadius: 10,
                            padding: "18px 20px",
                            minWidth: 220,
                            boxShadow: "0 2px 8px #eee",
                            border: "1px solid #ddd",
                            marginBottom: 4,
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 12,
                            cursor: "pointer",
                          }}
                        >
                          <input
                            type="radio"
                            name="selectedRoom"
                            checked={selectedRoomIndex === idx}
                            onChange={() => setSelectedRoomIndex(idx)}
                            style={{ marginTop: 4, accentColor: "#1976d2" }}
                          />
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 600, marginBottom: 8 }}>
                              {language === "ar" ? "نوع الغرفة:" : "Room Type:"}{" "}
                              {room.roomType}
                            </div>
                            <div style={{ marginBottom: 8 }}>
                              {language === "ar" ? "السعر:" : "Price:"}{" "}
                              {room.pricePerNight}$
                            </div>
                            <div>
                              {language === "ar" ? "الأسرة:" : "Beds:"}{" "}
                              {room.beds && Array.isArray(room.beds)
                                ? room.beds
                                    .map((b) => `${b.count} ${b.type}`)
                                    .join(language === "ar" ? " و " : " & ")
                                : "-"}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  )}
                  <button
                    style={{
                      margin: "24px auto 0 auto",
                      display: "block",
                      background: "#1976d2",
                      color: "#fff",
                      border: "none",
                      borderRadius: 6,
                      padding: "12px 40px",
                      fontWeight: 600,
                      fontSize: 18,
                      cursor:
                        selectedRoomIndex === null || bookingRoomLoading
                          ? "not-allowed"
                          : "pointer",
                      opacity:
                        selectedRoomIndex === null || bookingRoomLoading
                          ? 0.6
                          : 1,
                    }}
                    disabled={selectedRoomIndex === null || bookingRoomLoading}
                    onClick={async () => {
                      if (selectedRoomIndex === null || bookingRoomLoading)
                        return;
                      setBookingRoomLoading(true);
                      const room = availableRooms[selectedRoomIndex];
                      const payload = {
                        Id: room.id,
                        checkInDate: checkInDate + "T22:06:15.774Z",
                        checkOutDate: checkOutDate + "T22:09:15.774Z",
                        flightReservationId: reservationId,
                      };
                      try {
                        const token = localStorage.getItem("token");
                        const response = await fetch(
                          "https://tickifywebsite.runasp.net/api/HotelReservation/Reserve",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: token
                                ? `Bearer ${token}`
                                : undefined,
                            },
                            body: JSON.stringify(payload),
                          }
                        );
                        const data = await response.json();
                        if (!response.ok) {
                          if (
                            data.code === "NotValidRoom" &&
                            data.description ===
                              "The room is already reserved at the same time."
                          ) {
                            await Swal.fire({
                              icon: "error",
                              title:
                                language === "ar"
                                  ? "الغرفة محجوزة بالفعل"
                                  : "Room Already Reserved",
                              text:
                                language === "ar"
                                  ? "هذه الغرفة محجوزة بالفعل في نفس الوقت."
                                  : "The room is already reserved at the same time.",
                              confirmButtonText:
                                language === "ar" ? "حسناً" : "OK",
                            });
                          } else {
                            await Swal.fire({
                              icon: "error",
                              title:
                                language === "ar"
                                  ? "فشل الحجز"
                                  : "Reservation Failed",
                              text:
                                data.description ||
                                (language === "ar"
                                  ? "حدث خطأ أثناء الحجز."
                                  : "An error occurred while booking."),
                              confirmButtonText:
                                language === "ar" ? "حسناً" : "OK",
                            });
                          }
                          setBookingRoomLoading(false);
                          return;
                        }
                        // Success: show reservation details
                        await Swal.fire({
                          icon: "success",
                          title:
                            language === "ar"
                              ? "تم الحجز بنجاح!"
                              : "Booking successful!",
                          html: `
                            <div style='text-align:left;direction:ltr;font-size:1rem;'>
                              <b>${
                                language === "ar"
                                  ? "اسم العميل"
                                  : "Customer Name"
                              }:</b> ${data.customerName}<br/>
                              <b>${
                                language === "ar"
                                  ? "البريد الإلكتروني"
                                  : "Email"
                              }:</b> ${data.customerEmail}<br/>
                              <b>${
                                language === "ar" ? "رقم الهاتف" : "Phone"
                              }:</b> ${data.customerPhone}<br/>
                              <b>${
                                language === "ar" ? "الفندق" : "Hotel"
                              }:</b> ${data.hotelName}<br/>
                              <b>${
                                language === "ar" ? "الوصف" : "Description"
                              }:</b> ${data.hotelDescription}<br/>
                              <b>${
                                language === "ar" ? "الموقع" : "Location"
                              }:</b> ${data.hotelLocation}<br/>
                              <b>${
                                language === "ar" ? "عدد النجوم" : "Star Rating"
                              }:</b> ${data.hotelStarRating}<br/>
                              <b>${
                                language === "ar" ? "نوع الغرفة" : "Room Type"
                              }:</b> ${data.roomType}<br/>
                              <b>${
                                language === "ar" ? "تاريخ الوصول" : "Check-in"
                              }:</b> ${data.checkInDate}<br/>
                              <b>${
                                language === "ar"
                                  ? "تاريخ المغادرة"
                                  : "Check-out"
                              }:</b> ${data.checkOutDate}<br/>
                              <b>${
                                language === "ar"
                                  ? "السعر الكلي"
                                  : "Total Price"
                              }:</b> ${data.totalPrice}$
                            </div>
                          `,
                          confirmButtonText: language === "ar" ? "حسناً" : "OK",
                        });
                        handleCloseModal();
                      } catch (_) {
                        await Swal.fire({
                          icon: "error",
                          title:
                            language === "ar"
                              ? "فشل الحجز"
                              : "Reservation Failed",
                          text:
                            language === "ar"
                              ? "حدث خطأ أثناء الحجز."
                              : "An error occurred while booking.",
                          confirmButtonText: language === "ar" ? "حسناً" : "OK",
                        });
                      } finally {
                        setBookingRoomLoading(false);
                      }
                    }}
                  >
                    {language === "ar" ? "حجز" : "Book"}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </ResultsContainer>
    </>
  );
};

export default HotelResults;
