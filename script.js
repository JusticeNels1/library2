let book_info = document.querySelectorAll('.sidebar input')
let submit = document.querySelector('.add')

function Book ([title,author,pages,read]) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
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
    const container = document.querySelector('.container')
    let heading = document.createElement('h1')
    let div = document.createElement('div')
    heading.innerText = book.title
    div.innerText = `By: ${book.author}|| Pages: ${book.pages}||gi Read: ${book.read}`
    container.appendChild(div)
}
