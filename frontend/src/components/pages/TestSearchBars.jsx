import { AdvancedSearch } from "../common"
import { useState } from "react";
import { TextField } from "../common/index";
import {useNavigate} from 'react-router-dom';
//import { TextAreaField } from "../common"

export const TestSearchBars = () =>{


    // (app => {

    //     // You do not need to do anything in this file. You're welcome. :)
    
    //     app._changeView = viewId => {
    //         let sections = document.querySelectorAll('main > section');
    //         sections.forEach(section => {
    //             section.classList.remove('active');
    //         });
    
    //         document.getElementById(viewId).classList.add('active');
    //     };
    
    // })(app || (app = {}));




    const [keyword, setKeyword] = useState('');
    const [date, setDate] = useState('');
    const [likes, setLikes] = useState('');
    const [title, setTitle] = useState('');

    const navigate = useNavigate();



return ( <>
<div className = "AdvancedSearch">
    <button type="button" class="btn btn-outline-primary btn-lg btn-block">
        <a class="nav-link" href="/Profile">Advanced Search</a>
    </button>
</div>



<div id = "SearchBars" className = "hidden">

<TextField label = "Search Keyword: " value = {keyword} setValue = {setKeyword} id = "Search-Keyword" type = "text"/>
<TextField label = "Search Date: " value = {date} setValue = {setDate} id = "Search-Date" type = "text"/>
<TextField label = "Minimum Likes: " value = {likes} setValue = {setLikes} id = "Minimum-Likes" type = "text"/>
<TextField label = "Search Title: " value = {title} setValue = {setTitle} id = "SearchWord" type = "text"/>

<button
    type = "button"
        onClick = {() => {
        setKeyword("");
        setDate("");
        setLikes("");
        setTitle("");
        }}
        >
        Search
        </button>
</div>
</>
)}