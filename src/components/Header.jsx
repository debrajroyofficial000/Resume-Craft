import logo from "/assets/logo.svg";

const Header = () => {
  return (
    <header className="border flex justify-center items-center shadow-md mb-4  w-full">
      <div className="w-[200px] py-2">
        <img src={logo} alt="logo" className="w-full object-contain" />
      </div>
    </header>
  );
};

export default Header;
