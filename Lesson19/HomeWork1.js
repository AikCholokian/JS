/*
 HW_19_TEXT
Задайте массив целых чисел, например [1 5 2 9 4]
1.Реализуйте алгоритм простой сортировки пузырьком от меньщего к большему.
2.*** Для отсорторированного массива реализуйте метод бинарного поиска,
если число в массиве есть , то верните индекс, а если нет, то верните -1
*/

function sort(arrey) {
  let x = arrey.length;
  let swapped;
  for (let i = 0; i < x - 1; i++) {
    swapped = false;
    for (let index = 0; index < x - 1 - i; index++) {
      if (arrey[index] > arrey[index + 1]) {
        [arrey[index], arrey[index + 1]] = [arrey[index + 1], arrey[index]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arrey;
}
const arr = [12, 23, 342, 234, 564, 3245, 234, 2, 3, 6, 8];
res = sort(arr)
console.log(res);

function binarySearch(arrey, target){
    let left = 0;
    let right = arrey.length-1;
    while(left<=right){
        const mid=Math.floor((left+right)/2);
        if (arrey[mid]===target){
            return mid 
        }
        if (arrey[mid]>target){
            right = mid-1;
        } else{
            left = mid+1
        }
    }
    return -1
}
console.log(binarySearch(res,1));

