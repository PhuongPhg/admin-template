export const totalMoneyOverTime = {
  series: [
    {
      name: "Money Spent",
      data: [100000, 410000, 350000, 510000, 490000, 620000, 690000]
    },{
      name: "Money rent",
      data: [11111,1231231,14353,23353,57675,34342,34553]
    },{
      name: "Money payback",
      data: [35345,12534,36345,35112,165767,23424,14546]
    }
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
  colors: ["#19adb1", " #0a6dc3", "#edc988"],
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
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " VND"
      }
    }
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
        color: '#19adb1',
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

export const callTimeAndDataUsage = {
  series: [{
    name: "call time",
    data: [3.5, 6.9, 1.30, 4.10, 5.1, 4.9, 6.2]
  },{
    name: "data usage",
    data: [2.3, 3.9, 5.30, 1.10, 2.1, 6.9, 3.2]
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
  colors: ["#19adb1", " #0a6dc3"],
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