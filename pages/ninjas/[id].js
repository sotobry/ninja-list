export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const ninjas = await res.json();
  const paths = ninjas.map(ninja => ({
    params: {
      id: ninja.id.toString(),
    }
  }));
  return ({
    paths,
    fallback: false
  });
};

export const getStaticProps = async (context) => {
  const { params: { id } } = context;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const ninja = await res.json();
  return {
    props: { ninja }
  }
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
}

export default Details;