import React, {useState} from "react";
import style from "./JogNote.module.css"
import jog from "../../assets/jog-icon.svg"
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SettingsIcon from "@material-ui/icons/Settings"
import DeleteIcon from "@material-ui/icons/Delete"
import ListItemText from "@material-ui/core/ListItemText";
import JogForm from "../jog_form/JogForm";

const JogNote = (props) => {

    const [anchor, setAnchor] = useState(null);
    const [isEditMode, setEditMode] = useState(false);

    const handleMenuClose = () => {
        setAnchor(null);
    };

    const deleteSubmit = () => {
        handleMenuClose();
        props.submitJogDelete(props.id, props.user_id)
    };

    let date = new Date(props.date * 1000);

    return(
        !isEditMode ? <div className={style.jogContainer}>
            <img
                onClick={(e) => setAnchor(e.currentTarget)}
                className={style.jogIcon}
                src={jog}
                alt={'icon'}
            />
            <Menu
                open={!!anchor}
                anchorEl={anchor}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={() => setEditMode(true)}>
                    <ListItemIcon>
                        <SettingsIcon fontSize={'small'}/>
                    </ListItemIcon>
                    <ListItemText primary={'Edit'}/>
                </MenuItem>
                <MenuItem onClick={deleteSubmit}>
                    <ListItemIcon>
                        <DeleteIcon fontSize={'small'}/>
                    </ListItemIcon>
                    <ListItemText primary={'Delete'}/>
                </MenuItem>
            </Menu>
            <div className={style.jogInfo}>
                <div className={style.date}>
                    {date.toLocaleDateString()}
                </div>
                <div>
                    <span className={style.sign}>Speed:</span>
                    <span className={style.display}>{Math.ceil(+props.distance * 60 / +props.time * 1000)/1000} kmh</span>
                </div>
                <div>
                    <span className={style.sign}>Time:</span>
                    <span className={style.display}>{props.time} min</span>
                </div>
                <div>
                    <span className={style.sign}>Distance:</span>
                    <span className={style.display}>{props.distance} km</span>
                </div>
            </div>
        </div>
        : <JogForm fixed setEditMode={setEditMode} setAnchor={setAnchor} {...props}/>
    )
};

export default JogNote