import { useEffect, useRef } from "react";
import * as echarts from "echarts";

function Chart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    chart.setOption({
      xAxis: {
        data: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          data: [10, 2, 8, 5, 7, 2, 5],
          itemStyle: {
            color: "#133CF4",
            shadowColor: "#91cc75",
          },
        },
        {
          type: "bar",
          data: [6, 0, 2, 2, 3, 0, 2],
          itemStyle: {
            color: "#91cc75",
            shadowColor: "#91cc75",
            borderType: "dashed",
            opacity: 0.5,
          },
        },
      ],
    });

    return () => {
      chart.dispose();
    };
  }, []);

  return <div className="table" ref={chartRef} />;
}

export default Chart;
