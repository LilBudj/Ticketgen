import React, {useState} from "react";
import style from "./JogNote.module.css"
import show from "../../assets/theatre_show.png"
import {NavLink} from "react-router-dom";
import LoadButton from "../utils/LoadButton";
import Fade from "react-reveal";

const JogNote = (props) => {

    const [element, setExtraElement] = useState(false);
    const [isEditMode, setEditMode] = useState(false);

    const inEventHover = () => {
        setExtraElement(true);
    };

    const outEventHover = () => {
        setExtraElement(false);
    };

    let date = new Date(props.startDate);

    return(
        <div className={style.jogContainer}
             onMouseEnter={inEventHover}
             onMouseLeave={outEventHover}>
            <div className={style.showName}>{props.name}</div>
            <img
                className={style.jogIcon}
                src={show}
                alt={'icon'}
            />
            <div className={style.jogInfo}>
                <div className={style.date}>
                    {date.toLocaleDateString()}
                </div>
                {element &&
                    <Fade bottom>
                    <div className={style.buyTicket}>
                        <NavLink to={`/scene/${props.showId}`}><LoadButton>Buy Ticket</LoadButton></NavLink>
                    </div>
                    </Fade>
                }
            </div>
        </div>
    )
};

export default JogNote