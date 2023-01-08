import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../DeleteConfirmations";
import DeleteConfirmations from "../DeleteConfirmations";

function AllFruits() {
  const [allFruits, setAllFruits] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);

  axios.get("http://localhost:4000/fruits").then((response) => {
    setAllFruits((previousState) => {
      return response.data;
    });
  }, []);

  const openConfirmDeleteModalHandler = (id) => {
    setShowModal(true);
    setItemToDeleteId(id);
  };

  const hideDeleteModalHandler = () => {
    setShowModal(false);
    setItemToDeleteId(0);
  };

  const confirmDeleteHandler = () => {
    axios
      .delete(`http://localhost:4000/fruits/${itemToDeleteId}`)
      .then((response) => {
        setAllFruits((previousState) => {
          return previousState.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
        setShowModal(false);
      });
  };

  const navigate = useNavigate();
  return (
    <>
          <DeleteConfirmation
        showModal={showModal}
        hideDeleteModalHandler={hideDeleteModalHandler}
        title="Delete Confirmation"
        body="Are you want delete this itme?"
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation>
      <Row className="mt-2">
        <Col md={{ span: 4, offset: 4 }}>
          <Button
            variant="primary"
            type="button"
            onClick={() => navigate("/add-fruits")}
          >
            Add New Friuts
          </Button>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-2">
        {allFruits.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Body>
                <Card.Title>Item Name- {item.name}</Card.Title>
                <Card.Text>Quantity(KG Units) - {item.quantity}</Card.Text>
                <Card.Text>Price - {item.price}</Card.Text>
              </Card.Body>
              <Button
                variant="primary"
                onClick={() => navigate(`/update-fruit/${item.id}`)}
              >
                Edit
              </Button>
              <Button 
                variant="danger"style={{marginTop:5}}
                onClick={() => {openConfirmDeleteModalHandler(item.id)}}
              >
                Delete ပြန်ဖျက်ရန်၊၊
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default AllFruits;
