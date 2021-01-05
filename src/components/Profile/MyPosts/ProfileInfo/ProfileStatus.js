import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component{

    state = {
        editMode: false,
        title: 'Yo',
    }

    // activateEditMode = () => {
    //     debugger;
    //     this.state.editMode = true;
    // }

    activateEditMode = () => {
        // console.log(this.state.editMode);
       this.setState(
           {editMode: true}
       )
        // console.log(this.state.editMode);
    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
    }

    render(){
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }

                {
                    this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}></input>
                    </div>
                }
            </div>
        );
    };

}

export default ProfileStatus;