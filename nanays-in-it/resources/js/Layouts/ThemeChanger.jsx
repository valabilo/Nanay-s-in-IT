import { Button, Dropdown } from "react-bootstrap";

import { useState, useEffect } from "react";

const ThemeChanger = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState(() => {
        // Check if there's a stored theme preference in localStorage
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : "auto";
    });

    const handleThemeChange = (theme) => {
        setSelectedTheme(theme);
        // Store the selected theme preference in localStorage
        localStorage.setItem('theme', theme);

        // Update the theme attribute in index.html
        document.documentElement.setAttribute('data-bs-theme', theme);
    };

    useEffect(() => {
        // Apply the selected theme when the component mounts
        document.documentElement.setAttribute('data-bs-theme', selectedTheme);
    }, [selectedTheme]);

    const getIcon = (theme) => {
        switch (theme) {
            case "light":
                return <svg className="bi opacity-50" width="1em" height="1em"><use href="#sun-fill"></use></svg>;
            case "dark":
                return <svg className="bi opacity-50" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>;
            case "auto":
                return <svg className="bi opacity-50" width="1em" height="1em"><use href="#circle-half"></use></svg>;
            default:
                return null;
        }
    };
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol id="check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </symbol>
                <symbol id="circle-half" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                </symbol>
                <symbol id="moon-stars-fill" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                </symbol>
                <symbol id="sun-fill" viewBox="0 0 16 16">
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </symbol>
            </svg>

            <Dropdown className="dropdown position-fixed bottom-0 end-0 mb-4 me-4 shadow border-2" id="bd-mode-toggle">
                <Dropdown.Toggle className="btn btn-sm btn-bd-primary gap-1 py-3 dropdown-toggle d-flex align-items-center"
                    id="bd-theme"
                    as={Button}
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    aria-label="Toggle theme (auto)">
                    {getIcon(selectedTheme)}
                    <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
                    <Dropdown.Item as={Button} className={`dropdown-item gap-1 d-flex align-items-center ${selectedTheme === "light" ? "active" : ""}`} onClick={() => handleThemeChange("light")}>
                        <svg className="bi opacity-50" width="1em" height="1em"><use href="#sun-fill"></use></svg>
                        Light
                        <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
                    </Dropdown.Item>
                    <Dropdown.Item as={Button} className={`dropdown-item gap-1 d-flex align-items-center ${selectedTheme === "dark" ? "active" : ""}`} onClick={() => handleThemeChange("dark")}>
                        <svg className="bi opacity-50" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
                        Dark
                        <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
                    </Dropdown.Item>
                    <Dropdown.Item as={Button} className={`dropdown-item gap-1 d-flex align-items-center ${selectedTheme === "auto" ? "active" : ""}`} onClick={() => handleThemeChange("auto")}>
                        <svg className="bi opacity-50" width="1em" height="1em"><use href="#circle-half"></use></svg>
                        Auto
                        <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {children}
        </>
    )
};

export default ThemeChanger;


