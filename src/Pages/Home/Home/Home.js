import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import TopDrones from '../TopDrones/TopDrones';

const bgColor = {
    backgroundColor: 	'rgba(4, 4, 49, 0.897)'
}

const Home = () => {
    return (
        <div style={bgColor}>
         <Header />
         <Banner />
         <TopDrones />
         <Reviews />
         <Footer />
        </div>
    );
};

export default Home;