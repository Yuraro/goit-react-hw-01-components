import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
    return (
    <ul className={css.list}>
        {friends.map((friend) => (
        <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
        />
        ))}
    </ul>
);
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
).isRequired,
};

