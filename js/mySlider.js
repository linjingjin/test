function getServerCenter(){
    let serverCenter = [
        {
            name: '苏州数据中心',
            ip:'117.48.144.'+ Math.floor(Math.random() * 249 + 5)
        },
        {
            name: '北京数据中心',
            ip:'114.118.21.'+ Math.floor(Math.random() * 249 + 5)
        },
        {
            name: '广州数据中心',
            ip:'117.48.207.'+ Math.floor(Math.random() * 249 + 5)
        },
        {
            name: '深圳数据中心',
            ip:'14.18.191.'+ Math.floor(Math.random() * 249 + 5)
        },
        {
            name: '成都数据中心',
            ip:'61.139.103.'+ Math.floor(Math.random() * 249 + 5)
        },
        {
            name: '厦门数据中心',
            ip:'110.88.128.'+ Math.floor(Math.random() * 249 + 5)
        },
        {
            name: '香港数据中心',
            ip:'39.109.12.'+ Math.floor(Math.random() * 249 + 5)
        }
    ]
    return serverCenter
}

function getAttackIp(){
    let attackIp = [
        '60.12.225.'+ Math.floor(Math.random() * 249 + 5),
        '123.207.3.'+ Math.floor(Math.random() * 249 + 5),
        '104.192.83.'+ Math.floor(Math.random() * 249 + 5),
        '120.92.88.'+ Math.floor(Math.random() * 249 + 5),
        '154.211.8.'+ Math.floor(Math.random() * 249 + 5),
        '120.236.28.'+ Math.floor(Math.random() * 249 + 5),
        '118.174.8.'+ Math.floor(Math.random() * 249 + 5),
        '80.82.65.'+ Math.floor(Math.random() * 249 + 5),
        '193.188.22.'+ Math.floor(Math.random() * 249 + 5),
        '104.192.84.'+ Math.floor(Math.random() * 249 + 5),
        '193.106.31.'+ Math.floor(Math.random() * 249 + 5),
        '221.239.54.'+ Math.floor(Math.random() * 249 + 5)
    ]
    return attackIp
}

let attackType = ['Web攻击','暴力破解','端口扫描','DDoS攻击','跨站脚本攻击','SQL注入攻击','恶意扫描攻击','代码执行攻击']
function mySlider(refetch){
    let serverCenter = getServerCenter();
    let attackIp = getAttackIp();
    let randomDataCenter = Math.round(Math.random() * 6);
    let randomAttackType = Math.round(Math.random() * 7);
    let randomAttackIp = Math.round(Math.random() * 11);
    let randTime = Math.round(Math.random()*2+1);

    let time = moment(moment().valueOf() - randTime * 1000).format('YYYY-MM-DD HH:mm:ss');
    let classNames = refetch ? 'slide' : 'slide new';
    let dom =   "<div class="+'"'+ classNames +'"'+">"+
                  '<dl>'+
                    '<dt>'+ time +'</dt>'+
                    '<dd>'+'检测到'+ 
                        serverCenter[randomDataCenter].name +
                        '云主机'+serverCenter[randomDataCenter].ip +
                        '受到'+attackType[randomAttackType]+'，攻击主机为'+ attackIp[randomAttackIp]+
                    '</dd>'+
                  '</dl>' +
                '</div>'
    $('.bxslider').prepend(dom);
    setTimeout(function(){
        $('.bxslider .slide').removeClass('new');
    },refetch ? 500 : 1000)
    !refetch && setTimeout(function(){
        $('.bxslider .slide').last().remove();
    },2000)
}

setInterval(function(){
    mySlider()
},5000)
mySlider(true)
mySlider(true)

