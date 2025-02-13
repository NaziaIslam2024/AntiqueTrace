import React from 'react';
import MySlider from '../../components/MySlider/MySlider';
import FeaturedArtifact from '../../components/FeaturedArtifact/FeaturedArtifact';
import Blog from '../../components/Blog/Blog';
import Galary from '../../components/Galary/Galary';
import MyNewSlider from '../../components/MyNewSlider/MyNewSlider';
import Review from '../../components/Review/Review';


const Home = () => {
    return (
        <div className='bg-white'>
            <MyNewSlider></MyNewSlider>
            {/* <MySlider></MySlider> */}
            <FeaturedArtifact></FeaturedArtifact>
            <Galary></Galary>
            <Review></Review>
            <Blog></Blog>
        </div>
    );
};

export default Home;