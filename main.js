let itemBtn = document.querySelectorAll('.item')

for (let i = 0; i < itemBtn.length; i++) {
    itemBtn[i].addEventListener('click', function () {
        itemBtn[i].classList.add('active')
        parserData(this)
    })
}

function parserData(el) {
    for (let k = 0; k < itemBtn.length; k++) {
        if (el == itemBtn[k]) {
            continue
        } else {
            itemBtn[k].classList.remove('active')
        }
    }
}