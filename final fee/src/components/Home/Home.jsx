import React from 'react';
import Hero from './Hero/Hero';
import HowItWorks from './HowItWorks/HowItWorks';
import WhyTrade from './WhyTrade/WhyTrade';
import PopularOffers from './PopularOffers/PopularOffers';

const Home = () => {
    return (
        <>
            <Hero />
            <HowItWorks />
            <WhyTrade />
            <PopularOffers />
        </>
    );
};
export default Home;