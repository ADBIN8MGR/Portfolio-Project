import { Outlet } from 'react-router-dom'
import Wrapper from "../assets/wrappers/Page";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Wrapper>
                <section className="section">
                    <div className="section-center">
                        <Outlet />
                    </div>
                </section>
            </Wrapper>
            <Footer />
        </div>
    )
}

export default Layout
