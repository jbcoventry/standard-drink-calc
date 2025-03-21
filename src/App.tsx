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

      <p className="text-center">Total: {grandTotal.toFixed(1)}</p>

      <div id="inputFields">{inputFields}</div>
    </>
  );
}

export default App;
