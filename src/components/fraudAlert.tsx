"use client";

import React, { useState, useEffect } from "react";
import { IconX } from "@tabler/icons-react";

const FraudAlert = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in duration-300">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-black transition-colors"
        >
          <IconX size={24} />
        </button>

        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-red-600 font-playfair">
            Fraud Alert
          </h2>

          <h3 className="mt-2 text-xl font-bold text-gray-900 font-playfair">
            Important Notice for All Users
          </h3>

          <div className="mt-6 space-y-3 text-sm text-gray-600 leading-relaxed font-poppins">
            <p>
             If you receive any calls from suspicious numbers regarding any job openings, investment opportunities, or business inquiries/clients, please report them immediately.
            </p>
            <p>
           All official communication related to employee hiring, business engagements, or investments will only be made through our official portals and verified channels
through official email ID.
            </p>

            <div className="space-y-1 font-semibold text-blue-600">
              {/* <a href="mailto:legal@avtech.com" className="block hover:underline">
                legal@avtech.com
              </a> */}
              <a href="mailto:baba@avtechnosys.com" className="block hover:underline">
                Contact@avtechnosys.com
              </a>
            </div>

            <p className="pt-4 text-sm font-medium text-gray-500 border-t border-gray-100">
              Stay vigilant and help us keep our community safe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraudAlert;
