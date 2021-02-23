import React from "react";
import Paginator from "../common/Pagenator/Paginator";
import User from "./User";

let Users = ({
                 currentPage,
                 totalUsersCount,
                 pageSize,
                 onPageChanged,
                 users,
                 followingInProgress,
                 follow,
                 unfollow,
                 ...props
             }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            <div>
                {
                    users.map(u => <User user={u}
                                         followingInProgress={followingInProgress}
                                         key={u.Id}
                                         unfollow={unfollow}
                                         follow={follow}/>)
                }
            </div>
            )
        </div>
    );
};

export default Users;