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
<h3> Username: { user.username }</h3>

<h3> Email: { user.email }</h3>

<h3>Admin: { user.Admin }</h3>

<h3>Date Joined: { user.date }</h3>

</header>

</div>

</>
)

}