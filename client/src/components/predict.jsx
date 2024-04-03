import React from "react";

const Predict = ({ predict }) => {
  return (
    <div className="rounded-lg ring-1 ring-black flex flex-grow justify-center flex-col items-center">
      {predict ? (
        <p>
          Đây là loại lúa: <span className="font-bold">{predict}</span>
        </p>
      ) : (
        <p>Kết quả dự đoán...</p>
      )}
    </div>
  );
};

export default Predict;
