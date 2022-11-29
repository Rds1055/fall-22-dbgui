import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../api";

export const Profile = () => {

    const [ user, setUser ] = useState(undefined);
    const navigate = useNavigate();

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

<div className = "text-center pt-3 text-light">
    <header>
<h3> Username: </h3>
{ user.username }
<h3> Email: </h3>
{ user.email }
<h3>Admin: </h3>
{ user.is_admin }
<h3>Date Joined:</h3>
 { user.user_since }
</header>

</div>

</>
)

}