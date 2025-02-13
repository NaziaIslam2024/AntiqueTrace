import pho1 from '../../assets/IADPostcard_sm_1.webp';

const Contact = () => {
    return (
        <div className='lg:flex gap-6 mt-20 text-[#ffd700] m-4'>
            <div className='flex-1'>
                <h1 className='text-3xl font-bold mb-6'>International Archeology Day</h1>
                <p className='text-gray-400 text-justify'>Join the National Park Service and the Archaeological Institute of America in celebrating International Archaeology Day. It takes place every year in October, but many institutions hold activities and events all month long.

                    Archeological places around the world will offer all kinds of special events, from hands-on excavations to speakers to exhibits. Learn more about the ways that archeology helps us to learn about the past, and talk to real archeologists!

                    It is likely that events are happening near you, and not only at NPS parks, but state parks, National Register or National Historic Landmark properties, museums and other sites. Visit the International Archaeology Day calendar for things to do and places to see.</p>
            </div>
            <img className='flex-1 w-full h-[350px]' src={pho1} alt="" />
        </div>
    );
};

export default Contact;