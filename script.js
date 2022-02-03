let book_info = document.querySelectorAll('.sidebar input')
let submit = document.querySelector('.add')


class Book {
    constructor ([title,author,pages,read]) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

submit.addEventListener('click', (e) => {

    addBook(createBook(book_info))

})

const createBook = (info) => {
    const new_book = []

    info.forEach(ele => {
        if(ele.value == 'on'){return new_book.push(ele.checked)}
        new_book.push(ele.value)
    });
    return new Book(new_book)
}

function addBook (book) {
    const book_container = document.querySelector('.books')
    const heading = document.createElement('h1')
    const info = document.createElement('ol')
    let card = document.createElement('div')

    heading.innerText = book.title

    for (const key in book) {
        if (key == 'title') {
            continue
        }
        const element = book[key];
        const li = document.createElement('li')
        li.innerText = `${key}: ${element}`
        info.appendChild(li)
    }
    card.className = 'card'
    
    card.appendChild(heading)
    card.appendChild(info)
    // card.innerText = `By: ${book.author}|| Pages: ${book.pages}||Read: ${book.read}`
    book_container.appendChild(card)
}
