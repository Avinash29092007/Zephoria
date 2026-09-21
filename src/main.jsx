import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import {
  HashRouter,
  useNavigate,
  useLocation,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate
} from 'react-router-dom';

import {
  Compass,
  Sparkles,
  MapPin,
  Navigation,
  CalendarDays,
  Users,
  ArrowRight,
  TrainFront,
  Bus,
  Car,
  Clock3,
  Ticket,
  Activity,
  AlertTriangle,
  Bell,
  Menu,
  X,
  Search,
  Heart,
  CircleUserRound,
  WalletCards,
  ChevronDown,
  Check,
  Settings2,
  Route as RouteIcon
} from 'lucide-react';

import { AuthProvider, useAuth } from './auth/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';
import Login from './pages/Login';

import './styles.css';

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    navigate('/login');
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <Link to="/" className="brand">
          <div className="brand-icon">
            <Compass size={22} />
          </div>

          <div>
            <div className="brand-name">YATRA AI</div>
            <div className="brand-subtitle">Travel smarter. Adapt faster.</div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="nav-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/plan"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Plan Journey
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Explore
          </NavLink>

          <NavLink
            to="/local-transport"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Local Transport
          </NavLink>

          <NavLink
            to="/my-trips"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            My Trips
          </NavLink>

        </nav>

        {/* RIGHT SIDE */}
        <div className="navbar-actions">

          <button className="icon-button" title="Notifications">
            <Bell size={19} />
            <span className="notification-dot"></span>
          </button>

          <div className="user-menu-wrapper">

            <button
              className="user-button"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              <div className="avatar">
                {user?.name?.charAt(0)?.toUpperCase() || 'A'}
              </div>

              <span>
                {user?.name || 'Traveler'}
              </span>

              <ChevronDown size={15} />
            </button>

            {userMenuOpen && (
              <div className="user-dropdown">

                <div className="dropdown-user">
                  <div className="avatar large">
                    {user?.name?.charAt(0)?.toUpperCase() || 'A'}
                  </div>

                  <div>
                    <strong>{user?.name || 'Traveler'}</strong>
                    <span>{user?.email || 'traveler@yatra.ai'}</span>
                  </div>
                </div>

                <div className="dropdown-divider"></div>

                <Link
                  to="/profile"
                  onClick={() => setUserMenuOpen(false)}
                >
                  <CircleUserRound size={17} />
                  Profile
                </Link>

                <Link
                  to="/my-trips"
                  onClick={() => setUserMenuOpen(false)}
                >
                  <WalletCards size={17} />
                  My Trips
                </Link>

                <button onClick={handleLogout}>
                  <ArrowRight size={17} />
                  Logout
                </button>

              </div>
            )}

          </div>

          <Link to="/plan" className="nav-cta">
            Plan a Trip
            <ArrowRight size={16} />
          </Link>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/plan" onClick={() => setMenuOpen(false)}>
            Plan Journey
          </Link>

          <Link to="/explore" onClick={() => setMenuOpen(false)}>
            Explore
          </Link>

          <Link to="/local-transport" onClick={() => setMenuOpen(false)}>
            Local Transport
          </Link>

          <Link to="/my-trips" onClick={() => setMenuOpen(false)}>
            My Trips
          </Link>

          <Link to="/profile" onClick={() => setMenuOpen(false)}>
            Profile
          </Link>

        </div>
      )}

    </header>
  );
}


/* =========================================================
   HOME PAGE
========================================================= */

function Home() {
  const navigate = useNavigate();

  const [from, setFrom] = useState('Chennai');
  const [to, setTo] = useState('Madurai');
  const [date, setDate] = useState('2026-09-25');
  const [travelers, setTravelers] = useState(2);

  const handlePlan = () => {
    navigate(
      `/plan?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`
    );
  };

  return (
    <div className="page">

      {/* HERO */}
      <section className="hero-section">

        <div className="hero-content">

          <div className="eyebrow">
            <Sparkles size={16} />
            AI-powered travel planning
          </div>

          <h1>
            Your journey
            <br />
            <span>shouldn't be fixed.</span>
          </h1>

          <p>
            YATRA AI continuously adapts your journey using
            real-time travel conditions, availability, delays,
            traffic and your preferences.
          </p>

          {/* PLANNER */}
          <div className="hero-planner">

            <div className="planner-field">
              <MapPin size={18} />
              <div>
                <label>FROM</label>
                <input
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Starting point"
                />
              </div>
            </div>

            <div className="planner-arrow">
              <ArrowRight size={18} />
            </div>

            <div className="planner-field">
              <Navigation size={18} />
              <div>
                <label>TO</label>
                <input
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Destination"
                />
              </div>
            </div>

            <div className="planner-field">
              <CalendarDays size={18} />
              <div>
                <label>DATE</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <div className="planner-field">
              <Users size={18} />
              <div>
                <label>TRAVELERS</label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                >
                  <option value="1">1 Traveler</option>
                  <option value="2">2 Travelers</option>
                  <option value="3">3 Travelers</option>
                  <option value="4">4 Travelers</option>
                  <option value="5">5 Travelers</option>
                </select>
              </div>
            </div>

            <button
              className="primary-button"
              onClick={handlePlan}
            >
              Plan Journey
              <ArrowRight size={18} />
            </button>

          </div>

          {/* TRUST */}
          <div className="trust-row">

            <span>
              <Check size={15} />
              Live traffic awareness
            </span>

            <span>
              <Check size={15} />
              Transport availability
            </span>

            <span>
              <Check size={15} />
              AI route adaptation
            </span>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="features-section">

        <div className="section-heading">
          <span>WHY YATRA AI</span>
          <h2>One journey. Multiple possibilities.</h2>
          <p>
            Your travel plan changes when reality changes.
            YATRA AI helps you adapt before problems become delays.
          </p>
        </div>

        <div className="feature-grid">

          <FeatureCard
            icon={<Sparkles size={23} />}
            title="AI Journey Planning"
            text="Compare transport options and get a recommendation based on time, cost, availability and current conditions."
          />

          <FeatureCard
            icon={<Activity size={23} />}
            title="Live Adaptation"
            text="When traffic increases or a train gets delayed, YATRA AI can rethink your route."
          />

          <FeatureCard
            icon={<RouteIcon size={23} />}
            title="What-If Simulation"
            text="See what happens when your preferred train is unavailable or traffic becomes heavy."
          />

          <FeatureCard
            icon={<MapPin size={23} />}
            title="Local Travel"
            text="Discover practical transport options once you reach your destination."
          />

        </div>

      </section>

    </div>
  );
}


/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({ icon, title, text }) {
  return (
    <div className="feature-card">

      <div className="feature-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

      <ArrowRight size={18} />

    </div>
  );
}


/* =========================================================
   PLAN JOURNEY
========================================================= */

function PlanJourney() {

  const navigate = useNavigate();

  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const from = params.get('from') || 'Chennai';
  const to = params.get('to') || 'Madurai';

  const [traffic, setTraffic] = useState('normal');
  const [trainStatus, setTrainStatus] = useState('available');

  const getRecommendation = () => {

    if (trainStatus === 'unavailable') {
      return {
        type: 'Bus',
        reason: 'Your preferred train is unavailable.'
      };
    }

    if (traffic === 'heavy') {
      return {
        type: 'Train',
        reason: 'Heavy road traffic detected. Train provides a more predictable journey.'
      };
    }

    if (traffic === 'moderate') {
      return {
        type: 'Train',
        reason: 'Train offers a balanced combination of time and reliability.'
      };
    }

    return {
      type: 'Train',
      reason: 'Train currently provides a good balance of time, cost and reliability.'
    };
  };

  const recommendation = getRecommendation();

  return (
    <div className="page">

      <section className="planner-page">

        <div className="page-header">

          <div>
            <span className="eyebrow">
              <Sparkles size={15} />
              Smart Journey Planner
            </span>

            <h1>
              {from}
              <ArrowRight size={30} />
              {to}
            </h1>

            <p>
              YATRA AI is evaluating the journey based on current conditions.
            </p>
          </div>

          <button
            className="secondary-button"
            onClick={() => navigate('/')}
          >
            Change Journey
          </button>

        </div>


        {/* DEMO CONTROLS */}
        <div className="demo-controls">

          <div>
            <strong>SIH Demo Mode</strong>
            <span>Change conditions to see AI adaptation.</span>
          </div>

          <div className="control-group">

            <label>
              Traffic
              <select
                value={traffic}
                onChange={(e) => setTraffic(e.target.value)}
              >
                <option value="normal">Normal</option>
                <option value="moderate">Moderate</option>
                <option value="heavy">Heavy</option>
              </select>
            </label>

            <label>
              Train
              <select
                value={trainStatus}
                onChange={(e) => setTrainStatus(e.target.value)}
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </label>

          </div>

        </div>


        {/* AI RECOMMENDATION */}
        <div className="ai-recommendation">

          <div className="recommendation-icon">
            <Sparkles size={24} />
          </div>

          <div className="recommendation-content">

            <span>YATRA AI RECOMMENDS</span>

            <h2>
              Take the {recommendation.type}
            </h2>

            <p>
              {recommendation.reason}
            </p>

          </div>

          <div className="recommendation-badge">
            AI Pick
          </div>

        </div>


        {/* ALERT */}
        {traffic === 'heavy' && (
          <div className="traffic-alert">

            <AlertTriangle size={20} />

            <div>
              <strong>Heavy traffic detected</strong>
              <p>
                Road travel may take longer than usual.
                YATRA AI has adjusted the recommendation.
              </p>
            </div>

          </div>
        )}


        {/* TRANSPORT OPTIONS */}
        <div className="section-heading left">

          <span>COMPARE OPTIONS</span>

          <h2>Available transport</h2>

        </div>

        <div className="transport-grid">

          <TransportCard
            icon={<TrainFront size={25} />}
            title="Express Train"
            time="6h 20m"
            price="₹650"
            status={trainStatus === 'available' ? 'Available' : 'Unavailable'}
            recommended={recommendation.type === 'Train'}
          />

          <TransportCard
            icon={<Bus size={25} />}
            title="Volvo Bus"
            time="7h 10m"
            price="₹780"
            status="Available"
            recommended={recommendation.type === 'Bus'}
          />

          <TransportCard
            icon={<Car size={25} />}
            title="Cab"
            time={traffic === 'heavy' ? '9h 30m' : '7h 50m'}
            price="₹4,800"
            status="Available"
            recommended={recommendation.type === 'Car'}
          />

        </div>


        {/* JOURNEY TIMELINE */}
        <div className="journey-card">

          <div className="journey-card-header">

            <div>
              <span>JOURNEY OVERVIEW</span>
              <h2>{from} → {to}</h2>
            </div>

            <div className="journey-distance">
              <Navigation size={17} />
              460 km
            </div>

          </div>

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div>
                <strong>8:00 AM</strong>
                <span>Departure from {from}</span>
              </div>
            </div>

            <div className="timeline-line"></div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div>
                <strong>2:20 PM</strong>
                <span>Arrival at {to}</span>
              </div>
            </div>

          </div>

        </div>


        {/* SAVE */}
        <div className="save-trip-row">

          <button
            className="primary-button"
            onClick={() => navigate('/my-trips')}
          >
            Save Trip
            <Heart size={18} />
          </button>

          <button
            className="secondary-button"
            onClick={() => navigate('/itinerary')}
          >
            View Itinerary
            <ArrowRight size={18} />
          </button>

        </div>

      </section>

    </div>
  );
}


/* =========================================================
   TRANSPORT CARD
========================================================= */

function TransportCard({
  icon,
  title,
  time,
  price,
  status,
  recommended
}) {

  return (
    <div
      className={`transport-card ${
        recommended ? 'recommended' : ''
      }`}
    >

      {recommended && (
        <div className="recommended-label">
          <Sparkles size={13} />
          AI Recommended
        </div>
      )}

      <div className="transport-card-top">

        <div className="transport-icon">
          {icon}
        </div>

        <span
          className={`status ${
            status === 'Available'
              ? 'available'
              : 'unavailable'
          }`}
        >
          {status}
        </span>

      </div>

      <h3>{title}</h3>

      <div className="transport-details">

        <span>
          <Clock3 size={15} />
          {time}
        </span>

        <span>
          <Ticket size={15} />
          {price}
        </span>

      </div>

      <button className="outline-button">
        Select
        <ArrowRight size={16} />
      </button>

    </div>
  );
}


/* =========================================================
   EXPLORE
========================================================= */

function Explore() {

  const destinations = [
    {
      name: 'Madurai',
      state: 'Tamil Nadu',
      description: 'Temples, heritage and authentic Tamil culture.',
      image:
        'https://images.unsplash.com/photo-1600100397608-f0108c7b1f5e?auto=format&fit=crop&w=900&q=80'
    },
    {
      name: 'Munnar',
      state: 'Kerala',
      description: 'Misty hills, tea estates and peaceful landscapes.',
      image:
        'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=900&q=80'
    },
    {
      name: 'Jaipur',
      state: 'Rajasthan',
      description: 'Royal architecture, forts and colourful markets.',
      image:
        'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80'
    },
    {
      name: 'Varanasi',
      state: 'Uttar Pradesh',
      description: 'Ancient ghats, spirituality and timeless culture.',
      image:
        'https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=900&q=80'
    }
  ];

  return (
    <div className="page">

      <section className="explore-page">

        <div className="page-header">

          <div>
            <span className="eyebrow">
              <MapPin size={15} />
              Explore India
            </span>

            <h1>Where will you go next?</h1>

            <p>
              Discover destinations and let YATRA AI help you
              build the journey around them.
            </p>
          </div>

          <div className="search-box">
            <Search size={18} />
            <input placeholder="Search destinations..." />
          </div>

        </div>


        <div className="destination-grid">

          {destinations.map((destination) => (

            <Link
              key={destination.name}
              to={`/destination/${destination.name.toLowerCase()}`}
              className="destination-card"
            >

              <div className="destination-image">

                <img
                  src={destination.image}
                  alt={destination.name}
                />

                <button
                  className="destination-heart"
                  onClick={(e) => e.preventDefault()}
                >
                  <Heart size={18} />
                </button>

              </div>

              <div className="destination-content">

                <span>{destination.state}</span>

                <h3>{destination.name}</h3>

                <p>{destination.description}</p>

                <div className="destination-link">
                  Explore
                  <ArrowRight size={16} />
                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </div>
  );
}


/* =========================================================
   DESTINATION
========================================================= */

function Destination() {

  const location = useLocation();

  const destination =
    location.pathname.split('/').pop() || 'madurai';

  const formatted =
    destination.charAt(0).toUpperCase() +
    destination.slice(1);

  return (
    <div className="page">

      <section className="destination-detail">

        <div className="destination-hero">

          <div>
            <span className="eyebrow">
              <MapPin size={15} />
              Destination Guide
            </span>

            <h1>{formatted}</h1>

            <p>
              Explore places, local transport, experiences
              and practical travel information.
            </p>

            <Link
              to="/plan"
              className="primary-button"
            >
              Plan Journey
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>


        <div className="detail-grid">

          <div className="detail-card">
            <Sparkles size={22} />
            <h3>Things to experience</h3>
            <p>
              Discover cultural landmarks, local food,
              attractions and unique experiences.
            </p>
          </div>

          <div className="detail-card">
            <Navigation size={22} />
            <h3>Local mobility</h3>
            <p>
              Find practical ways to move around after
              reaching your destination.
            </p>
          </div>

          <div className="detail-card">
            <CalendarDays size={22} />
            <h3>Best time</h3>
            <p>
              Plan your visit around weather, crowds and
              your preferred travel style.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}


/* =========================================================
   LOCAL TRANSPORT
========================================================= */

function LocalTransport() {

  const options = [
    {
      title: 'Auto Rickshaw',
      icon: <Car size={23} />,
      price: '₹80–₹250',
      description: 'Convenient for short city trips.'
    },
    {
      title: 'City Bus',
      icon: <Bus size={23} />,
      price: '₹15–₹50',
      description: 'Affordable option for longer local routes.'
    },
    {
      title: 'Cab',
      icon: <Car size={23} />,
      price: '₹150–₹600',
      description: 'Comfortable option for flexible travel.'
    }
  ];

  return (
    <div className="page">

      <section className="local-page">

        <div className="page-header">

          <div>

            <span className="eyebrow">
              <Navigation size={15} />
              Local Transport
            </span>

            <h1>Move around with confidence.</h1>

            <p>
              Practical transport options for the final
              part of your journey.
            </p>

          </div>

        </div>


        <div className="transport-grid">

          {options.map((option) => (

            <div className="local-transport-card" key={option.title}>

              <div className="transport-icon">
                {option.icon}
              </div>

              <h3>{option.title}</h3>

              <strong>{option.price}</strong>

              <p>{option.description}</p>

              <button className="outline-button">
                View routes
                <ArrowRight size={16} />
              </button>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}


/* =========================================================
   ITINERARY
========================================================= */

function Itinerary() {

  return (
    <div className="page">

      <section className="simple-page">

        <span className="eyebrow">
          <CalendarDays size={15} />
          Adaptive Itinerary
        </span>

        <h1>Your journey timeline</h1>

        <p>
          YATRA AI can adapt each part of your journey
          when conditions change.
        </p>


        <div className="journey-card">

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div>
                <strong>8:00 AM</strong>
                <span>Depart Chennai</span>
              </div>
            </div>

            <div className="timeline-line"></div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div>
                <strong>2:20 PM</strong>
                <span>Arrive Madurai</span>
              </div>
            </div>

            <div className="timeline-line"></div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div>
                <strong>3:00 PM</strong>
                <span>Local transport</span>
              </div>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}


/* =========================================================
   MY TRIPS
========================================================= */

function MyTrips() {

  return (
    <div className="page">

      <section className="simple-page">

        <span className="eyebrow">
          <WalletCards size={15} />
          Your Trips
        </span>

        <h1>My journeys</h1>

        <p>
          Your saved YATRA AI journeys will appear here.
        </p>


        <div className="trip-card">

          <div className="trip-card-icon">
            <TrainFront size={25} />
          </div>

          <div className="trip-card-content">

            <span>UPCOMING JOURNEY</span>

            <h3>Chennai → Madurai</h3>

            <p>
              25 September 2026 · 2 Travelers
            </p>

          </div>

          <Link
            to="/plan?from=Chennai&to=Madurai"
            className="outline-button"
          >
            Open
            <ArrowRight size={16} />
          </Link>

        </div>

      </section>

    </div>
  );
}


/* =========================================================
   PROFILE
========================================================= */

function Profile() {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  return (
    <div className="page">

      <section className="profile-page">

        <div className="profile-header">

          <div className="profile-avatar">
            {user?.name?.charAt(0)?.toUpperCase() || 'A'}
          </div>

          <div>
            <span className="eyebrow">
              <CircleUserRound size={15} />
              Traveler Profile
            </span>

            <h1>{user?.name || 'Arjun Kumar'}</h1>

            <p>
              {user?.email || 'demo@yatraai.com'}
            </p>
          </div>

        </div>


        <div className="profile-grid">

          <div className="detail-card">
            <Users size={22} />
            <span>TRAVEL TYPE</span>
            <h3>Balanced</h3>
          </div>

          <div className="detail-card">
            <WalletCards size={22} />
            <span>BUDGET</span>
            <h3>Moderate</h3>
          </div>

          <div className="detail-card">
            <Navigation size={22} />
            <span>TRANSPORT</span>
            <h3>Mixed</h3>
          </div>

        </div>


        <button
          className="secondary-button"
          onClick={() => {
            logout();
            navigate('/login');
          }}
        >
          Logout
        </button>

      </section>

    </div>
  );
}


/* =========================================================
   NOT FOUND
========================================================= */

function NotFound() {

  return (
    <div className="page">

      <section className="simple-page">

        <span className="eyebrow">
          <Compass size={15} />
          YATRA AI
        </span>

        <h1>Page not found</h1>

        <p>
          The journey you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="primary-button"
        >
          Back Home
          <ArrowRight size={18} />
        </Link>

      </section>

    </div>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {

  return (
    <Routes>

      {/* PUBLIC */}
      <Route path="/login" element={<Login />} />


      {/* PROTECTED */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Navbar />
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/plan"
        element={
          <ProtectedRoute>
            <Navbar />
            <PlanJourney />
          </ProtectedRoute>
        }
      />

      <Route
        path="/explore"
        element={
          <ProtectedRoute>
            <Navbar />
            <Explore />
          </ProtectedRoute>
        }
      />

      <Route
        path="/destination/:id"
        element={
          <ProtectedRoute>
            <Navbar />
            <Destination />
          </ProtectedRoute>
        }
      />

      <Route
        path="/local-transport"
        element={
          <ProtectedRoute>
            <Navbar />
            <LocalTransport />
          </ProtectedRoute>
        }
      />

      <Route
        path="/itinerary"
        element={
          <ProtectedRoute>
            <Navbar />
            <Itinerary />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-trips"
        element={
          <ProtectedRoute>
            <Navbar />
            <MyTrips />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Navbar />
            <Profile />
          </ProtectedRoute>
        }
      />


      {/* UNKNOWN ROUTE */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}


/* =========================================================
   ROOT
========================================================= */

createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <AuthProvider>

      <HashRouter>

        <App />

      </HashRouter>

    </AuthProvider>

  </React.StrictMode>

);
