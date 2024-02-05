/* eslint-disable react/prop-types */
// PaymentForm.js
import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      setError(error.message);
    } else {
      // Send the token to your server for further processing
      console.log(token);
      // Call onPaymentSuccess on successful payment
      onPaymentSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-5 border-2 border-black w-[90%] h-auto m-auto">
      <p className="text-3xl font-bold mb-4">Payment Information</p>
      <div className="mb-4">
        <label className="block text-xl font-bold mb-2" htmlFor="cardElement">
          Card Details
        </label>
        <CardElement id="cardElement" className='justify-center' />
      </div>
      {error && <div style={{ color: 'red' }} className="mb-4">{error}</div>}
      <button
        type="submit"
        disabled={!stripe}
        className="bg-[#6e477b] text-[#fdbb37] px-4 py-2 rounded-lg self-center"
      >
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;
