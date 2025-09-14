import { FormProvider, useForm } from "react-hook-form";
import Input from "../../ui/Input";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AmountItem from "../../ui/AmountItem";
import Footer from "../../ui/Footer";
import CartItem from "../../features/cart/CartItem";
import { useNavigate } from "react-router-dom";
import React from "react";

interface CheckoutLayoutProps {
  children: React.ReactNode;
}

// Layout wrapper
function CheckoutLayout({ children }: CheckoutLayoutProps) {
  return (
    <div className="bg-[#fafafa] w-full h-full">
      {children}
      <Footer />
    </div>
  );
}

export default CheckoutLayout;
