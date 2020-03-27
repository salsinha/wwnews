import React, { useState } from "react";
import countries from "./countries.json";
import styles from "./countries.module.scss";
import News from "../News";

const API_KEY = "201c0a6fcbba403e92984f023beffbaf";

const Countries = () => {
    const [country, setCountry] = useState();

    return (
        <div className={styles.selection}>
            <div className="h3">
                News from
                <select
                    className="btn form-control-sm"
                    onChange={e => {
                        setCountry(e.target.value);
                    }}
                >
                    {countries.map(i => (
                        <option key={i.code} value={i.code}>
                            {i.name}
                        </option>
                    ))}
                </select>
            </div>
            {(country === undefined) || (country === "undefined") ? (
                <p className="h5" style={{'marginTop': '2em', 'color': '#3282b8'}}>Please choose a country from the list</p>
            ) : (
                <News
                    url={`http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`}
                />
            )}
        </div>
    );
};

export default Countries;
