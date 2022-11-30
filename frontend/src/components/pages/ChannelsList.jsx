import { useState } from "react"
import { useEffect } from "react";
import { TextAreaField } from "../common"
import { useNavigate } from "react-router-dom";
import { Channel } from "./channel";
import { getChannels } from "../../api";
import { Movie } from "../../models";

export const ChannelsList = ({ channels }) => {
    const navigate = useNavigate();

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
        <div className='border-white border w-50 mx-auto mb-5 pb-5'>
            {
                (channels && channels.length > 0) &&
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
            {
                (!channels || channels.length === 0) &&
                <div className = "text-center pt-4">
                    <h3 className="text-light">Not seeing the movie you want? Submit a title!</h3>
                    <button type = "button" className = "btn btn-primary"
                            onClick={() => navigate("/submit")}>
                        Submit Title
                    </button>
                </div>
            }
        </div>
        
    </>
}