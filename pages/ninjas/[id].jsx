import { useRouter } from "next/router";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data }
  };
};

const Ninja = ({ ninja }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{ninja.name}</title>
        <meta name="keywords" content={ninja.website} />
      </Head>
      <div>
        <h1>{router.query.id}</h1>
        <h1>{ninja.name}</h1>
        <h2>{ninja.email} </h2>
        <h2>{ninja.website} </h2>
        <h2>{ninja.address.city} </h2>
      </div>
    </>
  );
};

export default Ninja;
