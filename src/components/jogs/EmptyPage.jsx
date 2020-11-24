import style from "./JogNote.module.css";
import sad from "../../assets/nothing.svg";
import React from "react";

const EmptyPage = () => {
    return(
        <div className={style.emptyStack}>
            <div className={style.emptyMessage}>
                <img className={style.sadImage} src={sad} alt={'sad'}/>
                <div className={style.message}>Nothing is there</div>
            </div>
        </div>
    )
};

export default EmptyPage