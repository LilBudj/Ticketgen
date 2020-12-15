import React from "react";
import style from '../Cabs.module.css'
import NegativeButton from "../../utils/NegativeButton";

const User = (props) => {
    const deleteUser = () => {
        props.removeUser(props.userId)
    }

    return (
        <div className={style.eventContainer}>
            <div className={style.event}>
                <div className={style.eventRow}>
                    <div className={style.eventDataField}>
                        User name:
                    </div>
                    <div className={style.eventDataField}>
                        Email:
                    </div>
                    <div className={style.lastEventDataField}>
                        User ID:
                    </div>
                </div>
                <div className={style.eventRow}>
                    <div className={style.eventDataField}>
                        {props.username}
                    </div>
                    <div className={style.eventDataField}>
                        {props.email}
                    </div>
                    <div className={style.lastEventDataField}>
                        {props.userId}
                    </div>
                </div>
            </div>
            <NegativeButton onClick={deleteUser}>Delete</NegativeButton>
        </div>
    )
}

export default User