import Header from "../components/Header";

export default function HeaderNotSticky({ active, handleClick }) {
  return (
    <div className=" top-0  shadow-xl">
      <div className="md:hidden lg:hidden bg-primary-white">
        <label for="my-drawer" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
              stroke="black"
            ></path>
          </svg>
        </label>
      </div>
      <label for="my-drawer">
        <div
          className={`bg-primary-white w-full hover:bg-primary-lesswhite hidden md:block lg:block  `}
          onClick={handleClick}
        >
          <div className="container p-5">
            <Header />
          </div>
        </div>
      </label>
    </div>
  );
}