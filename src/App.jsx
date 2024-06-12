import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { Card } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Slider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { videoCardsData } from './data';

const categories = [...new Set(videoCardsData.map(data => data.category))];
const manufacturers = [...new Set(videoCardsData.map(data => data.manufacturer))];
const memorySizes =
  [...new Set(videoCardsData.map(data => data.memorySize))]
  .map(size => parseInt(size))
  .sort((a, b) => a - b)
  .map(item => item + 'GB');
const gpuFrequencies =
  [...new Set(videoCardsData.map(data => data.gpuFrequency))]
  .map(frequency => parseInt(frequency))
  .sort((a, b) => a - b)
  .map(item => item + ' MHz');
const busWidths =
  [...new Set(videoCardsData.map(data => data.busWidth))]
  .map(width => parseInt(width))
  .sort((a, b) => a - b)
  .map(item => item + '-bit');

const priceMarks = [];

for (let i = 0; i <= 18000; i += 1000) {
  priceMarks.push({
    value: i,
  });
};

export const App = () => {
  const theme = useTheme();
  const [videoCards, setVideoCards] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);
  const [activeManufacturers, setActiveManufacturers] = useState([]);
  const [activeMemorySizes, setActiveMemorySizes] = useState([]);
  const [activeGpuFrequencies, setActiveGpuFrequencies] = useState([]);
  const [activeBusWidths, setActiveBusWidths] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 18000]);

  useEffect(() => {
    if (![...activeCategories, ...activeManufacturers, ...activeMemorySizes, ...activeGpuFrequencies, ...activeBusWidths].length
      && priceRange[0] === 0
      && priceRange[1] === 18000) {
      setVideoCards([]);

    } else {
      setVideoCards(videoCardsData.filter(videoCard => {
        const categorySelected = activeCategories.length ? activeCategories.includes(videoCard.category) : true;
        const manufacturerSelected = activeManufacturers.length ? activeManufacturers.includes(videoCard.manufacturer) : true;
        const memorySizeSelected = activeMemorySizes.length ? activeMemorySizes.includes(videoCard.memorySize) : true;
        const gpuFrequencySelected = activeGpuFrequencies.length ? activeGpuFrequencies.includes(videoCard.gpuFrequency) : true;
        const busWidthSelected = activeBusWidths.length ? activeBusWidths.includes(videoCard.busWidth) : true;
        let priceSelected;

        if (priceRange[0] === 0 && priceRange[1] === 18000) {
          priceSelected = true;
        } else {
          const videoCardPrice = videoCard.price.includes(',') ? +videoCard.price.replace(/,/g, '').slice(1) : +videoCard.price.slice(1);

          priceSelected = videoCardPrice >= priceRange[0] && videoCardPrice <= priceRange[1];
        }

        return categorySelected && manufacturerSelected && memorySizeSelected && gpuFrequencySelected && busWidthSelected && priceSelected;
      }));
    }
  }, [activeCategories, activeManufacturers, activeMemorySizes, activeGpuFrequencies, activeBusWidths, priceRange]);

  const handleCategorySelect = event => {
    const { checked, value } = event.target;
    
    if (checked) {
      setActiveCategories(prevValue => [...prevValue, value]);
    } else {
      setActiveCategories(prevValue => prevValue.filter(category => category !== value));
    }
  };

  const handleManufacturerSelect = event => {
    const { checked, value } = event.target;

    if (checked) {
      setActiveManufacturers(prevValue => [...prevValue, value]);
    } else {
      setActiveManufacturers(prevValue => prevValue.filter(manufacturer => manufacturer !== value));
    }
  };

  const handleMemorySizeSelect = event => {
    const { checked, value } = event.target;

    if (checked) {
      setActiveMemorySizes(prevValue => [...prevValue, value]);
    } else {
      setActiveMemorySizes(prevValue => prevValue.filter(memorySize => memorySize !== value));
    }
  };

  const handleGpuFrequencySelect = event => {
    const { checked, value } = event.target;

    if (checked) {
      setActiveGpuFrequencies(prevValue => [...prevValue, value]);
    } else {
      setActiveGpuFrequencies(prevValue => prevValue.filter(gpuFrequency => gpuFrequency !== value));
    }
  };
  const handleBusWidthSelect = event => {
    const { checked, value } = event.target;

    if (checked) {
      setActiveBusWidths(prevValue => [...prevValue, value]);
    } else {
      setActiveBusWidths(prevValue => prevValue.filter(busWidth => busWidth !== value));
    }
  };

  const handlePriceSelect = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#e0c0a0',
      }}
    >
      <Box
        sx={{
          boxSizing: 'border-box',
          width: '1000px',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 'bold',
          }}
        >
          Video Cards
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            textAlign: 'left',
            fontWeight: 'bold',
          }}
        >
          Select Categories
        </Typography>
        <FormGroup
          row
          sx={{
            marginBottom: '10px',
          }}
        >
          {categories.map(category => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={activeCategories.includes(category)}
                  value={category}
                  onChange={handleCategorySelect}
                  color="success"
                />
              }
              label={category}
            />
          ))}
        </FormGroup>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            textAlign: 'left',
            fontWeight: 'bold',
          }}
        >
          Select Manufacturers
        </Typography>
        <FormGroup
          row
          sx={{
            marginBottom: '10px',
          }}
        >
          {manufacturers.map(manufacturer => (
            <FormControlLabel
              key={manufacturer}
              control={
                <Checkbox
                  checked={activeManufacturers.includes(manufacturer)}
                  value={manufacturer}
                  onChange={handleManufacturerSelect}
                  color="success"
                />
              }
              label={manufacturer}
            />
          ))}
        </FormGroup>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            textAlign: 'left',
            fontWeight: 'bold',
          }}
        >
          Select Memory Sizes
        </Typography>
        <FormGroup
          row
          sx={{
            marginBottom: '10px',
          }}
        >
          {memorySizes.map(memorySize => (
            <FormControlLabel
              key={memorySize}
              control={
                <Checkbox
                  checked={activeMemorySizes.includes(memorySize)}
                  value={memorySize}
                  onChange={handleMemorySizeSelect}
                  color="success"
                />
              }
              label={memorySize}
            />
          ))}
        </FormGroup>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            textAlign: 'left',
            fontWeight: 'bold',
          }}
        >
          Select GPU Frequencies
        </Typography>
        <FormGroup
          row
          sx={{
            marginBottom: '10px',
          }}
        >
          {gpuFrequencies.map(gpuFrequency => (
            <FormControlLabel
              key={gpuFrequency}
              control={
                <Checkbox
                  checked={activeGpuFrequencies.includes(gpuFrequency)}
                  value={gpuFrequency}
                  onChange={handleGpuFrequencySelect}
                  color="success"
                />
              }
              label={gpuFrequency}
            />
          ))}
        </FormGroup>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            textAlign: 'left',
            fontWeight: 'bold',
          }}
        >
          Select Bus Widths
        </Typography>
        <FormGroup
          row
          sx={{
            marginBottom: '10px',
          }}
        >
          {busWidths.map(busWidth => (
            <FormControlLabel
              key={busWidth}
              control={
                <Checkbox
                  checked={activeBusWidths.includes(busWidth)}
                  value={busWidth}
                  onChange={handleBusWidthSelect}
                  color="success"
                />
              }
              label={busWidth}
            />
          ))}
        </FormGroup>
        <Box
          sx={{
            maxWidth: '350px',
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              textAlign: 'left',
              fontWeight: 'bold',
            }}
          >
            Select Prices
          </Typography>
          <Slider
            color="success"
            valueLabelDisplay="on"
            min={0}
            max={18000}
            marks={priceMarks}
            step={1000}
            value={priceRange}
            onChange={handlePriceSelect}
            sx={{
              marginTop: '30px',
            }}
          />
        </Box>
        {videoCards.length > 0 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '35px',
            }}
          >
            <Card
              sx={{
                maxWidth: '710px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                padding: '50px 20px',
                borderRadius: '20px',
                [theme.breakpoints.down('md')]: {
                  maxWidth: '345px',
                },
              }}
            >
              {videoCards.map(card => (
                <CardActionArea
                  key={card.id}
                  sx={{
                    maxWidth: 345,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    border: '1px solid #e0c0a0',
                    paddingTop: '40px',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={card.img}
                    alt={card.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{
                        color: '#278664',
                      }}
                    >
                      {card.price}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                      }}
                    >
                      {card.category}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{
                        fontWeight: '400',
                      }}
                    >
                      Memory - {card.memorySize}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{
                        fontWeight: '400',
                      }}
                    >
                      Frequency - {card.gpuFrequency}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{
                        fontWeight: '400',
                      }}
                    >
                      Bus Width - {card.busWidth}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {card.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              ))}
            </Card>
          </Box>
        )}
      </Box>
    </Container>
  );
};
