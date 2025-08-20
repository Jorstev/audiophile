import { FormProvider, useForm } from "react-hook-form";
import Input from "../ui/Input";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import productImg from "../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import AmountItem from "../ui/AmountItem";
import Footer from "../ui/Footer";

function Checkout() {
  const methods = useForm();
  const { handleSubmit, register } = methods;
  const onSubmit = (values) => console.log(values);
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <>
      <FormProvider {...methods}>
        <span className="text-sm text-gray-500 cursor-pointer">Go Back</span>
        <form
          className="flex w-full h-full flex-col bg-[#fafafa] "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col p-5 space-y-4 m-5 bg-white rounded-md">
            <h2 className="text-[28px] font-[600] uppercase mb-4">Checkout</h2>
            <h3 className="text-[13px] font-600 tracking-wide uppercase mb-4 text-[#D87D4A]">
              billing details
            </h3>
            <Input
              label="Name"
              inputName="name"
              type="text"
              placeholder="John Doe"
              regex={{ value: "^[A-Za-z ]+$", message: "Only letters allowed" }}
            />
            <Input
              label="Email Address"
              inputName="email"
              type="email"
              placeholder="john@example.com"
              regex={{
                value: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}$",
                message: "Invalid email address",
              }}
            />
            <Input
              label="Phone Number"
              inputName="phone"
              type="tel"
              placeholder="555333111"
              regex={{
                value: "^[0-9]*$",
                message: "Invalid phone number",
              }}
            />
            <h3 className="text-[13px] font-600 tracking-wide uppercase mb-4 text-[#D87D4A]">
              shipping info
            </h3>
            <Input
              label="Your Address"
              inputName="address"
              type="text"
              placeholder="1137 Williams Avenue"
              regex={{
                value: "^[A-Za-z0-9 ]+$",
                message: "Invalid address",
              }}
            />
            <Input
              label="ZIP Code"
              inputName="zip"
              type="text"
              placeholder="12345"
              regex={{
                value: "^[0-9]{5}$",
                message: "Invalid ZIP code",
              }}
            />
            <Input
              label="City"
              inputName="city"
              type="text"
              placeholder="Los Angeles"
              regex={{
                value: "^[A-Za-z ]+$",
                message: "Invalid city name",
              }}
            />
            <Input
              label="Country"
              inputName="country"
              type="text"
              placeholder="USA"
              regex={{
                value: "^[A-Za-z ]+$",
                message: "Invalid country name",
              }}
            />
            <h3 className="text-[13px] font-600 tracking-wide uppercase mb-4 text-[#D87D4A]">
              payment details
            </h3>
            <label className="mb-2 font-600 text-xs">Payment Method</label>
            <label className="flex items-center space-x-2 border-2 w-full p-3 rounded-md outline-none">
              <input
                type="radio"
                value="eMoney"
                {...register("paymentMethod", { required: true })}
                className="accent-[#D87D4A]"
                onChange={() => setPaymentMethod("eMoney")}
              />
              <span className="font-600 text-xs">e-Money</span>
            </label>
            <label className="flex items-center space-x-2 border-2 w-full p-3 rounded-md outline-none">
              <input
                type="radio"
                value="cashOnDelivery"
                {...register("paymentMethod", { required: true })}
                className="accent-[#D87D4A]"
                onChange={() => setPaymentMethod("cashOnDelivery")}
              />
              <span className="font-600 text-xs">Cash on Delivery</span>
            </label>
            <AnimatePresence>
              {paymentMethod === "eMoney" && (
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
              )}
            </AnimatePresence>
            <AnimatePresence>
              {paymentMethod === "eMoney" && (
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
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col p-5 space-y-4 m-5 bg-white rounded-md">
            <div className="flex items-center justify-between">
              <img
                className="w-16 h-16 object-cover rounded-lg"
                src={productImg}
                alt="image-product"
              />
              <div className="flex flex-col">
                <span>XX99 MK II</span>
                <span>$2999</span>
              </div>
              <span>1x</span>
            </div>
            <div>
              <AmountItem label="Total" value="$3,400.00" />
              <AmountItem label="Shipping" value="$50.00" />
              <AmountItem label="VAT (included)" value="$680.00" />
              <AmountItem label="Grand Total" value="$3,400.00" />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#D87D4A] text-xs tracking-widest text-white py-4 mt-4 uppercase"
              >
                Checkout
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
      <Footer />
    </>
  );
}

export default Checkout;
