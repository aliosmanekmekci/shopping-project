import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-custom1">MY JEWELRY STORE</h1>
        <div className="flex">
          <img
            src="src/assets/logos/search.svg"
            className="w-4 h-4 mr-6 cursor-pointer"
            alt="Search Icon"
          />
          <CartIcon />
        </div>
      </div>
      <h1 className="flex justify-center font-custom1 font-medium text-base">
        Moissanite Engagement Rings
      </h1>
    </>
  );
};

export default Header;
