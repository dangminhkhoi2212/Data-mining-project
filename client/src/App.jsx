import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Model from "./components/model";
function App() {
  const [formData, setFormData] = useState({
    area: 0.0,
    perimeter: 0.0,
    majorAxisLength: 0.0,
    minorAxisLength: 0.0,
    eccentricity: 0.0,
    convexArea: 0.0,
    extent: 0.0,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("🚀 ~ handleChange ~ { name, value }:", { name, value });

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="App">
      <div className="my-10 mx-20 flex flex-col gap-5 items-center justify-center">
        <h1 className="italic font-semibold text-xl">Dự đoán loại gạo</h1>
        <form className="grid grid-cols-12 gap-5">
          <section className="col-span-4">
            <Form handleChange={handleChange} />
          </section>
          <section className="col-span-8">
            <Model formData={formData} />
          </section>
        </form>
      </div>
    </div>
  );
}

export default App;
