import Input from "../../ui/Input";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PaymentDetailsProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

function PaymentDetails({
  paymentMethod,
  setPaymentMethod,
}: PaymentDetailsProps) {
  return (
    <>
      <h3 className="text-[13px] font-600 tracking-wide uppercase mb-4 text-[#D87D4A]">
        payment details
      </h3>
      <div className="space-y-4 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 md:items-baseline">
        <label className="mb-2 font-600 text-xs md:row-span-2 md:col-start-1 md:row-start-1">
          Payment Method
        </label>
        <label className="flex items-center space-x-2 border-2 w-full p-3 rounded-md outline-none">
          <input
            type="radio"
            value="eMoney"
            name="paymentMethod"
            className="accent-[#D87D4A]"
            onChange={() => setPaymentMethod("eMoney")}
          />
          <span className="font-600 text-xs">e-Money</span>
        </label>
        <label className="flex items-center space-x-2 border-2 w-full p-3 rounded-md outline-none">
          <input
            type="radio"
            value="cashOnDelivery"
            name="paymentMethod"
            className="accent-[#D87D4A]"
            onChange={() => setPaymentMethod("cashOnDelivery")}
          />
          <span className="font-600 text-xs">Cash on Delivery</span>
        </label>
      </div>
      {paymentMethod === "eMoney" && (
        <div className="md:grid md:grid-cols-2 md:gap-4">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Input
                label="e-Money Number"
                inputName="eMoneyNumber"
                type="text"
                placeholder="1234561234"
                regex={{
                  value: "^[0-9]*$",
                  message: "Invalid e-Money Number",
                }}
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Input
                label="e-Money PIN"
                inputName="eMoneyPIN"
                type="text"
                placeholder="123456"
                regex={{
                  value: "^[0-9]{6}$",
                  message: "Invalid e-Money PIN, Enter 6 digits",
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      {paymentMethod === "cashOnDelivery" && (
        <div>
          <AnimatePresence>
            <motion.div
              className="flex justify-around space-x-7 items-center"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="block"
                src="/assets/checkout/icon-cash-on-delivery.svg"
                alt="cashDelivery"
              />
              <span className="text-gray-400 text-sm block">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

export default PaymentDetails;
