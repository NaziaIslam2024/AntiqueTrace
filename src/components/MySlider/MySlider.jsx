import React from 'react';

const MySlider = () => {
    return (
        <div className="carousel rounded-box max-h-[500px]">
            <div className="carousel-item flex flex-col gap-1">
                <img className='h-[250px]'
                    src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/318346/667061/main-image"
                    alt="Burger" />
                <img className='h-[250px]'
                    src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/313262/2071076/main-image"
                    alt="Burger" />
            </div>
            <div className="carousel-item">
                <img
                    src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/318405/667067/main-image"
                    alt="Burger" />
            </div>
            <div className="carousel-item">
                <img
                    src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/312915/671634/main-image"
                    alt="Burger" />
            </div>
            <div className="carousel-item">
                <img
                    src="https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/barakatgallery/images/view/cf0d02f5e7ad34fa4d6d04a43eecf3e8j/barakatgallery-egyptian-prehistoric-hand-axe-8500-bc-6500-bc.jpg"
                    alt="Burger" />
            </div>
            <div className="carousel-item flex flex-col gap-1">
                <img className='h-[250px]'
                    src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/318346/667061/main-image"
                    alt="Burger" />
                <img className='h-[250px]'
                    src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/313262/2071076/main-image"
                    alt="Burger" />
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                    alt="Burger" />
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                    alt="Burger" />
            </div>
        </div>
    );
};

export default MySlider;