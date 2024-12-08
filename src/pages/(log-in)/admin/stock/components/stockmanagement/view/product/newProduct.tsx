import * as React from 'react';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { CreateNewProduct } from '../../../../../../../../forms/product/create';

export default function NewProduct() {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid item>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={<CreateNewProduct/>}
                slotProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: "#ffff",

                      },className:'border border-blue-950 border-2 bg-black'
                    },arrow: {
                      sx: {
                        backgroundColor: "#ffff",
                      },
                    }
                  }}
                placement='bottom'
                arrow
              >
                <button className='bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                 onClick={handleTooltipOpen}>New Product</button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>
  );
}
