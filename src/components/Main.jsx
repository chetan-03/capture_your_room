import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import FileUploader from './FileUploader';
const Main = () => {
    const [file, setFile] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='outter-main'>
            <div className='main'>
                { !file && <div className="box" onClick={ handleShow }>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z" /></svg>
                    <span>
                        Create new Room!!
                    </span>
                </div>
                }
                <Modal
                    show={ show }
                    onHide={ handleClose }
                    backdrop="static"
                    keyboard={ false }
                    centered={ true }
                    fullscreen='lg-down'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Create Room </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="align-items-center justify-content-center d-flex">
                        <Button className="mx-2"> use default picture</Button>
                        <FileUploader handleFile={ setFile } />
                    </Modal.Body>
                </Modal>
                { file && <>
                    <Button onClick={ () => setFile() } className="btn btn-danger remove">remove</Button>
                    <img className="picture" src={ file } alt="file not found" />
                </> }
            </div>
        </div>
    )
}

export default Main
