import React from 'react';
import Banner from './Banner';
import Card from './Card';
import Hero from './Hero';
import SecondBanner from './SecondBanner/SecondBanner';

const Home = () => {
    return (
        <div className='container'>
        <Hero></Hero>
        <Banner></Banner>
        <Card></Card>
        <SecondBanner></SecondBanner>
        </div>
    );
};

export default Home;