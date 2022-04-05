
import React from 'react'
import { useEffect, useState } from 'react'
import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis }
    from 'recharts'

const Dashboard = () => {
    const [chart, setChart] = useState()
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])

    return (
        <div className="row m-0">
            <div className="col-lg-6 col-sm-12 mt-5">
                <h3 className='text-primary text-center fw-bold mt-3'>MONTH WISE SELL</h3>
                <LineChart width={600} height={400} data={chart}>
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                    <XAxis dataKey={"month"}></XAxis>
                    <Tooltip />
                    <YAxis dataKey={""}></YAxis>
                </LineChart>
            </div>


            <div className="col-lg-6 col-sm-12 mt-5">
                <h3 className='text-primary text-center fw-bold mt-3'>MONTH WISE SELL</h3>
                <ResponsiveContainer width={650} height={400}>
                    <AreaChart
                        width={500}
                        height={400}
                        data={chart}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="sell" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Dashboard
