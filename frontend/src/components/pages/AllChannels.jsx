import { useState } from "react"
import { useEffect } from "react";
import { TextAreaField } from "../common"
import { useNavigate } from "react-router-dom";
import { Channel } from "./channel";
import { getChannels } from "../../api";
import { Movie } from "../../models";

export const AllChannels = () => {
    const [channels, setChannels] = useState(undefined);

  
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
          <h2> Todays Top Theories </h2>
        </header>
      </div>
        <div>
            {
                channels.map((channel, index) => 
                    <div key = { index }>
                        <h3>{ channel.title }</h3>
                    </div>
                    
                )
            }
        </div>
        
    </>
}