import React from "react";
import axios from "axios";
const URL_SERVER = "http://127.0.0.1:5000";
const buttons = [
  {
    title: "Decision Tree",

    accuracy: 99,
    model: "../model/decision_tree_model.json",
  },
  { title: "Bayes", model: "", accuracy: 99 },
  {
    title: "Random forest ",

    accuracy: 99,
    path: "client/src/model/RF_model.pkl",
  },
  { title: "MLP", model: "", accuracy: 99 },
  { title: "KNN", model: "", accuracy: 99 },
  { title: "SVM", model: "", accuracy: 99 },
];
const Model = ({ formData }) => {
  const handlePredict = async (model_path) => {
    try {
      console.log("🚀 ~ handlePredict ~ model:", model_path);
      const data = Object.keys(formData).map((key) => formData[key]);
      console.log("🚀 ~ handlePredict ~ data:", data);

      const result = (await axios.post(`${URL_SERVER}/predict`, { data })).data;

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
