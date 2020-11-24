export const loan = {
  series: [
    {
      name: "Loan",
      data: [1519900000000.0/10000, 1389200000000.0/10000, 1433600000000.0/10000, 1413800000000.0/10000, 1725500000000.0/10000, 1927700000000.0/10000
      ]
    },{
      name: "Repay",
      data: [1643397397144.0/10000, 1698031645956.0/10000, 1648770512517.0/10000, 1604267049469.0/10000, 1961329307737.0/10000, 2243064829869.0/10000
      ]
    },{
      name: "In Progress",
      data: [1519900000000*1.15/10000 -1643397397144/10000, 
        1389200000000*1.15/10000 - 1698031645956/10000, 
        1433600000000*1.15/10000 - 1648770512517/10000, 
        1413800000000*1.15/10000 - 1604267049469/10000, 
        1725500000000*1.15/10000 - 1961329307737/10000, 
        1927700000000*1.15/10000 - 2243064829869/10000]
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