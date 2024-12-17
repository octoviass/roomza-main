import React from 'react';
import { Search } from 'lucide-react';
import { useSearchModal } from '../../hooks/useSearchModal';

export function SearchBar() {
  const { openModal } = useSearchModal();

  return (
    <button
      onClick={openModal}
      className="w-full md:w-auto flex items-center gap-4 border border-gray-200 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="flex items-center gap-6 px-4">
        <div>
          <p className="font-semibold">Location</p>
          <p className="text-sm text-gray-500">Where are you going?</p>
        </div>

        <div className="hidden md:block border-l border-gray-200 h-8" />

        <div className="hidden md:block">
          <p className="font-semibold">Price</p>
          <p className="text-sm text-gray-500">Set your budget</p>
        </div>

        <div className="hidden md:block border-l border-gray-200 h-8" />

        <div className="hidden md:block">
          <p className="font-semibold">Property Type</p>
          <p className="text-sm text-gray-500">What type?</p>
        </div>
      </div>

      <div className="p-2 bg-indigo-600 rounded-full text-white">
        <Search className="h-4 w-4" />
      </div>
    </button>
  );
}