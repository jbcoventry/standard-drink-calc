import { useState } from "react";
import UserInput from "./UserInput";
import total from "./total";

function App() {
  const [data, setData] = useState<
    { id: string; volume: number; percentage: number }[]
  >([
    { id: "idgoeshere", volume: 1, percentage: 2 },
    { id: "anotherid", volume: 3, percentage: 4 },
  ]);
  const inputFields = data.map((obj) => (
    <UserInput data={data} setData={setData} currentDrink={obj} key={obj.id} />
  ));
  const grandTotal = data.reduce(
    (acc, current) => acc + total(current.volume, current.percentage),
    0
  );

  return (
    <>
      {inputFields}
      <label>Grand Total: {grandTotal}</label>
    </>
  );
}

export default App;
