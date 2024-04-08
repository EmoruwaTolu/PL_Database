import React from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { normalizeNames } from "../miscellaneous-files/naming";

const findNestedField = (obj, targetField, percentile) => {
    for (const key in obj) {
        if (key === targetField) {
            return obj[key][percentile];
        } 
        else if (typeof obj[key] === 'object') {
            const result = findNestedField(obj[key], targetField, percentile);
            if (result !== undefined) {
                return result;
            }
        }
    }
    return undefined; // Field not found
};

const CustomTooltip = ({ active, payload, label }) => {
      return (
        <div className="custom-tooltip">
          <div className="tooltip-label">{`${label}`}</div>
          {payload[0] && <div className="tooltip-line">{`${payload[0].name} : ${payload[0].payload.A}`}</div>}
          {payload[1] && <div className="tooltip-line">{`${payload[1].name} : ${payload[1].payload.B}`}</div>}
        </div>
      );
};

export default function RadarAxisMaker({player1, player2, attributes, percentile1, percentile2, season1, season2}){

    var playerChartList = [];

    if(player1 !== undefined && player2 !== undefined){
        for(let i=0; i<attributes.length; i++){

            var p1 = findNestedField(player1.listOfSeasons[season1], normalizeNames[attributes[i]], percentile1);
            var p2 = findNestedField(player2.listOfSeasons[season2], normalizeNames[attributes[i]], percentile2);

            playerChartList.push({subject: attributes[i], A : p1, B : p2})
        }
    }
    
    return (
        <div className="radar-chart">
            {player1 && player2 && attributes.length > 2 && <ResponsiveContainer  height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="60%" data={playerChartList}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" style={{ fontSize: 12}} />
                    <PolarRadiusAxis />
                    <Radar name={player1.name} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name={player2.name} dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>}
        </div>
    );
}