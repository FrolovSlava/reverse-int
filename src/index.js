module.exports = function reverse (n) {

    if (n<0){
        n *= -1;
    }
    let num = 0;
    while (n != 0){
        num *= 10;
        num += n % 10;
        n = Math.trunc(n/10);
    }
    return num;








    /*let mas= String(n).split('');
    
    
    let array = [];
    for( let index = mas.length; index>0; index--){
        array.push(mas[index])
    }
    console.log(array.join());
    return array.join()*/
  }
