import { useState } from "react";
import UserInput from "./UserInput";
import total from "./total";

function App() {
  const [data, setData] = useState<
    { id: string; volume: number; percentage: number }[]
  >([{ id: `${Date.now()}`, volume: 0, percentage: 0 }]);
  const inputFields = data.map((obj) => (
    <UserInput data={data} setData={setData} currentDrink={obj} key={obj.id} />
  ));
  const grandTotal = data.reduce(
    (acc, current) => acc + total(current.volume, current.percentage),
    0
  );

  return (
    <>
      <div className="h-5 w-auto bg-green-300"></div>
      <h1 className="text-center text-2xl h-16 p-2 m-2">
        Standard Drink Calculator
      </h1>
      <div
        id="buttons"
        className="p-2 m-auto grid grid-cols-3 w-80 justify-items-center"
      >
        <button
          className="bg-green-300 rounded-sm cursor-pointer hover:bg-green-400 p-2 m-2 w-16"
          onClick={() => {
            setData([...data, { id: Date.now(), volume: 0, percentage: 0 }]);
          }}
        >
          Add
        </button>
        <button
          className="bg-yellow-300 rounded-sm cursor-pointer hover:bg-yellow-400 p-2 m-2 w-16"
          onClick={() => {
            setData(data.filter((item) => item.percentage || item.volume));
          }}
        >
          clean
        </button>
        <button
          className="bg-red-300 rounded-sm cursor-pointer hover:bg-red-400 p-2 m-2 w-16"
          onClick={() => {
            setData([{ id: `${Date.now()}`, volume: 0, percentage: 0 }]);
          }}
        >
          clear
        </button>
      </div>
      <p className="text-center">Total: {grandTotal.toFixed(1)}</p>

      <div id="inputFields">{inputFields}</div>
    </>
  );
}

export default App;
