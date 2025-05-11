import { DebounceInput } from 'react-debounce-input';
import { Search } from '@mui/icons-material';

export default function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <DebounceInput
        minLength={3}
        debounceTimeout={300}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search movies..."
        startAdornment={<Search sx={{ color: 'action.active', mr: 1 }} />}
        sx={{
          width: '100%',
          maxWidth: 600,
          padding: '12px 20px',
          borderRadius: '25px',
          fontSize: '1rem',
        }}
      />
    </div>
  );
}