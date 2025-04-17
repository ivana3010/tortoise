import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { assets } from '../assets/assets'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { Box, Slider } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({ //ovde zbog treperenja
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  }
}));


const Shop = () => {
  const { tortoises } = useContext(AppContext)
  //za dugme
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedLifespan, setSelectedLifespan] = useState('');

  //za slajder
  const [value, setValue] = useState([0, 250]); //rang
  const handleChange = (event, newValue) => { //menja se svaki put kada se promeni value
    setValue(newValue);
  };

  //zbog drugacijeg rejtinga
  const StyledRating = styled(Rating)({
    '& .MuiRating-icon': {
      fontSize: '2rem',
      color: '#f7e4bb'
    },
  });

  return (
    <div>
      <div className='flex flex-row items-center justify-center space-x-4'>
        <h1 className='font-courgette text-primary text-3xl text-center my-4'>Welcome to our web-shop!</h1>
        <img src={assets.tortoise} className='w-8 h-8' alt="" />
      </div>
      <p className="text-center text-lg text-gray-600 my-4 max-w-3xl mx-auto">
        Welcome to the Tortoise World web-shop — your ultimate destination for everything tortoise-related! Whether you're a passionate tortoise enthusiast or a beginner looking to welcome your first shelled friend, we’ve got you covered. Our carefully curated collection includes a variety of beautiful tortoise species, essential care items, and high-quality food to ensure a healthy and happy life for your pet.
      </p>

      <div className='flex flex-row  justify-center text-lg text-primary font-semibold items-center mt-5'>
        <Button variant="text" sx={{ color: '#784313', fontWeight: 500, fontSize: 17 }} onClick={handleClickOpen}>
          <AddIcon /> <p>Filter</p>
        </Button>
        <BootstrapDialog

          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          disableEnforceFocus
          keepMounted
          disableScrollLock
        >
          <DialogContent dividers>
            <div className='mb-4'>
              <label className='text-primary font-semibold mr-5'>Size</label>
              <select value={selectedSize} onChange={e => setSelectedSize(e.target.value)} className='p-2 rounded-md border border-primary'>
                <option className='text-primary' value="">All</option>
                <option className='text-primary' value="small"> &lt;10 cm </option>
                <option className='text-primary' value="medium">10-30 cm</option>
                <option className='text-primary' value="medium2">30-80 cm</option>
                <option className='text-primary' value="large">&gt;120 cm</option>
              </select>
            </div>
            <div>
              <label className='text-primary mr-3 mb-1 font-semibold'>Lifespan</label>
              <select value={selectedLifespan} onChange={e => setSelectedLifespan(e.target.value)} className='p-2 rounded-md border border-primary'>
                <option value="small">30-50 years</option>
                <option value="medium">50-90 years</option>
                <option value="large">90-150 years</option>
              </select>
            </div>
            <Box sx={{ width: 300 }}>
              <label className="text-primary font-semibold mb-2 block">Price (€)</label>
              <Slider
              
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={0}
                max={250}
                step={20}
              />
              <div className="text-primary">
                {value[0]}€ - {value[1]}€
              </div>
            </Box>

          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 p-6  rounded-md">
          {tortoises.map((item) => (
            <div className="relative overflow-hidden group w-[280px] h-[320px] bg-primary bg-opacity-90 border border-primary rounded-md">
              <FavoriteBorderIcon className='absolute top-2 right-2 text-gray-700 hover:text-red-600 cursor-pointer z-10' />
              <img
                src={item.imageShop}
                alt={item.name}
                className="w-full h-[200px] object-cover transform duration-300"
              />
              <div className='p-3 '>
                <h2 className="text-lg font-semibold text-white">{item.name}</h2>
                <h2 className="text-lg font-semibold text-white mb-2">{item.price}</h2>
                <div className='flex flex-row items-center space-x-1'>
                  <StyledRating
                    defaultValue={item.rating}
                    readOnly
                    icon={<FavoriteIcon fontSize="small" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="small" />}
                  />
                  <p className='text-white mt-[-3px]'>(8)</p>
                </div>

              </div>


              <div className='absolute z-10 bottom-24 right-3 bg-primary bg-opacity-95 rounded-full p-2 hover:-translate-y-1 duration-300'>
                <LocalGroceryStoreIcon className='text-white text-[32px] ' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop