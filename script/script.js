//1:

const arr = [315, 64, 75, 43, 65, 63]
for ( let a = 0; a < arr.length; a+=1 ) {
    console.log(arr[a]*2)
}

//2:

const arr2 =  ['Аукпц', 'Бавсывм', 'Амвымиааа']
for ( let b = 0; b < arr2.length; b=b +1  ) {
    console.log(arr2[b].replaceAll( 'а', 'я'))

}

//3:

const arr3 = ['Аукпц', 'Бавсывм', 'Амвымиааа']
for ( let c = 0; c < arr3.length; c++) {
    const b = arr3[c]
    if ( b.indexOf('к') > 0) {
console.log(b)
    }
}

//4:

const arr4 =  [4, 54, 49]

for ( let d = 0; d < arr4.length; d++ ) {
    console.log(Math.pow( arr4[d], 2))
}

