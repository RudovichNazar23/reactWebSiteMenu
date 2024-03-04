
function NavBar({ children }){
    return (
        <nav className="p-2 border-rounded d-flex flex-row align-items-center justify-content-center" style={{backgroundColor: "#eee"}}>
            {
                children ? (
                    children.map(
                        (child) => (
                            child
                        )
                    )
                ) : null
            }
        </nav>
    );  
}

export default NavBar;