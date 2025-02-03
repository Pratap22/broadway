const TextInput = ({ placeholder, buttonText, onClick, onChange, value }) => {
  return (
    <div className="bg-app-50 rounded-full pl-4 mt-6">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-10/12 bg-app-50 text-3xl pb-1 focus:outline-none placeholder-app-100"
        placeholder={placeholder}
      />
      {buttonText && (
        <button
          className="w-2/12 bg-app-blue hover:bg-app text-light-bg px-2 py-2 text-4xl rounded-r-full"
          onClick={onClick}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default TextInput;
