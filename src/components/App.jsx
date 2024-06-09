import "./App.css";
import userData from "../userData.json";
import Profile from "./Profile/Profile.jsx";

import friends from "../friends.json";
import FriendList from "./FriendList/FriendList.jsx";

function App() {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <>
      <div className="wrapper">
        <Profile
          name={username}
          tag={tag}
          location={location}
          image={avatar}
          stats={stats}
        />

        <FriendList friends={friends} />
      </div>
    </>
  );
}

export default App;
