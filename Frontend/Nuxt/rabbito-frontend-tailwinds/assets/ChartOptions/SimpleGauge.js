export const chartOption = (data, unit, max) => ({
    tooltip: {
      // formatter: '{a} <br/>{b} : {c} %'
    },
    series: [
      {
        name: "Temperature",
        type: "gauge",
        // center: ["50%", "45%"],
        detail: {
          valueAnimation: true,
          formatter: "{value}",
          color: 'inherit',
        },
        title: {
          offsetCenter: ["0", "90%"],
          color: 'inherit',
        },
        data: [{ value: data, name: unit }],
        max: max,
        axisLine: {
          lineStyle: {
            color: [
              [0.3, "#006064"],
              [0.55, "#7dd3fc"],
              [0.65, "#22c55e"],
              [1.0, "rgb(219,58,55)"],
            ],
            width: 10,
          },
        },
        splitLine: {
          distance: -10,
          length: 10,
          lineStyle: {
            color: "auto",
            width: 4,
          },
        },
        axisLabel: {
          color: "inherit",
          distance: 25,
          fontSize: 8,
        },
      },
    ],
  });
  