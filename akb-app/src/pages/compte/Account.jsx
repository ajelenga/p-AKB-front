import React, {useState} from 'react';
import Navbar from "../../components/Menu/Navbar";
import Profile from "./Profile";


const Account = (props) => {
    const [curentTab, setCurrentTab] = useState({name: "profile"});
    const [tabs] = useState([
        {tabKey: "profile", tabTitle: "Mon profile"}
    ]);
    const handleTabs = (name) => {
        setCurrentTab({name});
    };
    return (
        <section className="home_LOGIN">
            <Navbar/>
            <div className="homepage">
                <div className="search_hero">
                    <div className="container search_hero__content_login">
                        <div className="search_hero__content__wrapper_login">


                            <div className="tabs">
                                Location V
                                <ul>
                                    {tabs.map((tab, index) => (
                                        <li key={index}
                                            className={`tabs-pane ${
                                                curentTab.name === tab.tabKey ? "active" : ""
                                            }`}
                                        >
                                            <span onClick={() => handleTabs(tab.tabKey)}>{tab.tabTitle}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tabs-contents">
                                {curentTab.name === "profile" && <Profile/>}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


export default Account;