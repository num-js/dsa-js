const BOOKS_URL = 'https://gist.githubusercontent.com/num-js/9708f53662a91b24fd92b23f3f7354e3/raw/acd3d76b9aaa8d8e5fcf5181f63e2a7e4bdfaa11/books.json';

function fetchBooksData(bookTitle) {
    return new Promise((resolve, reject) => {
        fetch(BOOKS_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error in API response: ${response.status}`);
                }

                return response.json();
            })
            .then(data => {
                console.log("data: ", data);
                bookData = data.filter(book => book.title === bookTitle)
                if (bookData.length) {
                    resolve(bookData[0]);
                } else {
                    throw new Error(`Book not found.`);
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}

const bookTitle = "Learn Angular";
fetchBooksData(bookTitle)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching Book data:', error);
    });




// Using Async/Await
const displayBookDetails = async (bookTitle) => {
    try {
        const bookData = await fetchBooksData(bookTitle);
        let bookString = `
                <li>
                    <strong>${bookData.title}</strong> by <i>${bookData.author}</i> (${bookData.genre}, ${bookData.published_year})
                </li>
            `;
        console.log("bookData: ", bookData);
        document.getElementById("bookData").insertAdjacentHTML('beforeend', bookString);
    } catch (error) {
        console.error('Error fetching Book data:', error);
    }
}

displayBookDetails("You Don't Know JS");
displayBookDetails("Learn Angular New"); // this will throw error - Error fetching Book data: Error: Book not found. 
displayBookDetails("Learn Angular");