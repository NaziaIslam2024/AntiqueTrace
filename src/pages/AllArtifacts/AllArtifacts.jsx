import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArtifactCard from '../../components/ArtifactCard/ArtifactCard';

const AllArtifacts = () => {
    const [artifacts, setArtifacts] = useState([])
    const fetchAllArtifacts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-artifacts`)
        setArtifacts(data)
    }
    useEffect(() => {
        fetchAllArtifacts()
    }, [])
    console.log(artifacts);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                artifacts.map((artifactItem) => <ArtifactCard key={artifactItem._id} artifactItem={artifactItem}></ArtifactCard>)
            }
        </div>
    );
};

export default AllArtifacts;