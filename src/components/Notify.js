import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Notify = () => {
  const [notifyButtonLoading, setNotifyButtonLoading] = useState(false);

  const onNotifyButtonClick = () => {
    setNotifyButtonLoading(false);

    setTimeout(() => {
      setNotifyButtonLoading(false);
    }, 2000);
  };
  return (
      <div className="p-inputgroup  lg:w-6">
        <InputText placeholder="Enter Your Email Here..." className="input-txt w-full"/>
        <Button
          label="Notify Me"
          className="company-primary-btn text-xs w-5"
          loading={notifyButtonLoading}
          onClick={onNotifyButtonClick}
        />
      </div>
  );
};

export default Notify;

