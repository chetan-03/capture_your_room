import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'
const FileUploader = ({ handleFile }) => {
    const hiddenFileInput = useRef(null);
    const handleClick = e => {
        hiddenFileInput.current.click();
    }
    const hangleChange = e => {
        if (e.target.files && e.target.files[0]) {
            const fileUploaded = URL.createObjectURL(e.target.files[0]);
            handleFile(fileUploaded);
        }
    }
    return (
        <>
            <Button onClick={ handleClick }>Upload a file</Button>
            <input type="file"
                ref={ hiddenFileInput }
                onChange={ hangleChange }
                style={
                    {
                        display: 'none'
                    }
                } />

        </>
    )
}

export default FileUploader
