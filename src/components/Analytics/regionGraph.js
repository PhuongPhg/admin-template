export const totalCallTime = {
  series: [{
    name: "Time",
    data: [20, 41, 35, 51, 49 ]
}],
options: {
  chart: {
    height: 350,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true
    }
  },
  colors: ['#449DD1', '#F86624', '#F9C80E', '#662E9B', '#C5D86D'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  xaxis: {
    categories: ['Ha Noi', 'HCM', 'Nha Trang', 'Da Nang', 'others']
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " seconds"
      }
    }
  }
},
}

export const totalData = {
  series: [{
    name: "Time",
    data: [2000, 1410, 1355, 1151, 749 ]
}],
options: {
  chart: {
    height: 350,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true
    }
  },
  colors: ['#449DD1', '#F86624', '#F9C80E', '#662E9B', '#C5D86D'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  xaxis: {
    categories: ['Ha Noi', 'HCM', 'Nha Trang', 'Da Nang', 'others']
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " MB"
      }
    }
  }
  },
}

export const rateOfUser = {
  series: [2000, 1410, 1355, 1151, 749 ],
  options: {
    chart: {
      width: '100%',
      type: 'pie',
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " %"
        }
      }
    },
    labels: ['Ha Noi', 'HCM', 'Nha Trang', 'Da Nang', 'others'],
    theme: {
      monochrome: {
        enabled: true,
        color: '#F86624',
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5
        }
      }
    },
    dataLabels: {
      formatter(val, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex]
        return [name, val.toFixed(1) + '%']
      }
    },
    legend: {
      show: false
    }
  },
}

export const dataLoanAndRecharge = {
  series: [{
    name: "Loan",
    data: [2000, 1410, 1355, 1151, 749 ]
  },
  {
    name: "Recharge",
    data: [1942, 1214, 3453, 2342, 1111]
  }
  ],
  options: {
    chart: {
    height: 350,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#449DD1', '#F86624', '#F9C80E', '#662E9B', '#C5D86D'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  xaxis: {
    categories: ['Ha Noi', 'HCM', 'Nha Trang', 'Da Nang', 'others']
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " thousand VND"
      }
    }
  }
  },
}