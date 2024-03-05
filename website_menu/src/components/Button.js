
function Button({ value, className, icon, href, onClick }){
    return (
        <a className={className} href={href} onClick={onClick}>{icon} {value}</a>
    );
};

export default Button;
