let orderData = [
    {
       orderNum:23,
       unTreated:5,
       orderProgress:78.26,
       responseTime:4,
       handleTime:23,
       userSatisfaction:92
    },{
       orderNum:45,
       unTreated:8,
       orderProgress:82.22,
       responseTime:4,
       handleTime:23,
       userSatisfaction:92
    },{
       orderNum:78,
       unTreated:12,
       orderProgress:84.62,
       responseTime:4,
       handleTime:23,
       userSatisfaction:92
    },{
       orderNum:90,
       unTreated:16,
       orderProgress:82.22,
       responseTime:4,
       handleTime:23,
       userSatisfaction:92
    },{
       orderNum:98,
       unTreated:20,
       orderProgress:79.59,
       responseTime:4,
       handleTime:23,
       userSatisfaction:92
    },{
       orderNum:100,
       unTreated:15,
       orderProgress:85.00,
       responseTime:4,
       handleTime:23,
       userSatisfaction:92
    },{
       orderNum:105,
       unTreated:12,
       orderProgress:88.57,
       responseTime:5,
       handleTime:28,
       userSatisfaction:90
    },{
       orderNum:123,
       unTreated:15,
       orderProgress:87.80,
       responseTime:5,
       handleTime:31,
       userSatisfaction:91
    },{
       orderNum:154,
       unTreated:23,
       orderProgress:85.06,
       responseTime:5,
       handleTime:28,
       userSatisfaction:93
    },{
       orderNum:196,
       unTreated:20,
       orderProgress:89.80,
       responseTime:6,
       handleTime:25,
       userSatisfaction:95
    },{
       orderNum:278,
       unTreated:21,
       orderProgress:92.45,
       responseTime:5,
       handleTime:22,
       userSatisfaction:92
    },{
       orderNum:356,
       unTreated:24,
       orderProgress:93.26,
       responseTime:6,
       handleTime:18,
       userSatisfaction:90
    },{
       orderNum:425,
       unTreated:26,
       orderProgress:93.88,
       responseTime:7,
       handleTime:20,
       userSatisfaction:91
    },{
       orderNum:496,
       unTreated:28,
       orderProgress:94.35,
       responseTime:6,
       handleTime:22,
       userSatisfaction:92
    },{
       orderNum:553,
       unTreated:36,
       orderProgress:93.49,
       responseTime:5,
       handleTime:28,
       userSatisfaction:94
    },{
       orderNum:596,
       unTreated:40,
       orderProgress:93.29,
       responseTime:6,
       handleTime:36,
       userSatisfaction:93
    },{
       orderNum:634,
       unTreated:38,
       orderProgress:94.01,
       responseTime:6,
       handleTime:32,
       userSatisfaction:95
    },{
       orderNum:685,
       unTreated:36,
       orderProgress:94.74,
       responseTime:5,
       handleTime:29,
       userSatisfaction:94
    },{
       orderNum:723,
       unTreated:38,
       orderProgress:94.74,
       responseTime:4,
       handleTime:25,
       userSatisfaction:95
    },{
       orderNum:765,
       unTreated:34,
       orderProgress:95.56,
       responseTime:5,
       handleTime:22,
       userSatisfaction:93
    },{
       orderNum:798,
       unTreated:28,
       orderProgress:96.49,
       responseTime:4,
       handleTime:20,
       userSatisfaction:92
    },{
       orderNum:802,
       unTreated:24,
       orderProgress:97.01,
       responseTime:4,
       handleTime:22,
       userSatisfaction:95
    },{
       orderNum:826,
       unTreated:16,
       orderProgress:98.06,
       responseTime:4,
       handleTime:18,
       userSatisfaction:96
    },{
       orderNum:851,
       unTreated:12,
       orderProgress:98.59,
       responseTime:4,
       handleTime:28,
       userSatisfaction:95
    }
]
let p_hours = moment().hours();
setInterval(function(){
    p_hours = moment().hours();
    init()
},1000)
function init(){
    let cloudNum = Math.floor(orderData[p_hours].orderNum * 0.32);
    let routeNum = Math.floor(orderData[p_hours].orderNum * 0.08);
    let diskNum = Math.floor(orderData[p_hours].orderNum * 0.12);
    let networkNum = Math.floor(orderData[p_hours].orderNum * 0.22);
    let proNum = Math.floor(orderData[p_hours].orderNum * 0.16);
    let otherNum = orderData[p_hours].orderNum - cloudNum - routeNum - diskNum - networkNum - proNum;
    $('.order-info .order-num b').html(orderData[p_hours].orderProgress+'%');
    $('.order-info .order-num > div').eq(0).html('今日工单：'+ orderData[p_hours].orderNum)
    $('.order-info .order-num > div').eq(1).html('待解决：'+ orderData[p_hours].unTreated)
    $('.order-info .order-time > div').eq(0).html('平均响应时长：'+ orderData[p_hours].responseTime+'分钟')
    $('.order-info .order-time > div').eq(1).html('平均处理时长：'+ orderData[p_hours].handleTime+'分钟')
    $('.order-info .order-time > div').eq(2).html('用户满意度：'+ orderData[p_hours].userSatisfaction+'%')
    $('.order-total dl dt span').html(orderData[p_hours].orderNum)
    $('.order-total dl dd div.li').eq(0).find('span.fs14').html(cloudNum)
    $('.order-total dl dd div.li').eq(1).find('span.fs14').html(routeNum)
    $('.order-total dl dd div.li').eq(2).find('span.fs14').html(diskNum)
    $('.order-total dl dd div.li').eq(3).find('span.fs14').html(networkNum)
    $('.order-total dl dd div.li').eq(4).find('span.fs14').html(proNum)
    $('.order-total dl dd div.li').eq(5).find('span.fs14').html(otherNum)
}
init();