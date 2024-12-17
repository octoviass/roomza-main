import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogIn, LogOut, UserPlus } from 'lucide-react';

export function AuthButtons() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (isAuthenticated) {
    return (
      <button
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
      >
        <LogOut className="h-4 w-4" />
        <span>Sign Out</span>
      </button>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => loginWithRedirect()}
        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
      >
        <LogIn className="h-4 w-4" />
        <span>Sign In</span>
      </button>
      <button
        onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
        className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
      >
        <UserPlus className="h-4 w-4" />
        <span>Sign Up</span>
      </button>
    </div>
  );
}