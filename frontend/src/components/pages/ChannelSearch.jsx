import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { getChannels } from "../../api";
import { SearchField } from "../common";

export const ChannelSearch = () => {
    const params = useParams();

    const [ channels, setChannels ] = useState(undefined);
    const [ search, setSearch ] = useState(undefined);

    useEffect(() => {
        getChannels().then(x => setChannels(x));
    }, []);

    useEffect(() => {
        setSearch(params.search);
    }, [params.search]);

    if (!channels) {
        return <>
            Loading...
        </>
    }

    return <>
        <div>
            <SearchField value = { search } setValue = { setSearch }/>
        </div>
        <div>
            {
                (channels.filter(x => {
                    return x.title.toLowerCase().includes(search.toLowerCase());
                }).map(channel => 
                    <div key = { channel.channel_id }>
                        <Link to = {`/channel/${channel.channel_id}`}>
                            { channel.title }
                        </Link>
                    </div>
                ))
            }
        </div>
    </>
}