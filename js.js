function check() {
    let weight = +document.querySelector('#weight').value;
    let high = +document.querySelector('#high').value;
    let BMI = weight / (high * high);
    console.log(BMI);


    if (BMI < 16) {
        alert('Gầy độ III');
    }
    else if (BMI < 17) {
        alert('Gầy độ II');
    }
    else if (BMI < 18.5) {
        alert('Gầy độ I');
    }
    else if (BMI < 25) {
        alert('Bình Thường');
    }
    else if (BMI < 30) {
        alert('Thừa cân');
    }
    else if (BMI < 35) {
        alert('Béo phì độ I');
    }
    else if (BMI < 40) {
        alert('Béo phì độ II');
    }
    else {
        alert('Béo phì độ III');
    }

}