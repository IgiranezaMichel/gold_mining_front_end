/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { MiningSiteServices } from '../../../../../../services/siteServices';
import { AddHomeWork, CalendarMonth, LocationOn } from '@mui/icons-material';

export default function ViewSites() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [sites, setSite] = React.useState([]);
    React.useEffect(() => {
        new MiningSiteServices().getAll().then((res) => {
            setSite(res.data)
        })
    }, [])
    return (
        <div>
            <button className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" aria-describedby={id} onClick={handleClick}>
                View Sites
            </button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <section className='flex flex-col gap-2 p-1'>
                    <div className="font-bold">
                        List of minig sites
                    </div>
                    {sites.map((data: any) => <Typography key={data.id} className='p-1 border' sx={{ p: 2 }}>
                        <div className='mb-3'><AddHomeWork /> {data.name}</div>
                        <div className="flex justify-between gap-4 items-center">
                            <div><LocationOn />{data.address}</div>  <div><CalendarMonth />{data.timeStamp}</div>
                        </div>
                    </Typography>)}
                </section>
            </Popover>
        </div>
    );
}
