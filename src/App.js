import React from "react";
import "./App.scss";
import Countries from "./components/Countries";

const App = () => {
    return (
        <div className="App">
            <h2 className="title">
                <span className="bold">World Wide News</span> - All the latest news in one
                place
            </h2>
            <Countries />
            <div className="footer">© Alexandre Salsinha</div>
        </div>
    );
};

export default App;
