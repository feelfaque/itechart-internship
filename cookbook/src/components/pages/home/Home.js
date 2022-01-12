import Layout from "../../page-parts/layout/Layout";
import ModalWindow from "../../page-parts/modal/ModalWindow";
import {useSelector} from "react-redux";

function Home () {
    const currentModal = useSelector((state) => state.modalWindowReducer.currentModal);

    return(
        <>
            <Layout>
            </Layout>
            {currentModal === "new-cookbook-reducer" ? <ModalWindow titleText="CookBook"/>: ""}
        </>
    );
}

export default Home;