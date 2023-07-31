import React from "react";
// import ArticlesList from "./ArticlesList.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Articles () {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetch('https://64c12108fa35860baea00799.mockapi.io/Items')
        .then((res) => res.json())
        .then((arr) => {
        setItems(arr);
        });
    });


    return (
        <div className="articles">
            {
                items.map( items => {
                    return(
                        <Link key={items.title} to={'/articles'}>
                        <div className='row col-6 col-sm-11'> 
                                <div>
                                    <img src={items.imageUrl}/>
                                    <h5 className="titleArticle">{items.title}</h5>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}


export default Articles;