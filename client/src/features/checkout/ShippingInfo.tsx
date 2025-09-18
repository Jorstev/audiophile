import Input from "../../ui/Input";
import React from "react";

function ShippingInfo() {
  return (
    <>
      <h3 className="text-[13px] font-600 tracking-wide uppercase mb-4 text-[#D87D4A]">
        shipping info
      </h3>
      <div className="space-y-4 md:grid md:grid-cols-2 md:grid-rows-3 md:items-baseline md:gap-4">
        <Input
          customStyle="md:col-span-2 md:col-start-1 md:col-end-3"
          label="Your Address"
          inputName="address"
          type="text"
          placeholder="1137 Williams Avenue"
          regex={{
            value: "^[A-Za-zÀ-ÿ\u00C0-\u017F0-9 ]+$",
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
            message: "Invalid ZIP code, Enter 5 digits",
          }}
        />
        <Input
          label="City"
          inputName="city"
          type="text"
          placeholder="Los Angeles"
          regex={{
            value: "^[A-Za-zÀ-ÿ\u00C0-\u017F ]+$",
            message: "Invalid city name",
          }}
        />
        <Input
          label="Country"
          inputName="country"
          type="text"
          placeholder="USA"
          regex={{
            value: "^[A-Za-zÀ-ÿ\u00C0-\u017F ]+$",
            message: "Invalid country name",
          }}
        />
      </div>
    </>
  );
}

export default ShippingInfo;
