const PageNavItem = ({className, id, text}) => {
    return(
        <li className="page-nav-item">
            <button
                className={className}
                id={id}>{text}
            </button>
        </li>
    );
}

export default PageNavItem;