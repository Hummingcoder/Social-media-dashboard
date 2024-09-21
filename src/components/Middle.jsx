import React from "react";

const Middle = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8 xs:gap-6 my-6">
      {/* --------------------------------------- */}
      <section className="w-full  overflow-hidden rounded-md">
        <article>
          <div className="w-full h-[5px] bg-facebook"></div>
          <section className="w-full h-full p-6 bg-light-grayish-blue-card-bg gap-6 flex items-center justify-center flex-col">
            <div className="flex items-center justify-center gap-3">
              <img src="./images/icon-facebook.svg" alt="facebook-icon" />
              <p className="text-very-dark-blue-text">@nathanf</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-very-dark-blue-text font-bold leading-tight tracking-wider">
                1987
              </p>
              <p className="uppercase text-xs text-dark-grayish-blue-text tracking-[6px]">
                followers
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-[12px]"
                src="./images/icon-up.svg"
                alt="up-icon"
              />
              <p className="text-lime-green font-semibold text-sm ml-2">
                12 Today
              </p>
            </div>
          </section>
        </article>
      </section>
      {/* --------------------------------------- */}
      <section className="w-full  overflow-hidden rounded-md">
        <article>
          <div className="w-full h-[5px] bg-twitter"></div>
          <section className="w-full h-full p-6 bg-light-grayish-blue-card-bg gap-6 flex items-center justify-center flex-col">
            <div className="flex items-center justify-center gap-3">
              <img src="./images/icon-twitter.svg" alt="facebook-icon" />
              <p className="text-very-dark-blue-text">@nathanf</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-very-dark-blue-text font-bold leading-tight tracking-wider">
                1044
              </p>
              <p className="uppercase text-xs text-dark-grayish-blue-text tracking-[6px]">
                followers
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-[12px]"
                src="./images/icon-up.svg"
                alt="up-icon"
              />
              <p className="text-lime-green font-semibold text-sm ml-2">
                99 Today
              </p>
            </div>
          </section>
        </article>
      </section>
      {/* --------------------------------------- */}
      <section className="w-full  overflow-hidden rounded-md">
        <article>
          <div className="w-full h-[5px] bg-gradient-to-r from-instagram-gradient-start to-instagram-gradient-end"></div>
          <section className="w-full h-full p-6 bg-light-grayish-blue-card-bg gap-6 flex items-center justify-center flex-col">
            <div className="flex items-center justify-center gap-3">
              <img src="./images/icon-instagram.svg" alt="facebook-icon" />
              <p className="text-very-dark-blue-text">@nathanf</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-very-dark-blue-text font-bold leading-tight tracking-wider">
                11k
              </p>
              <p className="uppercase text-xs text-dark-grayish-blue-text tracking-[6px]">
                followers
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-[12px]"
                src="./images/icon-up.svg"
                alt="up-icon"
              />
              <p className="text-lime-green font-semibold text-sm ml-2">
                1099 Today
              </p>
            </div>
          </section>
        </article>
      </section>
      {/* --------------------------------------- */}
      <section className="w-full  overflow-hidden rounded-md">
        <article>
          <div className="w-full h-[5px] bg-youtube"></div>
          <section className="w-full h-full p-6 bg-light-grayish-blue-card-bg gap-6 flex items-center justify-center flex-col">
            <div className="flex items-center justify-center gap-3">
              <img src="./images/icon-youtube.svg" alt="facebook-icon" />
              <p className="text-very-dark-blue-text">@nathanf</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-very-dark-blue-text font-bold leading-tight tracking-wider">
                8239
              </p>
              <p className="uppercase text-xs text-dark-grayish-blue-text tracking-[6px]">
                subscribers
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-[12px]"
                src="./images/icon-down.svg"
                alt="up-icon"
              />
              <p className="text-bright-red font-semibold text-sm ml-2">
                99 Today
              </p>
            </div>
          </section>
        </article>
      </section>
      {/* --------------------------------------- */}
    </div>
  );
};

export default Middle;
