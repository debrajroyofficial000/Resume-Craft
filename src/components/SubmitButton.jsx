function SubmitButton({ handler }) {
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border rounded"
      onClick={handler}
    >
      Submit
    </button>
  );
}

export default SubmitButton;
