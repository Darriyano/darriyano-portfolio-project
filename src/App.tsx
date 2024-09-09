import React, {useState} from 'react';
import './App.css';
import MainBlack from "./pages/main-black";
import AboutMeBlackPage from "./pages/about-me-black";


function App() {
    const [toggleSwitch, toggleSwitchState] = useState(false);

    const toggledSwitch = () => {
        toggleSwitchState(!toggleSwitch);
    }

    const ToggleSwitcher = () => {
        return (
            <label className="switch">
                <input type="checkbox" onChange={toggledSwitch} checked={toggleSwitch}/>
                <span className="slider round"></span>
            </label>
        )
    }

    return (
        <> <ToggleSwitcher/>
            {!toggleSwitch ? (
                    <>
                        <MainBlack/>
                        <AboutMeBlackPage/></>
                ) :
                <></>}
        </>
    );
}

export default App;
