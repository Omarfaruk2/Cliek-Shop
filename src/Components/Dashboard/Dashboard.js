
import React from 'react'
import { useEffect, useState } from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis }
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
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        width={500}
                        height={400}
                        data={chart}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="sell" stroke="#82ca9d" fill="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
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

            <div className="col-lg-6 col-sm-12 mt-5">
                <h3 className='text-primary text-center fw-bold mt-3'>MONTH WISE SELL</h3>
                <div style={{ width: '100%', height: 400 }}>
                    <ResponsiveContainer>
                        <ComposedChart
                            width={600}
                            height={400}
                            data={chart}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="month" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>


            <div className="col-lg-6 col-sm-12 mt-5">
                <h3 className='text-primary text-center fw-bold mt-3'>Investment Vs Revenue</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={600}
                        height={400}
                        data={chart}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>


        </div>
    )
}
export default Dashboard
