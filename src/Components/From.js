import { Box, Dialog, Modal } from "@mui/material";
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from "react";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Slide from '@mui/material/Slide';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
export const From = (props) => {
    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
    };
    const [lat, setlat] = useState(0);
    const [log, setlog] = useState(0);
    const [open, setopen] = useState(false);
    const [firstlocSelected, setfirstlocSelected] = useState(false);
    const [endlati, setendlati] = useState();
    const [endlong, setendlong] = useState();
    const [date, setdate] = useState();

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            if (lat == 0) {
                setlat(position.coords.latitude);

            }
            if (log == 0) {
                setlog(position.coords.longitude)

            }
            setopen(props.openM)
            console.log("Longitude is :", position.coords.longitude);
        });
    }, [props.openM]);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        height: 578
    };
    const handleClose = () => {
       
        setopen(false);
    };
    const defaultProps = {

        center: {
            lat: 0,
            lng: 0
        },
        zoom: 17
    };

    return (
        <>
            {
                lat &&

                <Dialog PaperProps={{
                    sx: {
                      width: "100%",
                      height:"50%",
                      maxWidth: "720px!important",
                    },
                  }}   open={props.openM}>
                    <DialogContent >
                        <GoogleMapReact
                         yesIWantToUseGoogleMapApiInternals
                            onClick={ev => {

                                if (firstlocSelected === false) {
                                    setlat(ev.lat);
                                    setlog(ev.lng);
                                    setfirstlocSelected(true);
                                    props.setFormInfp();
                                    props.from(ev.lat, ev.lng);
                                    props.closeD()
                                }
                                else {
                                    setendlati(ev.lat);
                                    setendlong(ev.lng);
                                    props.from(ev.lat, ev.lng);
                                    props.closeD()
                                    props.setTo();
                                }

                                console.log("latitide = ", ev.latLng.lat());
                                console.log("longitude = ", ev.latLng.lng());
                            }}
                            bootstrapURLKeys={{ key: "AIzaSyBuEoAEoYevrgE0gs371dIuFS8AfHncRKY" }}
                            defaultCenter={defaultProps.center}
                            center={
                                {
                                    lat: lat,
                                    lng: log
                                }
                            }
                            defaultZoom={defaultProps.zoom}
                           
                            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                            coordinates={true}
                        >

                            <PersonPinIcon style={{ color: "maroon" }} lat={lat}
                                lng={log} />
                            {
                                firstlocSelected && endlati &&
                                <LocationOnIcon style={{ color: "maroon" }} lat={endlati}
                                    lng={endlong}></LocationOnIcon>

                            }


                        </GoogleMapReact>
                    </DialogContent>

                </Dialog>


            }


        </>
    );
}

