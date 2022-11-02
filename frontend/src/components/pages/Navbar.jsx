export const Navbar = () => {
    const path = window.location.pathname
    return(
    // <div className = "container">
        <nav className="nav">

            <a href="/" className = "site-title">
            Home
            </a>
                <ul>
                    <CustomLink href ="/CreateTheory">Create Theory</CustomLink>
                
                    <CustomLink href ="/Search">Search</CustomLink>
                    
                    <CustomLink href ="/Profile">Profile</CustomLink>
                    
                    <CustomLink href ="/SubmitTitle">Submit Title</CustomLink>
                    
                    <CustomLink href ="/login">Login</CustomLink>

                    <CustomLink href ="/register">Register</CustomLink>
                
                </ul>
            </nav>
    // </div>
    
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