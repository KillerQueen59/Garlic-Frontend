import Link from "next/link";
import Header from "./Header";
import { useState } from "react";
import ProfileAccount from "../ProfileAccount";
import DrawerButton from "../DrawerButton";

export default function NavigationDrawer({ handleClick }) {
  const [isLogin, setLogin] = useState(false);
  return (
    <>
      <label for="my-drawer" class="drawer-overlay" />
      <div class="flex flex-col overflow-y-auto w-80 bg-plant-darker text-white">
        <label for="my-drawer" onClick={handleClick} class="p-4 ">
          <Header />
        </label>
        <DrawerButton title="Home" link="/"/>
        <DrawerButton title="About" link="/about"/>
        <DrawerButton title="Peta Bawang Putih" link="/maps"/>
        <DrawerButton title="Input Pengguna" link="/input"/>       
        <div class="flex-grow"></div>
        {isLogin ? (
         <ProfileAccount/>
        ) : (
          <div class="py-4  mx-4 mb-4 hover:text-gray-500 hover:bg-plant-brighter cursor-pointer bg-plant-normal rounded-xl">
            <Link href="/login">
              <div class="text-center">Login</div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
