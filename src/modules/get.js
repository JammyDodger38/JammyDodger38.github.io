import {render} from './helpers'

const getModule = () => {
    
    fetch('dbHeroes.json')
        .then(response => response.json())
        .then(result => {
            render(result)
        })
}

export default getModule