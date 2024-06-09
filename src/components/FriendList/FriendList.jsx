import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";

const FriendList = ({ friends }) => {
  return (
    <ul className={css["friends-list"]}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
