import React from 'react';
import Header from '../../Headers/Header/Header';
import Footer from '../../Footer/Footer';
import Middle from '../../Headers/Middle/Middle';
import LastPart from '../../Headers/LastPart/LastPart';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Middle></Middle>
            <LastPart></LastPart>
            <Footer></Footer>
        </div>
    );
};

export default Home;