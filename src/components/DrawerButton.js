import React from "react";
import Link from "next/Link";
function DrawerButton({title,link}) {

  return (
    <div>
      <div class="my-5 hover:text-gray-500 cursor-pointer px-4">
        <Link href={link}>
          <a>{title}</a>
        </Link>
      </div>
    </div>
  );
}

export default DrawerButton;
