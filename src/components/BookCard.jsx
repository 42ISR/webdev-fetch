const BookCard = () => {
    return (
        <a className="book-card" href="book.html">
            <div className="book-image">
                <img
                    src="https://covers.openlibrary.org/b/id/8231856-L.jpg"
                    alt="The Little Prince"
                />
                <button className="favorite">♡</button>
            </div>
            <div className="book-info">
                <h3>The Little Prince</h3>
                <p>Antoine de Saint-Exupéry</p>
                <span className="year">1943</span>
            </div>
        </a>
    )
}

export default BookCard
