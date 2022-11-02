
//import {useNavigate} from 'react-router-dom';


export const CreateTheory = () =>{

//const navigate = useNavigate();

    return (
        <>
    <div className="pageStyle">

        <div>
            <h1> What's On Your Mind?</h1>
        </div>

        <div>
            <button type = "radio">
            Movie
            </button>

            <button type = "radio">
            TV Show
            </button>
                          
        </div>
        
        <div>
            <textarea id="CreteTheory" name="CreateTheory" rows="4" cols="50">
            Put your theory here...   
            </textarea>
        </div>

        <div>
            <button type = "button"onClick = {() => {
                            //navigate("/");
                        }}
                    >
                Submit
            </button>

            <button type = "button">
                Cancel
            </button>
        </div>
    </div>
        </>
    ) 
}