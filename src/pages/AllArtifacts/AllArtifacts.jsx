import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArtifactCard from '../../components/ArtifactCard/ArtifactCard';
import { useQuery } from '@tanstack/react-query';

const AllArtifacts = () => {
    const [artifacts, setArtifacts] = useState([])
    const [searchValue, setSearchTerm] = useState('');
    const [filteredArt, setFilteredAppliedArt] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllArtifacts()
    }, [])
    // const [allVisa, setAllVisa] = useState(artifacts);
    const fetchAllArtifacts = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-artifacts`)
            setArtifacts(data)
            setFilteredAppliedArt(data)
        }
        catch (error) {
            console.error('Error fetching artifacts:', error);
        } finally {
            setLoading(false); // Hide the spinner once done
        }
    }
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSearch = () => {
        console.log(searchValue);
        if (searchValue === '') {
            setFilteredAppliedArt(artifacts);
            console.log(artifacts)
        }
        else {
            const filtered = artifacts.filter((item) =>
                item.artifact.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredAppliedArt(filtered);
        }
    };
   
    return (
        <>
            <div className='md:w-1/3 md:mx-auto mb-10'>
                <input className="input input-bordered" onChange={handleSearchChange} placeholder='Artifact name' type="text" name="search" id="" />
                <button className='btn btn-info ml-4 text-lg' onClick={handleSearch}>Search</button>
            </div>
            {
                loading ? <div className='flex justify-center'><span className="text-[#ffd700] loading loading-ring loading-lg"></span></div>
                :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    filteredArt.map((artifactItem) => <ArtifactCard key={artifactItem._id} artifactItem={artifactItem}></ArtifactCard>)
                }
            </div>
            }
        </>
    );
};

export default AllArtifacts;