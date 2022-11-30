import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { getChannels } from "../../api";
import { SearchField } from "../common";
import { ChannelsList } from "./";
import { useNavigate } from "react-router-dom";
import { TextField } from "../common";
import { getFilteredChannels } from "../../api";


export const ChannelSearch = () => {

        const navigate = useNavigate();

        //Michael: START OF SEARCH BAR STUFF 
        const [class_, setClass_] = useState("hidden");

        const changeView = () => {
            if (class_ === "hidden") {
                setClass_("");
            } else {
                setClass_("hidden");
            }
        };
    
        const [keyword, setKeyword] = useState('');
        const [minDate, setDate] = useState('');
    
        //MICHAEL: END OF SEARCH BAR STUFF 


    const params = useParams();

    const [ channels, setChannels ] = useState(undefined);
    const [ search, setSearch ] = useState("");
    const [ filtered, setFiltered ] = useState([]);

    useEffect(() => {
        getChannels().then(x => {
            setChannels(x);
            updateSearch(params.search);
        
        });
    }, []);

    useEffect(() => {
        if (channels) {
            updateSearch(params.search);
        }
        
    }, [params.search, channels])

    const updateSearch = (s) => {
        if (!s) {
            s = "";
        }
        setSearch(s);
        params.search = s;

        setFiltered(channels.filter(x => {
            if (!x.title) {
                return false;
            }
            return x.title.toLowerCase().includes(search.toLowerCase());
        }))
    }

    if (!channels) {
        return <>
            Loading...
        </>
    } 

    return <>
    {/* // Advanced Search Bar Start */}

    <div className='my-2 ms-2'>
        <div className = "AdvancedSearch">
            <button type="button" className="btn btn-primary btn-lg btn-block"
                onClick={() => {
                    changeView();
                }}>
                    Advanced Search
            </button>
            {
                sessionStorage.token &&
                <button type='button' className='btn btn-primary float-end m-2' data-bs-toggle="modal" data-bs-target="#postModal">New Post</button>
            }
            {
                !sessionStorage.token &&
                <button type='button' className='btn btn-primary float-end m-2' 
                    onClick = {() => { navigate("/restricted-content")}}>New Post</button>
            }
        <br className='clearfix'/>
        </div>
    </div>

    <div className='px-4 w-50 ms-4'>
        <div className='px-4'>
            <div id = "SearchBars" className = { class_ }>

    
                <TextField label = "Search Keyword: " value = {keyword} setValue = {setKeyword} id = "Search-Keyword" type = "text"/>
                <TextField label = "Search Date: Example Form (2015-03-25)" value = {minDate} setValue = {setDate} id = "Search-Date" type = "text"/>


                <button
                    type = "submit" className="btn btn-primary btn-lg btn-block"
                        onClick = {() => {

                        var date = undefined;
                        if (minDate) {
                            date = new Date(minDate);
                        }
                        getFilteredChannels({keyword, date}).then(x => setChannels(x));
                        
                        setKeyword("");
                        setDate("");

                        }}
                        >
                        Search
                </button>
            </div>
        </div>
    </div>

{/* advanced search bar end */}


    <div className='w-50 mx-auto'>
    <SearchField value = { search } setValue = { updateSearch }/>
    </div>
        <ChannelsList channels = { filtered }/>
    </>
}