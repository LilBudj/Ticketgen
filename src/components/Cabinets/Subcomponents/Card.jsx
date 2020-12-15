import React from "react";
import style from '../Cabs.module.css'
import NegativeButton from "../../utils/NegativeButton";
import {connect} from "react-redux";
import {removeCard} from "../../../redux/jogReducer";

const Card = (props) => {
    const removeCard = () => {
        props.removeCard(props.cardNumber)
    }
        return(
        <div className={style.cardField}>
            <div className={style.card}>
                {props.cardNumber}
            </div>
            <div className={style.removeButton}>
                <NegativeButton onClick={removeCard}>Remove Card</NegativeButton>
            </div>
        </div>
    )
}

export default connect(null, {
    removeCard
})(Card)