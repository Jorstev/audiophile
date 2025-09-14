import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface OrderConfirmationModalProps {
  triggerPayment: boolean;
  setTriggerPayment: (value: boolean) => void;
  navigate: (path: string) => void;
}

function OrderConfirmationModal({
  triggerPayment,
  setTriggerPayment,
  navigate,
}: OrderConfirmationModalProps) {
  return (
    <AnimatePresence>
      {triggerPayment && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="fixed top-24 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40 flex justify-end lg:justify-center px-4 pt-6 pb-2 lg:top-20 ">
            <div className="bg-white w-full max-w-md p-6 shadow-lg outline-none rounded-lg flex flex-col justify-around h-[fit-content] space-y-6">
              <div className="flex flex-col justify-start items-start space-y-4">
                <img
                  src="/src/assets/checkout/icon-order-confirmation.svg"
                  alt="confirmation"
                />
                <span className="uppercase font-600 text-2xl">
                  Thank you for your order
                </span>
                <p className="text-gray-500">
                  You will receive an email confirmation shortly
                </p>
              </div>
              <div>
                <div className="mt-4 flex flex-col space-y-4 bg-gray-100 px-5 rounded-t-lg">
                  <span className="block text-base font-semibold text-[#D87D4A] bg-[#f1f1f1] rounded-lg px-4 py-2 text-center shadow-sm mb-2">
                    3 items purchased
                  </span>
                </div>
                <div className="flex flex-col justify-between items-start bg-black h-20 px-5 py-3 rounded-b-lg">
                  <span className="text-gray-500 uppercase font-bold">
                    grand total
                  </span>
                  <span className="font-bold text-white">$3,400.00</span>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    setTriggerPayment(false);
                    navigate("/");
                  }}
                  className="w-full bg-[#D87D4A] text-xs tracking-widest text-white py-4 mt-4 uppercase"
                >
                  back to home
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default OrderConfirmationModal;
