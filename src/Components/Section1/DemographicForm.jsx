import { Container, FloatingLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../assets/Animations/Loading";
import Swal from "sweetalert2"

const DemographicForm = () => {
    const [selectedType, setSelectedType] = useState("");

    const onDevelopment = () => {
        Swal.fire({
            title: "Next section is still in development!",
            text: "Please wait for the next update!",
            icon: "info",
            footer: '<a href="j.tapia.psa@gmail.com">Contact the developer for more info</a>'
        });


    }
    return (
        <Container style={{ fontFamily: "Arial, sans-serif" }}>
            <div className="text-center mt-5">
                <h2>Demographic Characteristics</h2>
            </div>
            <p className="fw-bold mt-5"><i>Section I</i></p>
            <Form className="mt-2">
                <Row>
                    <Col xs={12} md={6}>
                        <FloatingLabel controlId="floatingInputGrid" label="Email Address" className="mb-3">
                            <Form.Control type="email" placeholder="Email Address" required />
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={6}>
                        <FloatingLabel controlId="floatingInputGrid" label="Phone Number" className="mb-3">
                            <Form.Control type="text" placeholder="Contact Number" required />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6}>
                        <FloatingLabel controlId="floatingInputGrid" label="Surname" className="mb-3">
                            <Form.Control type="text" required placeholder="Surname" />
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={6}>
                        <FloatingLabel controlId="floatingInputGrid" label="Firstname" className="mb-3">
                            <Form.Control type="text" required placeholder="Firstname" />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6}>
                        <FloatingLabel controlId="floatingInputGrid" label="Middle Initial" className="mb-3">
                            <Form.Control type="text" placeholder="Middle Initial" />
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={6}>
                        <FloatingLabel controlId="floatingInputGrid" label="Region/Cluster" className="mb-3">
                            <Form.Select required>
                                <option value="">Select Cluster</option>
                                <option value="NCR">NCR</option>
                                <option value="RSSO CAR">RSSO CAR</option>
                                <option value="RSSO 01">RSSO I</option>
                                <option value="RSSO 02">RSSO II</option>
                                <option value="RSSO 03">RSSO III</option>
                                <option value="RSSO 04A">RSSO IV-A</option>
                                <option value="RSSO 05">RSSO V</option>
                                <option value="RSSO 06">RSSO VI</option>
                                <option value="RSSO 07">RSSO VII</option>
                                <option value="RSSO 08">RSSO VIII</option>
                                <option value="RSSO 09">RSSO IX</option>
                                <option value="RSSO 10">RSSO X</option>
                                <option value="RSSO 11">RSSO XI</option>
                                <option value="RSSO 12">RSSO XII</option>
                                <option value="RSSO BARMM">RSSO BARMM</option>
                                <option value="RSSO CARAGA">RSSO CARAGA</option>
                                <option value="RSSO MIMAROPA">RSSO MIMAROPA</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6}>
                        <FloatingLabel controlId="floatingInputGrid" label="Office/Affiliation/Academe" className="mb-3">
                            <Form.Select
                                required
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                            >
                                <option value="">Select Type</option>
                                <option value="academeF">Faculty</option>
                                <option value="academeS">Student</option>
                                <option value="govagency">Government Agency</option>
                                <option value="lgu">Local Government Unit</option>
                                <option value="privateins">Private Institution (Non-Academe)</option>
                                <option value="pressmedia">Press and Media</option>
                                <option value="others">Others, specify (Do not abbreviate)</option>
                            </Form.Select>
                        </FloatingLabel>

                        {selectedType === "others" && (
                            <FloatingLabel controlId="floatingOthersInput" label="Please specify" className="mb-3">
                                <Form.Control type="text" placeholder="Enter your affiliation" required />
                            </FloatingLabel>
                        )}
                    </Col>
                    <Col xs={12} md={6}>
                        <FloatingLabel controlId="floatingInputGrid" label="Designation/Position" className="mb-3">
                            <Form.Control
                                required
                                placeholder="Designation and Position"
                                type="text"
                                disabled={selectedType === "academeS"}
                            />
                        </FloatingLabel>
                    </Col>

                </Row>

                <Row>
                    <p>Location of Office/Affiliation/School</p>
                    <Col xs={12} md={4}>
                        <FloatingLabel controlId="floatingInputGrid" label="Region" className="mb-3">
                            <Form.Select required>
                                <option value="">Select Region</option>
                                <option value="NCR">NCR</option>
                                <option value="RSSO CAR">RSSO CAR</option>
                                <option value="RSSO 01">RSSO I</option>
                                <option value="RSSO 02">RSSO II</option>
                                <option value="RSSO 03">RSSO III</option>
                                <option value="RSSO 04A">RSSO IV-A</option>
                                <option value="RSSO 05">RSSO V</option>
                                <option value="RSSO 06">RSSO VI</option>
                                <option value="RSSO 07">RSSO VII</option>
                                <option value="RSSO 08">RSSO VIII</option>
                                <option value="RSSO 09">RSSO IX</option>
                                <option value="RSSO 10">RSSO X</option>
                                <option value="RSSO 11">RSSO XI</option>
                                <option value="RSSO 12">RSSO XII</option>
                                <option value="RSSO BARMM">RSSO BARMM</option>
                                <option value="RSSO CARAGA">RSSO CARAGA</option>
                                <option value="RSSO MIMAROPA">RSSO MIMAROPA</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={4}>
                        <FloatingLabel controlId="floatingInputGrid" label="Province" className="mb-3">
                            <Form.Control type="text" required placeholder="Province" />
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={4}>
                        <FloatingLabel controlId="floatingInputGrid" label="City/Municipality" className="mb-3">
                            <Form.Control type="text" required placeholder="City/Municipality" />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Button variant="outline-primary" type="submit" className="mt-3" onClick={onDevelopment} >Next Section</Button> {""}
                <Link to="/"><Button variant="outline-danger" className="mt-3" onClick={Loading} >Go Back</Button></Link>
            </Form>
        </Container>
    );
}

export default DemographicForm;