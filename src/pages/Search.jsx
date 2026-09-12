const Search = () => {
    return (
        <section class="content">
            <div class="search-page-header">
                <div class="section-label">ПОИСК</div>

                <h1>Найдите свою следующую книгу</h1>

                <form class="search" id="searchForm">
                    <span class="search-icon">⌕</span>

                    <input
                        id="searchInput"
                        type="text"
                        placeholder="Название, автор или ISBN..."
                    />

                    <button type="submit">Найти</button>
                </form>
            </div>

            <div class="section-header">
                <div>
                    <div class="section-label">РЕЗУЛЬТАТЫ</div>

                    <h2 id="searchTitle">Результаты поиска</h2>
                </div>

                <span class="result-count" id="resultCount">
                    —
                </span>
            </div>

            <div class="book-grid" id="results"></div>
        </section>
    )
}

export default Search
