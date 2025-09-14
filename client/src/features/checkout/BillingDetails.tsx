import Input from "../../ui/Input";
import React from "react";

function BillingDetails() {
  return (
    <>
      <h3 className="text-[13px] font-600 tracking-wide uppercase mb-4 text-[#D87D4A]">
        billing details
      </h3>
      <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 md:items-baseline space-y-4 ">
        <Input
          label="Name"
          inputName="name"
          type="text"
          placeholder="John Doe"
          regex={{
            value: "^[A-Za-zÀ-ÿ\u00C0-\u017F ]+$",
            message: "Only letters allowed",
          }}
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
      </div>
    </>
  );
}

export default BillingDetails;
