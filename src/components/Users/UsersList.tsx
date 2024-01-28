import { FC, memo, useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import { fetchUsers } from "../../redux/reducers/Users/ActionCreators/userActionCreator";
import { useAppSelector } from "../../hooks/useAppSelector";
// import './UsersList.css';

// interface UsersListProps{
//     className?: string;
// };

export const UsersList: FC = memo(() => {

    const dispatch = useAppDispatch();
    const {users} = useAppSelector(state => state.users);
    
    useEffect(() => {
        dispatch(fetchUsers())
     },[dispatch])

    return (
        <div >
            {users.map(user => (
                user.name
            ))}
        </div>
    );
})


