// import React, { useState } from 'react';
import FilterHeading from '../FilterHeading/FilterHeading';
// import { createClient } from 'pexels';
import { createApi } from 'unsplash-js';



// const api = '563492ad6f91700001000001f1232539a06a4f7f9e494e495e578da2'
const accessKey = 'El-MFtITW42ZMuDxC-xjqdliucBmCZNZ_twRXqIsvd0';
// const secretKey = 'aRkF8JSXCnAr_s67Zf33-a5SeXJee_xCzwLTuIZQVcI';
const unsplash = createApi({ accessKey: `${accessKey}` });


const FilteringCategory = () => {
    // const [ photos, setPhotos] = useState([]);

    unsplash.photos.get({ per_page: 10 }).then(result => {
        if (result.errors) {
          // handle error here
          console.log('error occurred: ', result.errors[0]);
        } else {
          // handle success here
          const photo = result.response;
          console.log(photo);
        }
      });

    return (
        <section>
            <div className="container">
                <FilterHeading />
            </div>           
        </section>
    );
};

export default FilteringCategory;