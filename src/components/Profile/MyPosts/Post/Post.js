import React from "react";
import s from './Post.module.css';
import avaImage from '../../../../img/ava.jpg'

const Post = (props) => {

    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src={avaImage}/>
                {props.message}
                <div>
                    <span>like</span>
                    {props.likesCount}
                </div>

            </div>
        </div>
    );
}

export default Post;