import React from "react";
import s from "./ProfileInfo.module.css";
import mainContentImg from "../../../../img/123.jpg";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={mainContentImg}/>
            </div>
            <div className={s.descriptonBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status}
                               updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;