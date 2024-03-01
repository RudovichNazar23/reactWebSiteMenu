
function Footer({ children }){
    return (
        <ul className="list-unstyled m-2">
            {
                children && (
                    children.map(
                        (child, index) => (<li key={index}>{child}</li>)
                    )
                )
            }
        </ul>
    );
};

export default Footer;
