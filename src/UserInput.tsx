type UserInputProps = {
  data: { volume: number; percentage: number };
  setData: React.Dispatch<
    React.SetStateAction<{ volume: number; percentage: number }>
  >;
};

function UserInput({ data, setData }: UserInputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  return (
    <>
      <label>
        Volume:
        <input name="volume" value={data.volume} onChange={handleChange} />
      </label>
      <label>
        Percentage:
        <input
          name="percentage"
          value={data.percentage}
          onChange={handleChange}
        />
      </label>
    </>
  );
}

export default UserInput;
