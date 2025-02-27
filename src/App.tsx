import { useState } from "react";
import UserInput from "./UserInput";

function App() {
  const [data, setData] = useState({ volume: 10, percentage: 50 });

  return (
    <>
      <h1>Standard Drinks Calculator</h1>
      <UserInput {...{ data, setData }} />
      
    </>
  );
}

export default App;
