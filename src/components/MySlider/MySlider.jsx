import React from 'react';

const MySlider = () => {
    return (
        <div className="carousel w-full max-h-[500px]">
            <div id="slide1" className="carousel-item">
                <div className='flex-col'>
                    <img className='h-[250px]'
                        src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/318346/667061/main-image"
                        alt="Burger" />
                    <img className='h-[250px] w-full'
                        src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/313262/2071076/main-image"
                        alt="Burger" />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item">
                <div className='h-[500px] flex'>
                    <img className=''
                        src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/318405/667067/main-image"
                        alt="Burger" />
                    <img
                        src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/312915/671634/main-image"
                        alt="Burger" />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item flex-col">
                <img className='h-[250px]'
                    src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/321330/1357090/main-image"
                    alt="Burger" />
                <img className='h-[250px]'
                    src="https://i.ibb.co.com/GdYSZTC/a7.jpg"
                    alt="Burger" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item">
                <div className='h-[500px] flex'>
                    <img className=''
                        src="https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/barakatgallery/images/view/ba4f7172a572f9d9d8f7c4cf49e08244j/barakatgallery-byzantine-hanging-incense-burner-thurible-ad-500-ad-700.jpg"
                        alt="Burger" />
                    <img
                        src="https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/barakatgallery/images/view/cf0d02f5e7ad34fa4d6d04a43eecf3e8j/barakatgallery-egyptian-prehistoric-hand-axe-8500-bc-6500-bc.jpg"
                        alt="Burger" />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item flex-col">
                <img className='h-[250px]'
                    src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/312331/681213/main-image"
                    alt="Burger" />
                <img className='h-[250px]'
                    src="https://i.ibb.co.com/GdYSZTC/a7.jpg"
                    alt="Burger" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item">
                <div className='h-[500px] flex'>
                    <img className=''
                        src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/825764/2017148/main-image"
                        alt="Burger" />
                    <img
                        src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/316540/653990/main-image" alt="Burger" />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default MySlider;