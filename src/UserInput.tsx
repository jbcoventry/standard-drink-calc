import total from "./total";

type UserInputProps = {
  data: { id: number; volume: number; percentage: number }[];
  setData: React.Dispatch<
    React.SetStateAction<{ id: number; volume: number; percentage: number }[]>
  >;
  currentDrink: { id: number; volume: number; percentage: number };
};

function UserInput({ data, setData, currentDrink }: UserInputProps) {
  function handleSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setData(
      data.map((drink) => {
        if (drink.id === currentDrink.id) {
          return { ...drink, [e.target.name]: "" };
        } else {
          return drink;
        }
      })
    );
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData(
      data.map((drink) => {
        if (drink.id === currentDrink.id) {
          return { ...drink, [e.target.name]: e.target.value };
        } else {
          return drink;
        }
      })
    );
  }

  return (
    <div
      id={currentDrink.id}
      className="shadow-md p-2 my-4 mx-auto bg-white rounded-sm w-md max-w-11/12"
    >
      <label className="mr-4">
        <input
          className="border-solid border-black  border rounded-sm p-2 m-2 w-20"
          type="number"
          name="volume"
          inputMode="decimal"
          value={currentDrink.volume}
          onSelect={handleSelect}
          onChange={handleChange}
        />
        ml
      </label>
      <label className="mr-4">
        <input
          className="border-solid border-black  border rounded-sm p-2 m-2 w-20"
          type="number"
          name="percentage"
          inputMode="decimal"
          value={currentDrink.percentage}
          onSelect={handleSelect}
          onChange={handleChange}
        />
        %
      </label>
      <label>
        {total(currentDrink.volume, currentDrink.percentage).toFixed(1)}
      </label>
    </div>
  );
}

export default UserInput;
