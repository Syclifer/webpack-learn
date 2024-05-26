import './css/test.less'
function test(x, y){
    return x + y
}

console.log(test(1,2))

function fxj(){
    let a = test(3,2)
    console.log('111', a)
}
fxj()