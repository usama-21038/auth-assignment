
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Root = () => {
    const [amount, setAmount] = useState(10000);
    return (
        <div>
            <Header amount={amount} />
            <Outlet context={{ amount, setAmount }} />
            <Footer />
        </div>
    );
};

export default Root;