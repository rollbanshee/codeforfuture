import './search.css';


function Search() {
    return (
        <div className='search-bar'>
            <input className='search-input' type="text" />
            <button className='search-button'>Search</button>
        </div>
    );
}

export default Search;