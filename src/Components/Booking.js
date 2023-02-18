import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import { Card, CardContent, TextField, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { useEffect, useState } from 'react';
import { From } from './From';



export const Booking = () => {
    const[open,setopen] = useState(true)
    
    return (
        <>
            <div className="container" style={{ paddingRight: 20, paddingLeft: 20 }}>
                <div className="row" style={{ marginTop: 10 }}>
                    <div className="col-md-6 col-sm-12 container">
                        <div className='row'>
                            <div className='col'>
                                <h5 style={{ textAlign: "left" }}>Book a ride</h5>

                            </div>
                            <div className='col'>
                                <DirectionsCarRoundedIcon fontSize={'large'} style={{ float: 'right' }}></DirectionsCarRoundedIcon>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: 50 }}>
                            <div className='col-md-12'>
                                <Card style={{ borderRadius: 18 }}>
                                    <CardContent>
                                        <div className='row' style={{ marginBottom: 15 }}>
                                            <div className='col-4'>
                                                <CircleIcon style={{ float: 'left', color: "#30c530" }}></CircleIcon><Typography style={{ float: 'left', fontSize: 14 }}>From</Typography>

                                            </div>
                                            <div className='col'>
                                                <TextField style={{ marginTop: -10 }} fullWidth id="standard-basic" variant="standard" />

                                            </div>
                                        </div>
                                        <div className='row' style={{ marginBottom: 15 }}>
                                            <div className='col-4'>
                                                <CircleIcon style={{ float: 'left', color: "#ca4848" }}></CircleIcon><Typography style={{ float: 'left', fontSize: 14 }}>To</Typography>

                                            </div>
                                            <div className='col'>
                                                <TextField style={{ marginTop: -10 }} fullWidth id="standard-basic" variant="standard" />

                                            </div>
                                        </div>
                                        <div className='row' style={{ marginBottom: 10 }}>
                                            <div className='col-4'>
                                                <CircleIcon style={{ float: 'left', color: "#7c7cc5" }}></CircleIcon><Typography style={{ float: 'left', fontSize: 14 }}>Number</Typography>

                                            </div>
                                            <div className='col'>
                                                <TextField style={{ marginTop: -10 }} fullWidth id="standard-basic" variant="standard" />

                                            </div>
                                        </div>

                                    </CardContent>

                                </Card>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: 20 }}>
                            <div className='col-md-12'>
                                <Card style={{ borderRadius: 18 }}>
                                    <CardContent>
                                        <div className='row' style={{ marginBottom: 15 }}>

                                            <div className='col'>
                                                <TextField label={"When"} type={"datetime-local"} fullWidth></TextField>
                                            </div>
                                        </div>


                                    </CardContent>

                                </Card>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <From openM = {open} ></From>
        </>
    );
}
