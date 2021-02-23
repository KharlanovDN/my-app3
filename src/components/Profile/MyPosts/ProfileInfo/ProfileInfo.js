import React from "react";
import s from "./ProfileInfo.module.css";
import mainContentImg from "../../../../img/123.jpg";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={mainContentImg}/>
            </div>
            <div className={s.descriptonBlock}>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status}
                               updateStatus={updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;