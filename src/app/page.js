import HomePage from "./Home/page";

export default async function Home() {
  const data = await fetch("https://tiles-showcase-website-server.onrender.com/MainData")
  const res = await data.json()
  return (
    <>
      <HomePage></HomePage>
    </>
  );
}
