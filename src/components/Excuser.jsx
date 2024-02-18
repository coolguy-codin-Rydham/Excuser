import { useState } from "react";
import Axios from "axios";

const Excuser = () => {
  const arr1 = ["Family", "Office", "Children", "College", "Party"];
  const arr2 = ["Funny", "Unbelievable", "Developers", "Gaming"];
  const [excuse, setExcuse] = useState("");
  const fetchData = (type) => {
    const newType = type.toLowerCase();
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${newType}`).then(
      (res) => {
        setExcuse(res.data[0].excuse);
        console.log("Done")
      }
    );
  };
  const fetchDataRandom = () => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse`).then((res) => {
      setExcuse(res.data[0].excuse);
      console.log("Done")
    });
  };

  return (
    <div className="flex flex-col items-center h-full justify-evenly ">
      <div className="flex flex-col items-center justify-center">
        <div className="py-16">
          <h1 className="text-5xl font-bold text-center text-white dropped">
            Random Excuse <br /> Generator
          </h1>
        </div>

        <div className="w-full">
          <h3 className="text-xl italic text-white">Choose which:</h3>
        </div>
        <div className="grid w-full grid-cols-5 pt-5 place-items-center">
          {arr1.map((item) => {
            return (
              <button
                onClick={() => fetchData(item)}
                className="w-full rounded-lg h-full px-3 py-1 text-xl font-bold transition-all bg-[#e1e1e1] border-2 border-black border-solid hover:invert hover:font-bold"
                key={item}
              >
                {" "}
                {item}{" "}
              </button>
            );
          })}
        </div>
        <div className="grid w-full grid-cols-5 pt-5 place-items-center">
          {arr2.map((item) => {
            return (
              <button
                onClick={() => fetchData(item)}
                className="w-full h-full px-3 py-1 rounded-lg text-xl font-bold transition-all bg-[#e1e1e1] border-2 border-black border-solid hover:invert hover:font-bold"
                key={item}
              >
                {" "}
                {item}{" "}
              </button>
            );
          })}
          <button
            className="w-full h-full px-3 py-1 text-xl rounded-lg font-bold transition-all bg-[#e1e1e1] border-2 border-black border-solid hover:invert hover:font-bold"
            onClick={fetchDataRandom}
          >
            Random
          </button>
        </div>
      </div>
      <div>
      </div>
      <div >
        <h1 className="pb-5 text-xl italic text-white">Here you go:</h1>
        <div className="flex items-center justify-center bg-[#e1e1e1] h-32 p-10 border-2 border-white border-solid w-[45rem] rounded-lg shadow-[#FF00D6_0px_12px_24px_-10px_inset]">
        <p className="text-3xl font-bold">{excuse}</p>
        </div>
      </div>
    </div>
  );
};

export default Excuser;
