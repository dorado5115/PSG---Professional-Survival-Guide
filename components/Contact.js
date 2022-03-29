import * as React from "react";
import styles from "./styles/Contact.module.css";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useSnackbar } from 'notistack';

import axios from "axios";

export default function Contact() {

    const [active, setActive] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    // Snackbar
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/email', {
            name: name,
            email: email,
            active: active,
            message: message
        })
        .then(res => {
            if (res.status === 200) {
                enqueueSnackbar('¡Se envió el mensaje!', { variant: 'success' });
            } else if (res.error) {
                enqueueSnackbar('Algo salió mal', { variant: 'error' });
            }
        })
    }

    return(
        <div className={styles.content}>   
            <img src="/blue.svg" alt="salmon" />
            <div className={styles.frontTitle}>
                <h1><strong>Contáctanos</strong></h1>
                <p>
                    Cualquier duda, pregunta o comentarios, escríbenos
                </p>
            </div>
                <Box
                component="form"
                sx={{
                    display: 'flex',
                    fontFamily: 'Poppins',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: '100%',
                    padding: '2rem',
                }}
                noValidate
                autoComplete="off"
                >
                    <div className={styles.leftForm}>
                        <TextField 
                            id="outlined-basic" 
                            label="Nombre* (opcional)" 
                            variant="outlined" 
                            sx={{ 
                                width: '100%',
                                fontFamily: 'Poppins',
                                marginBottom: '1.5rem',
                                '&:hover': {
                                    borderColor: '#88C5FE',
                                }
                            }}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="Email* (opcional)" 
                            variant="outlined" 
                            sx={{ 
                                width: '100%',
                                fontFamily: 'Poppins',
                                borderRadius: '10px',
                                marginBottom: '1.5rem',
                                '&:focus': {
                                    borderColor: '#88C5FE',
                                    backgroundColor: 'red',
                                }
                            }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className={styles.contactP}>Nos contactas porque...</p>
                        <Stack spacing={2} direction="row">
                            <Button 
                                variant="outlined"
                                sx={active === 'error' ? (
                                    {
                                        textTransform: 'capitalize',
                                        fontFamily: 'Poppins',
                                    }) : ({
                                        textTransform: 'capitalize',
                                        fontFamily: 'Poppins',
                                        backgroundColor: '#F3F3F3',
                                        borderColor: '#F3F3F3',
                                        color: '#182236',
                                        '&:hover': {
                                            backgroundColor: '#F0F0F0',
                                            borderColor: '#F0F0F0',
                                        } 
                                    })
                                }
                                onClick={() => setActive('error')}
                            >
                                Error en la página
                            </Button>
                            <Button 
                                variant="outlined"
                                sx={active === 'retro' ? (
                                    {
                                        textTransform: 'capitalize',
                                        fontFamily: 'Poppins',
                                    }) : ({
                                        textTransform: 'capitalize',
                                        fontFamily: 'Poppins',
                                        backgroundColor: '#F3F3F3',
                                        borderColor: '#F3F3F3',
                                        color: '#182236',
                                        '&:hover': {
                                            backgroundColor: '#F0F0F0',
                                            borderColor: '#F0F0F0',
                                        } 
                                    })
                                }
                                onClick={() => setActive('retro')}
                            >
                                Dar retro chida
                            </Button>
                        </Stack>
                    </div>
                    <TextField
                        id="standard-textarea"
                        label="Mensaje"
                        placeholder="Esta bien chida la página, se la rifaron..."
                        multiline
                        rows={9}
                        variant="filled"
                        sx={{
                            width: '50%',
                            marginLeft: '50px',
                            fontFamily: 'Poppins',
                        }}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Box>
                <Button 
                    variant="outlined"
                    sx={{
                        textTransform: 'capitalize',
                        fontFamily: 'Poppins',
                        backgroundColor: '#88C5FE',
                        color: '#fff',
                        border: 'none',
                        '&:hover': {
                            backgroundColor: '#66B5FF',
                            border: 'none',
                        }
                    }}
                    onClick={handleSubmit}
                >
                    Enviar
                </Button>
                <p 
                    style={{
                        marginTop: '1rem',
                    }}
                >
                    *Si quieres que te respondamos, agrega tu nombre y email
                </p>
        </div>
    )
}