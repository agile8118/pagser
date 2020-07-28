import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

import SimplePieChart from "./PieChart";

const data = [
  {
    name: "1",
    views: 4000,
    amt: 2400,
  },
  {
    name: "2",
    views: 3000,
    amt: 2210,
  },
  {
    name: "3",
    views: 2000,
    amt: 2290,
  },
  {
    name: "3",
    views: 2780,
    amt: 2000,
  },
  {
    name: "4",
    views: 1890,
    amt: 2181,
  },
  {
    name: "5",
    views: 2390,
    amt: 2500,
  },
  {
    name: "6",
    views: 3490,
    amt: 2100,
  },
  {
    name: "7",
    views: 3490,
    amt: 2100,
  },
  {
    name: "8",
    views: 3490,
    amt: 2100,
  },
  {
    name: "9",
    views: 3490,
    amt: 2100,
  },
  {
    name: "10",
    views: 3490,
    amt: 2100,
  },
  {
    name: "11",
    views: 3490,
    amt: 2100,
  },
  {
    name: "12",
    views: 3490,
    amt: 2100,
  },
  {
    name: "13",
    views: 3490,
    amt: 2100,
  },
  {
    name: "14",
    views: 3490,
    amt: 2100,
  },
  {
    name: "15",
    views: 3490,
    amt: 2100,
  },
  {
    name: "16",
    views: 3490,
    amt: 2100,
  },
  {
    name: "17",
    views: 3490,
    amt: 2100,
  },
  {
    name: "18",
    views: 3490,
    amt: 2100,
  },
  {
    name: "19",
    views: 3490,
    amt: 2100,
  },
  {
    name: "20",
    views: 3490,
    amt: 2100,
  },
  {
    name: "21",
    views: 3490,
    amt: 2100,
  },
  {
    name: "22",
    views: 3490,
    amt: 2100,
  },
  {
    name: "23",
    views: 3490,
    amt: 2100,
  },
  {
    name: "24",
    views: 3490,
    amt: 2100,
  },
  {
    name: "25",
    views: 3490,
    amt: 2100,
  },
  {
    name: "26",
    views: 3490,
    amt: 2100,
  },
  {
    name: "27",
    views: 3490,
    amt: 2100,
  },
  {
    name: "28",
    views: 3490,
    amt: 2100,
  },
  {
    name: "29",
    views: 3490,
    amt: 2100,
  },
  {
    name: "30",
    views: 3490,
    amt: 2100,
  },
];

const data01 = [
  { name: "Likes", value: 1890 },
  { name: "Dislikes", value: 300 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }
  return null;
}

const Analytics = () => {
  return (
    <React.Fragment>
      <BarChart
        width={1300}
        height={600}
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="8 0" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="views" fill="#82ca9d" />
      </BarChart>

      <SimplePieChart />
    </React.Fragment>
  );
};

export default Analytics;
