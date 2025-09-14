import React, { useState } from "react";
import CheckoutLayout from "../features/checkout/CheckoutLayout";
import CheckoutForm from "../features/checkout/CheckoutForm";
import BillingDetails from "../features/checkout/BillingDetails";
import ShippingInfo from "../features/checkout/ShippingInfo";
import PaymentDetails from "../features/checkout/PaymentDetails";
import OrderSummary from "../features/checkout/OrderSummary";
import OrderConfirmationModal from "../features/checkout/OrderConfirmationModal";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const methods = useForm();
  const { handleSubmit } = methods;
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [triggerPayment, setTriggerPayment] = useState(false);

  const onSubmit = (values) => {
    setTriggerPayment(true);
    console.log(values);
  };

  return (
    <CheckoutLayout>
      <CheckoutForm onSubmit={handleSubmit(onSubmit)} methods={methods}>
        <div className="flex flex-col p-5 space-y-4 m-5 bg-white rounded-md xl:w-[70%]">
          <h2 className="text-[28px] font-[600] uppercase mb-4">Checkout</h2>
          <BillingDetails />
          <ShippingInfo />
          <PaymentDetails
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </div>
        <OrderSummary />
      </CheckoutForm>
      <OrderConfirmationModal
        triggerPayment={triggerPayment}
        setTriggerPayment={setTriggerPayment}
        navigate={navigate}
      />
    </CheckoutLayout>
  );
}

export default Checkout;
