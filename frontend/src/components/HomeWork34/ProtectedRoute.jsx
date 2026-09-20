import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const location = useLocation()

    if (localStorage.getItem('isAuthenticated')!=="true") {
        return (
        <Navigate
            to="/HomeWork34"
            replace
            state={{ from: location, error: 'У вас нет доступа к этой странице. Пожалуйста, авторизуйтесь.' }}
        />
    )
    }

    return children
}

export default ProtectedRoute