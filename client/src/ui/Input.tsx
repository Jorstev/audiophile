import React from "react";
import { useFormContext } from "react-hook-form";

interface RegExp {
  value: string;
  message: string;
}

interface InputProps {
  inputName: string;
  label: string;
  type: string;
  placeholder?: string;
  regex: RegExp;
}

function Input({
  inputName,
  label,
  regex,
  type,
  placeholder,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label className="space-y-2 ">
        <span className="font-600 text-xs">{label}</span>
        <input
          className="border-2 w-full p-3 rounded-md outline-none placeholder:text-sm"
          type={type}
          placeholder={placeholder}
          {...register(inputName, {
            required: true,
            pattern: {
              value: new RegExp(regex.value),
              message: regex.message || "Invalid format",
            },
          })}
          {...rest}
        />
      </label>
      {errors[inputName] && (
        <p className="text-red-500 text-sm mt-1">
          {typeof errors[inputName].message === "string"
            ? errors[inputName].message
            : ""}
        </p>
      )}
    </>
  );
}

export default Input;
