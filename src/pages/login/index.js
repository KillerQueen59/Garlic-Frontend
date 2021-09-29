import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [isLogin, setLogin] = useState(false);

  const handleClick = () => {
    setLogin(!isLogin);
  };

  const ConditionalLink = ({ children, to, condition }) =>
    !!condition && to ? <Link href={to}>{children}</Link> : <>{children}</>;

  return (
    <>
      <div class="min-h-screen flex items-center justify-center bg-plant-darker py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8 bg-plant-brighter p-5 rounded-xl static">
          <div>
            <img class="mx-auto h-36 w-auto transform  -translate-y-16 " src="/circle.png" alt="Workflow" />
            <h2 class="text-center text-3xl font-extrabold text-black">
              Gunakan Akun IPB
            </h2>
          </div>
          <form class="mt-4 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md  focus:outline-none focus:ring-black focus:border-black focus:z-10  sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label for="password" class="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <Link href="/" >
                <button
                  type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-plant-bright hover:bg-plant-darker hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coco-normal"
                >
                  Sign in
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>{" "}
    </>
  );
}
