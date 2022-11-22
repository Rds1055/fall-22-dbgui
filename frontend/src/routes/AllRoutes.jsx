import { Home, Login, Dashboard, TestSearchBars, NotFound, Community, Comments, Profile, ChannelSearch } from "../components/pages";

export const AllRoutes = () => [
    { path: "", element: <Home/> },
    { path: "/login", element: <Login/> },
    { path: "/channel/:channelId", element: <Community/> },
    { path: "/channel/:channelId/post/:postId", element: <Comments/> },
    { path: "/dashboard", element: <Dashboard/> },
    { path: "/TestSearchBars", element: <TestSearchBars/> },
    { path: "/profile", element: <Profile/> },
    { path: "/channel-search/:search", element: <ChannelSearch/> },
    { path: "*", element: <NotFound/> }
]