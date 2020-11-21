export const totalMoneyOverTime = {
    series: [{
      name: "Money",
      data: [100000, 410000, 350000, 510000, 490000, 620000, 690000]
  }],
  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors: ["#a84d2f"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['1', '5', '10', '15', '20','25','30']
    }
  },
}
export const geoDistribution ={
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Ha Noi', 'Ho Chi Minh', 'Da Nang', 'Nha Trang', 'Others'],
      theme: {
        monochrome: {
          enabled: true,
          color: '#a84d2f',
        },
        title: {
          text: "Monochrome Pie"
        },
        responsive: [{
          breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
      }]
  }}}

  export const totalTimeOfEachCall = {
    series: [{
      name: "time",
      data: ['3.50s', 6.9, 1.30, 4.10, 5.1, 4.9, 6.2]
    }],
  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    tooltip: {
    custom: function({series, seriesIndex, dataPointIndex, w}) {
      return '<span>' + series[seriesIndex][dataPointIndex] +'s' + '</span>'
    }
  },
    colors: ["#a84d2f"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['1', '5', '10', '15', '20','25','30']
    }
  },
}
export const totalRecharge = {
  series: [
    {
    name: "card",
    data: [37, 69, 30, 40, 51, 49, 62]
    },
    {
      name: "virtual",
      data: [69, 37, 40, 51, 49, 30, 62]
    },
  ],
  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
    }
  },
  colors: ["#19adb1", "#0a6dc3"],
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'straight'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['1', '5', '10', '15', '20','25','30']
  }
},
}