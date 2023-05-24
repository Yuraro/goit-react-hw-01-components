import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
    <li className={css.item}>
        <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
);
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

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

