const MenuBar = () => {
  const menus = [
    { route: "#", label: "home" },
    { route: "#", label: "proyects" },
    { route: "#", label: "contact" },
  ];
  return (
    <div>
      {menus.map((menu) => (
        <a key={menu.label} href={menu.route} className="px-4">
          <span className="text-primary">#</span>
          {menu.label}
        </a>
      ))}
    </div>
  );
};

export default MenuBar;
