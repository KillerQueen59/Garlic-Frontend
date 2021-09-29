import { useState } from "react";
import ContentRight from "../components/contents/ContentRight";
import ContentLeft from "../components/contents/ContentLeft";
import HomeHeader from "../components/layouts/HomeHeader";
import NavigationDrawer from "../components/layouts/NavigationDrawer";
import Carousel from "../components/contents/Carousel";
import Footer from "../components/layouts/Footer";
import Head from "next/head";

export default function Home() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div class=" drawer">
      <Head>
        <title>INA Garlic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class={`flex flex-col drawer-content  h-screen w-screen ${active ? 'opacity-50' : 'opacity-100'}`} >
      <HomeHeader active={active} handleClick={handleClick}/>
        <div class={`flex-grow bg-plant-brighter ${active ? 'cursor-pointer': ''}`} >
          <Carousel />
          <ContentLeft
            title="About Garlic"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        "
            button="more info"
          ></ContentLeft>
          <ContentRight
            title="About Garlic"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        "
            button="more info"
            background="bg-plant-darker"
          ></ContentRight>
        </div>
        <Footer />
      </div>
      <div class={`drawer-side flex-none hidden lg:block`} onClick={handleClick}>
        <NavigationDrawer handleClick={handleClick} />
      </div>
    </div>
    
  );
}
