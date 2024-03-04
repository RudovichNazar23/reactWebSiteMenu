
function Button({ value, className, icon, href }){
    return (
        <a className={className} href={href}>{icon} {value}</a>
    );
};

export default Button;
