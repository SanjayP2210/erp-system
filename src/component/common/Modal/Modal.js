
import React, { useState } from 'react';
import './index.css';

const commonModal = ({ show, setShow, body, title, header }) => {
    // const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="modal fade"  data-bs-backdrop="static" id="staticBackdrop" tabIndex="-1" role="dialog" aria-labelledby="commonModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header" style={{ display : title ? 'block' : 'none'  }}>
                        <h5 className="modal-title" id="commonModalLabel">{title}</h5>
                        <button type="button" className="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {body}
                    </div>
                    <div className="modal-footer" style={{justifyContent: 'center'}}>
                        <button type="button" className="btn bg-gradient-secondary" onClick={handleClose}  data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn bg-gradient-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default commonModal;