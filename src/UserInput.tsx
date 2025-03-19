import total from "./total";

type UserInputProps = {
  data: { id: string; volume: number; percentage: number }[];
  setData: React.Dispatch<
    React.SetStateAction<{ id: string; volume: number; percentage: number }[]>
  >;
  currentDrink: { id: string; volume: number; percentage: number };
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
    <div id={currentDrink.id}>
      <label>
        Volume:
        <input
          type="number"
          name="volume"
          inputMode="decimal"
          value={currentDrink.volume}
          onSelect={handleSelect}
          onChange={handleChange}
        />
      </label>
      <label>
        Percentage:
        <input
          type="number"
          name="percentage"
          inputMode="decimal"
          value={currentDrink.percentage}
          onSelect={handleSelect}
          onChange={handleChange}
        />
      </label>
      <label>
        Total: {total(currentDrink.volume, currentDrink.percentage)}
      </label>
    </div>
  );
}

export default UserInput;
