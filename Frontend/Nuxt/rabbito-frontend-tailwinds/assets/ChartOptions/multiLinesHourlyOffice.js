export default function (data, selectedType) {
    var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
            data: [`${selectedType} (min)`, `${selectedType} (avg)`, `${selectedType} (max)`],
            textStyle: {
              color: '#C0CA33',
              // color: 'inherit', // Change this to the desired color
            },
          },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            // data: data.map(item => item.ts)
            data: data.map(item => {
             const date = new Date(item.ts);
               return date.getHours() + ':00';
            }),
          }
        ],
        yAxis: {
            type: 'value',
            splitLine: {
              show: false // add this line
            },
        },
        series: [
          {
            name: `${selectedType} (min)`,
            type: 'line',
            smooth: true,
            // stack: 'Total',
            // areaStyle: {},
            // emphasis: {
            //   focus: 'series'
            // },
            data: data.map(item => Number(item[`min_${selectedType}`].toFixed(2))),
            // label: { // add this label option
            //   show: true,
            //   position: 'top' // set the position of the label
            // }
          },
          {
            name: `${selectedType} (avg)`,
            type: 'line',
            smooth: true,
            // stack: 'Total',
            // areaStyle: {},
            // emphasis: {
            //   focus: 'series'
            // },
            data: data.map(item => Number(item[`avg_${selectedType}`].toFixed(2))),
            // label: { // add this label option
            //   show: true,
            //   position: 'top' // set the position of the label
            // }
          },
          {
            name: `${selectedType} (max)`,
            type: 'line',
            smooth: true,
            // stack: 'Total',
            // areaStyle: {},
            // emphasis: {
            //   focus: 'series'
            // },
            data: data.map(item => Number(item[`max_${selectedType}`].toFixed(2))),
            // label: { // add this label option
            //   show: true,
            //   position: 'top' // set the position of the label
            // }
          },

        ]
      };
      return option;
    }