import IconOfNavBar from "./IconOfNavBar";
import MenuBar from "./MenuBar";

const NavBar = () => {
  return (
    <nav className="bg-navbar px-3 md:px-12 fixed top-0 w-full z-50">
      <div className="container md:px-12 flex flex-wrap items-center justify-between mx-auto py-4">
        <IconOfNavBar />
        <MenuBar />
      </div>
    </nav>
  );
};

export default NavBar;
