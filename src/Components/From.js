import { Box, Modal } from "@mui/material";
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from "react";
import MosqueSharpIcon from '@mui/icons-material/MosqueSharp';
export const From = (props) => {
    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
    };
    const handleClose = () => props.openM = false;
    const handleOpen = () => props.openM = true;
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
            lat: Number.parseFloat(4.218318444942715),
            lng: Number.parseFloat(73.54366587116596)
        },
        zoom: 19
    };

    return (
        <>
            <Modal
                open={props.openM}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBuEoAEoYevrgE0gs371dIuFS8AfHncRKY" }}
                    defaultCenter={defaultProps.center}
                    center={
                        {
                            lat: Number.parseFloat(4.218318444942715),
                            lng: Number.parseFloat(73.54366587116596)
                        }
                    }
                    defaultZoom={defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals
                >

                    <MosqueSharpIcon style={{ color: "maroon" }} lat={Number.parseFloat(4.218318444942715)}
                        lng={Number.parseFloat(73.54366587116596)} />
                    {/* <AnyReactComponent 
                        lat={Number.parseFloat(props.lat)}
                        lng={Number.parseFloat(props.lng)}
                        text={props.name}

                     
                    /> */}
                </GoogleMapReact>

                </Box>
            </Modal>
       
        </>
    );
}

