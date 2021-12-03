import {Link} from 'react-router-dom';
import Layout from "../../page-parts/layout/Layout";

function Home () {
    return(
        <>
            <Layout>
                <Link to="/signup">Sign up</Link>
            </Layout>
        </>
    );
}

export default Home;