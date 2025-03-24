import total from "./total";
import { drinkType } from "./types";

type UserInputProps = {
  data: drinkType[];
  setData: React.Dispatch<React.SetStateAction<drinkType[]>>;
  currentDrink: drinkType;
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
    setData((data) =>
      data.map((drink) => {
        if (drink.id === currentDrink.id) {
          return { ...drink, [e.target.name]: e.target.value };
        } else {
          return drink;
        }
      })
    );
    setData((data) => data.filter((item) => item.percentage || item.volume));
    setData((data) => [
      ...data,
      { id: `${Date.now()}`, volume: "", percentage: "" },
    ]);
  }

  function handleClick() {
    setData((data) => data.filter((item) => item.id !== currentDrink.id));
  }

  return (
    <div
      id={currentDrink.id}
      className="shadow-md p-2 my-4 mx-auto bg-white rounded-sm w-md max-w-11/12 grid grid-cols-4 place-items-center"
    >
      <label className="">
        <input
          className="border-solid border-black  border rounded-sm p-2 m-2 w-16 appearance-none"
          type="number"
          name="volume"
          inputMode="decimal"
          autoComplete="off"
          value={currentDrink.volume}
          onSelect={handleSelect}
          onChange={handleChange}
        />
        ml
      </label>
      <label className="">
        <input
          className="border-solid border-black  border rounded-sm p-2 m-2 w-16 appearance-none"
          type="number"
          name="percentage"
          inputMode="decimal"
          autoComplete="off"
          value={currentDrink.percentage}
          onSelect={handleSelect}
          onChange={handleChange}
        />
        %
      </label>
      <div className="">
        {total(
          Number(currentDrink.volume),
          Number(currentDrink.percentage)
        ).toFixed(1)}
      </div>
      <button
        className="bg-red-400 rounded-sm cursor-pointer hover:bg-red-500 p-2"
        onClick={handleClick}
      >
        Remove
      </button>
    </div>
  );
}

export default UserInput;
