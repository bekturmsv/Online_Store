import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const CreateType = ({show,onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                <Form.Control placeholder={"Введите название типа"} />
               </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={onHide}>Добавить</Button>

            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;