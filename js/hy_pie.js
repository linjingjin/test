let hy_pie01 = echarts.init(document.getElementById('hy_pie01'));
let hy_pie02 = echarts.init(document.getElementById('hy_pie02'));
let hy_pie03 = echarts.init(document.getElementById('hy_pie03'));
let warningData = [
    {
        progress:94,
        duration:3,
        alarmHandling:89,
        high:8,
        middle:21,
        low:60,
        securityAlarm:68,
        network:12,
        cloudWarning:9
    },{
        progress:95,
        duration:3,
        alarmHandling:75,
        high:5,
        middle:18,
        low:52,
        securityAlarm:57,
        network:10,
        cloudWarning:8
    },{
        progress:95,
        duration:3,
        alarmHandling:76,
        high:5,
        middle:16,
        low:55,
        securityAlarm:59,
        network:11,
        cloudWarning:6
    },{
        progress:96,
        duration:2,
        alarmHandling:61,
        high:6,
        middle:17,
        low:38,
        securityAlarm:46,
        network:10,
        cloudWarning:5
    },{
        progress:96,
        duration:2,
        alarmHandling:62,
        high:4,
        middle:16,
        low:42,
        securityAlarm:49,
        network:9,
        cloudWarning:4
    },{
        progress:95,
        duration:2,
        alarmHandling:77,
        high:3,
        middle:20,
        low:54,
        securityAlarm:66,
        network:8,
        cloudWarning:3
    },{
        progress:96,
        duration:3,
        alarmHandling:62,
        high:5,
        middle:15,
        low:42,
        securityAlarm:50,
        network:10,
        cloudWarning:2
    },{
        progress:97,
        duration:3,
        alarmHandling:47,
        high:7,
        middle:12,
        low:28,
        securityAlarm:31,
        network:12,
        cloudWarning:4
    },{
        progress:96,
        duration:2,
        alarmHandling:62,
        high:4,
        middle:17,
        low:41,
        securityAlarm:42,
        network:14,
        cloudWarning:6
    },{
        progress:95,
        duration:2,
        alarmHandling:80,
        high:6,
        middle:22,
        low:52,
        securityAlarm:60,
        network:13,
        cloudWarning:7
    }
]
let attackPie = [
    {
        attackTimes:2452145,
        attackAsset:7568,
        interception:95,
        securityIncidents:8703,
        high:253,
        middle:1452,
        low:6998 
    },{
        attackTimes:2263140,
        attackAsset:6985,
        interception:94,
        securityIncidents:8033,
        high:212,
        middle:1245,
        low:6576 
    },{
        attackTimes:2136456,
        attackAsset:6594,
        interception:95,
        securityIncidents:7583,
        high:156,
        middle:1685,
        low:5742 
    },{
        attackTimes:2276100,
        attackAsset:7025,
        interception:94,
        securityIncidents:8079,
        high:235,
        middle:1456,
        low:6388 
    },{
        attackTimes:2233980,
        attackAsset:6895,
        interception:95,
        securityIncidents:7929,
        high:224,
        middle:1523,
        low:6182 
    },{
        attackTimes:2337660,
        attackAsset:7215,
        interception:96,
        securityIncidents:8297,
        high:198,
        middle:1852,
        low:6247 
    },{
        attackTimes:2434536,
        attackAsset:7514,
        interception:97,
        securityIncidents:8641,
        high:145,
        middle:2015,
        low:6481 
    },{
        attackTimes:2286144,
        attackAsset:7056,
        interception:96,
        securityIncidents:8114,
        high:175,
        middle:1684,
        low:6255 
    },{
        attackTimes:2222316,
        attackAsset:6859,
        interception:95,
        securityIncidents:7888,
        high:142,
        middle:1253,
        low:6493 
    },{
        attackTimes:2373624,
        attackAsset:7326,
        interception:94,
        securityIncidents:8425,
        high:123,
        middle:1763,
        low:6539 
    }
]
 let title01 = [{
     "name": "严重",
 }, {
     "name": "一般",
 }, {
     "name": "提示",
 }]
 let title02 = [{
     "name": "安全告警",
 }, {
     "name": "网络中断",
 }, {
     "name": "云服务告警",
 }]
 let title03 = [{
     "name": "高危事件",
 }, {
     "name": "中危事件",
 }, {
     "name": "低危事件",
 }]
let color = ['#ff4b4b', '#ff8d26', '#00d7e9', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"]
let color01 = ['#007aff', '#ff8d26', '#7c00ff', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"]
function getOption(color,title,head){
    option = {
        color: color,
        title: {
             textStyle: {
                 color: '#2d9fff',
                 fontSize: 14,
                
             },
              left: 233,
              top:18
         },
        tooltip : {
            trigger: 'item',
            //formatter: "{a} <br/>{b} : {c} ({d}%)"
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 235,
            top:50,
            itemHeight:6,
            color:'#b9b9bb',
            icon: 'circle',
            data:title,
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : ['26%','70%'],
                center: ['30%', '55%'],
                label: {
                    normal: {
                        show: true,
                        formatter: "{c}",
                        textStyle: {
                            fontSize: 12,

                         },
                         position: 'outside'
                     },
                     emphasis: {
                         show: true
                     }
                 },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    return option
}
let minute = moment().minute()%10;
setInterval(function(){
    minute = moment().minute()%10;
    initWarning();
},1000)

hy_pie01.setOption(getOption(color,title01));
hy_pie02.setOption(getOption(color01,title02));
hy_pie03.setOption(getOption(color,title03));

function initWarning(){
    $('.warning-box dl dd').eq(0).find('em').html(warningData[minute].progress+'%')
    $('.warning-box dl dd').eq(1).find('em').html(warningData[minute].duration+'分钟')
    $('.attack-info .attack-box1').eq(0).find('em').html(attackPie[minute].attackTimes+'次')
    $('.attack-info .attack-box1').eq(1).find('em').html(attackPie[minute].attackAsset+'台')
    $('.attack-info .attack-box1').eq(2).find('em').html(attackPie[minute].interception+'%')
    hy_pie01.setOption({
        title: {
             text: '待处理告警' +'：'+warningData[minute].alarmHandling,
         },
        series : [
            {
                data:[{
                "name": "严重",
                "value": warningData[minute].high,
            },{
                "name": "一般",
                "value": warningData[minute].middle,
            },{
                "name": "提示",
                "value": warningData[minute].low,
            }],
            }
        ]
    });
    hy_pie02.setOption({
        title: {
             text: '告警分类' +'：'+warningData[minute].alarmHandling,
         },
        series : [
            {
                data:[{
                "name": "安全告警",
                "value": warningData[minute].securityAlarm,
            },{
                "name": "网络中断",
                "value": warningData[minute].network,
            },{
                "name": "云服务告警",
                "value": warningData[minute].cloudWarning,
            }],
            }
        ]
    });
    hy_pie03.setOption({
        title: {
             text: '总安全事件' +'：'+attackPie[minute].securityIncidents,
         },
        series : [
            {
                data:[{
                "name": "高危事件",
                "value": attackPie[minute].high,
            },{
                "name": "中危事件",
                "value": attackPie[minute].middle,
            },{
                "name": "低危事件",
                "value": attackPie[minute].low,
            }],
            }
        ]
    });
}
initWarning();