import React from "react";

const Bottom = () => {
  return (
    <section className="w-full mb-6">
      <p className="text-2xl font-bold text-dark-grayish-blue-text py-6">
        Overview - Today
      </p>
      <div className="grid grid-cols-1 gap-8 xs:gap-4 xs:grid-cols-2 md:grid-cols-4">
        <article className="w-full bg-light-grayish-blue-card-bg rounded-md p-5">
          <div className="w-full flex items-center justify-between mb-5 text-dark-grayish-blue-text font-semibold text-sm">
            <p>Page Views</p>
            <img src="./images/icon-facebook.svg" alt="icon" />
          </div>
          <div className="flex justify-between items-baseline">
            <p className="text-2xl font-bold text-very-dark-blue-text">87</p>
            <div className="flex items-center justify-center">
              <img
                className="w-[12px] h-[6px]"
                src="./images/icon-up.svg"
                alt="up-icon"
              />
              <p className="text-lime-green font-semibold text-sm ml-[4px]">
                3%
              </p>
            </div>
          </div>
        </article>
        <article className="w-full bg-light-grayish-blue-card-bg rounded-md p-5">
          <div className="w-full flex items-center justify-between mb-5 text-dark-grayish-blue-text font-semibold text-sm">
            <p>Likes</p>
            <img src="./images/icon-facebook.svg" alt="icon" />
          </div>
          <div className="flex justify-between items-baseline">
            <p className="text-2xl font-bold text-very-dark-blue-text">52</p>
            <div className="flex items-center justify-center">
              <img
                className="w-[12px] h-[6px]"
                src="./images/icon-down.svg"
                alt="up-icon"
              />
              <p className="text-bright-red font-semibold text-sm ml-[4px]">
                2%
              </p>
            </div>
          </div>
        </article>
        {/* -------------------------------------- */}
        <article className="w-full bg-light-grayish-blue-card-bg rounded-md p-5">
          <div className="w-full flex items-center justify-between mb-5 text-dark-grayish-blue-text font-semibold text-sm">
            <p>Likes</p>
            <img src="./images/icon-instagram.svg" alt="icon" />
          </div>
          <div className="flex justify-between items-baseline">
            <p className="text-2xl font-bold text-very-dark-blue-text">5462</p>
            <div className="flex items-center justify-center">
              <img
                className="w-[12px] h-[6px]"
                src="./images/icon-up.svg"
                alt="up-icon"
              />
              <p className="text-lime-green font-semibold text-sm ml-[4px]">
                2257%
              </p>
            </div>
          </div>
        </article>
        <article className="w-full bg-light-grayish-blue-card-bg rounded-md p-5">
          <div className="w-full flex items-center justify-between mb-5 text-dark-grayish-blue-text font-semibold text-sm">
            <p>Profile Views</p>
            <img src="./images/icon-instagram.svg" alt="icon" />
          </div>
          <div className="flex justify-between items-baseline">
            <p className="text-2xl font-bold text-very-dark-blue-text">52k</p>
            <div className="flex items-center justify-center">
              <img
                className="w-[12px] h-[6px]"
                src="./images/icon-up.svg"
                alt="up-icon"
              />
              <p className="text-lime-green font-semibold text-sm ml-[4px]">
                1375%
              </p>
            </div>
          </div>
        </article>
        {/* -------------------------------------- */}
        <article className="w-full bg-light-grayish-blue-card-bg rounded-md p-5">
          <div className="w-full flex items-center justify-between mb-5 text-dark-grayish-blue-text font-semibold text-sm">
            <p>Retweets</p>
            <img src="./images/icon-twitter.svg" alt="icon" />
          </div>
          <div className="flex justify-between items-baseline">
            <p className="text-2xl font-bold text-very-dark-blue-text">117</p>
            <div className="flex items-center justify-center">
              <img
                className="w-[12px] h-[6px]"
                src="./images/icon-up.svg"
                alt="up-icon"
              />
              <p className="text-lime-green font-semibold text-sm ml-[4px]">
                303%
              </p>
            </div>
          </div>
        </article>
        <article className="w-full bg-light-grayish-blue-card-bg rounded-md p-5">
          <div className="w-full flex items-center justify-between mb-5 text-dark-grayish-blue-text font-semibold text-sm">
            <p>Likes</p>
            <img src="./images/icon-twitter.svg" alt="icon" />
          </div>
          <div className="flex justify-between items-baseline">
            <p className="text-2xl font-bold text-very-dark-blue-text">507</p>
            <div className="flex items-center justify-center">
              <img
                className="w-[12px] h-[6px]"
                src="./images/icon-up.svg"
                alt="up-icon"
              />
              <p className="text-lime-green font-semibold text-sm ml-[4px]">
                553%
              </p>
            </div>
          </div>
        </article>
        {/* -------------------------------------- */}
        <article className="w-full bg-light-grayish-blue-card-bg rounded-md p-5">
          <div className="w-full flex items-center justify-between mb-5 text-dark-grayish-blue-text font-semibold text-sm">
            <p>Likes</p>
            <img src="./images/icon-youtube.svg" alt="icon" />
          </div>
          <div className="flex justify-between items-baseline">
            <p className="text-2xl font-bold text-very-dark-blue-text">107</p>
            <div className="flex items-center justify-center">
              <img
                className="w-[12px] h-[6px]"
                src="./images/icon-down.svg"
                alt="up-icon"
              />
              <p className="text-bright-red font-semibold text-sm ml-[4px]">
                19%
              </p>
            </div>
          </div>
        </article>
        <article className="w-full bg-light-grayish-blue-card-bg rounded-md p-5">
          <div className="w-full flex items-center justify-between mb-5 text-dark-grayish-blue-text font-semibold text-sm">
            <p>Total Views</p>
            <img src="./images/icon-youtube.svg" alt="icon" />
          </div>
          <div className="flex justify-between items-baseline">
            <p className="text-2xl font-bold text-very-dark-blue-text">1407</p>
            <div className="flex items-center justify-center">
              <img
                className="w-[12px] h-[6px]"
                src="./images/icon-down.svg"
                alt="up-icon"
              />
              <p className="text-bright-red font-semibold text-sm ml-[4px]">
                12%
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Bottom;
