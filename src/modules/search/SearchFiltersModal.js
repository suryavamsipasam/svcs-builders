import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Slider,
  Button,
  Chip,
  InputAdornment,
  IconButton,
  Card,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useApp } from '../../context/AppContext';
import { searchStyles } from './Search.styles';

export const SearchFiltersModal = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const {
    allProjects,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    navigate,
    showToast,
  } = useApp();

  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [localStatus, setLocalStatus] = useState(filters.status || 'All');
  const [localBhk, setLocalBhk] = useState(filters.bhk || 'All');
  const [localPrice, setLocalPrice] = useState(filters.priceRange || [30, 150]);
  const [localLocation, setLocalLocation] = useState(filters.location || 'All');

  const statusOptions = ['All', 'Ongoing', 'Completed', 'Upcoming'];
  const bhkOptions = ['All', '2 BHK', '3 BHK', '4 BHK'];
  const locationOptions = ['All', 'Kokapet', 'Gachibowli', 'Narsingi', 'Miyapur', 'Jubilee Hills'];

  // Calculate live matching count
  const matchingProjects = allProjects.filter((p) => {
    const matchSearch =
      !localSearch ||
      p.title.toLowerCase().includes(localSearch.toLowerCase()) ||
      p.location.toLowerCase().includes(localSearch.toLowerCase());
    const matchStatus = localStatus === 'All' || p.status === localStatus;
    const matchBhk = localBhk === 'All' || p.bhkTypes.includes(localBhk);
    const matchPrice = p.priceNum >= localPrice[0] && p.priceNum <= localPrice[1];
    const matchLoc = localLocation === 'All' || p.location.toLowerCase().includes(localLocation.toLowerCase());
    return matchSearch && matchStatus && matchBhk && matchPrice && matchLoc;
  });

  const handleReset = () => {
    setLocalSearch('');
    setLocalStatus('All');
    setLocalBhk('All');
    setLocalPrice([30, 150]);
    setLocalLocation('All');
    showToast('Filters reset to default', 'info');
  };

  const handleApply = () => {
    setSearchQuery(localSearch);
    setFilters({
      status: localStatus,
      bhk: localBhk,
      priceRange: localPrice,
      location: localLocation,
    });
    navigate('projectsList');
    showToast(`Found ${matchingProjects.length} matching properties`, 'success');
  };

  return (
    <Box sx={searchStyles.container}>
      {/* Top Header */}
      <Box>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('projectsList')}
          sx={{ fontWeight: 700, color: 'text.secondary', mb: 0.5, p: 0 }}
        >
          Back to Projects
        </Button>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          Advanced Property Search & Filters
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Narrow down properties by construction status, BHK configurations, budget, and locality
        </Typography>
      </Box>

      {/* Main Filter Card */}
      <Card sx={searchStyles.contentCard}>
        {/* Search Bar */}
        <TextField
          placeholder="Search by project title, keyword, or landmark..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          fullWidth
          size="medium"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#D4A017', fontSize: 24 }} />
              </InputAdornment>
            ),
            endAdornment: localSearch ? (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setLocalSearch('')}>
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ) : null,
          }}
        />

        {/* Project Status Filter */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1.5 }}>
            Project Stage
          </Typography>
          <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
            {statusOptions.map((status) => {
              const selected = localStatus === status;
              return (
                <Chip
                  key={status}
                  label={status}
                  clickable
                  onClick={() => setLocalStatus(status)}
                  sx={searchStyles.filterChip(selected, isDark)}
                />
              );
            })}
          </Box>
        </Box>

        {/* BHK Type Filter */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1.5 }}>
            BHK Configuration
          </Typography>
          <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
            {bhkOptions.map((bhk) => {
              const selected = localBhk === bhk;
              return (
                <Chip
                  key={bhk}
                  label={bhk}
                  clickable
                  onClick={() => setLocalBhk(bhk)}
                  sx={searchStyles.filterChip(selected, isDark)}
                />
              );
            })}
          </Box>
        </Box>

        {/* Price Range Slider */}
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
              Budget Range
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 900, color: '#D4A017' }}>
              ₹{localPrice[0]} Lacs - {localPrice[1] >= 150 ? '₹1.5 Cr+' : `₹${localPrice[1]} Lacs`}
            </Typography>
          </Box>
          <Slider
            value={localPrice}
            onChange={(e, val) => setLocalPrice(val)}
            valueLabelDisplay="auto"
            min={30}
            max={200}
            step={5}
            sx={searchStyles.slider}
          />
        </Box>

        {/* Locality Filter */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1.5 }}>
            Locality / Hub
          </Typography>
          <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
            {locationOptions.map((loc) => {
              const selected = localLocation === loc;
              return (
                <Chip
                  key={loc}
                  label={loc}
                  clickable
                  onClick={() => setLocalLocation(loc)}
                  sx={searchStyles.filterChip(selected, isDark)}
                />
              );
            })}
          </Box>
        </Box>

        {/* Bottom Actions */}
        <Box sx={{ display: 'flex', gap: 2, pt: 2, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <Button
            variant="outlined"
            size="large"
            startIcon={<RestartAltIcon />}
            onClick={handleReset}
            sx={{
              flex: 1,
              py: 1.6,
              fontWeight: 800,
              borderRadius: 2.5,
              borderColor: isDark ? 'rgba(255,255,255,0.2)' : '#CBD5E1',
              color: 'text.primary',
            }}
          >
            Reset Filters
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleApply}
            sx={{
              flex: 2,
              py: 1.6,
              fontWeight: 900,
              borderRadius: 2.5,
              fontSize: '1rem',
            }}
          >
            Show {matchingProjects.length} Matching Properties
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default SearchFiltersModal;
