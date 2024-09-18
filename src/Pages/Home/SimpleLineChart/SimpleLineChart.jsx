import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        Sales: 5,


    },
    {
        name: 'Tue',
        Sales: 25,

    },
    {
        name: 'Wed',
        Sales: 20,

    },
    {
        name: 'Thu',
        Sales: 40,

    },
    {
        name: 'Fri',
        Sales: 20,

    },
    {
        name: 'Sat',
        Sales: 27,

    },
    {
        name: 'Sun',
        Sales: 12,

    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 5,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="10 10" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 10 }} />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
