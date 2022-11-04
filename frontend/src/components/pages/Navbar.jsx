export const Navbar = ()=> {
    const path = window.location.pathname
    return(
<div className = "navigationBar">
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary" fill="currentColor" >

    
        <a class="ripple" href="./">
        <img alt="example" class="img-fluid rounded-circle"src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/11-hands-on-crystal-ball-and-cryptocurrency-allan-swart.jpg" width="80" height="75" alt=""/>
    </a>
    

    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav nav-fill w-100">
            <li class="nav-item active">
            <button type="button" class="btn btn-outline-primary btn-lg btn-block">
                <a class="nav-link" href="/CreateTheory">Create Theory <span class="sr-only"></span></a>
            </button>
            </li>

            <li class="nav-item">
            <button type="button" class="btn btn-outline-primary btn-lg btn-block">
            <a class="nav-link" href="/Profile">Profile</a>
            </button>
            </li>

            <li class="nav-item">
            <button type="button" class="btn btn-outline-primary btn-lg btn-block">
            <a class="nav-link" href="SubmitTitle">Submit Title</a>
            </button>
            </li>

            <li class="nav-item">
            <button type="button" class="btn btn-outline-primary btn-lg btn-block">
            <a class="nav-link" href="/login">Login</a>
            </button>
            </li>

            {/* <li class="nav-item">
            <button type="button" class="btn btn-outline-primary btn-lg btn-block">
            <a class="nav-link" href="/register">Register</a>
            </button>
            </li> */}

            <form class = "d-flex align-items-center flex-nowrap">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button type="button" class="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <i class="fas fa-search"></i>
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