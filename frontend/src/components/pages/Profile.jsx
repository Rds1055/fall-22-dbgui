import { useEffect } from "react";
import { useState } from "react";
import { getUserInfo } from "../../api";

export const Profile = () => {

    const [ user, setUser ] = useState(undefined);

    useEffect(() => {
        getUserInfo(x => {
            setUser(x);
        })
    }, [ user ])

    if (!user) {
        return <>
            Loading...
        </>
    }

return(

<>

<div className = "text-center pt-3">
    <header>
<h3> Username: </h3>
{user.username }
<h3> Email: </h3>
{ user.email }
<h3>Admin: </h3>
{ user.is_Admin }
<h3>Date Joined:</h3>
{ user.date }
</header>

</div>

</>
)

}