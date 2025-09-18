import { FormProvider } from "react-hook-form";
import React from "react";
import { useNavigate } from "react-router-dom";

interface CheckoutFormProps {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
  methods: any;
}
function CheckoutForm({ children, onSubmit, methods }: CheckoutFormProps) {
  const navigate = useNavigate();

  return (
    <FormProvider {...methods}>
      <span
        onClick={() => navigate(-1)}
        className="text-sm text-gray-500 cursor-pointer p-7"
      >
        Go Back
      </span>
      <form
        className="flex w-full h-full flex-col xl:flex-row xl:max-w-[1200px] xl:mx-auto xl:px-0 xl:py-8"
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default CheckoutForm;
