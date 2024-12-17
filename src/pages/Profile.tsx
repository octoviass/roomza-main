import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ProfileForm } from '../components/profile/ProfileForm';
import { ProfileVerification } from '../components/profile/ProfileVerification';

export function Profile() {
  const { user } = useAuth0();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Profile Settings</h1>
      <div className="space-y-8">
        <ProfileForm user={user} />
        <ProfileVerification />
      </div>
    </div>
  );
}