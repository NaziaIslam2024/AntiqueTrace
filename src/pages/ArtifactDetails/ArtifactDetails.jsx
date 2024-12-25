import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import Swal from 'sweetalert2';
import axios from 'axios';

const ArtifactDetails = () => {
    const artifactDetails = useLoaderData();
    const {_id, artifact, photoUrl, discoveredBy, artifactType, created, discovered, historicalContexte, likeCount, location} =artifactDetails;
    const [like, setLike] = useState(likeCount);
    // const [modified, setModified] = useState(false)

    const handleAddLike = async() => {
        try {
            await axios.get(`${import.meta.env.VITE_API_URL}/like-artifact/${_id}`)
           
            // setModified(true)
            const newLike = like + 1;
            setLike(newLike)
            Swal.fire('Thank you for like the artifact')
        } 
        catch (err) {
        console.log(err)
        Swal.fire(err.message)
        }
        
    }
    // console.log(modified)

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={photoUrl}
                    className="max-w-2xl rounded-lg shadow-2xl" />
                <div className='text-justify'>
                    <h1 className="text-2xl font-bold">{artifact}</h1>
                    <p className="py-6">{historicalContexte}</p>
                    <p>created: {created}</p>
                    <p>Artifact type: {artifactType}</p>
                    <p>Discovered by {discoveredBy} at {discovered}</p>
                    <p>Present location: {location}</p>
                    <div className='flex justify-between items-center w-1/2'>
                        <p>Like: {like}</p>
                        <button onClick={handleAddLike} className="btn text-xl"><FcLike /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtifactDetails;