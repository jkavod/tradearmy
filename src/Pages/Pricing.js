import React, { useState } from "react";
import { Form, Modal } from "../Component";
import '../UI/Style.css'

export default function Pricing() {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const openModal = () => {
   setIsModalOpen(true);
 };

 const closeModal = () => {
   setIsModalOpen(false);
 };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-7xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-7xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Transparent</span>
          </span>{" "}
          pricing. Pay as you are on profit or instant
        </h2>
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
          <div className="mb-6">
            <div className="flex items-center justify-between pb-6 mb-6 border-b">
              <div>
                <p className="text-sm font-bold tracking-wider uppercase">
                  Pay Later
                </p>
                <p className="text-5xl font-extrabold">Free</p>
              </div>
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="1" y="3" width="22" height="18" rx="2" ry="2"></rect>
                  <line x1="1" y1="7" x2="23" y2="7"></line>
                  <line x1="1" y1="12" x2="23" y2="12"></line>
                  <line x1="1" y1="17" x2="23" y2="17"></line>
                </svg>
              </div>
            </div>
            <div>
              <p className="mb-2 font-bold tracking-wide">Features</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">
                    Pay $500 once you start making money with the knowledge
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">
                    Access to courses for limited period
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            >
              Start for free
            </button>

            <p className="text-sm text-gray-600">Learn now and pay later</p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm" id="disabled">
          <div className="mb-6">
            <div className="flex items-center justify-between pb-6 mb-6 border-b">
              <div>
                <p className="text-sm font-bold tracking-wider uppercase">
                  Pay Now
                </p>
                <p className="text-5xl font-extrabold">$200</p>
              </div>
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-indigo-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="1" y="3" width="22" height="18" rx="2" ry="2"></rect>
                  <line x1="1" y1="7" x2="23" y2="7"></line>
                  <line x1="1" y1="12" x2="23" y2="12"></line>
                  <line x1="1" y1="17" x2="23" y2="17"></line>
                  <polyline points="8 12 12 7 16 12"></polyline>
                </svg>
              </div>
            </div>
            <div>
              <p className="mb-2 font-bold tracking-wide">Features</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">
                    Felixble payment plan
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-4 h-4 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">
                    Access to all course materials
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <p className="text-sm text-gray-600">flexible payment plan</p>
          </div>
        </div>
        {/* Modal */}
        {isModalOpen && <Modal closeModal={closeModal} />}
      </div>
    </div>
  );
}
