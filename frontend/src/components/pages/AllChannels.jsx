import { useState } from "react"
import { useEffect } from "react";
import { TextAreaField } from "../common"
import { useNavigate } from "react-router-dom";
import { Channel } from "./channel";
import { getChannels } from "../../api";
import { Movie } from "../../models";

export const AllChannels = () => {
    const [channels, setChannels] = useState(undefined);

    const navigate = useNavigate();
    useEffect(() => {
        getChannels().then(x => setChannels(x));
    }, []);

    if (!channels) {
        return <>
            Loading...
        </>
    }

    return <>
        <div className="p-5 text-center">
        <header>
          <h2> Channels </h2>
        </header>
      </div>
        <div className=' w-50 mx-auto border border-white'>
            {
                channels.map((channel, index) => 
                    <div key = { index }>
                        <h3 className="text-center pt-4">
                            <button type="button" className="btn btn-outline-primary" onClick={() => navigate(`/channel/${channel.channel_id}`)}>
                                { channel.title }
                            </button>
                        </h3>
                    </div>
                    
                )
            }
        </div>
        
    </>
}