const Tabs = ({ tabs = [], selectedKey, onSelectTab }) => {
  const style = `w-1/${tabs.length} text-center border-b-4 cursor-pointer`;
  return (
    <div className="flex">
      {tabs.map((tab, index) => (
        <div
            key={`${tab.key}-${index}`}
          className={`${style} ${
            selectedKey === tab.key ? "border-app" : "text-gray-500"
          }`}
          onClick={() => {
            onSelectTab(tab.key);
          }}
        >
          <p className="text-3xl font-semibold py-2">{tab.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
