import ReactApexChart from "react-apexcharts";
import React from "react";

import graphData from "../../assets/json/overviewData.json"

class MainChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: graphData,
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },

        stroke: {
          width: [2, 2, 2],
          curve: "smooth",
          dashArray: [0, 8, 5],
        },
        title: {
          text: "Sales Overview",
          align: "center",
          style: {
            fontSize: "20px",
            fontWeight: "bold",

            color: "#263238",
          },
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              " - <strong>" +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              "</strong>"
            );
          },
        },
        markers: {
          size: 2,
          hover: {
            sizeOffset: 3,
          },
        },
        xaxis: {
          categories: [ "01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan" ],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
          ],
        },
        grid: {
          borderColor: "#f1f1f1",
        },
      },
    };
  }

  render() {
    return (
      <div className="bg-white rounded-2xl p-4 w-full h-full mt-2">
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default MainChart;
