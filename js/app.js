// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("lower") && count !== 0) {
            count--;
        }
        else if (styles.contains('add') && count !== 50) {
            count++;
        }
        value.textContent = count;
    })
})