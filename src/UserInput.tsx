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

  return (
    <div
      id={currentDrink.id}
      className="shadow-md p-2 my-4 mx-auto bg-white rounded-sm w-md max-w-11/12"
    >
      <label className="mr-4">
        <input
          className="border-solid border-black  border rounded-sm p-2 m-2 w-20 appearance-none"
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
      <label className="mr-4">
        <input
          className="border-solid border-black  border rounded-sm p-2 m-2 w-20 appearance-none"
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
      <label>
        {total(
          Number(currentDrink.volume),
          Number(currentDrink.percentage)
        ).toFixed(1)}
      </label>
    </div>
  );
}

export default UserInput;
