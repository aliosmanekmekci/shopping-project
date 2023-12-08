import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">MY JEWELRY STORE</h1>
        <div className="flex">
          <img
            src="src/assets/logos/search.svg"
            className="text-3xl mr-6 cursor-pointer"
            alt="Search Icon"
          />
          <CartIcon />
        </div>
      </div>
      <h1 className="flex justify-center font-medium text-base">
        Moissanite Engagement Rings
      </h1>
    </>
  );
};

export default Header;
