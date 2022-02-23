const btn = document.querySelectorAll('.btn')
const header = document.querySelector('h1.text-center')

const menu = function () {
    btn.forEach(function(item, index) {
        item.addEventListener('click', function() {
            btn.forEach(function(item) {
                item.classList.remove('button__active')
            })
            if (index == 0) {
                document.location.href = "./profile.html"

            } else if (index == 1) {
                document.location.href = "./messages.html"

            } else {
                document.location.href = "./bell.html"
            }
        })
    })
    if (header.textContent == 'Профиль') {
        btn[0].classList.add('button__active')
    } else if (header.textContent == 'Сообщения') {
        btn[1].classList.add('button__active')
    } else if (header.textContent == 'Уведомления') {
        btn[2].classList.add('button__active')
    }
}

menu()
