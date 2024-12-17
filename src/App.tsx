import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { PropertyDetails } from './pages/PropertyDetails';
import { CreateProperty } from './pages/CreateProperty';
import { MyProperties } from './pages/MyProperties';
import { Profile } from './pages/Profile';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

function App() {
  return (
    <Auth0Provider
      domain="your-auth0-domain.auth0.com"
      clientId="your-client-id"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route
              path="/create-property"
              element={
                <ProtectedRoute>
                  <CreateProperty />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-properties"
              element={
                <ProtectedRoute>
                  <MyProperties />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;