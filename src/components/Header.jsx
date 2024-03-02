import logo from "../assets/logo.png";
function Header() {
  return (
    <header className=" flex justify-center items-center p-4 bg-slate-950">
      <div className="w-80 max-w-full">
        <img src={logo} alt="logo" className="object-contain w-full" />
      </div>
    </header>
  );
}

export default Header;
