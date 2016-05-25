import React from 'react';
import './assets/loader.scss';

const Loader = () => {
    return (
        <div className="progress">
            <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: '45%'}}>
                <span className="sr-only">LOADING</span>
            </div>
        </div>
    )
};

export default Loader;
