import React from 'react'
import './Search.css'
// import TuneOutlinedIcon from "@material-ui/core/TuneOutlined"
// import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import TuneIcon from '@material-ui/icons/Tune';


function Search() {
    return (
        <div classNmae="search__page">
            <div className="search_channel">
            <TuneIcon/>
            <h2>FILTERS</h2>
            </div>
            <hr></hr>
        </div>
    )
}

export default Search
