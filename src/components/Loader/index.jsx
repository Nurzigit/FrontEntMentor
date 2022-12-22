import React from 'react';
import './style.css';

export const Loader = () => {
    return(
        <div>
			<center>
				<main>
					<div className="preloader">
						<div className="preloader__square"></div>
						<div className="preloader__square"></div>
						<div className="preloader__square"></div>
						<div className="preloader__square"></div>
					</div>
					<div className="status">Loading<span className="status__dot">.</span><span className="status__dot">.</span><span className="status__dot">.</span></div>
				</main>
			</center>
        </div>
    );           
};

