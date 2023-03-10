import React from 'react';

export const Cards = ({
    logo,
    company,
    position,
    postedAt,
    contract,
    location,
    isFeatured,
    isNew,
    handleFilters,
    itemTags
}) => {
    return(
        <div className="job-card">
            <div className="logo">
                {logo}
            </div>
            <div className="card-details">
                <h2 className="company">{company}</h2>
                {isNew && <h2 className="new-tag">New!</h2>}
                {isFeatured && <h2 className="feature-tag">Featured</h2>}
                {isFeatured && <div className="feature-highlight"></div>}


                <h1 className="position">{position}</h1>
                <p className="description">{postedAt} <span>&#8226;</span> {contract} <span>&#8226;</span> {location}</p>
            </div>

            <div className="card-tags">
                {itemTags.map((tag, index) => {
                    return <button onClick={() => handleFilters(tag)} className="job-tag" key={index}> {tag} </button>
                })}
            </div>

        </div>
    );
};

