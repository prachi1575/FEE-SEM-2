import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout
import Layout from './Layout/Layout';

// Pages
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Dashboard from './components/DashBoard/Dashboard';
import ItemDetails from './components/Listing/ItemDetails/ItemDetails';
import CreateListing from './components/Listing/CreateListing/CreateListing';
import Login from './components/LoginPage/LoginPage';
import SignUp from './components/LoginPage/SignUp';
import Explore from './components/Offer/Explore';

import NotFound from './NotFound/NotFound';

// Placeholder Pages for Nav Links
const PlaceholderPage = ({ title }) => (
  <div style={{ padding: '4rem', textAlign: 'center' }}>
    <h1 style={{ fontSize: '3rem', fontWeight: '700' }}>{title}</h1>
  </div>
);

function App() {
  return (
    <Routes>
      {/* All pages use the main Layout (Header + Footer) */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* Listing Routes */}
        <Route path="item/:itemId" element={<ItemDetails />} />
        <Route path="create-listing" element={<CreateListing />} />

        {/* Nav Routes */}
        <Route path="my-offers" element={<PlaceholderPage title="My Offers" />} />
        <Route path="my-requests" element={<PlaceholderPage title="My Requests" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="explore" element={<Explore />} />

        {/* Auth Routes */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;