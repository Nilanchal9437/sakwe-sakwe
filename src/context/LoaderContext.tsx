'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      <div className="bg-white/90 p-4 rounded-lg shadow-lg backdrop-blur-sm">
        <div className="relative flex flex-col items-center">
          {/* Spinner */}
          <div className="w-12 h-12">
            <div className="w-full h-full rounded-full border-[3px] border-gray-200">
              <div className="w-full h-full rounded-full border-[3px] border-primary border-t-transparent animate-spin"></div>
            </div>
          </div>
          
          {/* Loading text with animated dots */}
          <div className="mt-2">
            <div className="text-gray-700 text-sm font-medium flex items-center gap-[2px]">
              Loading
              <span className="animate-[dot1_1.5s_infinite] ml-[2px]">.</span>
              <span className="animate-[dot2_1.5s_infinite]">.</span>
              <span className="animate-[dot3_1.5s_infinite]">.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


interface LoaderContextType {
  showLoader: () => void;
  hideLoader: () => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {isLoading && <Loader />}
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
}; 