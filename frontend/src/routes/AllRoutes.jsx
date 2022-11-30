import { Home, Login, Dashboard, TestSearchBars, NotFound, Profile, ChannelSearch, SubmitTitle, RestrictedContent } from "../components/pages";
import { Community, Comments} from "../components/pages/channel";

export const AllRoutes = () => [
    { path: "", element: <Home/> },
    { path: "/login", element: <Login/> },
    { path: "/channel/:channel_id", element: <Community/> },
    { path: "/channel/:channel_id/:post_id", element: <Comments/> },
    { path: "/dashboard", element: <Dashboard/> },
    { path: "/submitTitle", element: <SubmitTitle/> },
    { path: "/TestSearchBars", element: <TestSearchBars/> },
    { path: "/profile/:username", element: <Profile/> },
    { path: "/channel-search/:search", element: <ChannelSearch/> },
    { path: "/channel-search", element: <ChannelSearch/> },
    { path: "/restricted-content", element: <RestrictedContent/> },
    { path: "*", element: <NotFound/> }
]