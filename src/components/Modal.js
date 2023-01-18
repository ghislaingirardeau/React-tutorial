import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function panierModal({ show, setShow }) {
  const handleClose = () => setShow({});

  return (
    <>
      <Modal
        show={Object.keys(show).length > 0 ? true : false}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{show.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={show.img} alt="La maison jungle" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

panierModal.propTypes = {
  show: PropTypes.object,
  setShow: PropTypes.func,
};

export default panierModal;
