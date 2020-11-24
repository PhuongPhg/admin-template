export const cardAndVirtual = {
  series: [ 2827779882.0, 8566180020.0
    // {
    // name: "card",
    // data: [37, 69, 30, 40, 51, 49, 62]
    // },
    // {
    //   name: "virtual",
    //   data: [69, 37, 40, 51, 49, 30, 62]
    // },
  ],
  options: {
    chart: {
      height: 350,
      type: 'pie',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
  //   tooltip: {
  //     y: {
  //       formatter: function (val) {
  //         return "$ " + val + " thousands"
  //       }
  //   }
  // },
  colors: ["#19adb1", "#0a6dc3"],
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'straight'
  },
  labels: ["card", "virtual"],
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