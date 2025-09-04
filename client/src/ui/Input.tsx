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
  customStyle?: string;
}

function Input({
  inputName,
  label,
  regex,
  type,
  placeholder,
  customStyle = "",
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label className={`space-y-2 ${customStyle}`}>
        <span className="font-600 text-xs">{label}</span>
        <input
          className={`border-2 w-full p-3  rounded-md outline-none placeholder:text-sm`}
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
        {errors[inputName] && (
          <p className="text-red-500 text-sm mt-1">
            {errors[inputName].type === "required"
              ? "Required field"
              : typeof errors[inputName].message === "string"
              ? errors[inputName].message
              : ""}
          </p>
        )}
      </label>
    </>
  );
}

export default Input;
