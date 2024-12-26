import React from 'react';
import MySlider from '../../components/MySlider/MySlider';
import FeaturedArtifact from '../../components/FeaturedArtifact/FeaturedArtifact';


const Home = () => {
    return (
        <div className='bg-white'>
            <MySlider></MySlider>
            <FeaturedArtifact></FeaturedArtifact>
        </div>
    );
};

export default Home;