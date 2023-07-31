import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';

function Article () {
    const [article, setArticle] = React.useState();
    const { title } = useParams();
    console.log(title);

    React.useEffect(() => {
        async function fetchArticle() {
            try {
                const {data} = await axios.get('https://64c12108fa35860baea00799.mockapi.io/Items' + title);
                setArticle(data);
            } catch (error) {
                alert('Error');
            }
        }
        fetchArticle();
    }, []);

    if (!article) {
        return 'Wait';
    }

    return (
        <Link key={article.title} to={`/articles/${article.title}`}>
            <div className="article text-black font-weight-bold ml-5 mr-5 text-left">
                <div>
                    <h5 >{article.title}</h5>
                </div>
                <div>
                    <img src={article.imageUrl}/>
                </div>
                <div>
                    <p>{article.description}</p>
                    </div>
                <div className="experts-comment">
                    <h4>Experts Comment</h4>
                    <p>{article.expertComment}</p>
                </div>
            </div>
        </Link>
    )
}

export default Article;