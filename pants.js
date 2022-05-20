let pants = document.querySelectorAll('.pantsdiv')
let score = document.getElementById('tal')

pants.forEach(function (pants) {
    pants.addEventListener('click', function () {
        score.innerHTML = parseInt(score.innerHTML) + 1
    })
})