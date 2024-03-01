
function NavBar({ children }){
    return (
        <nav className="navbar p-2 border-rounded d-flex flex-row align-items-center justify-content-center" style={{backgroundColor: "#D3D3D3"}}>
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