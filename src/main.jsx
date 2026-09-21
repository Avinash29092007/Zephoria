import React,{useMemo,useState} from 'react';
import {createRoot} from 'react-dom/client';

import {
  BrowserRouter,
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

import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';
import Login from './pages/Login';

import './styles.css';
