import React from "react";
import style from "./CardModal.module.css";
import Portal from "../Portal";
import LoadButton from "../LoadButton";
import Fade from "react-reveal";
import {NavLink} from "react-router-dom";

const CardModal = (props) => {
    return(
        <Portal>
            <Fade top>
            <div className={style.window}>
                <Fade mirror>
                <div className={style.overlay}>
                    <span className={style.message}>Card successfully saved!</span>
                    <NavLink to={'/events'}>
                    <LoadButton onClick={() => props.setModal(false)}>Okay</LoadButton>
                    </NavLink>
                </div>
                </Fade>
            </div>
            </Fade>
        </Portal>
    )
};

export default CardModal