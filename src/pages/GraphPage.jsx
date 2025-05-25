import React, { useEffect } from "react";
import TopBar from "../components/top-bar";
import Plot from "react-plotly.js";
// import {useAtomValue} from 'jotai'
// import {chartData} from '../atoms/atoms.js'

const GraphPage = () => {
  // const graph=useAtomValue(chartData)
  // useEffect(() => {
  //   console.log(graph.data)
  // }, [])
  const graph = {
    data: [
      {
        chart_type: "bar",
        x: ["2016", "2017", "2018", "2019", "2020"],
        y: [290.7, 296.4, 321.4, 338.1, 358.6],
        title: "PCT System Fees Revenue (2016-2020)",
      },
      {
        chart_type: "bar",
        x: ["2016", "2017", "2018", "2019", "2020"],
        y: [59.6, 69.9, 74.3, 76.8, 76.2],
        title: "Madrid System Fees (2016-2020)",
      },
      {
        chart_type: "bar",
        x: ["2014", "2015", "2016", "2017", "2018", "2019", "2020"],
        y: [221, 225.5, 271.9, 245.4, 307.4, 384.2, 534.8],
        title: "Unrestricted cash/investments (2014-2020)",
      },
      {
        chart_type: "bar",
        x: ["2014", "2015", "2016", "2017", "2018", "2019", "2020"],
        y: [88.9, 102.1, 108.6, 124.4, 125.8, 190.2, 211.2],
        title: "Strategic cash/investments (2014-2020)",
      },
    ],
  };
  return (
    <div>
      <TopBar />
      <p className="text-center pl-5 pr-5 pt-5 font-bold text-3xl  bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
        GRAPHS
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 justify-items-center">
        {graph.data &&
          graph.data.map((item, index) => {
            return (
              <div
                key={index}
                className="shadow-lg shadow-white/60 hover:scale-105 hover:shadow-red-600 transition "
              >
                <Plot
                  data={[
                    {
                      x: item.x,
                      y: item.y,
                      type: item.chart_type,
                    },
                  ]}
                  layout={{
                    width: 550,
                    height: 400,
                    title: {
                      text: item.title,
                      font: {
                        family: "Arial",
                        size: 20,
                        color: "black",
                      },
                    },
                    showLegend: true,
                    barcornerradius: 5,
                    font: {
                      family: "Arial",
                      size: 15,
                      weight: "bold",
                      color: "black",
                    },
                  }}
                  config={{
                    responsive: true,
                  }}
                />
              </div>
            );
          })}

        {!graph.data && <div>Tokenisation Error. Go back and regenerate</div>}
      </div>
    </div>
  );
};

export default GraphPage;
