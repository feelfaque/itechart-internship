import Layout from "../../page-parts/layout/Layout";
import ModalWindow from "../../page-parts/modal/ModalWindow";
import NewCookbookForm from "../../forms/new-cookbook-form/newCookbookForm";

function Home ({handleFileChange, currentModal}) {
    return(
        <>
            <Layout>
            </Layout>
            {currentModal === "new-cookbook" && <ModalWindow titleText="CookBook" children={<NewCookbookForm
                handleFileChange={handleFileChange}/>}/>}
        </>
    );
}

export default Home;