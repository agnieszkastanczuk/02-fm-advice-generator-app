const btn = document.querySelector('.btn');
const adviceText = document.querySelector('.advice-text');
const adviceId = document.querySelector('#adviceId');

btn.addEventListener('click', function(){
    fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then(data => {
            const advice = data.slip.advice;
            const id = data.slip.id;

            adviceText.innerHTML = advice;
            adviceId.innerHTML = id;
        })

});
