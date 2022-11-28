import { Home, Login, Dashboard, TestSearchBars, NotFound, Profile, ChannelSearch } from "../components/pages";
import { Community, Comments} from "../components/pages/channel";

export const AllRoutes = () => [
    { path: "", element: <Home/> },
    { path: "/login", element: <Login/> },
    { path: "/channel/:channel_id", element: <Community/> },
    { path: "/channel/:channel_id/post/:post_id", element: <Comments/> },
    { path: "/dashboard", element: <Dashboard/> },
    { path: "/TestSearchBars", element: <TestSearchBars/> },
    { path: "/profile", element: <Profile/> },
    { path: "/channel-search/:search", element: <ChannelSearch/> },
    { path: "*", element: <NotFound/> }
]