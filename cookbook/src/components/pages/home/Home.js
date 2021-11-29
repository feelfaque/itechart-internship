import {Link} from 'react-router-dom'
import Header from "../../page-parts/header/Header";

function Home () {
    return(
        <>
            <Header />
            <Link to="/signup">Sign up</Link>
        </>
    );
}

export default Home;