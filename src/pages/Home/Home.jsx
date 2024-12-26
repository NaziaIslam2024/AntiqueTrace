import React from 'react';
import MySlider from '../../components/MySlider/MySlider';
import FeaturedArtifact from '../../components/FeaturedArtifact/FeaturedArtifact';
import Blog from '../../components/Blog/Blog';


const Home = () => {
    return (
        <div className='bg-white '>
            <MySlider></MySlider>
            <FeaturedArtifact></FeaturedArtifact>
            <Blog></Blog>
        </div>
    );
};

export default Home;