import useFetch from "../../Hooks/useFetch";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const { data, error, loading } = useFetch(USERS_URL);
  return (
    <section>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>{data && data.map((user) => <li>{user.name}</li>)}</ul>
      )}
    </section>
  );
};

export default Users;
