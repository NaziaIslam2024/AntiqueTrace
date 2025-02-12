import React from 'react';

const MyNewSlider = () => {
    return (
        <div className="carousel w-full h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='flex flex-col w-1/3'>
                    <div>
                        <img
                            src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/318346/667061/main-image"
                            className="w-full h-[250px]" /></div>
                    <div>
                        <img
                            src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/313262/2071076/main-image"
                            className="w-full h-[250px]" /></div>
                </div>
                <div className='flex flex-col w-1/3'>
                    <div>
                        <img
                            src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/318405/667067/main-image"
                            className="w-full h-[500px]" /></div>
                </div>
                <div className='flex flex-col w-1/3'>
                    <div>
                        <img
                            src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/312915/671634/main-image"
                            className="w-full h-[500px]" /></div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='flex flex-col w-1/3'>
                    <div>
                        <img
                            src="https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/barakatgallery/images/view/ba4f7172a572f9d9d8f7c4cf49e08244j/barakatgallery-byzantine-hanging-incense-burner-thurible-ad-500-ad-700.jpg"
                            className="w-full h-[500px]" /></div>
                </div>
                <div className='flex flex-col w-1/3'>
                    <div>
                        <img
                            src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/321330/1357090/main-image"
                            className="w-full h-[250px]" /></div>
                    <div>
                        <img
                            src="https://i.ibb.co.com/GdYSZTC/a7.jpg"
                            className="w-full h-[250px]" /></div>
                </div>
                <div className='flex flex-col w-1/3'>
                    <div>
                        <img
                            src="https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/barakatgallery/images/view/cf0d02f5e7ad34fa4d6d04a43eecf3e8j/barakatgallery-egyptian-prehistoric-hand-axe-8500-bc-6500-bc.jpg"
                            className="w-full h-[500px]" /></div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className='flex flex-col w-1/3'>
                    <div>
                        <img
                            src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/312331/681213/main-image"
                            className="w-full h-[500px]" /></div>
                </div>
                <div className='flex flex-col w-1/3'>
                    <div>
                        <img
                            src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/825764/2017148/main-image"
                            className="w-full h-[500px]" /></div>
                </div>
                <div className='flex flex-col w-1/3'>
                    <div>
                        <img
                            src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/316540/653990/main-image"
                            className="w-full h-[250px]" /></div>
                    <div>
                        <img
                            src="https://i.ibb.co.com/GdYSZTC/a7.jpg"
                            className="w-full h-[250px]" /></div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default MyNewSlider;