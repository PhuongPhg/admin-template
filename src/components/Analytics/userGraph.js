export const totalCalls = {
  series: [
    {
      name: "Number of calls",
      data: [100000, 410000, 350000, 510000, 490000, 620000, 690000]
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
  // tooltip: {
  //   y: {
  //     formatter: function (val) {
  //       return val + " VND"
  //     }
  //   }
  // }
},
}

export const moneyFlow = {
  series: [
    {
      name: "Spent",
      data: [100000, 410000, 350000, 510000, 490000, 620000, 690000]
    },{
      name: "Rent",
      data: [11111,123121,14353,23353,57675,34342,34553]
    },
    {
      name: "Payback",
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