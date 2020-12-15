import React from "react";
import style from "./CardModal.module.css";
import Portal from "../Portal";
import NegativeButton from "../NegativeButton";
import Fade from "react-reveal";
import {NavLink} from "react-router-dom";

const ErrorModal = (props) => {
    return(
        <Portal>
            <div className={style.window}>
                <Fade mirror>
                    <div className={style.overlay}>
                        <span className={style.errorMessage}>No user with such credentials found!</span>
                        <NegativeButton onClick={() => props.setModal(false)}>Go to Login</NegativeButton>
                    </div>
                </Fade>
            </div>
        </Portal>
    )
};

export default ErrorModal