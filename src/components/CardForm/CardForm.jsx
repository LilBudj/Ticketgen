import style from "./CardForm.module.css";
import {NavLink} from "react-router-dom";
import close from "../../assets/close.svg";
import FormDatePicker from "../utils/FormDatePicker";
import React, {useState} from "react";
import SubmitButton from "../utils/SubmitButton";
import CardModal from "../utils/CardModal/CardModal";
import {connect} from "react-redux";
import {addCard} from "../../redux/jogReducer";

const CardForm = (props) => {
    const [modal, setModal] = useState(false)

    const [cardNumber, setCardNumber] = useState('')
    const [expirationDate, setDate] = useState(new Date())
    const [cardholderName, setCardholderName] = useState('')
    const [cvv, setCvv] = useState('')

    const SubmitAction = () => {
        setModal(true)
        props.addCard({ cardNumber, expirationDate, cardholderName, cvv })
    }
    return(
        <>
            { modal && <CardModal setModal={setModal}/>}
        <div className={style.cardsStack}>
        <div className={style.window}>
            <div className={style.fieldStack}>
                <div className={style.inputField}>
                    <span className={style.fieldName}>Card Number</span>
                    <input
                        className={style.jogInput}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.currentTarget.value)}
                    />
                </div>
                <div className={style.inputField}>
                    <span className={style.fieldName}>Cardholder</span>
                    <input
                        className={style.jogInput}
                        value={cardholderName}
                        onChange={(e) => setCardholderName(e.currentTarget.value)}
                    />
                </div>
                <div className={style.inputField}>
                    <span className={style.fieldName}>Expiration Date</span>
                    <FormDatePicker
                        variant={'inline'}
                        inputVariant={'outlined'}
                        format={"MM/yyyy"}
                        value={expirationDate}
                        onChange={(date) => setDate(date)}
                    />
                </div>
            </div>
        </div>
            <div className={style.window}>
                <div className={style.fieldStack} style={{alignItems: "center"}}>
                    <div className={style.inputField} style={{width: "80%"}}>
                        <span className={style.fieldName}>CVV/CVV2</span>
                        <input
                            className={style.jogInput}
                            value={cvv}
                            onChange={(e) => setCvv(e.currentTarget.value)}
                        />
                    </div>
                    {/*<NavLink to={'/jogs'}>*/}
                        <SubmitButton onClick={SubmitAction}>
                            Save
                        </SubmitButton>
                    {/*</NavLink>*/}
                </div>
            </div>
        </div>
            </>
    )
}

export default connect(null, {
    addCard
})(CardForm)