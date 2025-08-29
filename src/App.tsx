import ThemeToggler from "./components/ThemeToggler";
import UserCard from "./components/UserCard";
import {userData} from "./utils/userData";

function App() {
  return (
    <div className="dark:bg-[#030712] p-4">
      <div className="flex items-center justify-end">
        <ThemeToggler />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center min-h-screen ">
        {userData.map((user) => {
          return (
            <UserCard
              age={user.age}
              name={user.name}
              status={user.status}
              avatarUrl={user.avatarUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
