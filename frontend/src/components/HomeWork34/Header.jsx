import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: '#333',
            color: '#fff',
            marginBottom: '1rem'
        }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Домашняя работа № 34
            </div>
            <nav>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '1rem' }}>
                    <li>
                        <Link to="/HomeWork34" style={{ color: '#fff', textDecoration: 'none' }}>Главная</Link>
                    </li>
                    <li>
                        <Link to="/HomeWork34/profile" style={{ color: '#fff', textDecoration: 'none' }}>Профиль </Link>
                    </li>
                    <li>
                        <Link to="/HomeWork34/settings" style={{ color: '#fff', textDecoration: 'none' }}>Настройки</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;