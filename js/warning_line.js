let warning_line = echarts.init(document.getElementById('warning_line'));
let warningTrends = [1423,1545,1678,1825,1763,1521,1452,1622,1752,1452,1823,1645,1754,1563,1356];
option = {
    title: {
        text: '告警趋势',
        textStyle: {
            color: '#2d9fff',
            fontSize: 14,
        },
        left: 20,
        top:18
     },
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '0%',
        right: '5%',
        bottom: 5,
        top:40,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#b9b9bb'
            }
        },
        axisTick:{
            inside:true,
            length:8
        },
        data: getLast8Days()
    }],
    yAxis: [{
        type: 'value',
        show:false,

    }],
    series: [{
        name: '告警',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(45,159,255,0.3)',
                }, {
                    offset: 0.8,
                    color: 'rgba(45,159,255,0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgba(45,159,255,1)',
                borderWidth: 12
            }
        }
    }]
};


setInterval(function(){
    init();
},1000)

warning_line.setOption(option);

function init(){
    warning_line.setOption({
        xAxis: [{
            data: getLast8Days()
        }],
        series: [{
            data: [
                warningTrends[moment().subtract(8,'days').date()%15],
                warningTrends[moment().subtract(7,'days').date()%15],
                warningTrends[moment().subtract(6,'days').date()%15],
                warningTrends[moment().subtract(5,'days').date()%15],
                warningTrends[moment().subtract(4,'days').date()%15],
                warningTrends[moment().subtract(3,'days').date()%15],
                warningTrends[moment().subtract(2,'days').date()%15],
                warningTrends[moment().subtract(1,'days').date()%15],
            ]
        }]
    })
}
init();

function getLast8Days () { 
    let date = [] 
    date.push(moment().subtract(8,'days').format('MM-DD')) 
    date.push(moment().subtract(7,'days').format('MM-DD')) 
    date.push(moment().subtract(6,'days').format('MM-DD')) 
    date.push(moment().subtract(5,'days').format('MM-DD')) 
    date.push(moment().subtract(4,'days').format('MM-DD')) 
    date.push(moment().subtract(3,'days').format('MM-DD')) 
    date.push(moment().subtract(2,'days').format('MM-DD')) 
    date.push(moment().subtract(1,'days').format('MM-DD')) 
    return date 
}