import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useBooking } from "../context/BookingContext";
import Swal from "sweetalert2";
import { isLoggedIn } from "../context/checkAuth";

const FlightResultsGlobalStyle = createGlobalStyle`
  @media (max-width: 768px) {
    body {
      padding: 0 !important;
    }
  }
`;

const ResultsContainer = styled.div`
  width: 100vw;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: -5rem !important;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  padding: 32px 24px;
  @media (max-width: 768px) {
    padding: 12px 2px;
    border-radius: 0;
    margin-top: 0 !important;
    box-shadow: none;
  }
`;
const Title = styled.h2`
  color: #00233d;
  margin-bottom: 18px;
  text-align: center;
`;
const SearchSummary = styled.div`
  background: #f5f7fa;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 32px;
  font-size: 1.1rem;
  color: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 789px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 10px 4px;
    font-size: 1rem;
    margin-bottom: 18px;
  }
`;
const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const ResultCard = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  padding: 18px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    padding: 12px 6px;
    gap: 10px;
  }
`;
const BookBtn = styled.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 22px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #001a33;
  }
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 90px;
    font-size: 0.95rem;
    padding: 8px 0;
  }
`;
const FlightLineContainer = styled.div`
  display: flex;
  align-items: center;
  height: 12px;
  width: 100%;
`;
const FlightDot = styled.div`
  width: 12px;
  height: 12px;
  background: #1976d2;
  border-radius: 50%;
  margin: 0;
`;
const FlightLine = styled.div`
  height: 2px;
  background: #e0e0e0;
  flex: 1;
`;
const Sidebar = styled.div`
  width: 260px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #eee;
  padding: 1.5rem 1.2rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  min-width: 200px;
  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 1.5rem;
  }
`;
const PriceLabels = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.08rem;
  color: #00233d;
  font-weight: bold;
  margin-bottom: 0.3rem;
  letter-spacing: 0.5px;
`;
const ManualSlider = styled.input`
  width: 90%;
  margin: 0.2rem 0 0.7rem 0;
  accent-color: #1976d2;
  height: 3px;
  border-radius: 2px;
  background: #e0e0e0;
  min-width: 60px;
`;
const FilterButton = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  transition: background 0.2s;
  &:hover {
    background: #1251a3;
  }
  @media (max-width: 768px) {
    width: 90px;
    font-size: 0.95rem;
    padding: 10px 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
const ResultsFlex = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  gap: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.5rem;
  }
  @media (max-width: 768px) {
    gap: 0.2rem;
  }
`;

const sortOptions = [
  { value: "all", labelAr: "جميع النتائج", labelEn: "All Results" },
  { value: "cheapest", labelAr: "الأقل سعراً", labelEn: "Lowest Price" },
  { value: "expensive", labelAr: "الأكثر سعراً", labelEn: "Highest Price" },
  {
    value: "shortest_duration",
    labelAr: "أقصر مدة رحلة",
    labelEn: "Shortest Duration",
  },
  {
    value: "longest_duration",
    labelAr: "أطول مدة رحلة",
    labelEn: "Longest Duration",
  },
];

const HotelBookingButton = styled.button`
  background: ${(props) => (props.disabled ? "#ccc" : "#28a745")};
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  margin: 20px auto;
  display: block;
  font-weight: 600;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    background: ${(props) => (props.disabled ? "#ccc" : "#218838")};
    transform: ${(props) => (props.disabled ? "none" : "translateY(-2px)")};
  }

  i {
    margin-left: 0.5rem;
  }
`;

const CarBookingButton = styled.button`
  background: ${(props) => (props.disabled ? "#ccc" : "#28a745")};
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  margin: 10px auto 0 auto;
  display: block;
  font-weight: 600;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    background: ${(props) => (props.disabled ? "#ccc" : "#218838")};
    transform: ${(props) => (props.disabled ? "none" : "translateY(-2px)")};
  }

  i {
    margin-left: 0.5rem;
  }
`;

const BookingStatus = styled.div`
  background: ${(props) =>
    props.hasBooking
      ? "linear-gradient(135deg, #4ecdc4, #44a08d)"
      : "linear-gradient(135deg, #ff6b6b, #ee5a52)"};
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h4 {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    opacity: 0.9;
    font-size: 0.95rem;
  }
`;

const FlightResults = () => {
  const { language } = useLanguage();
  const { addFlightBooking } = useBooking();
  const location = useLocation();
  const navigate = useNavigate();

  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("all");
  const [bookingLoading, setBookingLoading] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const search = location.state || {};
  const {
    origin,
    destination,
    departureDate,
    cabinClass,
    results,
    noFlights,
    minPrice: initialMin,
    maxPrice: initialMax,
    showAllFlights,
  } = search;

  const [minPrice, setMinPrice] = useState(initialMin ?? 0);
  const [maxPrice, setMaxPrice] = useState(initialMax ?? 5000);
  const [filteredResults, setFilteredResults] = useState(results || []);
  const minGap = 50;
  const maxLimit = 5000;

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const parseDurationToMinutes = (durationFormatted) => {
    if (!durationFormatted) return 0;

    const hoursMatch = durationFormatted.match(/(\d+)h/);
    const minutesMatch = durationFormatted.match(/(\d+)m/);

    const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;

    return hours * 60 + minutes;
  };

  const getLowestPrice = (flight) => {
    if (!flight.classes || flight.classes.length === 0) return Infinity;
    return Math.min(...flight.classes.map((cls) => cls.price));
  };

  const sortResults = (resultsToSort, sortType) => {
    if (!resultsToSort || sortType === "all") return resultsToSort;

    const sortedResults = [...resultsToSort];

    switch (sortType) {
      case "cheapest":
        return sortedResults.sort(
          (a, b) => getLowestPrice(a) - getLowestPrice(b)
        );

      case "expensive":
        return sortedResults.sort(
          (a, b) => getLowestPrice(b) - getLowestPrice(a)
        );

      case "shortest_duration":
        return sortedResults.sort((a, b) => {
          const durationA = parseDurationToMinutes(a.durationFormatted);
          const durationB = parseDurationToMinutes(b.durationFormatted);
          return durationA - durationB;
        });

      case "longest_duration":
        return sortedResults.sort((a, b) => {
          const durationA = parseDurationToMinutes(a.durationFormatted);
          const durationB = parseDurationToMinutes(b.durationFormatted);
          return durationB - durationA;
        });

      case "early_departure":
        return sortedResults.sort(
          (a, b) => new Date(a.departureDate) - new Date(b.departureDate)
        );

      case "late_departure":
        return sortedResults.sort(
          (a, b) => new Date(b.departureDate) - new Date(a.departureDate)
        );

      default:
        return sortedResults;
    }
  };

  useEffect(() => {
    if (results) {
      const sortedResults = sortResults(results, sortBy);
      setFilteredResults(sortedResults);
    }
  }, [sortBy, results]);

  const handleMinPriceChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - minGap);
    setMinPrice(value);
  };
  const handleMaxPriceChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + minGap);
    setMaxPrice(value);
  };
  const handleFilter = () => {
    if (!results) return;
    const filtered = results.filter((f) => {
      if (Array.isArray(f.classes) && f.classes.length > 0) {
        return f.classes.some(
          (cls) => cls.price >= minPrice && cls.price <= maxPrice
        );
      }
      return false;
    });

    const sortedFiltered = sortResults(filtered, sortBy);
    setFilteredResults(sortedFiltered);
  };

  const handleBookNow = async (flightId, classId) => {
    if (!isLoggedIn()) {
      Swal.fire({
        icon: "warning",
        title: language === "ar" ? "تسجيل الدخول مطلوب" : "Login Required",
        text:
          language === "ar"
            ? "يرجى تسجيل الدخول أولاً قبل الحجز."
            : "Please log in first before booking.",
        confirmButtonText: language === "ar" ? "تسجيل الدخول" : "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      });
      return;
    }
    const confirmResult = await Swal.fire({
      icon: "question",
      title: language === "ar" ? "تأكيد الحجز" : "Confirm Reservation",
      text:
        language === "ar"
          ? "هل أنت متأكد أنك تريد حجز هذه الرحلة؟"
          : "Are you sure you want to book this flight?",
      showCancelButton: true,
      confirmButtonText: language === "ar" ? "نعم، احجز" : "Yes, Book",
      cancelButtonText: language === "ar" ? "إلغاء" : "Cancel",
    });
    if (!confirmResult.isConfirmed) return;
    setBookingLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://tickifywebsite.runasp.net/api/${flightId}/${classId}/FlightReservations/Reserve`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({
            flightId,
            classId,
          }),
        }
      );
      if (!response.ok) throw new Error("Reservation failed");

      // Add flight booking to context
      const flightData = {
        flightId,
        classId,
        from: origin,
        to: destination,
        departureDate: departureDate,
        cabinClass: cabinClass,
      };
      addFlightBooking(flightData);

      await Swal.fire({
        icon: "success",
        title:
          language === "ar" ? "تم الحجز بنجاح!" : "Reservation successful!",
        text:
          language === "ar"
            ? "يمكنك الآن حجز فندق في وجهتك!"
            : "You can now book a hotel at your destination!",
        confirmButtonText: language === "ar" ? "حسناً" : "OK",
      });
    } catch {
      await Swal.fire({
        icon: "error",
        title: language === "ar" ? "فشل الحجز!" : "Reservation failed!",
        confirmButtonText: language === "ar" ? "حسناً" : "OK",
      });
    } finally {
      setBookingLoading(false);
    }
  };

  if (!results) {
    return (
      <ResultsContainer>
        <Title>
          {language === "ar" ? "لا توجد نتائج بحث" : "No search results found."}
        </Title>
      </ResultsContainer>
    );
  }

  if (noFlights) {
    return (
      <ResultsContainer>
        <Title>
          {language === "ar" ? "لا توجد رحلات متاحة" : "No Flights Available"}
        </Title>
        <div
          style={{
            color: "#c62828",
            fontSize: "1.2rem",
            textAlign: "center",
            marginTop: 24,
          }}
        >
          {language === "ar"
            ? "لا توجد رحلات متاحة بناءً على معايير البحث التي أدخلتها."
            : "There are no flights available for your search criteria."}
        </div>
      </ResultsContainer>
    );
  }

  return (
    <>
      <FlightResultsGlobalStyle />
      <ResultsFlex>
        {/* Sidebar for large screens */}
        {!isSmallScreen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Sidebar>
              <label
                style={{
                  color: "#00233d",
                  fontWeight: 600,
                  marginBottom: 4,
                  fontSize: "1.08rem",
                  letterSpacing: "0.5px",
                }}
              >
                {language === "ar" ? "نطاق السعر" : "Price Range"}
              </label>
              <PriceLabels>
                <span>
                  {language === "ar" ? "الحد الأدنى" : "Min"}: {minPrice} $
                </span>
                <span>
                  {language === "ar" ? "الحد الأقصى" : "Max"}: {maxPrice} $
                </span>
              </PriceLabels>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <ManualSlider
                  type="range"
                  min={0}
                  max={maxLimit}
                  value={minPrice}
                  onChange={handleMinPriceChange}
                />
                <ManualSlider
                  type="range"
                  min={0}
                  max={maxLimit}
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                />
              </div>
              <div style={{ color: "#666", fontSize: "0.97rem", marginTop: 2 }}>
                {language === "ar"
                  ? "يجب أن يكون الفرق بين الحدين الأدنى والأقصى 50 دولارًا على الأقل."
                  : "The minimum gap between min and max is $50."}
              </div>
              <FilterButton onClick={handleFilter}>
                {language === "ar" ? "بحث" : "Search"}
              </FilterButton>
            </Sidebar>

            {/* Removed Hotel and Car Booking Buttons */}
            {/* Hotel and Car booking functionality has been removed */}
          </div>
        )}
        <div style={{ flex: 1 }}>
          {/* Sidebar for small screens: show above results */}
          {isSmallScreen && (
            <Sidebar style={{ margin: "0 0 16px 0", width: "100%" }}>
              <label
                style={{
                  color: "#00233d",
                  fontWeight: 600,
                  marginBottom: 4,
                  fontSize: "1.08rem",
                  letterSpacing: "0.5px",
                }}
              >
                {language === "ar" ? "نطاق السعر" : "Price Range"}
              </label>
              <PriceLabels>
                <span>
                  {language === "ar" ? "الحد الأدنى" : "Min"}: {minPrice} $
                </span>
                <span>
                  {language === "ar" ? "الحد الأقصى" : "Max"}: {maxPrice} $
                </span>
              </PriceLabels>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <ManualSlider
                  type="range"
                  min={0}
                  max={maxLimit}
                  value={minPrice}
                  onChange={handleMinPriceChange}
                />
                <ManualSlider
                  type="range"
                  min={0}
                  max={maxLimit}
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                />
              </div>
              <div style={{ color: "#666", fontSize: "0.97rem", marginTop: 2 }}>
                {language === "ar"
                  ? "يجب أن يكون الفرق بين الحدين الأدنى والأقصى 50 دولارًا على الأقل."
                  : "The minimum gap between min and max is $50."}
              </div>
              <FilterButton onClick={handleFilter}>
                {language === "ar" ? "بحث" : "Search"}
              </FilterButton>
            </Sidebar>
          )}
          {/* Title and results */}
          <Title>
            {showAllFlights
              ? language === "ar"
                ? "عرض جميع الرحلات المتاحة في النظام"
                : "Showing all available flights in the system"
              : language === "ar"
              ? "الرحلات المتاحة"
              : "Flight Search Results"}
          </Title>
          <div
            style={{
              width: "auto",
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <button
                onClick={() => setSortOpen((v) => !v)}
                style={{
                  background: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  padding: "7px 18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  minWidth: 120,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {
                  sortOptions.find((o) => o.value === sortBy)[
                    language === "ar" ? "labelAr" : "labelEn"
                  ]
                }
                <span style={{ fontSize: "1.2em" }}>
                  {sortOpen ? "▲" : "▼"}
                </span>
              </button>
              {sortOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "110%",
                    left: 0,
                    right: 0,
                    background: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: 8,
                    zIndex: 10,
                    boxShadow: "0 2px 8px #eee",
                    minWidth: 150,
                  }}
                >
                  {sortOptions.map((opt) => (
                    <div
                      key={opt.value}
                      onClick={() => {
                        setSortBy(opt.value);
                        setSortOpen(false);
                      }}
                      style={{
                        padding: "10px 16px",
                        cursor: "pointer",
                        fontWeight: sortBy === opt.value ? "bold" : "normal",
                        background: sortBy === opt.value ? "#f5f7fa" : "#fff",
                        textAlign: language === "ar" ? "right" : "left",
                      }}
                    >
                      {language === "ar" ? opt.labelAr : opt.labelEn}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <SearchSummary>
            <span style={{ marginRight: 16 }}>
              {showAllFlights
                ? language === "ar"
                  ? "عرض جميع الرحلات المتاحة في النظام"
                  : "Showing all available flights in the system"
                : language === "ar"
                ? `من ${origin || "-"} إلى ${destination || "-"} | مغادرة: ${
                    departureDate || "-"
                  } | درجة المقعد: ${cabinClass || "-"}`
                : `From ${origin || "-"} to ${
                    destination || "-"
                  } | Departure: ${departureDate || "-"} | Cabin: ${
                    cabinClass || "-"
                  }`}
            </span>
            <BookBtn onClick={() => navigate("/")}>
              {showAllFlights
                ? language === "ar"
                  ? "بحث جديد"
                  : "New Search"
                : language === "ar"
                ? "تعديل البحث"
                : "Edit Search"}
            </BookBtn>
          </SearchSummary>

          <ResultsList>
            {filteredResults.length === 0 ? (
              <div>
                {language === "ar"
                  ? "لا توجد رحلات متاحة"
                  : "No flights available."}
              </div>
            ) : (
              filteredResults.map((flight) => (
                <ResultCard key={flight.id}>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "#1976d2",
                        fontSize: "1.1em",
                        marginBottom: "8px",
                      }}
                    >
                      {flight.departureAirportName} (
                      {flight.departureAirportCity})
                      <span style={{ color: "#888", margin: "0 8px" }}>
                        &rarr;
                      </span>
                      {flight.arrivalAirportName} ({flight.arrivalAirportCity})
                    </div>
                    <div
                      style={{
                        color: "#444",
                        fontSize: "0.98em",
                        marginBottom: "8px",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px",
                      }}
                    >
                      <div>
                        <i className="fas fa-calendar-alt"></i>{" "}
                        <strong>
                          {language === "ar" ? "تاريخ المغادرة:" : "Departure:"}
                        </strong>{" "}
                        {new Date(flight.departureDate).toLocaleDateString()}{" "}
                        {new Date(flight.departureDate).toLocaleTimeString()}
                      </div>
                      <div>
                        <i className="fas fa-calendar-check"></i>{" "}
                        <strong>
                          {language === "ar" ? "تاريخ الوصول:" : "Arrival:"}
                        </strong>{" "}
                        {new Date(flight.arrivalDate).toLocaleDateString()}{" "}
                        {new Date(flight.arrivalDate).toLocaleTimeString()}
                      </div>
                      {flight.durationFormatted && (
                        <div>
                          <i className="fas fa-clock"></i>{" "}
                          <strong>
                            {language === "ar" ? "مدة الرحلة:" : "Duration:"}
                          </strong>{" "}
                          {flight.durationFormatted}
                        </div>
                      )}
                    </div>
                    {flight.classes && flight.classes.length > 0 && (
                      <div
                        style={{
                          background: "#f8f9fa",
                          padding: "12px",
                          borderRadius: "8px",
                          marginTop: "8px",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: "bold",
                            marginBottom: "8px",
                            color: "#333",
                          }}
                        >
                          {language === "ar"
                            ? "فئات المقاعد المتاحة:"
                            : "Available Seat Classes:"}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                          }}
                        >
                          {flight.classes.map((cls) => (
                            <div
                              key={cls.id}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "8px 12px",
                                background: "#fff",
                                borderRadius: "6px",
                                border: "1px solid #e0e0e0",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "12px",
                                }}
                              >
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    color: "#1976d2",
                                  }}
                                >
                                  <i className="fas fa-crown"></i>{" "}
                                  {cls.className}
                                </span>
                                <span style={{ color: "#666" }}>
                                  <i className="fas fa-money-bill-wave"></i>{" "}
                                  {cls.price} $
                                </span>
                              </div>
                              <div style={{ color: "#666", fontSize: "0.9em" }}>
                                <i className="fas fa-chair"></i>{" "}
                                {language === "ar" ? "المقاعد:" : "Seats:"}{" "}
                                {cls.availableSeats} / {cls.capacity}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <BookBtn
                    onClick={() =>
                      handleBookNow(flight.id, flight.classes[0]?.id)
                    }
                    disabled={bookingLoading}
                  >
                    {language === "ar" ? "احجز الآن" : "Book Now"}
                  </BookBtn>
                </ResultCard>
              ))
            )}
          </ResultsList>
          {/* Hotel and Car booking buttons for small screens: show below results */}
          {isSmallScreen && (
            <div style={{ marginTop: 24 }}>
              {/* Removed Hotel and Car Booking Buttons */}
              {/* Hotel and Car booking functionality has been removed */}
            </div>
          )}
        </div>
      </ResultsFlex>
    </>
  );
};

export default FlightResults;
