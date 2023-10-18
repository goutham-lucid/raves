import React from "react";
import CustomInputText from "./controls/CustomInputText";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import CustomInputTextArea from "./controls/CustomInputTextArea";
import CustomInputMask from "./controls/CustomInputMask";

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const required = false;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form-body border-round w-full flex flex-column justify-content-center align-items-center p-2">
      <div className="text-2xl font-bold">Preregister </div>
      <div className="text-2xl font-bold">for an Invitation</div>
      <div className="text-500 my-2 text-sm">
        Onboarding by Invitation Only for Alpha Stage
      </div>
      <div className="w-full px-3">
        <CustomInputText
          control={control}
          required={required}
          errors={errors}
          //   label="Company Name"
          name="companyName"
          rules={{ required: "Company Name is reuired" }}
          placeholder="Company Name"
        />
        <CustomInputText
          control={control}
          required={required}
          errors={errors}
          name="email"
          //   label="Email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email format",
            },
          }}
          placeholder="Email ID"
        />
        <CustomInputMask
          control={control}
          required={required}
          errors={errors}
          mask="(999)-999-9999"
          //   label="Phone Number"
          name="phoneNumber"
          rules={{ required: "Phone Number is reuired" }}
          placeholder="Phone Number"
        />
        <CustomInputTextArea
          control={control}
          required={required}
          errors={errors}
          rules={{ required: "Depscription is reuired" }}
          name="description"
          //   label="Description"
          placeholder="what is the biggest challenge you are facing with your current orkfource management software?"
        />
        <Button
          label="Submit"
          onClick={handleSubmit(onSubmit)}
          className="w-full mb-3 company-primary-btn py-2"
        />
      </div>
    </div>
  );
};

export default Form;
