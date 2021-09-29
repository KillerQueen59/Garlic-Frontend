import React from "react";
import Link from "next/Link";
function ProfileAccount() {
  return (
    <div>
      <div class="flex py-4 mx-4 mb-4 hover:text-gray-500 cursor-pointer bg-coco-normal rounded-xl">
        <Link href="/login">
          <>
            <img src="circle.png" class="w-16 h-16 m-4" />
            <div class="mx-5  text-white text-xl">Name</div>
          </>
        </Link>
      </div>
    </div>
  );
}

export default ProfileAccount;
