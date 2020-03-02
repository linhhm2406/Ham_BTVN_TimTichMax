let input_array = [];

function array_creat(length) {
    for (let i = 0; i < length; i++) {
        input_array.push(parseInt(prompt('Mời nhập số thứ ' + (i + 1))));
    }
}

let input_array_length = prompt('Nhập vào độ dài của mảng');
array_creat(input_array_length);

let multiply_result = [];

function elements_multiply(array) {
    for (let i = 0; i < array.length-1; i++) {
        multiply_result.push(array[i] * array[i + 1]);
    }
}

elements_multiply(input_array);

function find_max(array) {
    let max = array[0];
    let position="";
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            position = i;
        }
    }
    return position;
}
alert('Mảng vừa nhập là '+ input_array);
alert('Tích lớn nhất là :'+ multiply_result[find_max(multiply_result)]
      + '. Của hai số ' + input_array[find_max(multiply_result)] +' và ' + input_array[(find_max(multiply_result)+1)]);