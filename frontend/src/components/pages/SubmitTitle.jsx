import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "../common";
import { addChannel, getUserInfo } from "../../api";
import { Channel } from "../../models";

export const SubmitTitle = () => {
    const [Title, setTitle] = useState('');
    const [actor, setActor] = useState('');
    const [director, setDirector] = useState('');
    const [date, setDate] = useState('');
    const [summary, setSummary] = useState('');

    const navigate = useNavigate();


    const [ user, setUser ] = useState(undefined);

    useEffect(() => {
        if (sessionStorage.token) {
            getUserInfo().then(x => setUser(x));
        } else {
            navigate("/restricted-content");
        }
    }, [])

    if (!user) {
        return <>
            Loading...
        </>
    }

return(

<>
        <div id = "login" className = "account-form container-fluid mt-5 row justify-content-center col me-3">
            <header>
                <h1>Submit Title!</h1>
            </header>
        
            <form name = "SubmitTitle" id = "SubmitTitle">
                
                <div className="form-outline w-50">
                    {/* Title field */}
                    <TextField label = "Movie Title: " value = {Title} setValue = {setTitle}  />
                    {/* actor field */}
                    <TextField label = "Lead Actor: " value = {actor} setValue = {setActor} />
                    {/* Director field */}
                    <TextField label = "Director: " value = {director} setValue = {setDirector} />
                    {/* Release Date field */}
                    <TextField label = "Release Date: Example Form (2015-03-25)" value = {date} setValue = {setDate} />
                    {/* summary field */}
                    <TextField label = "Movie Summary: " value = {summary} setValue = {setSummary} />
                </div>

                {/* Submit button */}            
                {
                    
                    <button type="button" className="btn btn-primary"
                        onClick = {() => {
                            // if(Date.parse(date) == NaN){
                            //     navigate("/dashboard");
                            // }

                            addChannel(new Channel(director, actor, summary, null, date, Title)).then(x => {
                                navigate(`/channel/${x[0]}`)
                            });
                            
                            setTitle("");
                            setActor("");
                            setDate("");
                            setDirector("");
                            setSummary("");
                            // navigate("/dashboard");   
                        }}
                    >
                        Submit
                    </button>
                }

                {/* Cancel (Go back to home) */}
            
            </form>
        </div>   
          
    </>
)

}