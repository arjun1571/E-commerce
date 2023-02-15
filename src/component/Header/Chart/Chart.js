import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = () => {
    const data = [
        {name: 'Page A', price: 400, marks: 2400, amt: 2400},
        {name: 'Page b', price: 255, marks: 2400, amt: 2400},
        {name: 'Page c', price: 520, marks: 2400, amt: 2400},
        {name: 'Page d', price: 320, marks: 2400, amt: 2400},
        {name: 'Page e', price: 160, marks: 2400, amt: 2400}
         ];
    return (
        <div>
             <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Chart;