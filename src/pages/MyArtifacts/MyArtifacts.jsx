import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyArtifactCard from '../../components/MyArtifactCard/MyArtifactCard';

const MyArtifacts = () => {
    const myAddedArtifacts = useLoaderData();
    console.log(myAddedArtifacts)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                myAddedArtifacts.map(oneArtifact => <MyArtifactCard key={oneArtifact._id} oneArtifact={oneArtifact}></MyArtifactCard>)
            }
        </div>
    );
};

export default MyArtifacts;