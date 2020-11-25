export const totalCallTime = {
  series: [{
    name: "Time",
    data: [132178288.0, 38595568.0, 30415087.0,  59638468.0,  61336380.0]
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
    categories: ['H004', 'T008', 'A076', 'N038', 'T037']
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
    data: [4258292282084.0 + 4523487054695.0 + 441049227157.0 + 471465506932.0 + 2311423761332.0 + 7412183644932.0, 
      2202825437022.0 + 2360192719151.0 + 224307913633.0 + 286556415491.0 + 1238395798161.0 + 4072169295129.0, 
      1063414545124.0 + 1284418148615.0 + 113275253719.0 + 143214182548.0 + 693042780854.0 + 2411678808406.0, 
      1716297135585.0 + 1837314379779.0 + 157378651354.0 + 199766904308.0 + 904692602062.0 + 3083405978708.0, 
      2236232374294.0+ 2453010188390.0+ 218056027023.0+ 274725452761.0+1277399262878.0+ 4284317657492.0 ]
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
    categories: ['H004', 'T008', 'A076', 'N038', 'T037']
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
  series: [4130 + 4174, 2124 + 2018,  1978 + 1925, 1711 + 1502, 1668 + 1699],
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
    labels: ['H004', 'T008', 'A076', 'N038', 'T037'],
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
      show: true
    }
  },
}

export const dataLoanAndRecharge = {
  series: [{
    name: "Loan",
    data: [370600000000.0/10000, 255300000000.0/10000, 384400000000.0/10000, 206300000000.0/10000, 280100000000.0 /10000]
  },
  {
    name: "Repay",
    data: [423690529728.0/10000, 296784443200.0/10000, 438565949441.0/10000, 238695876959.0/10000 , 322864469600.0/10000]
  },
  {
    name: "Recharge",
    data: [825322000.0, 410545000.0, 325325000.0, 264333000.0, 383379466.0]
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
    categories: ['H004', 'T008', 'A076', 'N038', 'T037']
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