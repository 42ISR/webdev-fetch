const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="brand">
                <div className="brand-mark">L</div>
                <div>
                    <div className="brand-name">Libria</div>
                    <div className="brand-caption">Open Library</div>
                </div>
            </div>
            <nav className="navigation">
                <div className="nav-section-title">Библиотека</div>
                <a className="nav-item active" href="index.html">
                    <span>⌂</span>
                    Обзор
                </a>
                <a className="nav-item" href="favorites.html">
                    <span>♡</span>
                    Избранное
                </a>
            </nav>
            <div className="sidebar-bottom">
                <div className="profile">
                    <div className="avatar">А</div>
                    <div>
                        <strong>Читатель</strong>
                        <span>Моя библиотека</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
