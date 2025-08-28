import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
        <UserCard
          age={21}
          name="Harsh Kasundra"
          status="Pending"
          avatarUrl="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D"
        />
        <UserCard
          age={31}
          name="Devang Sanghani Devang Sanghani"
          status="Inactive"
          avatarUrl="https://images.unsplash.com/photo-1722322426803-101270837197?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D"
        />
        <UserCard
          age={21}
          name="Harsh Kasundra"
          status="Active"
          avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D"
        />
        <UserCard age={21} name="Harsh Kasundra" status="Pending" />
      </div>
    </>
  );
}

export default App;
