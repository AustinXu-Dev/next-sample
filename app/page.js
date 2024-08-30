import Image from "next/image";

export default function Home({ params, searchParams}) {
  console.debug(params, searchParams);
  const name = searchParams['name'] || 'World';
  return (
    <h1>Hello {name}</h1>
  );
}
