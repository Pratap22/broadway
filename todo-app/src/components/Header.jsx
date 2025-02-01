import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-app-50">
      <div className="flex justify-center">
        <img alt="logo" className="h-16 py-4" src={logo} />
      </div>
    </div>
  );
};

export default Header;
