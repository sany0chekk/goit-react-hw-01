import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css["friends-item-wrapper"]}>
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
    </div>
  );
};

export default FriendListItem;
