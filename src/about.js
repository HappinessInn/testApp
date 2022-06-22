
export default () => {

    const element = document.createElement('h3')

    element.textContent = 'Hello3343 webpack'

    element.addEventListener('click', () => alert('Hello webpack'))

    return element

}
