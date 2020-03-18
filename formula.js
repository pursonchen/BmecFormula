var Q1 = 1; //用户正向交易货币数量
var Q2 = 120; //用户反向交易货币数量
var P1 = 120; //用户正向交易货币价格
var P2 = 1; //用户反向交易货币价格
var Pbmc = 0.2; //平台币价格
var a = 0.001; //用户正向交易手续费
var b = 0.001;//用户反向交易手续费
var M = 1; //挖矿速率调整系数
var k = 1; //挖矿次数
var pow = Math.pow;
var sum = 0; //累计BMEC收获
var cycle = 2; // 周期性， 1s1次 2是2s1次
var K = 60 * 60 / cycle  ; //挖矿周期
var val = 0; //每次挖矿所得
var lowUSDTLimit = 5; //最低挖矿燃料
var highBMECLimit = 1500; //小时最高挖矿限额
// if (Pbmc > 0.08 ){ M=M/100;}
for(var k = 1; k < K; k++) {
    var val = ((Q1*pow(1-a,k-1)*a)*P1+(Q2*pow(1-b,k-1)*b)*P2)*M/Pbmc;
    var lleft = Q1*pow(1-a,k)*P1*M;
    var rleft = Q2*pow(1-b,k)*P2*M;
    if (lleft > lowUSDTLimit && rleft > lowUSDTLimit && sum < highBMECLimit ) {
            sum += val;
            console.log(k,lleft,rleft, val, sum, M);
        }
        else {
            break;
        }
}
console.log(k, lleft, rleft, val, sum, M);
