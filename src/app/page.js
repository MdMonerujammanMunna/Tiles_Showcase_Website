
export default async function Home() {
  const data = await fetch("https://tiles-showcase-website-server.onrender.com/MainData")
  const res = await data.json()
  console.log(res)
  return (
    <div>hi</div>
  );
}
