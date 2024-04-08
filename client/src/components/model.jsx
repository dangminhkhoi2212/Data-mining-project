import React from "react";
import axios from "axios";
import { minmaxScaler } from "./minmax";
const URL_SERVER = "http://127.0.0.1:5000";
// const URL_SERVER = "https://data-mining-project-rpdo.vercel.app";
const buttons = [
  {
    title: "Decision Tree",
    accuracy: "92.388",
    model: "DT",
  },
  { title: "Bayes", model: "BY", accuracy: 99 },
  {
    title: "Random forest",
    model: "RF",
    accuracy: "92.782",
  },
  { title: "MLP", model: "MLP", accuracy: "93.044" },
  { title: "KNN", model: "KNN", accuracy: "94.36" },
  { title: "SVC", model: "SVC", accuracy: 99 },
];
const Model = ({ formData, setPredict, setIsLoading }) => {
  const handlePredict = async (model) => {
    try {
      setIsLoading(true);
      console.log("🚀 ~ handlePredict ~ model:", model);
      const data = minmaxScaler(formData);

      console.log("🚀 ~ handlePredict ~ data:", data);
      const result = (
        await axios.post(
          `${URL_SERVER}/predict`,
          { data, model },
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
      ).data;
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      setPredict(result.prediction[0]);

      console.log("🚀 ~ handlePredict ~ result:", result);
    } catch (error) {
      console.log("🚀 ~ handlePredict ~ error:", error);
    }
  };

  return (
    <div className="ring-1 ring-black p-5 rounded-lg flex flex-col gap-2">
      {buttons.map((button) => (
        <div
          key={button.title}
          className="flex justify-between items-center hover:bg-[#fbdcd6] p-2 rounded-lg"
        >
          <div className="flex gap-2">
            <span className="font-medium">{button.title}</span>
            <span>|</span>
            <span className="italic">Độ chính xác: {button.accuracy}</span>
          </div>
          <button
            type="button"
            onClick={() => handlePredict(button.model)}
            className="ring-1 px-3 py-2 ring-black rounded-lg hover:bg-[#fca699] font-semibold hover:ring-[#fca699] hover:text-white"
          >
            Dự đoán
          </button>
        </div>
      ))}
    </div>
  );
};

export default Model;
