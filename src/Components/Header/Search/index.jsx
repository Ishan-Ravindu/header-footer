import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    return (
        <TextField
            id="input-with-icon-textfield"
            placeholder='Search'
            size='small'
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            variant="outlined"
        />
    )
}

export default Search;