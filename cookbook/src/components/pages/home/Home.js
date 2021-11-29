import {Link} from 'react-router-dom'
import Header from "../../page-parts/header/Header";
import Footer from "../../page-parts/footer/Footer";

function Home () {
    return(
        <>
            <Header />
            <Link to="/signup">Sign up</Link>
            <Footer />
        </>
    );
}

export default Home;