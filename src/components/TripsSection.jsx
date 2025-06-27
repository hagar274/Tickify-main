import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const carTypes = ["BMW", "Toyota", "Honda", "Mercedes", "Hyundai", "Kia"];

const TripsSection = () => {
  const navigate = useNavigate();
  const [carForm, setCarForm] = useState({});
  const [trips, setTrips] = useState([]);
  const [tripsLoading, setTripsLoading] = useState(true);
  const [tripsError, setTripsError] = useState(null);
  const [hotelsByTrip, setHotelsByTrip] = useState({});
  const [hotelsLoading, setHotelsLoading] = useState({});
  const [hotelsError, setHotelsError] = useState({});
  const [expandedTrips, setExpandedTrips] = useState({});

  // Fetch trips (reservations)
  useEffect(() => {
    const fetchTrips = async () => {
      setTripsLoading(true);
      setTripsError(null);
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "https://tickifywebsite.runasp.net/me/my-reservations",
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : undefined,
            },
          }
        );
        if (!response.ok) throw new Error("فشل في جلب الرحلات");
        const data = await response.json();
        setTrips(Array.isArray(data) ? data : []);
      } catch (err) {
        setTripsError(err.message);
      } finally {
        setTripsLoading(false);
      }
    };
    fetchTrips();
  }, []);

  // Fetch hotels for each trip
  useEffect(() => {
    if (trips && trips.length > 0) {
      trips.forEach((trip) => {
        if (
          trip.id !== undefined &&
          trip.id !== null &&
          !hotelsByTrip[trip.id]
        ) {
          setHotelsLoading((prev) => ({ ...prev, [trip.id]: true }));
          const token = localStorage.getItem("token");
          fetch(
            `https://tickifywebsite.runasp.net/me/my-Hotel-reservations/${trip.id}`,
            {
              headers: {
                Authorization: token ? `Bearer ${token}` : undefined,
              },
            }
          )
            .then((res) => {
              if (!res.ok) throw new Error("فشل في جلب حجوزات الفنادق");
              return res.json();
            })
            .then((data) => {
              setHotelsByTrip((prev) => ({ ...prev, [trip.id]: data }));
              setHotelsLoading((prev) => ({ ...prev, [trip.id]: false }));
            })
            .catch((err) => {
              setHotelsError((prev) => ({ ...prev, [trip.id]: err.message }));
              setHotelsLoading((prev) => ({ ...prev, [trip.id]: false }));
            });
        }
      });
    }
  }, [trips]);

  const handleCarBookingForHotel = async (tripId, hotelId) => {
    setCarForm((prev) => ({
      ...prev,
      [hotelId]: { ...prev[hotelId], loading: true },
    }));
    try {
      const token = localStorage.getItem("token");
      const type = carForm[hotelId]?.type || carTypes[0];
      const payload = {
        type,
        flightReservationId: tripId,
        hotelReservationId: hotelId,
      };
      const response = await fetch(
        "https://tickifywebsite.runasp.net/api/Car/Reserve",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : undefined,
          },
          body: JSON.stringify(payload),
        }
      );
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.description || "Failed to book car");
      }
      setCarForm((prev) => ({
        ...prev,
        [hotelId]: { open: false, type: carTypes[0], loading: false },
      }));
      await Swal.fire({
        icon: "success",
        title: "تم حجز السيارة بنجاح!",
        confirmButtonText: "حسناً",
      });
    } catch (err) {
      setCarForm((prev) => ({
        ...prev,
        [hotelId]: { ...prev[hotelId], loading: false },
      }));
      await Swal.fire({
        icon: "error",
        title: "فشل الحجز",
        text: err.message,
        confirmButtonText: "حسناً",
      });
    }
  };

  const toggleTrip = (tripId) => {
    setExpandedTrips((prev) => ({
      ...prev,
      [tripId]: !prev[tripId],
    }));
  };

  // Group trips by unique flight (departureAirport, arrivalAirport, departureDate, arrivalDate)
  const groupedTrips = [];
  const seen = new Set();
  trips.forEach((trip) => {
    const key = `${trip.departureAirport}|${trip.arrivalAirport}|${trip.departureDate}|${trip.arrivalDate}`;
    if (!seen.has(key)) {
      groupedTrips.push(trip);
      seen.add(key);
    }
  });

  if (tripsLoading)
    return <div className="user-info-card">Loading your reservations...</div>;
  if (tripsError)
    return (
      <div className="user-info-card" style={{ color: "red" }}>
        {tripsError}
      </div>
    );
  return (
    <div className="trips-section">
      <h2>My Trips</h2>
      {groupedTrips.length === 0 ? (
        <div>No trips found.</div>
      ) : (
        groupedTrips.map((trip) => {
          const hotelsForTrip = hotelsByTrip[trip.id] || [];
          const isHotelsLoading = hotelsLoading[trip.id];
          const hotelsErr = hotelsError[trip.id];
          return (
            <div
              key={`${trip.departureAirport}|${trip.arrivalAirport}|${trip.departureDate}|${trip.arrivalDate}`}
              className="trip-card"
            >
              <div
                className="trip-header"
                onClick={() => toggleTrip(trip.id)}
                style={{
                  cursor: "pointer",
                  userSelect: "none",
                  transition: "background-color 0.3s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <b>
                      {trip.flight
                        ? `${trip.flight.from} → ${trip.flight.to}`
                        : trip.departureAirport + " → " + trip.arrivalAirport}
                    </b>
                    <br />
                    <span style={{ fontSize: "14px", color: "#666" }}>
                      {trip.flight
                        ? `${new Date(
                            trip.flight.departureDate
                          ).toLocaleString()} - ${new Date(
                            trip.flight.arrivalDate
                          ).toLocaleString()}`
                        : `${new Date(
                            trip.departureDate
                          ).toLocaleString()} - ${new Date(
                            trip.arrivalDate
                          ).toLocaleString()}`}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      transition: "transform 0.3s ease",
                      margin: "0px 20px 20px 20px",
                      transform: expandedTrips[trip.id]
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    ▼
                  </div>
                </div>
              </div>
              {/* Collapsible Hotels Section */}
              <div
                style={{
                  maxHeight: expandedTrips[trip.id] ? "1000px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.5s ease-in-out",
                  backgroundColor: "#f8f9fa",
                  borderTop: expandedTrips[trip.id]
                    ? "1px solid #dee2e6"
                    : "none",
                }}
              >
                <div style={{ padding: "16px" }}>
                  <b
                    style={{
                      display: "block",
                      marginBottom: "12px",
                      color: "#495057",
                    }}
                  >
                    Hotels for this flight:
                  </b>
                  {isHotelsLoading ? (
                    <div
                      style={{
                        textAlign: "center",
                        padding: "20px",
                        color: "#6c757d",
                      }}
                    >
                      Loading hotels...
                    </div>
                  ) : hotelsErr ? (
                    <div style={{ textAlign: "center", padding: "20px" }}>
                      <button
                        className="settings-btn"
                        style={{ marginTop: 8 }}
                        onClick={() => {
                          if (trip.id) {
                            navigate("/hotels/results", {
                              state: { reservationId: trip.id },
                            });
                          } else {
                            alert(
                              "No reservation ID found for this reservation."
                            );
                          }
                        }}
                      >
                        احجز فندقك
                      </button>
                    </div>
                  ) : hotelsForTrip.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "20px" }}>
                      <div
                        style={{
                          background: "#f8d7da",
                          color: "#c82333",
                          borderRadius: "6px",
                          padding: "12px",
                          marginBottom: "12px",
                          fontWeight: 500,
                        }}
                      >
                        {`{"code": "NoReservations", "description": "No hotel reservations found for this flight reservation."}`}
                      </div>
                      <button
                        className="settings-btn"
                        style={{ marginTop: 8 }}
                        onClick={() => {
                          if (trip.id) {
                            navigate("/hotels/results", {
                              state: { reservationId: trip.id },
                            });
                          } else {
                            alert(
                              "No reservation ID found for this reservation."
                            );
                          }
                        }}
                      >
                        احجز فندق
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: "grid", gap: "12px" }}>
                      {hotelsForTrip.map((hotel) => (
                        <div
                          key={hotel.id}
                          className="hotel-card-in-trip"
                          style={{
                            backgroundColor: "white",
                            padding: "16px",
                            borderRadius: "8px",
                            border: "1px solid #dee2e6",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          }}
                        >
                          <div style={{ marginBottom: "8px" }}>
                            <b style={{ color: "#495057" }}>Hotel:</b>{" "}
                            {hotel.hotelName}
                          </div>
                          <div style={{ marginBottom: "8px" }}>
                            <b style={{ color: "#495057" }}>Address:</b>{" "}
                            {hotel.hotelAddress}
                          </div>
                          <div style={{ marginBottom: "12px" }}>
                            <b style={{ color: "#495057" }}>Room IDs:</b>{" "}
                            {hotel.roomsId && hotel.roomsId.length > 0
                              ? hotel.roomsId.join(", ")
                              : "N/A"}
                          </div>
                          {/* Car info if available */}
                          {hotel.car ? (
                            <div
                              className="car-card-in-trip"
                              style={{
                                backgroundColor: "#e8f5e8",
                                padding: "8px",
                                borderRadius: "4px",
                                marginBottom: "12px",
                              }}
                            >
                              <b>Car:</b> {hotel.car.type} from {hotel.car.from}{" "}
                              to {hotel.car.to} (${hotel.car.price})
                            </div>
                          ) : null}
                          {/* Book Car Button/Form */}
                          {hotel.car ? (
                            <div
                              style={{
                                marginTop: 8,
                                color: "#28a745",
                                fontWeight: 600,
                                textAlign: "center",
                              }}
                            >
                              تم حجز السيارة لهذا الفندق
                            </div>
                          ) : carForm[hotel.id]?.open ? (
                            <form
                              onSubmit={async (e) => {
                                e.preventDefault();
                                await handleCarBookingForHotel(
                                  trip.id,
                                  hotel.id
                                );
                              }}
                              style={{ display: "inline", marginTop: 8 }}
                            >
                              <select
                                value={carForm[hotel.id]?.type || carTypes[0]}
                                onChange={(e) =>
                                  setCarForm((prev) => ({
                                    ...prev,
                                    [hotel.id]: {
                                      ...prev[hotel.id],
                                      type: e.target.value,
                                    },
                                  }))
                                }
                                style={{
                                  padding: "8px",
                                  borderRadius: 6,
                                  border: "1px solid #ccc",
                                  marginRight: 8,
                                }}
                              >
                                {carTypes.map((type) => (
                                  <option key={type} value={type}>
                                    {type}
                                  </option>
                                ))}
                              </select>
                              <button
                                type="submit"
                                style={{
                                  padding: "8px 16px",
                                  borderRadius: 6,
                                  border: "none",
                                  background: "#00233d",
                                  color: "#fff",
                                }}
                                disabled={carForm[hotel.id]?.loading}
                              >
                                {carForm[hotel.id]?.loading
                                  ? "...جاري الحجز"
                                  : "احجز سيارة"}
                              </button>
                            </form>
                          ) : (
                            <div style={{ textAlign: "center", marginTop: 8 }}>
                              <button
                                className="settings-btn"
                                style={{
                                  marginTop: 8,
                                  display: "block",
                                  margin: "8px auto 0",
                                }}
                                onClick={() =>
                                  setCarForm((prev) => ({
                                    ...prev,
                                    [hotel.id]: {
                                      open: true,
                                      type: carTypes[0],
                                      loading: false,
                                    },
                                  }))
                                }
                              >
                                احجز سيارة
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default TripsSection;
