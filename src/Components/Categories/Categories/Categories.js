import React from 'react';
import CategoriesData from '../CategoryData/CategoryData';
import CategoryUiContent from '../CategoryUiContent/CategoryUiContent';
import './Categories.css';



const Categories = () => {
    return (
        <section className='custom-style position-relative d-flex justify-content-center'>
            <div className="container custom-container bg-white p-4 rounded">
                <h3>Top Categories</h3>
                <div className="row row-cols-md-5 g-4">
                    {
                        CategoriesData.map( category => 
                            <CategoryUiContent key={category.id} category={category} />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Categories;