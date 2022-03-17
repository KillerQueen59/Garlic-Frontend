import Image from "next/image";

export default function ContentLeft({ title, content, button }) {
  return (
    <>
      <div className="container mx-auto pb-40">
        <div className="flex flex-wrap pt-40">
          <img
            src="/circle_garlic.png"
            className="my-10 mx-10  h-72 w-72"
            alt=""
          />
          <div className="w-10/12 md:w-6/12 lg:w-8/12 text-justify ">
            <div className="text-5xl m-5 font-semibold text-black">{title}</div>
            <div className="m-5 text-black">{content}</div>
          </div>
        </div>
        <div className="flex">
          <div className="w-3/12"></div>
          <div className="m-5 cursor-pointer py-5 w-40 bg-primary-coco text-center text-white rounded-xl hover:bg-primary-darkcoco hover:text-white">
            {button}
          </div>
        </div>
      </div>
    </>
  );
}
