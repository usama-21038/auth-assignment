import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Bill from '../../Bill';

const Bills = () => {
     const  data=useLoaderData();
    return (
        <div className="mx-auto my-10 grid gap-5 md:gap-8 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            {
                data.map((card) => (
                    <Bill key={card.id} bill={card}></Bill>
                ))
            }
           </Suspense>
        </div>
    );
};

export default Bills;