const Top = ({ handleDarkmode, darkmodeOn }) => {
  return (
    <section className="w-full  max-w-[1240px] flex flex-col md:flex-row md:justify-between justify-start items-start py-4">
      <div className="w-full pb-5 border-b md:border-none border-[#9ca2b8]">
        <h1 className="text-2xl md:text-3xl font-bold text-very-dark-blue-text">
          Social Media Dashboard
        </h1>
        <p className="text-md text-dark-grayish-blue-text font-semibold">
          Total Followers: 23,004
        </p>
      </div>
      <div className="pt-5 w-full flex justify-between md:justify-end gap-4 items-center">
        <p className="font-semibold text-md text-dark-grayish-blue-text">
          Dark Mode
        </p>
        <button
          onClick={handleDarkmode}
          className={` ${
            darkmodeOn === "dark"
              ? "bg-gradient-to-tr from-blue-400 to-lime-green"
              : " bg-[#b8bdd0]"
          } w-[50px] relative h-[24px] p-[4px]  rounded-full `}
        >
          <div
            className={`w-[16px] absolute top-[4px] duration-200  ${
              darkmodeOn === "dark"
                ? "left-[4px] bg-slate-800 "
                : "left-[30px] bg-white "
            } rounded-full h-[16px] `}
          ></div>
        </button>
      </div>
    </section>
  );
};

export default Top;
