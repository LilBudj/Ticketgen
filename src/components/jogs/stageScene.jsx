import React, {useState, useEffect} from "react";
import style from './StageScene.module.css';
import {withRouter} from "react-router";
import LoadButton from "../utils/LoadButton";
import {NavLink} from "react-router-dom";
import TodayIcon from "@material-ui/icons/Today";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import PurchaseModal from "../utils/TicketPurchase/PurchaseModal";
import {connect} from "react-redux";
import {fetchEvent, purchaseOperation} from "../../redux/jogReducer";

const sceneChoser = (scene, takenSeats, chosenSeat, selection) => {
    switch (scene){
        case 'first': return <div className={style.scene}>
            <div className={style.seatRow}>
                <div className={takenSeats.includes(1) ? style.seat_taken : !chosenSeat.includes(1) ? style.seat:style.seat_active} onClick={() => selection(1)}/>
                <div className={takenSeats.includes(2) ? style.seat_taken : !chosenSeat.includes(2) ? style.seat:style.seat_active} onClick={() => selection(2)}/>
                <div className={takenSeats.includes(3) ? style.seat_taken : !chosenSeat.includes(3) ? style.seat:style.seat_active} onClick={() => selection(3)}/>
                <div className={takenSeats.includes(4) ? style.seat_taken : !chosenSeat.includes(4) ? style.seat:style.seat_active} onClick={() => selection(4)}/>
                <div className={takenSeats.includes(5) ? style.seat_taken : !chosenSeat.includes(5) ? style.seat:style.seat_active} onClick={() => selection(5)}/>
                <div className={takenSeats.includes(6) ? style.seat_taken : !chosenSeat.includes(6) ? style.seat:style.seat_active} onClick={() => selection(6)}/>
            </div>
            <div className={style.seatRow}>
                <div className={takenSeats.includes(7) ? style.seat_taken : !chosenSeat.includes(7) ? style.seat:style.seat_active} onClick={() => selection(7)}/>
                <div className={takenSeats.includes(8) ? style.seat_taken : !chosenSeat.includes(8) ? style.seat:style.seat_active} onClick={() => selection(8)}/>
                <div className={takenSeats.includes(9) ? style.seat_taken : !chosenSeat.includes(9) ? style.seat:style.seat_active} onClick={() => selection(9)}/>
                <div className={takenSeats.includes(10) ? style.seat_taken : !chosenSeat.includes(10) ? style.seat:style.seat_active} onClick={() => selection(10)}/>
                <div className={takenSeats.includes(11) ? style.seat_taken : !chosenSeat.includes(11) ? style.seat:style.seat_active} onClick={() => selection(11)}/>
                <div className={takenSeats.includes(12) ? style.seat_taken : !chosenSeat.includes(12) ? style.seat:style.seat_active} onClick={() => selection(12)}/>
            </div>
            <div className={style.seatRow}>
                <div className={takenSeats.includes(13) ? style.seat_taken : !chosenSeat.includes(13) ? style.seat:style.seat_active} onClick={() => selection(13)}/>
                <div className={takenSeats.includes(14) ? style.seat_taken : !chosenSeat.includes(14) ? style.seat:style.seat_active} onClick={() => selection(14)}/>
                <div className={takenSeats.includes(15) ? style.seat_taken : !chosenSeat.includes(15) ? style.seat:style.seat_active} onClick={() => selection(15)}/>
                <div className={takenSeats.includes(16) ? style.seat_taken : !chosenSeat.includes(16) ? style.seat:style.seat_active} onClick={() => selection(16)}/>
                <div className={takenSeats.includes(17) ? style.seat_taken : !chosenSeat.includes(17) ? style.seat:style.seat_active} onClick={() => selection(17)}/>
                <div className={takenSeats.includes(18) ? style.seat_taken : !chosenSeat.includes(18) ? style.seat:style.seat_active} onClick={() => selection(18)}/>
            </div>
            <div className={style.seatRow}>
                <div className={takenSeats.includes(19) ? style.seat_taken : !chosenSeat.includes(19) ? style.seat:style.seat_active} onClick={() => selection(19)}/>
                <div className={takenSeats.includes(20) ? style.seat_taken : !chosenSeat.includes(20) ? style.seat:style.seat_active} onClick={() => selection(20)}/>
                <div className={takenSeats.includes(21) ? style.seat_taken : !chosenSeat.includes(21) ? style.seat:style.seat_active} onClick={() => selection(21)}/>
                <div className={takenSeats.includes(22) ? style.seat_taken : !chosenSeat.includes(22) ? style.seat:style.seat_active} onClick={() => selection(22)}/>
                <div className={takenSeats.includes(23) ? style.seat_taken : !chosenSeat.includes(23) ? style.seat:style.seat_active} onClick={() => selection(23)}/>
                <div className={takenSeats.includes(24) ? style.seat_taken : !chosenSeat.includes(24) ? style.seat:style.seat_active} onClick={() => selection(24)}/>
            </div>
        </div>;
        case 'second': return <div className={style.scene_2}>
            <div className={style.section}>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(1) ? style.seat_taken : !chosenSeat.includes(1) ? style.seat:style.seat_active} onClick={() => selection(1)}/>
                    <div className={takenSeats.includes(2) ? style.seat_taken : !chosenSeat.includes(2) ? style.seat:style.seat_active} onClick={() => selection(2)}/>
                    <div className={takenSeats.includes(3) ? style.seat_taken : !chosenSeat.includes(3) ? style.seat:style.seat_active} onClick={() => selection(3)}/>
                </div>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(4) ? style.seat_taken : !chosenSeat.includes(4) ? style.seat:style.seat_active} onClick={() => selection(4)}/>
                    <div className={takenSeats.includes(5) ? style.seat_taken : !chosenSeat.includes(5) ? style.seat:style.seat_active} onClick={() => selection(5)}/>
                    <div className={takenSeats.includes(6) ? style.seat_taken : !chosenSeat.includes(6) ? style.seat:style.seat_active} onClick={() => selection(6)}/>
                </div>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(7) ? style.seat_taken : !chosenSeat.includes(7) ? style.seat:style.seat_active} onClick={() => selection(7)}/>
                    <div className={takenSeats.includes(8) ? style.seat_taken : !chosenSeat.includes(8) ? style.seat:style.seat_active} onClick={() => selection(8)}/>
                    <div className={takenSeats.includes(9) ? style.seat_taken : !chosenSeat.includes(9) ? style.seat:style.seat_active} onClick={() => selection(9)}/>
                </div>
            </div>
            <div className={style.section}>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(10) ? style.seat_taken : !chosenSeat.includes(10) ? style.seat:style.seat_active} onClick={() => selection(10)}/>
                    <div className={takenSeats.includes(11) ? style.seat_taken : !chosenSeat.includes(11) ? style.seat:style.seat_active} onClick={() => selection(11)}/>
                    <div className={takenSeats.includes(12) ? style.seat_taken : !chosenSeat.includes(12) ? style.seat:style.seat_active} onClick={() => selection(12)}/>
                </div>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(13) ? style.seat_taken : !chosenSeat.includes(13) ? style.seat:style.seat_active} onClick={() => selection(13)}/>
                    <div className={takenSeats.includes(14) ? style.seat_taken : !chosenSeat.includes(14) ? style.seat:style.seat_active} onClick={() => selection(14)}/>
                    <div className={takenSeats.includes(15) ? style.seat_taken : !chosenSeat.includes(15) ? style.seat:style.seat_active} onClick={() => selection(15)}/>
                </div>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(16) ? style.seat_taken : !chosenSeat.includes(16) ? style.seat:style.seat_active} onClick={() => selection(16)}/>
                    <div className={takenSeats.includes(17) ? style.seat_taken : !chosenSeat.includes(17) ? style.seat:style.seat_active} onClick={() => selection(17)}/>
                    <div className={takenSeats.includes(18) ? style.seat_taken : !chosenSeat.includes(18) ? style.seat:style.seat_active} onClick={() => selection(18)}/>
                </div>
            </div>
            <div className={style.section}>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(19) ? style.seat_taken : !chosenSeat.includes(19) ? style.seat:style.seat_active} onClick={() => selection(19)}/>
                    <div className={takenSeats.includes(20) ? style.seat_taken : !chosenSeat.includes(20) ? style.seat:style.seat_active} onClick={() => selection(20)}/>
                    <div className={takenSeats.includes(21) ? style.seat_taken : !chosenSeat.includes(21) ? style.seat:style.seat_active} onClick={() => selection(21)}/>
                </div>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(22) ? style.seat_taken : !chosenSeat.includes(22) ? style.seat:style.seat_active} onClick={() => selection(22)}/>
                    <div className={takenSeats.includes(23) ? style.seat_taken : !chosenSeat.includes(23) ? style.seat:style.seat_active} onClick={() => selection(23)}/>
                    <div className={takenSeats.includes(24) ? style.seat_taken : !chosenSeat.includes(24) ? style.seat:style.seat_active} onClick={() => selection(24)}/>
                </div>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(25) ? style.seat_taken : !chosenSeat.includes(25) ? style.seat:style.seat_active} onClick={() => selection(25)}/>
                    <div className={takenSeats.includes(26) ? style.seat_taken : !chosenSeat.includes(26) ? style.seat:style.seat_active} onClick={() => selection(26)}/>
                    <div className={takenSeats.includes(27) ? style.seat_taken : !chosenSeat.includes(27) ? style.seat:style.seat_active} onClick={() => selection(27)}/>
                </div>
            </div>
            <div className={style.section}>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(28) ? style.seat_taken : !chosenSeat.includes(28) ? style.seat:style.seat_active} onClick={() => selection(28)}/>
                    <div className={takenSeats.includes(29) ? style.seat_taken : !chosenSeat.includes(29) ? style.seat:style.seat_active} onClick={() => selection(29)}/>
                    <div className={takenSeats.includes(30) ? style.seat_taken : !chosenSeat.includes(30) ? style.seat:style.seat_active} onClick={() => selection(30)}/>
                </div>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(31) ? style.seat_taken : !chosenSeat.includes(31) ? style.seat:style.seat_active} onClick={() => selection(31)}/>
                    <div className={takenSeats.includes(32) ? style.seat_taken : !chosenSeat.includes(32) ? style.seat:style.seat_active} onClick={() => selection(32)}/>
                    <div className={takenSeats.includes(33) ? style.seat_taken : !chosenSeat.includes(33) ? style.seat:style.seat_active} onClick={() => selection(33)}/>
                </div>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(34) ? style.seat_taken : !chosenSeat.includes(34) ? style.seat:style.seat_active} onClick={() => selection(34)}/>
                    <div className={takenSeats.includes(35) ? style.seat_taken : !chosenSeat.includes(35) ? style.seat:style.seat_active} onClick={() => selection(35)}/>
                    <div className={takenSeats.includes(36) ? style.seat_taken : !chosenSeat.includes(36) ? style.seat:style.seat_active} onClick={() => selection(36)}/>
                </div>
            </div>
        </div>;
        case 'third': return <div className={style.scene_3}>
            <div className={style.seatRow}>
                <div className={takenSeats.includes(1) ? style.seat_taken : !chosenSeat.includes(1) ? style.seat:style.seat_active} onClick={() => selection(1)}/>
                <div className={takenSeats.includes(2) ? style.seat_taken : !chosenSeat.includes(2) ? style.seat:style.seat_active} onClick={() => selection(2)}/>
                <div className={takenSeats.includes(3) ? style.seat_taken : !chosenSeat.includes(3) ? style.seat:style.seat_active} onClick={() => selection(3)}/>
                <div className={takenSeats.includes(4) ? style.seat_taken : !chosenSeat.includes(4) ? style.seat:style.seat_active} onClick={() => selection(4)}/>
            </div>
            <div className={style.sectionRow}>
            <div className={style.section}>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(5) ? style.seat_taken : !chosenSeat.includes(5) ? style.seat:style.seat_active} onClick={() => selection(5)}/>
                    <div className={takenSeats.includes(6) ? style.seat_taken : !chosenSeat.includes(6) ? style.seat:style.seat_active} onClick={() => selection(6)}/>
                    <div className={takenSeats.includes(7) ? style.seat_taken : !chosenSeat.includes(7) ? style.seat:style.seat_active} onClick={() => selection(7)}/>
                    <div className={takenSeats.includes(8) ? style.seat_taken : !chosenSeat.includes(8) ? style.seat:style.seat_active} onClick={() => selection(8)}/>
                </div>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(9) ? style.seat_taken : !chosenSeat.includes(9) ? style.seat:style.seat_active} onClick={() => selection(9)}/>
                    <div className={takenSeats.includes(10) ? style.seat_taken : !chosenSeat.includes(10) ? style.seat:style.seat_active} onClick={() => selection(10)}/>
                    <div className={takenSeats.includes(11) ? style.seat_taken : !chosenSeat.includes(11) ? style.seat:style.seat_active} onClick={() => selection(11)}/>
                    <div className={takenSeats.includes(12) ? style.seat_taken : !chosenSeat.includes(12) ? style.seat:style.seat_active} onClick={() => selection(12)}/>
                </div>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(13) ? style.seat_taken : !chosenSeat.includes(13) ? style.seat:style.seat_active} onClick={() => selection(13)}/>
                    <div className={takenSeats.includes(14) ? style.seat_taken : !chosenSeat.includes(14) ? style.seat:style.seat_active} onClick={() => selection(14)}/>
                    <div className={takenSeats.includes(15) ? style.seat_taken : !chosenSeat.includes(15) ? style.seat:style.seat_active} onClick={() => selection(15)}/>
                    <div className={takenSeats.includes(16) ? style.seat_taken : !chosenSeat.includes(16) ? style.seat:style.seat_active} onClick={() => selection(16)}/>
                </div>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(17) ? style.seat_taken : !chosenSeat.includes(17) ? style.seat:style.seat_active} onClick={() => selection(17)}/>
                    <div className={takenSeats.includes(18) ? style.seat_taken : !chosenSeat.includes(18) ? style.seat:style.seat_active} onClick={() => selection(18)}/>
                    <div className={takenSeats.includes(19) ? style.seat_taken : !chosenSeat.includes(19) ? style.seat:style.seat_active} onClick={() => selection(19)}/>
                    <div className={takenSeats.includes(20) ? style.seat_taken : !chosenSeat.includes(20) ? style.seat:style.seat_active} onClick={() => selection(20)}/>
                </div>
            </div>
            <div className={style.section}>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(21) ? style.seat_taken : !chosenSeat.includes(21) ? style.seat:style.seat_active} onClick={() => selection(21)}/>
                    <div className={takenSeats.includes(22) ? style.seat_taken : !chosenSeat.includes(22) ? style.seat:style.seat_active} onClick={() => selection(22)}/>
                    <div className={takenSeats.includes(23) ? style.seat_taken : !chosenSeat.includes(23) ? style.seat:style.seat_active} onClick={() => selection(23)}/>
                    <div className={takenSeats.includes(24) ? style.seat_taken : !chosenSeat.includes(24) ? style.seat:style.seat_active} onClick={() => selection(24)}/>
                </div>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(25) ? style.seat_taken : !chosenSeat.includes(25) ? style.seat:style.seat_active} onClick={() => selection(25)}/>
                    <div className={takenSeats.includes(26) ? style.seat_taken : !chosenSeat.includes(26) ? style.seat:style.seat_active} onClick={() => selection(26)}/>
                    <div className={takenSeats.includes(27) ? style.seat_taken : !chosenSeat.includes(27) ? style.seat:style.seat_active} onClick={() => selection(27)}/>
                    <div className={takenSeats.includes(28) ? style.seat_taken : !chosenSeat.includes(28) ? style.seat:style.seat_active} onClick={() => selection(28)}/>
                </div>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(29) ? style.seat_taken : !chosenSeat.includes(29) ? style.seat:style.seat_active} onClick={() => selection(29)}/>
                    <div className={takenSeats.includes(30) ? style.seat_taken : !chosenSeat.includes(30) ? style.seat:style.seat_active} onClick={() => selection(30)}/>
                    <div className={takenSeats.includes(31) ? style.seat_taken : !chosenSeat.includes(31) ? style.seat:style.seat_active} onClick={() => selection(31)}/>
                    <div className={takenSeats.includes(32) ? style.seat_taken : !chosenSeat.includes(32) ? style.seat:style.seat_active} onClick={() => selection(32)}/>
                </div>
                <div className={style.seatRow}>
                    <div className={takenSeats.includes(33) ? style.seat_taken : !chosenSeat.includes(33) ? style.seat:style.seat_active} onClick={() => selection(33)}/>
                    <div className={takenSeats.includes(34) ? style.seat_taken : !chosenSeat.includes(34) ? style.seat:style.seat_active} onClick={() => selection(34)}/>
                    <div className={takenSeats.includes(35) ? style.seat_taken : !chosenSeat.includes(35) ? style.seat:style.seat_active} onClick={() => selection(35)}/>
                    <div className={takenSeats.includes(36) ? style.seat_taken : !chosenSeat.includes(36) ? style.seat:style.seat_active} onClick={() => selection(36)}/>
                </div>
            </div>
            </div>
        </div>
    }
}

const StageScene = (props) => {
    useEffect(() => {
        props.fetchEvent(props.match.params.eventId)
    }, [])
    const [chosenSeat, chooseSeat] = useState([])
    const [modal, setModal] = useState(false)

    const event = props.events.filter(e => e.showId === +props.match.params.eventId)[0]
    console.log(props)

    const takenArray = props.seats.filter(s => s.status).map(s => s.seatId)
    const handleChooseSeat = (seatId) => {
        let seatsArray = [...chosenSeat]
        if (seatsArray.includes(seatId) || takenArray.includes(seatId)) seatsArray = seatsArray.filter(e => e !== seatId)
        else seatsArray.push(seatId)
        chooseSeat(seatsArray)
    }
    const submitPurchase = () => {
        props.purchaseOperation(chosenSeat, event.showId)
    }
    const scene = sceneChoser(event.type, takenArray,chosenSeat, handleChooseSeat)
    const date = new Date(event.startDate)
    return(
        <>
            {modal && <PurchaseModal setModal={setModal} submitPurchase={submitPurchase}/>}
        <div className={style.container}>
            <div className={style.mainHeading}>{event.name}</div>
            <div className={style.heading}>Event information</div>
            <div className={style.showInfo}>
                <div className={style.showInfoSection}>
                    <TodayIcon color={'primary'} fontSize={'large'}/>
                    <span className={style.date}>{date.toLocaleDateString()}</span>
                </div>
                <div className={style.showInfoSection}>
                    <EventSeatIcon color={'primary'} fontSize={'large'}/>
                    <span className={style.date}>{event.availablePlaces}</span>
                    <span className={style.sign}>free</span>
                </div>
                <div className={style.showLastSection}>
                    <ConfirmationNumberIcon color={'primary'} fontSize={'large'}/>
                    <span className={style.date}>{event.prices}</span>
                    <span className={style.sign}>BYN</span>
                </div>
            </div>
            <div className={style.heading}>Choose seats</div>
            <div className={style.stageContainer}>
                {scene}
            </div>
            <div className={style.seatInfo}>
                <div className={style.seatInfoSection}>
                    <div className={style.seat}/>
                    <span className={style.date}>Available seats</span>
                </div>
                <div className={style.seatInfoSection}>
                    <div className={style.seat_taken}/>
                    <span className={style.date}>Occupied seats</span>
                </div>
                <div className={style.seatLastSection}>
                    <div className={style.seat_active}/>
                    <span className={style.date}>Chosen seats</span>
                </div>
            </div>
            <div className={style.tools}>
                {!!chosenSeat.length && <LoadButton onClick={() => setModal(true)}>Buy tickets</LoadButton>}
                <NavLink to={'/events'}><LoadButton>Quit</LoadButton></NavLink>
            </div>
        </div>
            </>
    )
};

const StageSceneRouted = withRouter(StageScene)

const mapStateToProps = (state) => ({
    seats: state.seats,
    events: state.events
});

export default connect(mapStateToProps, {
    fetchEvent,
    purchaseOperation
})(StageSceneRouted)