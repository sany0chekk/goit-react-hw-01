import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={css["friends-item"]}>
      <img
        src={avatar}
        alt={name}
        width="48"
        className={css["friends-item-img"]}
      />
      <p className={css["friends-item-name"]}>{name}</p>
      <p
        className={clsx(
          css["friends-item-status"],
          isOnline ? css["green"] : css["red"]
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
