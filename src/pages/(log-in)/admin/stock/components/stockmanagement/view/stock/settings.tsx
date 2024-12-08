/* eslint-disable @typescript-eslint/no-explicit-any */
import {  ClickAwayListener, Grid,Tooltip } from "@mui/material"
import { useState } from "react"
import {  Settings } from "@mui/icons-material"
import { CreateNewstock } from "../../../../../../../../forms/stock/create/create";

export const StockSettingUI = (prop:{stock:any}) => {
    const [openToolTip, setOpenToolTip] = useState(false);

    const handleTooltipClose = () => {
        setOpenToolTip(false);
    };

    const handleTooltipOpen = () => {
        setOpenToolTip(true);
    };
    return <>
     <Grid container sx={{ justifyContent: 'center' }}>
        <Grid item>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                onClose={handleTooltipClose}
                open={openToolTip}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={<div className='flex flex-col gap-2'>
                <CreateNewstock stock={prop.stock}/>
                            <button className="bg-blue-950 text-white rounded-lg p-2">Sale Stock</button>
                            <button className="bg-blue-950 text-white rounded-lg p-2">Processing Stock</button>
                            <button className="bg-blue-950 text-white rounded-lg p-2">Update Price</button>
                </div>}
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
                 onClick={handleTooltipOpen}><Settings/></button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
 
    </>
}