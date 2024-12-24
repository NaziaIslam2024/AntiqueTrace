import React, { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import axios from 'axios';

const AddArtifacts = () => {
    const {user} = useContext(AuthContext);
    const [myFormData, setMyFormData] = useState({});
    const handleChange = (event) => {
        setMyFormData({
          ...myFormData,
          [event.target.name]: event.target.value,
        });
    };

    const handleAddArtifact = async(e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        const {likeCount, ...newArtifact} = initialData;
        newArtifact.likeCount = 0;
        console.log(newArtifact);
        //make a post request
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/add-artifact`, newArtifact)
        console.log(data);
    }
    return (
        <div className='bg-white'> 
            <div>
                <h1 className='text-3xl text-center'>Add Artifact Details</h1>
            </div>
            <div>
                <form onSubmit={handleAddArtifact} className="card-body w-1/2 mx-auto">
                    {/* Artifact name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Artifact Name</span>
                        </label>
                        <input name='artifact' type="text" placeholder="Artifact name" className="input input-bordered" required />
                    </div>
                    {/* artifact photo url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Artifact's photo url</span>
                        </label>
                        <input name='photoUrl' type="url" placeholder="Enter a url of artifact's photo" className="input input-bordered" required />
                    </div>
                    {/* artifact type */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Artifact type</span>
                        </label>
                        <select name="artifactType" onChange={handleChange} defaultValue="Artifact type" className="select select-ghost w-full">
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
                        <input name='historicalContexte' type="text" placeholder="Historical Context of the artifact" className="input input-bordered" required />
                    </div>
                   {/* Created at */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Created at</span>
                        </label>
                        <input name='created' type="text" placeholder="When this artifact had created" className="input input-bordered" required />
                    </div>
                    {/* discovered at */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Discovered at</span>
                        </label>
                        <input name='discovered' type="text" placeholder="When this artifact had discovered" className="input input-bordered" min='0' required />
                    </div>
                    {/* Discovered By */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Discovered by/ Credit Line</span>
                        </label>
                        <input name='discoveredBy' type="text" placeholder="Discovered by" className="input input-bordered" required />
                    </div>
                    {/* Present Location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Present Location</span>
                        </label>
                        <input name='location' type="text" placeholder="Present location" className="input input-bordered" required />
                    </div>
                    {/*  Artifact adder name and email*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Artifact adder name and email</span>
                        </label>
                        <input name='adderName' type="text" defaultValue={user.displayName} readOnly className="input input-bordered mb-1" required />
                        <input name='adderEmail' type="email" defaultValue={user.email} readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#ffd700]">Add Artifact</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddArtifacts;