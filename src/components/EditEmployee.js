import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
         update
        </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div className=" flex-auto justify-center w-full">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " id="editModal">
                <div className="mb-4 ">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="Full Name">
                    Full Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="Name" type="Name" value={props.name} onChange={props.name}/>
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="Role">
                    Role
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="Role" type="Role" value={props.role} onChange={props.role}/>
                </div>
                </form>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
            <button form = "editModal" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Update</button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;