// PaystackButton.js
import React from "react";
import axios from "axios";

const PaystackButton = ({ amount, email, onSuccess, onClose }) => {
  const initializePayment = async () => {
    try {
      const response = await axios.post(
        "https://api.paystack.co/transaction/initialize",
        {
          email,
          amount: amount * 100, // Paystack expects amount in kobo
        },
        {
          headers: {
            Authorization: `Bearer YOUR_PAYSTACK_API_KEY`,
            "Content-Type": "application/json",
          },
        }
      );

      const { data } = response;

      if (data.status) {
        // Redirect the user to the payment page
        window.location.href = data.data.authorization_url;
      } else {
        console.error("Failed to initialize payment");
      }
    } catch (error) {
      console.error("Error initializing payment", error);
    }
  };

  return (
    <button
      onClick={initializePayment}
      className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    >
      Get started
    </button>
  );
};

export default PaystackButton;
