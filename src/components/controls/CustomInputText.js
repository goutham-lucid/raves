import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import React from "react";
import { Controller } from "react-hook-form";

import getFormErrorMessage from "./getFormErrorMessage";

const CustomInputText = ({
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
  rules,
  requiredMsg,
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
            {required && <span className="text-red-500"> *</span>}
          </label>
          <InputText
            {...field}
            id={field.name}
            className={classNames(className, "w-full  border-none input-txt", { "p-invalid": fieldState.error })}
            placeholder={placeholder}
            disabled={disabled}
            {...rest}
          />
          <small id="username-help">{helpMsg}</small>
          {getFormErrorMessage(errors, field.name)}
        </div>
      )}
    />
  );
};

export default CustomInputText;
