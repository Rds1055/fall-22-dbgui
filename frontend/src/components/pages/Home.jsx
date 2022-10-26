import {useNavigate} from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <button
                type = "button"
                onClick = {() => {
                    navigate("/login");
                }}
            >
                Login
            </button>
        </>
    )
}