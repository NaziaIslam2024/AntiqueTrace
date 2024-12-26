import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import AuthContext from '../../context/AuthContext/AuthContext';

const MyArtifactCard = ({ oneArtifact }) => {
    const { user } = useContext(AuthContext);
    const [allArtifacts, setAllArtifacts] = useState([])

    useEffect(() => {
        fetchAllArtifacts()
    }, [user])

    const fetchAllArtifacts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-artifacts/${user?.email}`)
        // console.log(data)
        setAllArtifacts(data);
    }
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
    const closeModalClickCross = () => {
        document.getElementById('my_modal_3').close();
    }

    const [updateId, setUpdateId] = useState('');
    const handleUpdateClick = (oneArtifact) => {
        document.getElementById('idd').value = _id;
        document.getElementById('artifact').value = artifact;
        document.getElementById('created').value = created;
        document.getElementById('discovered').value = discovered;
        document.getElementById('discoveredBy').value = discoveredBy;
        document.getElementById('historicalContexte').value = historicalContexte;
        document.getElementById('location').value = location;
        document.getElementById('photoUrl').value = photoUrl;
        document.getElementById('my_modal_3').showModal();
        console.log(oneArtifact._id)
        setUpdateId(oneArtifact._id)
    }

    const handleUpdateArtifact = async (e) => {
        e.preventDefault();
        const updateID = e.target.idd.value;
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);

        try {
            console.log(updateID)
            await axios.put(`${import.meta.env.VITE_API_URL}/update-artifact-details/${updateID}`, initialData)
            // .then(data => {
            //         if(data.modifiedCount > 0){
            //             Swal.fire('Updated')
            //         }
            //         // setDD(initialData)
            //     })
        }
        catch (err) {
            console.log(err)
            Swal.fire(err.message)
        }
    }

    const handleAxiosDelete = async id => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/delete-my-artifact/${id}`)
            console.log(data)
            fetchAllArtifacts()
        } catch (err) {
            console.log(err)
        }
    }


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                handleAxiosDelete(id)
                // console.log(id)
                // await axios.delete(`${import.meta.env.VITE_API_URL}/delete-my-artifact/${id}`)
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your visa application has been deleted.",
                        icon: "success"
                    });
                    // const ata = id;
                    // handleDataFromChild(id);
                }
            }
        });
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
                        <button onClick={closeModalClickCross} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        {/* Artifact name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Artifact Name</span>
                            </label>
                            <input id='idd' type="text" name="idd" />
                            <input id='artifact' name='artifact' type="text" placeholder="Artifact name" className="input input-bordered" required />
                        </div>
                        {/* artifact photo url */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Artifact's photo url</span>
                            </label>
                            <input id='photoUrl' name='photoUrl' type="url" placeholder="Enter a url of artifact's photo" className="input input-bordered" required />
                        </div>
                        {/* artifact type */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Artifact type</span>
                            </label>
                            <select name="artifactType" onChange={handleChange} defaultValue="Artifact type" className="select select-ghost w-full" required>
                                <option disabled>Artifact type</option>
                                <option value='Tool'>Tool</option>
                                <option value='Weapon'>Weapon</option>
                                <option value='Document'>Document</option>
                                <option value='Writing'>Writing</option>
                                <option value='Painting'>Painting</option>
                            </select>
                        </div>
                        {/* Historical Context */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Historical Context</span>
                            </label>
                            <input id='historicalContexte' name='historicalContexte' type="text" placeholder="Historical Context of the artifact" className="input input-bordered" required />
                        </div>
                        {/* Created at */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Created at</span>
                            </label>
                            <input id='created' name='created' type="text" placeholder="When this artifact had created" className="input input-bordered" required />
                        </div>
                        {/* discovered at */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Discovered at</span>
                            </label>
                            <input id='discovered' name='discovered' type="text" placeholder="When this artifact had discovered" className="input input-bordered" min='0' required />
                        </div>
                        {/* Discovered By */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Discovered by/ Credit Line</span>
                            </label>
                            <input id='discoveredBy' name='discoveredBy' type="text" placeholder="Discovered by" className="input input-bordered" required />
                        </div>
                        {/* Present Location */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Present Location</span>
                            </label>
                            <input id='location' name='location' type="text" placeholder="Present location" className="input input-bordered" required />
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