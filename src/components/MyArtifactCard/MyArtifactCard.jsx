import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyArtifactCard = ({ oneArtifact }) => {
    const { _id, artifact, artifactType, created, discovered,
    discoveredBy, historicalContexte, location, photoUrl } = oneArtifact;
    // const [dd, setDD] = useState(oneArtifact);
    const [myFormData, setMyFormData] = useState({});
    const handleChange = (event) => {
        setMyFormData({
          ...myFormData,
          [event.target.name]: event.target.value,
        });
    };
    
    const closeModalClick = () => {
        document.getElementById('my_modal_3').close();
    }

    const handleUpdateClick = ({oneArtifact}) => {
        document.getElementById('my_modal_3').showModal();
    }

    const handleUpdateArtifact = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/update-artifact-details/${_id}`,{
                body: initialData
            })
           .then(data =>{
            Swal.fire('Updated.')
            // setDD(initialData)
           })   
        } 
        catch (err) {
        console.log(err)
        Swal.fire(err.message)
        }
    }

    const handleDelete = async() => {
        await axios.delete(`${import.meta.env.VITE_API_URL}/delete-my-artifact/${_id}`)
    }

    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{artifact}</h2>
                    <p>Artifact type: {artifactType}</p>
                    <p>Creation time: {created}</p>
                    <p>Description: {historicalContexte}</p>
                    <p>Discovered: {discovered} by {discoveredBy}</p>
                    <p>Present location: {location}</p>
                </div>
                <figure className='relative'>
                    <img className='h-[400px] w-full' src={photoUrl} alt="artifact image" />
                    <button onClick={() => handleUpdateClick(oneArtifact)} className='absolute bottom-10 left-5 btn bg-black border border-[#ffd700] text-[#ffd700]'>Update</button>
                    <button onClick={() => handleDelete(_id)} className='absolute bottom-10 right-5 btn bg-black border border-[#ffd700] text-[#ffd700]'>Delete</button>
                </figure>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleUpdateArtifact} className="card-body w-full mx-auto">
                        {/* Artifact name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Artifact Name</span>
                            </label>
                            <input name='artifact' defaultValue={artifact} type="text" placeholder="Artifact name" className="input input-bordered" required />
                        </div>
                        {/* artifact photo url */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Artifact's photo url</span>
                            </label>
                            <input name='photoUrl' defaultValue={photoUrl} type="url" placeholder="Enter a url of artifact's photo" className="input input-bordered" required />
                        </div>
                        {/* artifact type */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Artifact type</span>
                            </label>
                            <select name="artifactType" onChange={handleChange} defaultValue="Artifact type" className="select select-ghost w-full" required>
                                <option disabled>Artifact type</option>
                                <option>Tool</option>
                                <option>Weapon</option>
                                <option>Document</option>
                                <option>Writing</option>
                                <option>Painting</option>
                            </select>
                        </div>
                        {/* Historical Context */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Historical Context</span>
                            </label>
                            <input name='historicalContexte' defaultValue={historicalContexte} type="text" placeholder="Historical Context of the artifact" className="input input-bordered" required />
                        </div>
                        {/* Created at */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Created at</span>
                            </label>
                            <input name='created' defaultValue={created} type="text" placeholder="When this artifact had created" className="input input-bordered" required />
                        </div>
                        {/* discovered at */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Discovered at</span>
                            </label>
                            <input name='discovered' defaultValue={discovered} type="text" placeholder="When this artifact had discovered" className="input input-bordered" min='0' required />
                        </div>
                        {/* Discovered By */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Discovered by/ Credit Line</span>
                            </label>
                            <input name='discoveredBy' defaultValue={discoveredBy} type="text" placeholder="Discovered by" className="input input-bordered" required />
                        </div>
                        {/* Present Location */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Present Location</span>
                            </label>
                            <input name='location' defaultValue={location} type="text" placeholder="Present location" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={closeModalClick} className="btn bg-[#ffd700]">Update Artifact</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>

    );
};

export default MyArtifactCard;