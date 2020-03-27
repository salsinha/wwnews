import React from "react";
import styles from "./news.module.scss";
import useNews from "../../utils/useNews";
import Loading from "../Loading";
import Error from "../Error";

const News = ({ url }) => {
    const { news, error, loading } = useNews(url);
    if (loading) return <Loading />;
    if (error) return <Error />;
    return (
        <div className={styles.list_news}>
            <div className="container">
                {news.map(i => (
                    <div key={i.title} className="btn btn-light btn-block text-left">
                        <a href={i.url} target="_blank" rel="noopener noreferrer">
                            <p>
                                {i.title.substring(0, i.title.lastIndexOf('-'))} - {" "}
                                <small className="text-muted">
                                    {i.source.name}
                                </small>
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
