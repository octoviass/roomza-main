import React from 'react';
import { Menu, User } from 'lucide-react';
import { SearchBar } from '../search/SearchBar';
import { SearchModal } from '../search/SearchModal';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-400 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Roomza</h1>
            </div>
          </div>
          
          <div className="flex-1 max-w-2xl mx-4">
            <SearchBar />
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
              <span className="hidden md:block">List your property</span>
            </button>
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <SearchModal />
    </header>
  );
}