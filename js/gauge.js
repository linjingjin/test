let safeDataArr = [98,98,98,99,99,97,97,96,96,95,96,95,94,93,94,94,95,94,96,92,96,95,96,97];
let monitorDataArr = [99.97,99.97,99.97,99.97,99.97,99.97,99.98,99.98,99.98,99.98,99.98,99.98,99.97,99.97,99.97,99.97,99.97,99.97,99.97,99.97,99.97,99.97,99.97,99.97];
let hours = moment().hours();
let hy_chart = echarts.init(document.getElementById('chart-panel'));
let hy_chart01 = echarts.init(document.getElementById('chart-panel01'));

const axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
  {
    offset: 0,
    color: '#3968fe'
  },
  {
    offset: 1,
    color: '#38eaf9'
  },
])

const axislineColor1 = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
  {
    offset: 0,
    color: '#ff2400'
  },
  {
    offset: 1,
    color: '#ff2400'
  }
])
hy_chart01.setOption(getOption(true));
hy_chart.setOption(getOption());
function getOption(noContrast){
    option = {
        grid: {
            top: 10,
        },
        series: [{
            type: 'gauge',
            startAngle: 135,
            endAngle: 45,
            radius: '180%',
            center: ['48%', '100%'],
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                color: '#53545b',
                show: true,
                padding: [20, 0, 0, 0],
                fontSize: 10,
                distance: -40,
                formatter(value) {
                    if (value === 0 || value === 100) {
                        return value;
                    }
                }
            },
            detail: {
                offsetCenter: [0, -15],
                textStyle: {
                    fontSize: 20,
                    fontWeight: '',
                    color: '#fff'
                },
                formatter: function(value) {
                    //console.log(value);
                    return value + (noContrast ? '':'%');
                    //return '';
                }
            },
            pointer: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: "#323232",
                }
            },
            min: 0,
            max: 100,
        }]
    }
    return option
}

setInterval(function(){
    hours = moment().hours();
    init()
},1000)

function init(){
    let safeData = safeDataArr[hours];
    let monitorData = monitorDataArr[hours];
    hy_chart01.setOption({ 
        series: [{
            axisLine: {
                lineStyle: {
                    width: 28,
                    color: [
                        [safeData ? safeData/100 : 0, axislineColor],
                        [1, '#063643']
                    ],
                }
            },
            data: [{
                name: '',
                value: safeData ? safeData : 0
            }]
        }]
    });
    hy_chart.setOption({ 
        series: [{
            axisLine: {
                lineStyle: {
                    width: 28,
                    color: [
                        [monitorData ? monitorData/100 : 0, axislineColor],
                        [1, '#063643']
                    ],
                }
            },
            data: [{
                name: '',
                value: monitorData ? monitorData : 0
            }]
        }]
    });
}
init()