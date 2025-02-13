import React from 'react';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";

const ArtifactCard = ({artifactItem}) => {
    const {_id, artifact, photoUrl, created, historicalContexte, likeCount} = artifactItem;
    const truncateDEtails =  historicalContexte.split(" ").slice(0, 12).join(" ") + "...";
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{artifact}</h2>
                <p>Creation time: {created}</p>
                <p>Description: {truncateDEtails}</p>
                <p className='flex gap-2 items-center justify-left'><span className='text-xl'><FcLike /></span> {likeCount}</p>
            </div>
            <figure className='relative'>
                <img className='h-[400px] w-full' src={photoUrl} alt="artifact image" />
                <Link to={`/artifact-details/${_id}`} className='absolute bottom-10 btn bg-black border border-[#ffd700] text-[#ffd700]'>View Details</Link>
            </figure>
        </div>
    );
};

export default ArtifactCard;