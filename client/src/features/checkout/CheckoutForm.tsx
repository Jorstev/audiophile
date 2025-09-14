import { FormProvider } from "react-hook-form";
import React from "react";

interface CheckoutFormProps {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
  methods: any;
}

function CheckoutForm({ children, onSubmit, methods }: CheckoutFormProps) {
  return (
    <FormProvider {...methods}>
      <span className="text-sm text-gray-500 cursor-pointer">Go Back</span>
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
