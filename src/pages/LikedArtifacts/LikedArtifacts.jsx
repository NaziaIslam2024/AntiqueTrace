import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { FcLike } from "react-icons/fc";
import ff from '../../assets/empty.svg'
import { axiosSecure } from '../../hooks/useAxiosSecure';

const LikedArtifacts = () => {
    const { user } = useContext(AuthContext);
    const [likedArtifacts, setLikedArtifacts] = useState([])
    const [mapArt, setMapArt] = useState([]);
    const likedArtifactId = async () => {
        // const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-liked-artifacts/${user.email}`, {withCredentials: true});
        const { data } = await axiosSecure.get(`/all-liked-artifacts/${user.email}`);
        
        console.log(data)
        setLikedArtifacts(data);
    }
    
    useEffect(() => {
        likedArtifactId();
    }, [])

    return (
        <div className='text-white'>
            <h1>length:{likedArtifacts.length} </h1>
            {
                likedArtifacts.length > 0 ?
                <>
                <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-[#ffd700] text-base'>
                            <th>Artifact title</th>
                            <th>Historical Context</th>
                            <th>Like</th>
                            <th>Creation time</th>
                            <th>Present location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            likedArtifacts.map(oneartifact => 
                                <tr key={oneartifact._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-20 w-20">
                                                <img src={oneartifact.likedArtifact.photoUrl} alt="artifact photo" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{oneartifact.likedArtifact.artifact}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {oneartifact.likedArtifact.historicalContexte}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{oneartifact.likedArtifact.artifactType}</span>
                                </td>
                                <td className='flex justify-center items-center gap-1'>{oneartifact.likedArtifact.likeCount}<FcLike /></td>
                                <td>{oneartifact.likedArtifact.created}</td>
                                <td>{oneartifact.likedArtifact.location}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
                </>
                :
                <div className='flex flex-col items-center my-10'>
                <h1 className='text-3xl text-center text-yellow-300'>You didn't like any artifact</h1>
                <img className='w-4/12 mt-10' src={ff} alt="" />
                </div>
            }
            
        </div>
    );

};

export default LikedArtifacts;