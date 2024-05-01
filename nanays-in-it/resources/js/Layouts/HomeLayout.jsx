
// HomeLayout.jsx
import { ThemeProvider } from "react-bootstrap";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import { Head } from "@inertiajs/react";

const HomeLayout = ({ children, auth, title }) => {
    return (
        <ThemeProvider
            breakpoints={['xxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <Head title={title} />
            <Header auth={auth} />
            {children}
            <Footer />
        </ThemeProvider>
    );
};

export default HomeLayout;