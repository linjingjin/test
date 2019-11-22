function getSecond(){
    let obj = {};
    let random20To90 = Math.random() * 70 + 20;
    let round20To90 = Math.round(random20To90);
    let random90To200 = Math.random() * 110 + 90;
    let round90To200 = Math.round(random90To200);
    let boolean = Math.random() * 10 > 9.8 ? false : true;
    if(boolean){
        obj['normal'] = true;
        obj['value'] = round20To90 + 'ms'
    }else{
        obj['normal'] =  random90To200 > 150 ? false : true;
        obj['value'] = round90To200 + 'ms'
    }
    return obj;
}
function getIndex(index){
    let data = getSecond();
    let txt = data.normal ? '正常' : '波动';
    let val = data.value;
    data.normal ? $('.high-list dl').eq(index).find('dd em').removeClass('wave') : $('.high-list dl').eq(index).find('dd em').addClass('wave');
    $('.high-list dl').eq(index).find('dd em').html(txt)
    $('.high-list dl').eq(index).find('dd i').html(val)
}

function render(){
    $.each($('.high-list dl'),function(i,item){
            getIndex(i)
        })
}

setInterval(function(){
    render();
},5000);

render();