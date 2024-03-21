import React from "react";

const Form = ({ handleChange }) => {
  const inputs = [
    { type: "number", label: "Area", name: "area" },
    { type: "number", label: "Perimeter", name: "perimeter" },
    { type: "number", label: "Major_Axis_Length", name: "majorAxisLength" },
    { type: "number", label: "Minor_Axis_Length", name: "minorAxisLength" },
    { type: "number", label: "Eccentricity", name: "eccentricity" },
    { type: "number", label: "Convex_Area", name: "convexArea" },
    { type: "number", label: "Extent", name: "extent" },
  ];
  return (
    <div className="p-5 rounded-md ring-1 ring-black flex flex-col gap-2">
      {inputs.map((input) => (
        <div
          key={input.label}
          className="flex flex-col justify-items-start items-start"
        >
          <label htmlFor="area" className="font-medium ">
            {input.label}
          </label>
          <input
            type={input.type}
            id={input.label}
            name={input.name}
            required
            onChange={(e) => handleChange(e)}
            className="ring-1 ring-black rounded-lg px-5 py-2"
          />
        </div>
      ))}
    </div>
  );
};

export default Form;
