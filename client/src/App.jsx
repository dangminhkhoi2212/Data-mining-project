import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Model from "./components/model";
import Predict from "./components/predict";
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
  const [predict, setPredict] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("🚀 ~ handleChange ~ { name, value }:", { name, value });

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="App ">
      <div className="bg-[url('https://slidescorner.com/wp-content/uploads/2024/02/Aesthetic-Pastel-Cute-PowerPoint-Background-Organic-Shapes-Stars-by-SlidesCorner.com_.jpg')] object-cover object-center bg-no-repeat h-screen w-screen flex flex-col gap-5 items-center justify-center row-auto">
        <h1 className="italic font-semibold text-xl">Dự đoán loại gạo</h1>
        <form className="grid grid-cols-12 gap-5">
          <section className="col-span-4">
            <Form handleChange={handleChange} />
          </section>
          <section className="col-span-8 flex flex-col gap-3 row-span-1">
            <Model formData={formData} setPredict={setPredict} />
            <Predict predict={predict}></Predict>
          </section>
        </form>
      </div>
    </div>
  );
}

export default App;
