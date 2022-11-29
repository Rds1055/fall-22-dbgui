import { useNavigate } from "react-router-dom";

export const RestrictedContent = () => {
    const navigate = useNavigate();

    return <>
        <div className='card p-4 m-4 border-0'>
            <div className=''>
                <h4>You must be logged in to access this content</h4>
                <h6>Click 'Login' to log in or 'cancel' to go back</h6>
            </div>
            <div className=''>
                <button type="button" className=" m-3 btn btn-secondary "
                    onClick = {() => {
                        navigate("/");
                    }} 
                    >Cancel
                </button>
                <button type='button'  className='btn btn-primary'
                    onClick={ () => {
                        navigate('/login');
                    }
                    }
                    >Login
                </button>
            </div>
        </div>
    </>
}