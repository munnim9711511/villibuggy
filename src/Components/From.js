import { Box, Modal } from "@mui/material";
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from "react";
import PersonPinIcon from '@mui/icons-material/PersonPin';
export const From = (props) => {
    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
    };
    const [lat, setlat] = useState(0);
    const [log, setlog] = useState(0);
    const [open,setopen] = useState(true);
    const [endlati,setendlati] = useState();
    const [endlong,setendlong] = useState();
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
    const handleClose = () => setopen(false);
    const handleOpen = () => setopen(true);
  
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

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <GoogleMapReact
                            onClick={ev => {
                                setlat(ev.lat);
                                setlog(ev.lng);
                                props.setFormInfp();
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
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                            coordinates={true}
                        >

                            <PersonPinIcon style={{ color: "maroon" }} lat={lat}
                                lng={log} />
                              
                            {/* <AnyReactComponent 
                        lat={Number.parseFloat(props.lat)}
                        lng={Number.parseFloat(props.lng)}
                        text={props.name}

                     
                    /> */}
                        </GoogleMapReact>

                    </Box>
                </Modal>
            }


        </>
    );
}

