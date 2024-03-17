
import { ThemeProvider } from "react-bootstrap";
import Header from "./MainPage/Header";
import Footer from "./MainPage/Footer";
import Home from "@/Pages/Guest/Home";
const RootLayout = ({ children, auth }) => {
    return (
        <ThemeProvider
            breakpoints={['xxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <Header auth={auth} />
            <div className="content">
                <Home />
            </div>

            <Footer />
        </ThemeProvider>
    );
}
export default RootLayout;