import { FC, memo, useEffect } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { fetchUsers } from "../../../redux/reducers/Users/ActionCreators/userActionCreator";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { UserItem } from "../UserItem/UserItem";
import styles from './UsersList.module.css';


export const UsersList: FC = memo(() => {

    const dispatch = useAppDispatch();
    const {users} = useAppSelector(state => state.users);
    
    useEffect(() => {
        dispatch(fetchUsers())
     },[dispatch])

    return (
        <div className={styles.list}>
            {users.map(user => (
                <UserItem name={user.name} key={user.id} userId={user.id} />
            ))}
        </div>
    );
})

