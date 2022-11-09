import { Link, useMatch, useResolvedPath } from
 "react-router-dom";

export default function Navbar() {
    return ( 
        <>
    <nav className="nav">
        <Link to="/"className="site-title">
            News Shorts
        </Link>
        <ul className="categories">
            <CustomLink to="/allNews">All</CustomLink>
            <CustomLink to="/business">Business</CustomLink>
            <CustomLink to="/sports">Sports</CustomLink>
            <CustomLink to="/world">World</CustomLink>
            <CustomLink to="/technology">Technology</CustomLink>
            <CustomLink to="/startup">Startup</CustomLink>
            <CustomLink to="/miscellaneous">Miscellaneous</CustomLink>
            <CustomLink to="/science">Science</CustomLink>
            <CustomLink to="/automobile">Automobile</CustomLink>
            <CustomLink to="/entertainment">Entertainment</CustomLink>
            {/* <CustomLink to="/buyMeCoffee">BuyMeCoffee</CustomLink> */}
        </ul>
    </nav>
    </>
    )
}

function CustomLink({ to, children, ...props }){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    
    return(
        <li className={isActive === to ? "active" : ""}>
            <Link to={to}{...props}>
                {children}
            </Link>
        </li>
    )
}