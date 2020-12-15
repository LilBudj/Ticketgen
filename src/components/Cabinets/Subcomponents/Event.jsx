import React from "react";
import style from '../Cabs.module.css'
import NegativeButton from "../../utils/NegativeButton";

const Event = (props) => {
    const deleteEvent = () => {
        props.removeEvent(props.showId)
    }
    let date = new Date(props.startDate)
    return (
        <div className={style.eventContainer}>
            <div className={style.event}>
                <div className={style.eventRow}>
                    <div className={style.eventDataField}>
                        Event name:
                    </div>
                    <div className={style.eventDataField}>
                        Date:
                    </div>
                    <div className={style.eventDataField}>
                        Hall type:
                    </div>
                    <div className={style.lastEventDataField}>
                        Prices:
                    </div>
                </div>
                <div className={style.eventRow}>
                    <div className={style.eventDataField}>
                        {props.name}
                    </div>
                    <div className={style.eventDataField}>
                        {date.toLocaleDateString()}
                    </div>
                    <div className={style.eventDataField}>
                        {props.type}
                    </div>
                    <div className={style.lastEventDataField}>
                        {props.prices}
                    </div>
                </div>
            </div>
            <NegativeButton onClick={deleteEvent}>Delete</NegativeButton>
        </div>
    )
}

export default Event