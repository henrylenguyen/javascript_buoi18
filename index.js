var arr = new Array();

function addArr() {
  let a = parseFloat(document.querySelector(".inputArr").value);
  if (isNaN(a)) {
    arr.push(0);
  } else {
    arr.push(a);
  }

  document.querySelector("#resultArr").innerHTML = arr;
}

function resultSum() {
  let sum = 0,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
      count++;
    }
  }
  document.querySelector("#resultSum").innerHTML = sum;
  return count;
}

function resultCountPS() {
  document.querySelector("#resultCountPS").innerHTML = resultSum();
}

function resultMin() {
  let min = arr[0],
    minPs = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] >= 0) {
      if (arr[i] < min) {
        minPs = arr[i];
      }
    }
  }
  document.querySelector("#resultMin").innerHTML = min;
  return minPs;
}

function resultMinPS() {
  document.querySelector("#resultMinPS").innerHTML = resultMin();
}

function resultEven() {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 == 0) {
      document.querySelector("#resultEven").innerHTML = arr[i];
      break;
    }
  }
}
function resultSort() {
  let ds = '';
  for (let i = 0; i < arr.length-1;i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  for(let i=0;i<arr.length;i++){
    ds +=(arr[i]+" ");
  }
      document.querySelector("#resultSort").innerHTML = ds;

}

function check(n) {
  if (n < 2) {
    return 0;
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return 0;
      }
    }
  }
  return 1;
}

function prime(number) {
  let result = '';
  for (let i = 0; i < number.length; i++) {
    if (check(number[i])) {
      result += number[i];
      break;
    }
  }
  // console.log(result);
  return result;
}
// let b = [1,4,6,11,15,3];
// prime(b);
function resultPrime(){
  console.log(arr);
  document.querySelector("#resultPrime").innerHTML = prime(arr);

}
function resultCountInt(){
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      count++;
    }
  }
  document.querySelector("#resultCountInt").innerHTML = `Có ${count} số nguyên`;

}
function resultLunisolar(){
  let Luni =0, solar = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>=0) {
      solar++;
    }
    else{
      Luni++;
    }
  }
  if(Luni>solar){
     document.querySelector("#resultLunisolar").innerHTML = `Số dương < số âm. Có ${solar} số dương, có ${Luni} số âm`;

  }else if(Luni<solar){
    document.querySelector("#resultLunisolar").innerHTML = `Số dương > số âm. Có ${solar} số dương, có ${Luni} số âm`;
  }
  else{
    document.querySelector("#resultLunisolar").innerHTML = `Số dương = số âm. Có ${solar} số dương, có ${Luni} số âm`;
  }
}