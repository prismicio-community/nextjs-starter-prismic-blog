import React from "react";
import { FieldError, FieldErrors } from "react-hook-form";
import tw from "twin.macro";
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
        className="without-ring"
        css={[
          tw`bg-transparent border-white border text-white h-12 text-right w-full py-1.5 px-3 outline-none
            transition-all duration-150 ease-in-out
            font-montserrat
            placeholder:text-gray-500
            `,
          errors?.[name] && tw`border-red-500`,
        ]}
      />
      {/* {errors[name] && <p>{(errors[name] as FieldError).message}</p>} */}
    </div>
  );
});

GenericFormInput.displayName = "GenericFormInput";

export default GenericFormInput;
