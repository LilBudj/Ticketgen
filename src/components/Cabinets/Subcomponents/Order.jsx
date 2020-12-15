import React from "react";
import style from '../Cabs.module.css'

const Order = (props) => {
    console.log(props)
    const seatsArray = props.seatsIds.map(s => <div className={style.seat}>{s}</div>)

    return(
        <div className={style.order}>
            <div className={style.overallCost}>
                {props.eventName}
            </div>
            <div className={style.seats}>
                {seatsArray}
            </div>
        </div>
    )
}

export default Order