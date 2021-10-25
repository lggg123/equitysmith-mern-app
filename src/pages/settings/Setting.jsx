import "./setting.css"

import React from 'react'

export default function Setting() {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsUpdateTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img></img>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="username" />
                    <label>Email</label>
                    <input type="email" placeholder="user@email.com"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
        </div>
    )
}

