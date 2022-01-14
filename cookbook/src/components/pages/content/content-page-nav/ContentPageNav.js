import PageNav from "../../../page-parts/page-nav/PageNav";
import {links} from "./config";
import {useDispatch, useSelector} from "react-redux";
import {openContentCookbooks, openContentRecipes} from "../../../../redux/actions/page-nav/pageNavActions";

const ContentPageNav = () => {
    const dispatch = useDispatch();
    const currentLink = useSelector(state => state.pageNavReducer.currentContentPageTabs && state.pageNavReducer.currentContentPageTabs);

    const handleClick = (e) => {
            if (e.target.id === "open-cookbooks-button") {
                dispatch(openContentCookbooks);
            } else {
                dispatch(openContentRecipes);
            }
    }

    return(
        <PageNav links={links} handleClick={handleClick} currentLink={currentLink}/>
    )
}

export default ContentPageNav;