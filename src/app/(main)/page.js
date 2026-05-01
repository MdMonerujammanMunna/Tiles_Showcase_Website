import CardUI from "./Component/Card/Card";
import MarqueePage from "./Component/Marquee/Marquee";
import HeroBanner from "./HeroData/page";
import HomePage from "./Home/page";

export default function Home() {
  return (
    <>
      <HomePage></HomePage>
      <MarqueePage></MarqueePage>
      <HeroBanner></HeroBanner>
    </>
  );
}
