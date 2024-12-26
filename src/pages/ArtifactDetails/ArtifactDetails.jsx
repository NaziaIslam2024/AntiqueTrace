import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import Swal from 'sweetalert2';
import axios from 'axios';
import AuthContext from '../../context/AuthContext/AuthContext';

const ArtifactDetails = () => {
    const {user} = useContext(AuthContext);
    const artifactDetails = useLoaderData();
    const {_id, artifact, photoUrl, discoveredBy, artifactType, created, discovered, historicalContexte, likeCount, location} =artifactDetails;
    const likedArtifact = {id:_id,artifact, photoUrl, discoveredBy, artifactType, created, discovered, historicalContexte, likeCount, location}
    const [like, setLike] = useState(likeCount);
    // const [isLike, setisike] = useState(false);
    const [isLiked, setIsLiked] = useState("0")

    const getlikedCount = async() => {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/get-liked-artifact/${user.email}/${_id}`);
        console.log(data)
        console.log(data.userEmail)
        // if(data.userEmail != '')
        if(data.userEmail!== undefined)    {
            // console.log("nice")
            setIsLiked("1");
            document.getElementById('likeButton').style.backgroundColor = "gray";
        }
        else{
            document.getElementById('likeButton').style.backgroundColor = "white";
        }
    }
    useEffect(() => {
        getlikedCount();
    }, [])
    const handleDislike = async(newLikeCount) => {
        try {
            await axios.patch(`${import.meta.env.VITE_API_URL}/like-artifact/${_id}`,{
                likeCount: newLikeCount,
            });
            
            await axios.delete(`${import.meta.env.VITE_API_URL}/delete-liked-artifact/${user.email}/${_id}`);
            Swal.fire('delete')
        } 
        catch (err) {
        console.log(err)
        Swal.fire(err.message)
        }
    }

    const handleDislike1 = async() => {
        console.log(isLiked);
    }

    const handleAddLike = async() => {
        if(isLiked == "1"){
            
            setIsLiked("0");
            const newLike = like - 1;
            handleDislike(newLike);
            setLike(newLike);
            document.getElementById('likeButton').style.backgroundColor = "white";
        }
        else{
            console.log(isLiked);
            setIsLiked("1");
            handleDislike1();
            console.log(isLiked);
            try {
                await axios.patch(`${import.meta.env.VITE_API_URL}/like-artifact/${_id}`,{
                    likeCount: likeCount+1,
                });
                const newLike = like + 1;
                setLike(newLike)
                await axios.post(`${import.meta.env.VITE_API_URL}/user-liked-artifact`,{
                    userEmail: user.email,
                    likedArtifactId: _id,
                    likedArtifact: likedArtifact
                });
                Swal.fire('Thank you for like the artifact')
            } 
            catch (err) {
            console.log(err)
            Swal.fire(err.message)
            }
            document.getElementById('likeButton').style.backgroundColor = "gray";
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
                        {/* <p>Like: {like}</p> */}
                        <button onClick={handleAddLike} className="btn text-xl" id='likeButton'><FcLike />{like}<span className='hidden' id='likecheck'>{isLiked}</span></button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtifactDetails;