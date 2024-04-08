import React from "react";

const Predict = ({ predict, isLoading }) => {
  return (
    <div className="rounded-lg ring-1 ring-black flex flex-grow justify-center flex-col items-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : predict ? (
        <p>
          Đây là loại gạo: <span className="font-bold">{predict}</span>
        </p>
      ) : (
        <p>Kết quả dự đoán...</p>
      )}
    </div>
  );
};

export default Predict;
