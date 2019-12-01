import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchNews } from '../actions';

const Home = (props) => {
    useEffect(() => {
        props.fetchNews();
    },[]);
    const renderNews = () => {
        return props.news.articles.map((article, idx) => {
            if(idx !== 0) {
                return(
                    <li className='col-md-3 mb-5' key={idx}>
                        <div className='card'>
                            <img src={article.urlToImage} className='card-img-top' alt={article.title} />
                            <div className='card-body'>
                            <h2 className='card-title'>{article.title}</h2>
                            <p className='card-text text-muted'>{article.description}</p>
                            <a className='btn btn-primary' href={article.url} target='_blank'>Lead more »</a>
                            </div>
                        </div>
                  </li>
                )
            }
        })
    }
    if(props.news.articles) {
        return (
            <div>
                <div className='jumbotron' style={
                    {  
                        backgroundImage: `url(${props.news.articles[0].urlToImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                      }
                }>
                    <div className='container'>
                        <h1 className='display-4 text-white font-weight-bold'>{props.news.articles[0].title}</h1>
                        <p className='text-light'>{props.news.articles[0].description}</p>
                        <p><a className='btn btn-primary btn-lg' href={props.news.articles[0].url} target='_blank' role='button'>Lead more »</a></p>
                    </div>
                </div>
                <div className='col-12'>
                    <ul className='row'>
                        {renderNews()}
                    </ul>
                </div>
            </div>
            );
    } else {
        return (
            <li>Loading</li>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        news: state.news
    };
};

const loadData = (store) => {
   return store.dispatch(fetchNews());
}

export { loadData }; 

export default connect(
    mapStateToProps,
    {
        fetchNews
    }
)(Home);
