import React from 'react';




const CategoryUiContent = ({ category }) => {
    const { img, title} = category;

    const categoryContentStyle = {
        width: '100%',
        height: '110px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `url(${img})`,
        backgroundSize: 'cover',
        borderRadius: '8px'
    }

    return (
        <div>
            <div className="col" style={categoryContentStyle} >
                <h4 className='text-white fw-bold m-auto'>{title}</h4>
            </div>
        </div>
    );
};

export default CategoryUiContent;