import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserByUsername } from "../../api";
import { UpdateEmailModal } from "../common/UpdateEmailModal";

export const Profile = () => {

    const [ user, setUser ] = useState(undefined);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params.username) {
            getUserByUsername(params.username).then(x => setUser(x));
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

<div className = "text-center pt-3 text-light">
    <header>
<h3> Username: </h3>
@{ user[0].username }
<h3> Email: </h3>
{ user[0].email }
<h3>Admin: </h3>
{ user[0].is_admin }
<h3>Date Joined:</h3>
 { user[0].user_since }

</header>

<button
                    type = "button" className="btn btn-primary"
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                   Edit Profile
                </button>
<UpdateEmailModal user = { user[0] }/>

</div>

</>
)

}