import React from 'react';

const MyArtifactCard = ({oneArtifact}) => {
   const {_id, artifact, artifactType, created, discovered, 
        discoveredBy, historicalContexte, location, photoUrl} = oneArtifact;
   
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                ghgjhghgkh
                {/* <h2 className="card-title">{artifact}</h2>
                <p>Creation time: {created}</p>
                <p>Description: {historicalContexte}</p> */}
            </div>
            <figure className='relative'>
                {/* <img className='h-[400px] w-full' src={photoUrl} alt="artifact image" />
                <Link to={`/artifact-details/${_id}`} className='absolute bottom-10 btn bg-black border border-[#ffd700] text-[#ffd700]'>View Details</Link> */}
            </figure>
        </div>
    );
};

export default MyArtifactCard;