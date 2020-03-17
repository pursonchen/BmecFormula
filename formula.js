var Q1 = 1;
var Q2 = 120;
var H = 0.1;
var P1 = 120;
var P2 = 1;
var Pbmc = 0.8;
var a = 0.001;
var b = 0.001;
var M = 1;
var k = 1;
var pow = Math.pow;
var sum = 0;
var K = 2 * 60 * 60;
var val = 0;
for(var k = 1; k < K; k++) {
    var val = (((Q1*pow(1-a,k-1)*a)*P1+(Q2*pow(1-b,k-1)*b)*P2)*pow(1-H,k-1))*M/Pbmc;
    var left = ((Q1*pow(1-a,k))*P1+(Q2*pow(1-b,k))*P2)*pow(1-H,k)*M;
        if(left >= 10) {
            if(val/sum <= 0.1 && M < 10){ M=1.1*M;}
            sum += val;
            console.log(k,left, val, sum, M, H*M);
        }
        else {
            break;
        }
}
