import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Loading from "../assets/Animations/Loading";
import psalogo from "../assets/Images/psalogo.png";
import pilipinas from "../assets/Images/pilipinas.png";

const DataPrivacyAct = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isChecked) {
            console.log("Form accepted");
        }
    };

    return (
        <div className="mt-5">
            <Container style={{ marginTop: "15vh" }}>
                {/* Flexbox container for logos */}
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
                    <img src={psalogo} alt="PSA Logo" style={{ width: "120px" }} />
                    <img src={pilipinas} alt="Pilipinas Logo" style={{ width: "120px" }} />
                </div>

                <Form onSubmit={handleSubmit}>
                    <p style={{ textAlign: "justify", fontFamily: "Arial, sans-serif" }}>
                        The Philippine Statistics Authority (PSA) shall protect all personal information you provide in compliance with the Data Privacy Act of 2012 and its implementing rules and regulations. The PSA shall not collect, disclose or process any such personal information unless you voluntarily choose to provide us with it, or give your consent, or unless such disclosure is required by applicable laws and regulations.
                        By agreeing with this form, you confirm that you freely and voluntarily give consent to the collection and processing of your personal information, which may include personal information and/or sensitive personal information (hereafter the “Data”) set out in this form and/or otherwise provided by you or possessed by the PSA.
                        The PSA shall keep the Data for a period of ten (10) years for record purposes, among others. The PSA shall take appropriate and reasonable technical and organizational measures to ensure the required data security to protect the Data against unauthorized disclosure, access or processing.
                        By agreeing with this form, your personal information will be collected and processed by the PSA, and you further agree and consent to its transfer, processing, use and disclosure as further stated in the terms and conditions which shall be considered an integral part of this form.
                    </p>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="I agree to the terms and conditions"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                    </Form.Group>
                    <Link to="/section1-demographic">
                        <Button variant="primary" type="submit" disabled={!isChecked} onClick={Loading}>
                            Proceed
                        </Button>
                    </Link>
                </Form>
            </Container>
        </div>
    );
}

export default DataPrivacyAct;
