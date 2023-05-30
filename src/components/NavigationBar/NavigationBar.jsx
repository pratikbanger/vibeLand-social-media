import React from 'react'
import './NavigationBar.css'
import vibeLandLogo from '../../img/vibeLogo.png'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

const NavigationBar = () => {

    let location = useLocation().pathname;
    const { user } = useSelector((state) => state.authReducer.authData)

    return (
        <div className="navIcons">
            <div>
                <img src={vibeLandLogo} className='vibeLandLogo' alt="" />
            </div>


            {location === `/home` || location === `/`
                ? <Link to="/"> <i className="fa-solid fa-house font-size" style={{ color: "#34a3f9" }}></i> </Link>
                : <Link to="/"> <i className="fa-solid fa-house font-size" style={{ color: "black" }}></i> </Link>
            }

            {location === `/chat/${user._id}`
                ? <Link to={`/`}> <i className="fa-solid font-size fa-message" style={{ color: "#34a3f9" }}></i> </Link>
                : <Link to={`/`}> <i className="fa-solid font-size fa-message" style={{ color: "black" }}></i> </Link>
            }

            {location === `/search`
                ? <Link to={`/search`}> <i className="fa-solid font-size fa-magnifying-glass" style={{ color: "#34a3f9" }}></i> </Link>
                : <Link to={`/search`}> <i className="fa-solid font-size fa-magnifying-glass" style={{ color: "black" }}></i> </Link>
            }

            {location === `/profile/${user._id}`
                ? <Link to={`/profile/${user._id}`}> <i className="fa-solid font-size fa-user" style={{ color: "#34a3f9" }}></i> </Link>
                : <Link to={`/profile/${user._id}`}> <i className="fa-solid font-size fa-user" style={{ color: "black" }}></i> </Link>
            }
        </div>
    )
}

export default NavigationBar
