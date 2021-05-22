import React from 'react';

const ShowingContent = ({ photo }) => {
    const { urls } = photo;

    return (
        <div>
            <img className='img-fluid' src={urls?.regular} alt="" />
        </div>
    );
};

export default ShowingContent;