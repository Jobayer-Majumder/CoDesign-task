import React, { useEffect, useState } from 'react';
import FilterHeading from '../FilterHeading/FilterHeading';
import ShowingContent from '../ShowingContent/ShowingContent';



const accessKey = 'El-MFtITW42ZMuDxC-xjqdliucBmCZNZ_twRXqIsvd0';

const FilteringCategory = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`)
            .then(res => res.json())
            .then(res => setPhotos(res))
    }, [])

    return (
        <section>
            <div className="container">
                <FilterHeading />
                <div className="row row-cols-md-3">
                    {
                        photos.map(photo => <ShowingContent key={photo.id} photo={photo} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default FilteringCategory;