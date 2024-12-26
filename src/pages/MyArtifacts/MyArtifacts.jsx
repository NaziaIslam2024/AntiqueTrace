import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyArtifactCard from '../../components/MyArtifactCard/MyArtifactCard';

const MyArtifacts = () => {
    const myAddedArtifacts = useLoaderData();
    // const [filteredArtifacts, setFilteredArtifacts] = useState([]);

    // const handleDataFromChild = (ata) => {
    //     const remainingArti = myAddedArtifacts.filter(visa => visa._id !== ata);
    //     setFilteredArtifacts(remainingArti)
    // };
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                myAddedArtifacts.map(oneArtifact => <MyArtifactCard key={oneArtifact._id} oneArtifact={oneArtifact}></MyArtifactCard>)
            }
        </div>
    );
};

export default MyArtifacts;