import { InputMask } from "primereact/inputmask";
import { classNames } from "primereact/utils";
import React from "react";
import { Controller } from "react-hook-form";
import getFormErrorMessage from "./getFormErrorMessage";

const CustomInputMask = ({
  control,
  errors,
  name,
  label,
  defaultValue,
  required,
  helpMsg,
  className,
  placeholder,
  disabled,
  requiredMsg,
  mask,
  rules,
  value,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className={className}>
          <label
            htmlFor={field.name}
            className={classNames({ "p-error": errors.value })}
          >
            {label}
            {required && <span className="text-red-300"> *</span>}
          </label>
          <InputMask
            {...field}
            id={field.name}
            className={classNames(className, "w-full  border-none input-txt", {
              "p-invalid": fieldState.error,
            })}
            placeholder={placeholder}
            disabled={disabled}
            mask={mask}
            value={field.value}
            {...rest}
          />
          {getFormErrorMessage(errors, field.name)}
        </div>
      )}
    />
  );
};

export default CustomInputMask;
