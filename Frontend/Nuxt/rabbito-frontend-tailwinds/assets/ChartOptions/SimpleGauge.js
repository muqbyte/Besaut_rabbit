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
              [0.1, "#22c55e"],
              [0.55, "#ffd000"],
              // [0.65, "#ff5e00"],
              [1.0, "#ff2600"],
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
  