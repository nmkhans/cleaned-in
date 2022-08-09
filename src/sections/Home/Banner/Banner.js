import React from 'react';
import bannerFeature from '../../../assets/banner-feature.png';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className="Banner md:mt-20 bg-accent py-20">
            <div className="inner__banner container mx-auto">
                <div className="banner__content bg-accent">
                    <div className="hero h-100 bg-accent">
                        <div className="hero-content flex-col-reverse lg:flex-row-reverse w-4/5 mx-auto">
                            <div className="hero__img lg:ml-20">
                                <img src={bannerFeature} className="max-w-sm" alt="Hero banner" />
                            </div>
                            <div className="hero__detail mx-auto ">
                                <h4 className="text-lg font-normal capitalize mb-2">best quality</h4>
                                <h2 className="text-4xl font-semibold capitalize mb-3">Professional Cleaning Service</h2>
                                <p className="text-md mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                                <button onClick={() => navigate('/contact')} className="btn btn-primary text-white">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;