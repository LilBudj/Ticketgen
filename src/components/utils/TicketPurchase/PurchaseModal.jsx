import React from "react";
import style from "./PurchaseModal.module.css";
import Portal from "../Portal";
import LoadButton from "../LoadButton";
import Fade from "react-reveal";
import {NavLink} from "react-router-dom";

const PurchaseModal = (props) => {
    const handleSubmit = () => {
        props.submitPurchase()
        props.setModal(false)
    }
    return(
        <Portal>
            <div className={style.window}>
                <Fade mirror>
                    <div className={style.overlay}>
                        <span className={style.message}>Are you sure you want to purchase chosen tickets
                        (payment with saved card)?</span>
                        <div className={style.pannel}>
                        <NavLink to={'/events'}>
                            <LoadButton onClick={handleSubmit}>Okay</LoadButton>
                        </NavLink>
                        <NavLink to={'/form'}>
                            <LoadButton onClick={() => props.setModal(false)}>Cancel</LoadButton>
                        </NavLink>
                        </div>
                    </div>
                </Fade>
            </div>
        </Portal>
    )
};

export default PurchaseModal