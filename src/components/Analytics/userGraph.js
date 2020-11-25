export const totalCalls = {
  series: [
    {
      name: "Number of calls",
      data: [4768035, 5541299, 4533163, 4067035, 4639045, 8164684]
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
      name: "Loan",
      data: [1519900000000.0/10000, 1389200000000.0/10000, 1433600000000.0/10000, 1413800000000.0/10000, 1725500000000.0/10000, 1927700000000.0/10000]
    },{
      name: "Repay",
      data: [1643397397144.0/10000, 1698031645956.0/10000, 1648770512517.0/10000, 1604267049469.0/10000, 1961329307737.0/10000, 2243064829869.0/10000]
    },
    {
      name: "Recharge",
      data: [1627423075.0, 1872843089.0, 1662232956.0, 1650075746.0, 1991013836.0, 2590371200.0]
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