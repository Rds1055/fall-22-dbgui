import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { getChannels } from "../../api";
import { SearchField } from "../common";
import { ChannelsList } from "./";

export const ChannelSearch = () => {
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
        
    }, [params.search])

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
    <div className='w-50 mx-auto'>
    <SearchField value = { search } setValue = { updateSearch }/>
    </div>
        <ChannelsList channels = { filtered }/>
    </>
}