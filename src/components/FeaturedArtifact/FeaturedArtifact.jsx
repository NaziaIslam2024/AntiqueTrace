import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArtifactCard from '../ArtifactCard/ArtifactCard';
import FeaturedCard from './FeaturedCard';
import { Link } from 'react-router-dom';

const FeaturedArtifact = () => {
    const [artifact, setArtifact] = useState([]);

    const dataCallFunction = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifacts/featured`)
        console.log(data)
        setArtifact(data);
    }

    useEffect(() => {
        dataCallFunction();
    }, [])

    return (
        <div className='my-20 '>
            <h1 className="text-3xl text-center mb-10">Featured Artifacts</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    artifact.map(oneArt => <FeaturedCard key={oneArt._id} oneArt={oneArt}></FeaturedCard>)
                }
            </div >
            <div className='flex justify-around my-10'>
                <Link to='/allArtifacts' className='btn bg-[#ffd700]'>View All</Link>
            </div>
        </div>
    );
};

export default FeaturedArtifact;