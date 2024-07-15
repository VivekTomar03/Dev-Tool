import React, { useContext } from "react";
import { RequestsContext } from "../ContexApi/ApiContext";

const CheckboxComponent = () => {
  const { setSelectedRequest, thriedParty, setThirdParty } =
    useContext(RequestsContext);
  return (
    <div className="fixed w-full mt-40 bg-devtools-bg p-2 rounded-md flex space-x-4">
      <label className="flex items-center text-devtools-text">
        <input
          type="checkbox"
          className="form-checkbox text-devtools-text border-devtools-border focus:ring-devtools-border"
        />
        <span className="ml-2">Blocked response cookies</span>
      </label>
      <label className="flex items-center text-devtools-text">
        <input
          type="checkbox"
          className="form-checkbox text-devtools-text border-devtools-border focus:ring-devtools-border"
        />
        <span className="ml-2">Blocked requests</span>
      </label>
      <label className="flex items-center text-devtools-text">
        <input
          type="checkbox"
          checked={!thriedParty}
          onChange={() => {
            setThirdParty(!thriedParty);
            setSelectedRequest(null);
          }}
          className="form-checkbox text-devtools-text border-devtools-border focus:ring-devtools-border"
        />
        <span className="ml-2">3rd-party requests</span>
      </label>
    </div>
  );
};

export default CheckboxComponent;
