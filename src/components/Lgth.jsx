import { useState } from "react";


const Lgth = () => {
    
  const [isOn, setIsOn] = useState(false); // Xaaladda toggle-ka (On/Off)

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
      {/* Sawirada */}
      <div className="flex justify-center">
        {isOn ? (
          <img src="./src/assets/1.png" alt="On" width="200px" />
        ) : (
          <img src="./src/assets/2.png" alt="Off" width="180px" />
        )}
      </div>

      {/* Badhamada */}
      <div className="flex justify-center pt-20 gap-4">
        <button
          className={`bg-white text-black py-5 px-10 ${
            isOn ? "hidden" : ""
          }`}
          onClick={() => setIsOn(true)}
        >
          On
        </button>
        <button
          className={`bg-white text-black py-5 px-10 ${
            !isOn ? "hidden" : ""
          }`}
          onClick={() => setIsOn(false)}
        >
          Off
        </button>
      </div>
    </div>
  );
};


export default Lgth

