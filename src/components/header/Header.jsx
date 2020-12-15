import React, {useState} from "react";
import style from './Header.module.css'
import headerLogo from '../../assets/logobear.svg'
import {NavLink} from "react-router-dom";
import filter from "../../assets/filter.svg"
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import expand from "../../assets/more.svg"
import {connect} from "react-redux";
import {toggleFilter} from "../../redux/jogReducer";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FilterListIcon from "@material-ui/icons/FilterList"

const Header = (props) => {

    const [isNavExpanded, expandNav] = useState(false);
    const [anchor, setAnchor] = useState(null);

    const expandMenu = (e) => {
        expandNav(!isNavExpanded);
        setAnchor(e.currentTarget)
    };

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className={style.container}>
            <div className={style.logo}>
                <img className={style.logoImg} src={headerLogo} alt={'logo'}/>
            </div>
            <div className={style.navbar}>
                {props.isSession &&
                <NavLink className={style.link} activeClassName={style.activeLink} to={'/events'}>
                    EVENTS
                </NavLink>}
                {props.isSession &&
                    <NavLink className={style.link} activeClassName={style.activeLink} to={'/user'}>
                    <AccountCircleIcon fontSize={'large'}/>
                </NavLink>}
                <img
                    className={style.mobileNav}
                    src={expand}
                    alt={'view'}
                    onClick={expandMenu}
                />
                <Menu
                    open={isNavExpanded}
                    anchorEl={anchor}
                    onClose={() => expandNav(false)}
                >
                    <MenuItem>
                        <NavLink className={style.expandedLink} activeClassName={style.expandedActiveLink} to={'/events'}>
                        EVENTS
                    </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink className={style.expandedLink} activeClassName={style.expandedActiveLink} to={'/user'}>
                            <AccountCircleIcon fontSize={'large'}/>
                    </NavLink>
                    </MenuItem>
                </Menu>
                <div onClick={props.toggleFilter}>
                    {props.isSession &&
                        <FilterListIcon
                    className={style.filterImg}
                    fontSize={'large'}
                />}
                </div>
            </div>
        </div>
            </MuiPickersUtilsProvider>
    )
};

let mapStateToProps = (state) => ({
    isSession: state.isSession
})

export default connect(mapStateToProps, {
    toggleFilter
})(Header)