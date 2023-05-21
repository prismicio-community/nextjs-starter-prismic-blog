import React from "react";
import cn from "@/src/lib/utils/cn";
import { FieldErrors } from "react-hook-form";

import { ValidationSchema } from "./Contact/validationSchema";

type GenericFormInputProps = {
  name: keyof ValidationSchema;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  errors: FieldErrors<ValidationSchema>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const GenericFormInput = React.forwardRef<
  HTMLInputElement,
  GenericFormInputProps
>(function GenericFormInputComponent(
  {
    name,
    label,
    placeholder = "",
    defaultValue = "",
    errors,
    onChange,
    onBlur,
  },
  ref
) {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        className={cn(
          `h-12 w-full border border-white bg-transparent px-3 py-1.5 text-right font-hebrew text-white
        outline-none transition-all duration-150 ease-in-out
        placeholder:font-hebrew placeholder:text-gray-500`,
          errors?.[name] && `border-red-500`
        )}
      />
      {/* {errors[name] && <p>{(errors[name] as FieldError).message}</p>} */}
    </div>
  );
});

GenericFormInput.displayName = "GenericFormInput";

export default GenericFormInput;
