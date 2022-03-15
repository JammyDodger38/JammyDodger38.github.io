const render = (result) => {
    let wrap = document.querySelector('.wrapper')
    const moviesSelect = document.getElementById('movies')
    let heroObj = []
    let movies = []

    const createEl = (element) => {
        let div = document.createElement('div')
        let img = document.createElement('img')
        let wrapImg = document.createElement('div')
        let wrapP = document.createElement('div')
        let textP = document.createElement('p')

        img.src = element.photo

        for (let key in element) {
            if (key != 'photo') {
                let title = key.substring(0,1).toUpperCase() + key.substring(1)
                textP.innerHTML += `<b>${title}:</b> ${element[key]} <br>`
            }
            if (key == 'movies') {
                for (let i of element[key])
                if (!movies.includes(i)) {
                    movies.push(i)
                }
            }
        }
        
        img.classList.add('hero__image')
        div.classList.add('wrap')
        wrapImg.classList.add('wrapImg')
        wrapP.classList.add('wrapP')

        wrapImg.append(img)
        wrapP.append(textP)
        div.append(wrapImg)
        div.append(wrapP)

        wrap.append(div)
    }

    result.forEach((element, index) => {
        heroObj.push(element)
        createEl(heroObj[index])
    });

    for (let i = 0; i < movies.length; i++) {
        moviesSelect.options[moviesSelect.options.length] = new Option(movies[i], 'значение')
    }

    moviesSelect.addEventListener('change', () => {
        wrap.innerHTML = ''
        let next

        if (moviesSelect.options[moviesSelect.selectedIndex].innerText.toString() == "Выберите фильм") {
            heroObj.forEach(element => {
                createEl(element)
            });
        } else {
            heroObj.forEach(element => {
                if(typeof element.movies != 'undefined') {
                    next = false
                    element.movies.forEach(element => {
                        if (element == moviesSelect.options[moviesSelect.selectedIndex].innerText.toString()) { 
                            next = true
                        }
                    });
                    if (next) {
                        createEl(element)
                    }
                }
            });
        }
    })

    let open = false
    wrap.addEventListener('click', (event) => {
        
        if (event.target.closest('.hero__image')) {
            let img = document.querySelectorAll('.hero__image')
            
            if (open == false) {
                img.forEach(item => {
                    item.classList.remove('opened')
                })
                event.target.classList.add('opened')
                open = true
            } else {
                if (event.target.classList.contains('opened')) {
                    event.target.classList.remove('opened')
                    open = false
                }
            }
        }
    })
}

export {render}