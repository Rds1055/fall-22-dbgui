import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Channel } from "../../models";
import { useEffect, useMemo, useState } from "react";
import { SearchField } from "../common";
import { getUserInfo } from "../../api";

export const Navbar = ()=> {
    const path = window.location.pathname;
    const navigate = useNavigate();
    const channel = new Channel(1,'Spidey Web','cb-spiderbob','Aug -1, 20202','Johnston and Johnston ate my weiner');
    const [ search, setSearch ] = useState("");
    const [ test, setTest ] = useState(undefined);
    useEffect(() => {
        setTest(getUserInfo())
    })

    if (test) {
        debugger;
    }
    
    return(
<div className = "navigationBar">
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary" fill="currentColor" >

    
        <a className="ripple" href="/">
        <img alt="example" className="img-fluid rounded-circle"src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/11-hands-on-crystal-ball-and-cryptocurrency-allan-swart.jpg" width="100" height="75"/>
    </a>
    

    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-fill w-100">

            <li className="nav-item">
            <button type="button" className="btn btn-outline-primary btn-lg btn-block">
            <a className="nav-link" href="/dashboard">Dashboard</a>
            </button>
            </li>
           
            <li className="nav-item">
            <button type="button" className="btn btn-outline-primary btn-lg btn-block">
            <a className="nav-link" href="/profile">Profile</a>
            </button>
            </li>

            {/* <li className="nav-item">
                <Link type='button' to={`${channel.channel_title}/${channel.channel_id}`}> See Comments
                </Link>
            </li> */}

            <li className="nav-item">
            <button type="button" className="btn btn-outline-primary btn-lg btn-block">
            <a className="nav-link" href="SubmitTitle">Submit Title</a>
            </button>
            </li>

            {
                sessionStorage.token &&
                <li className="nav-item">
                <button type="button" className="btn btn-outline-primary btn-lg btn-block">
                <a href="#" className = "nav-link" 
                    onClick={ () => {
                        delete sessionStorage.token;
                        navigate("/");
                    } 
                }>Logout</a>
                </button>
                </li>
            }

            {
                !sessionStorage.token &&
                <li className="nav-item">
                <button type="button" className="btn btn-outline-primary btn-lg btn-block">
                <a className="nav-link" href="/login">Login</a>
                </button>
                </li>
            }

            

            <form className = "d-flex align-items-center flex-nowrap">
                <SearchField value = { search } setValue = { setSearch } placeholder = "Search"/>
                <button type="button" className="btn btn-primary" onClick={() => {
                        if (!search) {
                            navigate(`/channel-search/ `);
                        } else {
                            navigate(`/channel-search/${ search }`);
                        }
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </ul>

  </div>

</nav>

</div>
    )
}

function CustomLink({href,children, ...props}){
    const path = window.location.pathname
    return (
    <li className={path === href ? "active" : ""}>
        <a href={href}{...props}>{children}</a>
    </li>
    )
}