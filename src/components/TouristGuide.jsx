import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  Check,
  ChevronDown,
  CloudSun,
  Eye,
  Hotel,
  MapPin,
  Navigation,
  Shirt,
  Sparkles,
  Star,
  Utensils,
  WalletCards,
  Users
} from "lucide-react";

import destinationData from "../data/destinationData";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="tourist-section-header">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function TouristGuide({ destinationId }) {
  const destination =
    destinationData[destinationId] || destinationData.madurai;

  const [days, setDays] = useState(3);
  const [travelers, setTravelers] = useState(2);
  const [selectedHotelIndex, setSelectedHotelIndex] = useState(0);

  const selectedHotel =
    destination.hotels[selectedHotelIndex] || destination.hotels[0];

  const roomsNeeded = Math.max(1, Math.ceil(travelers / 2));

  const hotelCost =
    selectedHotel.price * Math.max(days - 1, 1) * roomsNeeded;

  const transportCost =
    destination.intercityTransportPerPerson * travelers;

  const foodCost =
    destination.foodPerPersonPerDay * travelers * days;

  const localTransportCost =
    destination.localTransportPerPersonPerDay * travelers * days;

  const activitiesCost =
    destination.activitiesPerPerson * travelers;

  const totalCost =
    hotelCost +
    transportCost +
    foodCost +
    localTransportCost +
    activitiesCost;

  const costBreakdown = useMemo(
    () => [
      {
        label: "Intercity transport",
        value: transportCost
      },
      {
        label: "Hotel",
        value: hotelCost
      },
      {
        label: "Food",
        value: foodCost
      },
      {
        label: "Local transport",
        value: localTransportCost
      },
      {
        label: "Activities",
        value: activitiesCost
      }
    ],
    [
      transportCost,
      hotelCost,
      foodCost,
      localTransportCost,
      activitiesCost
    ]
  );

  return (
    <main className="tourist-guide">

      {/* HERO */}
      <section className="tourist-hero">
        <img
          src={destination.image}
          alt={destination.name}
          className="tourist-hero-image"
        />

        <div className="tourist-hero-overlay" />

        <div className="tourist-hero-content">

          <div className="tourist-breadcrumb">
            <MapPin size={16} />
            <span>{destination.state}</span>
          </div>

          <div className="tourist-ai-badge">
            <Sparkles size={15} />
            YATRA AI TOURIST GUIDE
          </div>

          <h1>{destination.name}</h1>

          <p className="tourist-tagline">
            {destination.tagline}
          </p>

          <p className="tourist-description">
            {destination.description}
          </p>

          <div className="tourist-hero-stats">

            <div>
              <CalendarDays size={18} />
              <div>
                <span>Best time</span>
                <strong>{destination.bestTime}</strong>
              </div>
            </div>

            <div>
              <Users size={18} />
              <div>
                <span>Crowd</span>
                <strong>{destination.crowdLevel}</strong>
              </div>
            </div>

            <div>
              <CloudSun size={18} />
              <div>
                <span>Weather</span>
                <strong>{destination.weather}</strong>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK PLANNER */}
      <section className="tourist-planner">

        <div className="tourist-planner-heading">
          <div>
            <span className="section-kicker">
              PERSONALIZE YOUR TRIP
            </span>

            <h2>Build your estimated trip</h2>

            <p>
              Change the number of days and travelers.
              YATRA AI will recalculate your estimated budget.
            </p>
          </div>

          <div className="tourist-planner-icon">
            <Sparkles size={24} />
          </div>
        </div>

        <div className="tourist-planner-controls">

          <div className="tourist-control">
            <label>
              <CalendarDays size={16} />
              Trip duration
            </label>

            <div className="tourist-select-wrap">
              <select
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
              >
                <option value={2}>2 Days</option>
                <option value={3}>3 Days</option>
                <option value={4}>4 Days</option>
                <option value={5}>5 Days</option>
                <option value={6}>6 Days</option>
                <option value={7}>7 Days</option>
              </select>

              <ChevronDown size={16} />
            </div>
          </div>

          <div className="tourist-control">
            <label>
              <Users size={16} />
              Travelers
            </label>

            <div className="tourist-select-wrap">
              <select
                value={travelers}
                onChange={(e) =>
                  setTravelers(Number(e.target.value))
                }
              >
                <option value={1}>1 Traveler</option>
                <option value={2}>2 Travelers</option>
                <option value={3}>3 Travelers</option>
                <option value={4}>4 Travelers</option>
                <option value={5}>5 Travelers</option>
                <option value={6}>6 Travelers</option>
                <option value={8}>8 Travelers</option>
                <option value={10}>10 Travelers</option>
              </select>

              <ChevronDown size={16} />
            </div>
          </div>

          <div className="tourist-total-preview">
            <span>Estimated total</span>
            <strong>{formatCurrency(totalCost)}</strong>
            <small>
              {days} days • {travelers} travelers
            </small>
          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="tourist-section">

        <SectionHeader
          eyebrow="DESTINATION OVERVIEW"
          title={`Why visit ${destination.name}?`}
          description={destination.description}
        />

        <div className="tourist-overview-grid">

          <div className="tourist-info-card">
            <div className="tourist-card-icon">
              <Navigation size={22} />
            </div>

            <h3>Travel tip</h3>

            <p>{destination.travelTip}</p>
          </div>

          <div className="tourist-info-card">
            <div className="tourist-card-icon">
              <CloudSun size={22} />
            </div>

            <h3>Season guide</h3>

            <p>{destination.seasonDescription}</p>
          </div>

          <div className="tourist-info-card">
            <div className="tourist-card-icon">
              <Users size={22} />
            </div>

            <h3>Crowd level</h3>

            <p>{destination.crowdLevel}</p>

            <div className="tourist-status">
              Typical destination guidance
            </div>
          </div>

        </div>
      </section>

      {/* FAMOUS PLACES */}
      <section className="tourist-section tourist-section-muted">

        <SectionHeader
          eyebrow="MUST EXPERIENCE"
          title="Famous places"
          description="The important places a first-time visitor should consider."
        />

        <div className="tourist-place-grid">

          {destination.highlights.map((place) => (
            <article
              className="tourist-place-card"
              key={place.name}
            >
              <div className="tourist-place-top">
                <span>{place.tag}</span>
                <MapPin size={18} />
              </div>

              <h3>{place.name}</h3>

              <small>{place.type}</small>

              <p>{place.description}</p>

              <button className="tourist-text-button">
                Explore place
                <ArrowRight size={16} />
              </button>
            </article>
          ))}

        </div>
      </section>

      {/* HIDDEN SPOTS */}
      <section className="tourist-section">

        <SectionHeader
          eyebrow="DISCOVER DIFFERENT"
          title="Hidden & lesser-known spots"
          description="Places that can help the tourist explore beyond the standard tourist route."
        />

        <div className="hidden-spots-grid">

          {destination.hiddenSpots.map((spot) => (
            <article
              className="hidden-spot-card"
              key={spot.name}
            >
              <div className="hidden-spot-icon">
                <Eye size={21} />
              </div>

              <div>
                <div className="hidden-spot-title">
                  <h3>{spot.name}</h3>

                  <span>{spot.crowd}</span>
                </div>

                <p>{spot.description}</p>

                <small>
                  Best for: {spot.bestFor}
                </small>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* SEASON */}
      <section className="tourist-section tourist-season-section">

        <div className="season-guide-card">

          <div className="season-guide-main">

            <div className="season-icon">
              <CloudSun size={30} />
            </div>

            <div>
              <span className="section-kicker">
                SMART SEASON GUIDE
              </span>

              <h2>When should you visit?</h2>

              <strong>{destination.bestTime}</strong>

              <p>{destination.seasonDescription}</p>
            </div>

          </div>

          <div className="season-crowd-box">

            <Users size={22} />

            <span>Expected crowd</span>

            <strong>{destination.crowdLevel}</strong>

          </div>

        </div>
      </section>

      {/* HOTELS */}
      <section className="tourist-section">

        <SectionHeader
          eyebrow="STAY SMART"
          title="Recommended hotels"
          description="Choose a hotel based on location, comfort and your estimated trip budget."
        />

        <div className="hotel-grid">

          {destination.hotels.map((hotel, index) => {

            const selected = selectedHotelIndex === index;

            return (
              <article
                key={hotel.name}
                className={`hotel-card ${
                  selected ? "hotel-card-selected" : ""
                }`}
              >

                <div className="hotel-card-header">

                  <div className="hotel-icon">
                    <Hotel size={22} />
                  </div>

                  <div className="hotel-rating">
                    <Star size={15} fill="currentColor" />
                    {hotel.rating}
                  </div>

                </div>

                <h3>{hotel.name}</h3>

                <div className="hotel-location">
                  <MapPin size={15} />
                  {hotel.area}
                </div>

                <p className="hotel-distance">
                  {hotel.distance}
                </p>

                <div className="hotel-price">
                  <strong>
                    {formatCurrency(hotel.price)}
                  </strong>

                  <span>/ night</span>
                </div>

                <div className="room-label">
                  <BedDouble size={16} />
                  Room types
                </div>

                <div className="room-list">

                  {hotel.rooms.map((room) => (
                    <span key={room}>
                      {room}
                    </span>
                  ))}

                </div>

                <div className="hotel-amenities">

                  {hotel.amenities.map((amenity) => (
                    <span key={amenity}>
                      <Check size={13} />
                      {amenity}
                    </span>
                  ))}

                </div>

                <button
                  className={
                    selected
                      ? "hotel-select-button selected"
                      : "hotel-select-button"
                  }
                  onClick={() => setSelectedHotelIndex(index)}
                >
                  {selected ? "Selected for estimate" : "Select hotel"}

                  {selected && <Check size={16} />}
                </button>

              </article>
            );
          })}

        </div>
      </section>

      {/* DRESS */}
      <section className="tourist-section tourist-section-muted">

        <SectionHeader
          eyebrow="TRAVEL SMART"
          title="What should you wear?"
          description="YATRA considers the activity, weather and cultural setting when giving clothing guidance."
        />

        <div className="dress-grid">

          {destination.dressGuide.map((item) => (
            <article
              className="dress-card"
              key={item.activity}
            >

              <div className="dress-icon">
                <Shirt size={23} />
              </div>

              <span className="dress-activity">
                {item.activity}
              </span>

              <h3>{item.example}</h3>

              <p>{item.recommendation}</p>

            </article>
          ))}

        </div>
      </section>

      {/* FOOD */}
      <section className="tourist-section">

        <SectionHeader
          eyebrow="LOCAL TASTE"
          title="Food you should try"
          description={`Don't leave ${destination.name} without exploring its local food.`}
        />

        <div className="food-grid">

          {destination.foods.map((food, index) => (
            <div
              className="food-chip-card"
              key={food}
            >
              <div>
                <Utensils size={18} />
              </div>

              <span>{food}</span>

              <small>
                0{index + 1}
              </small>
            </div>
          ))}

        </div>
      </section>

      {/* LOCAL TRANSPORT */}
      <section className="tourist-section">

        <SectionHeader
          eyebrow="MOVE AROUND"
          title="Local transport"
          description="Common transport options a tourist can consider inside the destination."
        />

        <div className="transport-guide-grid">

          {destination.localTransport.map((transport) => (
            <div
              className="transport-guide-card"
              key={transport}
            >
              <Navigation size={19} />
              <span>{transport}</span>
            </div>
          ))}

        </div>

      </section>

      {/* COST */}
      <section className="tourist-section">

        <div className="cost-guide-card">

          <div className="cost-heading">

            <div>
              <span className="section-kicker">
                YATRA AI COST ESTIMATOR
              </span>

              <h2>
                Estimated cost for your trip
              </h2>

              <p>
                Based on {days} days, {travelers} travelers,
                and your selected hotel.
              </p>
            </div>

            <div className="cost-total">
              <WalletCards size={25} />

              <span>Total estimate</span>

              <strong>
                {formatCurrency(totalCost)}
              </strong>
            </div>

          </div>

          <div className="cost-breakdown">

            {costBreakdown.map((item) => (
              <div
                className="cost-row"
                key={item.label}
              >
                <span>{item.label}</span>

                <strong>
                  {formatCurrency(item.value)}
                </strong>
              </div>
            ))}

          </div>

          <div className="cost-note">
            <Sparkles size={17} />

            <span>
              This is a Phase 1 planning estimate.
              Real hotel prices, availability, transport
              fares and ticket prices will be connected in
              the live-data phase.
            </span>
          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="tourist-final-cta">

        <div>

          <span>
            <Sparkles size={16} />
            YOUR JOURNEY STARTS HERE
          </span>

          <h2>
            Ready to explore {destination.name}?
          </h2>

          <p>
            YATRA AI can turn this destination guide
            into a personalized journey.
          </p>

        </div>

        <button className="primary-button">
          Plan this journey
          <ArrowRight size={18} />
        </button>

      </section>

    </main>
  );
}

export default TouristGuide;
