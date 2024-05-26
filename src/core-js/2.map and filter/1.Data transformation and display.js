const booksArr = [
    {
        "title": "Learn Angular",
        "author": "Akhil Mehra",
        "genre": "Software Development",
        "published_year": 2024,
        "book_cover_image": "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "title": "You Don't Know JS",
        "author": "Suman Sarkar",
        "genre": "JavaScript",
        "published_year": 2022,
        "book_cover_image": "https://example.com/you_dont_know_js.jpg"
    },
    {
        "title": "The Pragmatic Programmer",
        "author": "Andrew Hunt, David Thomas",
        "genre": "Software Development",
        "published_year": 1999,
        "book_cover_image": "https://example.com/pragmatic_programmer.jpg"
    },
    {
        "title": "Design Patterns",
        "author": "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        "genre": "Software Development",
        "published_year": 1994,
        "book_cover_image": "https://example.com/design_patterns.jpg"
    },
    {
        "title": "JavaScript: The Good Parts",
        "author": "Douglas Crockford",
        "genre": "JavaScript",
        "published_year": 2008,
        "book_cover_image": "https://example.com/js_good_parts.jpg"
    },
    {
        "title": "Eloquent JavaScript",
        "author": "Marijn Haverbeke",
        "genre": "JavaScript",
        "published_year": 2011,
        "book_cover_image": "https://example.com/eloquent_javascript.jpg"
    },
    {
        "title": "Effective Java",
        "author": "Joshua Bloch",
        "genre": "Java",
        "published_year": 2001,
        "book_cover_image": "https://example.com/effective_java.jpg"
    },
    {
        "title": "Introduction to the Theory of Computation",
        "author": "Michael Sipser",
        "genre": "Computer Science",
        "published_year": 1996,
        "book_cover_image": "https://example.com/theory_of_computation.jpg"
    },
    {
        "title": "Python Crash Course",
        "author": "Eric Matthes",
        "genre": "Python",
        "published_year": 2015,
        "book_cover_image": "https://example.com/python_crash_course.jpg"
    }
]
console.log("All books: ", booksArr);

const filteredBooks = booksArr.filter((book) => book.published_year > 2000);
console.log("filteredBooks: ", filteredBooks);

let bookString = "";
filteredBooks.map(book => {
    bookString += `
        <li>
            <strong>${book.title}</strong> by <i>${book.author}</i> (${book.genre}, ${book.published_year})
        </li>
    `;
});
const booksList = document.getElementById("booksList")
booksList.innerHTML = bookString;