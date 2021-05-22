import React from 'react';
import banner from '../../images/antonino-visalli-RNiBLy7aHck-unsplash.jpg';
import { BsSearch } from 'react-icons/bs';


const bannerStyle = {
    // backgroundImage: `url(${banner})`,
    backgroundImage: `linear-gradient(to right, rgba(109, 179, 242, .4), rgba(109, 179, 242, .4)), url(${banner})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const Banner = () => {
    return (
        <section style={bannerStyle}>
            <div className="container">
                    <h1 className='text-white text-center'>
                        Your local source of high quality images
                        and videos directly from their creators
                    </h1>
                <div className='position-relative d-flex justify-content-center'>
                    <input className='form-control rounded-pill w-75 p-3' type="search" name="" id="" placeholder='Search Photos And Videos' />
                    <span className='position-absolute' style={{ top: '15px', right: '16%' }}>
                        <BsSearch />
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Banner;