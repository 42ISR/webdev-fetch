import BookCard from '../components/BookCard'

const Favorites = () => {
    return (
        <section className="content">
            <div className="section-header">
                <div>
                    <div className="section-label">СОХРАНЁННЫЕ КНИГИ</div>
                    <h2>Избранное</h2>
                </div>
            </div>
            <div className="book-grid">
                <BookCard />
            </div>
        </section>
    )
}

export default Favorites
