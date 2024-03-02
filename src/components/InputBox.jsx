function InputBox({ labelText, children }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {labelText}
      </label>
      {children}
    </div>
  );
}

export default InputBox;
