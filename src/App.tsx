import { useState } from "react";
import UserInput from "./UserInput";
import total from "./total";

function App() {
  const [data, setData] = useState<
    { id: string; volume: number; percentage: number }[]
  >([{ id: `${crypto.randomUUID()}`, volume: 0, percentage: 0 }]);
  const inputFields = data.map((obj) => (
    <UserInput data={data} setData={setData} currentDrink={obj} key={obj.id} />
  ));
  const grandTotal = data.reduce(
    (acc, current) => acc + total(current.volume, current.percentage),
    0
  );

  return (
    <>
      <button
        onClick={() => {
          setData([
            ...data,
            { id: crypto.randomUUID(), volume: 0, percentage: 0 },
          ]);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setData(data.filter((item) => item.percentage || item.volume));
        }}
      >
        clean
      </button>
      <button
        onClick={() => {
          setData([{ id: `${crypto.randomUUID()}`, volume: 0, percentage: 0 }]);
        }}
      >
        clear
      </button>
      {inputFields}
      <label>Grand Total: {grandTotal}</label>
    </>
  );
}

export default App;
