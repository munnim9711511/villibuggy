import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { useEffect, useState } from 'react';
import { From } from './From';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import BookIcon from '@mui/icons-material/Book';

export const Booking = () => {
    const [open1, setopen1] = useState(false)
    let top = -26
    const fromOpen = (s) => {
        setsetp(s);
        setopen1(!open1);
    }
    const [fromTaken, setfromTaken] = useState(false);
    const [toTaken, settoTaken] = useState(false);
    const [setp, setsetp] = useState();
    const[fromclienla,setfromclienla] = useState(0);
    const[fromclienlo,setfromclienlo] = useState(0);

    const[endclienla,setendclienla] = useState(0);
    const[endclienlo,setendclienlo] = useState(0);
    const[number,setnumber] = useState('');
    const[date,setdate] = useState('');
    const commitTaken = () => {
        setfromTaken(true);
    }
    const setFromClient = (l,lo)=>{
        setfromclienla(l);
        setfromclienlo(lo);
    }
    const setendClient = (l,lo)=>{
        setendclienla(l);
        setendclienlo(lo);
    }
    const committoTaken = () => {
        settoTaken(true);
    }
    const close = ()=>{
        setopen1(!setopen1)
    }



    
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
                                                {
                                                    fromTaken &&
                                                    <CheckCircleOutlineRoundedIcon style={{ color: "green" }}></CheckCircleOutlineRoundedIcon>

                                                }
                                                <TextField onClick={()=>fromOpen("F")} onChange={()=>fromOpen("F")} style={{ marginTop: top }} fullWidth variant="standard" />

                                            </div>
                                        </div>
                                        <div className='row' style={{ marginBottom: 15 }}>
                                            <div className='col-4'>
                                                <CircleIcon style={{ float: 'left', color: "#ca4848" }}></CircleIcon><Typography style={{ float: 'left', fontSize: 14 }}>To</Typography>

                                            </div>
                                            <div className='col'>
                                                {
                                                    toTaken &&
                                                    <CheckCircleOutlineRoundedIcon style={{ color: "green" }}></CheckCircleOutlineRoundedIcon>

                                                }
                                                <TextField onClick={()=>fromOpen("T")} onChange={()=>fromOpen("T")} style={{ marginTop: top }} fullWidth variant="standard" />

                                            </div>
                                        </div>
                                        <div className='row' style={{ marginBottom: 10 }}>
                                            <div className='col-4'>
                                                <CircleIcon style={{ float: 'left', color: "#7c7cc5" }}></CircleIcon><Typography style={{ float: 'left', fontSize: 14 }}>Number</Typography>

                                            </div>
                                            <div className='col'>
                                                <TextField value={number} onChange={e=>setnumber(e.target.value)} style={{ marginTop: -10 }} fullWidth variant="standard" />

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
                                                <TextField label={"When"} value={date} onChange={e=>setdate(e.target.value)} type={"datetime-local"} fullWidth></TextField>
                                            </div>
                                        </div>


                                    </CardContent>

                                </Card>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: 20 }}>
                            <div className='col-md-12'>
                                <Button variant={'contained'} endIcon={<BookIcon></BookIcon>} fullWidth>Book</Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <From closeD = {close} end = {setendClient} from = {setFromClient}   start = {setsetp} setTo = {committoTaken} setFormInfp={commitTaken} openM={open1} ></From>
        </>
    );
}

