export const loan = {
  series: [
    {
      name: "Loan",
      data: [-1519900000000.0, -1389200000000.0, -1433600000000.0, -1413800000000.0, -1725500000000.0, -1927700000000.0
      ]
    },{
      name: "Return",
      data: [1643397397144.0, 1698031645956.0, 1648770512517.0, 1604267049469.0, 1961329307737.0, 2243064829869.0
      ]
    },{
      name: "In Progress",
      data: [-3409807006715.5996, -3341936392849.4, -3329686089394.55, -3258707106889.3496, -3981028703897.55, -4507224554349.35]
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