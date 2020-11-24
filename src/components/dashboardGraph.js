export const totalMoneyOverTime = {
  series: [
    // {
      // name: "Money Spent",
      // data: [ -1519900000000.0, -1389200000000.0, -1433600000000.0, -1413800000000.0, -1725500000000.0, -1927700000000.0
      // ]
    // },
    {
      name: "Money rent",
      data: [1519900000000.0, 1389200000000.0, 1433600000000.0, 1413800000000.0, 1725500000000.0, 1927700000000.0
      ]
    },{
      name: "Money payback",
      data: [1643397397144.0, 1698031645956.0, 1648770512517.0, 1604267049469.0, 1961329307737.0, 2243064829869.0]
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
  series: [4130 + 4174, 2124 + 2018, 1978 + 1925, 1711 + 1502, 1668 + 1699],
  options: {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['H004', 'T037', 'T008', 'A076', 'N038'],
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
  //   name: "call time",
  //   data: [3.5, 6.9, 1.30, 4.10, 5.1, 4.9, 6.2]
  // },
  // {
    name: "data usage",
    data: [57906410703952.0, 63066799076055.0, 5781685352338.0, 6862870876223.0, 32246429982780.0, 107771361337048.0 ]
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
  data: [ 393963065.0, 473823089.0, 400662956.0, 409385746.0, 488283826.0, 661661200.0]
  },
  {
    name: "virtual",
    data: [1233460010.0, 1399020000.0, 1261570000.0, 1240690000.0, 1502730010.0, 1928710000.0
    ]
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