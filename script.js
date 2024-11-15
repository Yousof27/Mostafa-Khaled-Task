// for (let i = 1; i <= 5; i++) {
//     let degree = prompt(`Enter Degree No.${i}`, 0);

//     if (degree <= 50) {
//         console.log(`F and ${degree}%`);
//     } else if (degree <= 60) {
//         console.log(`E and ${degree}%`);
//     } else if (degree <= 70) {
//         console.log(`D and ${degree}%`);
//     } else if (degree <= 80) {
//         console.log(`C and ${degree}%`);
//     } else if (degree <= 90) {
//         console.log(`B and ${degree}%`);
//     } else {
//         console.log(`A and ${degree}%`);
//     }
// }

const degree = document.querySelector('.degree');
const total = document.querySelector('.total');
const grad = document.querySelector('.grad');
const percent = document.querySelector('.percent');
const form = document.forms[0];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let gradMessage, percentMessage;

    if (degree.value === '' || total.value === '') {
        grad.style.color = 'red';
        gradMessage = '! اكتب كل البيانات يا بني آدم';
        percentMessage = ''
    } else {
        grad.style.color = 'rgb(255, 0, 255)';

        let result = (+degree.value * 100) / +total.value;
        percentMessage = `You Get ${result}%`

        if (result > 100) {
            gradMessage = 'احنا هنستعبط ؟';
            percentMessage = '';
        } else if (result <= 50) {
            gradMessage = 'روح بيع جرجير يا غالي';
        } else if (result <= 60) {
            gradMessage = 'ممشي الحال';
        } else if (result <= 70) {
            gradMessage = 'ومالو يسطا ومالو';
        } else if (result <= 80) {
            gradMessage = 'حلو يا عم متزعلش';
        } else if (result <= 90) {
            gradMessage = 'عاش';
        } else {
            gradMessage = 'عااااش أوي ياض';
        }
    }

    grad.innerHTML = gradMessage;
    percent.innerHTML = percentMessage;
});
