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

import { videoCardsData, type VideoCard } from './data';

interface PriceMark {
  value: number;
}

interface AppliedFilters {
  categories: VideoCard['category'][];
  manufacturers: VideoCard['manufacturer'][];
  memorySizes: VideoCard['memorySize'][];
  gpuFrequencies: VideoCard['gpuFrequency'][];
  busWidths: VideoCard['busWidth'][];
  priceRange: number[];
}

const categories = [...new Set(videoCardsData.map(videoCard => videoCard.category))];
const manufacturers = [...new Set(videoCardsData.map(videoCard => videoCard.manufacturer))];
const memorySizes =
  [...new Set(videoCardsData.map(videoCard => videoCard.memorySize))]
  .map(size => parseInt(size))
  .sort((a, b) => a - b)
  .map(item => item + 'GB');
const gpuFrequencies =
  [...new Set(videoCardsData.map(videoCard => videoCard.gpuFrequency))]
  .map(frequency => parseInt(frequency))
  .sort((a, b) => a - b)
  .map(item => item + ' MHz');
const busWidths =
  [...new Set(videoCardsData.map(videoCard => videoCard.busWidth))]
  .map(width => parseInt(width))
  .sort((a, b) => a - b)
  .map(item => item + '-bit');

const priceMarks: PriceMark[] = [];

for (let i = 0; i <= 18000; i += 1000) {
  priceMarks.push({
    value: i,
  });
};

export const VideoCards: React.FC = () => {
  const theme = useTheme();
  const [videoCards, setVideoCards] = useState<VideoCard[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<AppliedFilters>({
    categories: [],
    manufacturers: [],
    memorySizes: [],
    gpuFrequencies: [],
    busWidths: [],
    priceRange: [0, 18000],
  });

  useEffect(() => {
    if (![...appliedFilters.categories, ...appliedFilters.manufacturers, ...appliedFilters.memorySizes, ...appliedFilters.gpuFrequencies, ...appliedFilters.busWidths].length
      && appliedFilters.priceRange[0] === 0
      && appliedFilters.priceRange[1] === 18000) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVideoCards([]);
    } else {
      setVideoCards(videoCardsData.filter(videoCard => {
        const categorySelected = appliedFilters.categories.length ? appliedFilters.categories.includes(videoCard.category) : true;
        const manufacturerSelected = appliedFilters.manufacturers.length ? appliedFilters.manufacturers.includes(videoCard.manufacturer) : true;
        const memorySizeSelected = appliedFilters.memorySizes.length ? appliedFilters.memorySizes.includes(videoCard.memorySize) : true;
        const gpuFrequencySelected = appliedFilters.gpuFrequencies.length ? appliedFilters.gpuFrequencies.includes(videoCard.gpuFrequency) : true;
        const busWidthSelected = appliedFilters.busWidths.length ? appliedFilters.busWidths.includes(videoCard.busWidth) : true;
        let priceSelected;

        if (appliedFilters.priceRange[0] === 0 && appliedFilters.priceRange[1] === 18000) {
          priceSelected = true;
        } else {
          const videoCardPrice = videoCard.price.includes(',') ? +videoCard.price.replace(/,/g, '').slice(1) : +videoCard.price.slice(1);

          priceSelected = videoCardPrice >= appliedFilters.priceRange[0] && videoCardPrice <= appliedFilters.priceRange[1];
        }

        return categorySelected && manufacturerSelected && memorySizeSelected && gpuFrequencySelected && busWidthSelected && priceSelected;
      }));
    }
  }, [appliedFilters]);

  const handleFilterCheckboxSelect = (event: React.ChangeEvent<HTMLInputElement>, activeFilter: keyof AppliedFilters) => {
    const { checked, value } = event.target;

    if (checked) {
      setAppliedFilters(prevValue => ({
        ...prevValue,
        [activeFilter]: [...prevValue[activeFilter], value],
      }));
    } else {
      setAppliedFilters(prevValue => ({
        ...prevValue,
        [activeFilter]: prevValue[activeFilter].filter(filterValue => filterValue !== value),
      }));
    }
  };

  const handlePriceSelect = (_event: Event, newValue: number[]) => {
    setAppliedFilters(prevValue => ({
      ...prevValue,
      priceRange: newValue,
    }));
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
          maxWidth: '1000px',
          textAlign: 'center',
          padding: '20px',
          [theme.breakpoints.down('sm')]: {
            padding: '20px 5px',
          },
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
                  checked={appliedFilters.categories.includes(category)}
                  value={category}
                  onChange={(event) => handleFilterCheckboxSelect(event, 'categories')}
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
                  checked={appliedFilters.manufacturers.includes(manufacturer)}
                  value={manufacturer}
                  onChange={(event) => handleFilterCheckboxSelect(event, 'manufacturers')}
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
                  checked={appliedFilters.memorySizes.includes(memorySize)}
                  value={memorySize}
                  onChange={(event) => handleFilterCheckboxSelect(event, 'memorySizes')}
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
                  checked={appliedFilters.gpuFrequencies.includes(gpuFrequency)}
                  value={gpuFrequency}
                  onChange={(event) => handleFilterCheckboxSelect(event, 'gpuFrequencies')}
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
                  checked={appliedFilters.busWidths.includes(busWidth)}
                  value={busWidth}
                  onChange={(event) => handleFilterCheckboxSelect(event, 'busWidths')}
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
            value={appliedFilters.priceRange}
            onChange={handlePriceSelect}
            sx={{
              marginTop: '30px',
            }}
          />
        </Box>
        {videoCards.length > 0 && (
          <Card
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 345px))',
              justifyContent: 'center',
              gap: '20px',
              borderRadius: '20px',
              marginTop: '35px',
              padding: '50px 20px',
              [theme.breakpoints.down('sm')]: {
                padding: '35px 15px',
              },
            }}
          >
            {videoCards.map(card => (
              <CardActionArea
                key={card.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  border: '1px solid #e0c0a0',
                  paddingTop: '40px',
                }}
              >
                <CardMedia
                  component="img"
                  height="140px"
                  image={card.img}
                  alt={card.title}
                  sx={{
                    objectFit: 'contain',
                  }}
                />
                <CardContent
                  sx={{
                    wordBreak: 'break-word'
                  }}
                >
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
        )}
      </Box>
    </Container>
  );
};
