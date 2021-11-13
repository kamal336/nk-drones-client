import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import TopDrones from '../TopDrones/TopDrones';

const Home = () => {
    return (
        <div>
         <Header />
         <Banner />
         <TopDrones />
         <Reviews />
         <Footer />
        </div>
    );
};

export default Home;