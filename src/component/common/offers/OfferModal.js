/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import ModalHeader from "react-bootstrap/ModalHeader";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import {Col, Form, FormGroup, FormLabel, Image} from "react-bootstrap";
import FormControl from "react-bootstrap/es/FormControl";
import DatePicker from "react-datepicker/es";
import Input from "reactstrap/es/Input";
import FormFeedback from "reactstrap/es/FormFeedback";
import ApiAction from "../../../actions/ApiAction";

class OfferModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: "",
            title: "",
            summary: "",
            startDate: new Date(),
            lastDate: new Date(),
            terms: "",
            offerImage: "",
            category: "",
            offerImageUrl: "",
            companyClass: "",
            titleClass: "",
            summaryClass: "",
            termsClass: "",
            categoryClass: "",
            validated: false,
        }
    }

    render() {
        let {company, title, summary, startDate, lastDate, terms, offerImage, category, offerImageUrl, companyClass, titleClass, termsClass, categoryClass, validated} = this.state;
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <ModalHeader closeButton>
                    <Modal.Title>{this.props.type}</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <Form validated={validated}>
                        <FormGroup className="form-group">
                            <FormLabel className="form-label">Offer Title</FormLabel>
                            <FormControl type="text" placeholder="Offer Title" name="title"
                                         required
                                         className={titleClass}
                                         value={title}
                                         onChange={this.updateTitle}/>
                            <FormFeedback>Title required</FormFeedback>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="form-label">Company</FormLabel>
                            <FormControl type="text" placeholder="Company" name="company"
                                         required
                                         className={companyClass}
                                         value={company}
                                         onChange={this.updateCompany}/>
                            <FormFeedback>Company ID required</FormFeedback>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="form-label">Offer Image</FormLabel>
                            <Image src={offerImageUrl} width="400px"/>
                            <FormControl type="file" placeholder="Offer Image" name="offerImage"
                                         onChange={this.updateOfferImage}/>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="form-label">Category</FormLabel>
                            <Input type="select" innerRef="category" name="category"
                                   required
                                   className={categoryClass}
                                   onChange={this.updateCategory}>
                                <option value="">Select Category</option>
                                <option value="Food">Food</option>
                                <option value="Fitness">Fitness</option>
                                <option value="Health">Health</option>
                            </Input>
                            <FormFeedback>Select Category</FormFeedback>
                        </FormGroup>

                        <FormGroup className="form-group">
                            <FormLabel className="form-label">Duration</FormLabel>
                            <Form.Row>
                                <Col>
                                    <DatePicker placeholder="Start Date"
                                                minDate={new Date()}
                                                selected={startDate}
                                                onChange={this.updateStartDate}/>
                                </Col>
                                <Col>
                                    <DatePicker placeholder="Last Date"
                                                minDate={new Date()}
                                                selected={lastDate}
                                                onChange={this.updateLastDate}/>
                                </Col>
                            </Form.Row>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="form-label">Terms & Condition</FormLabel>
                            <FormControl type="text" as="textarea" placeholder="Terms and condition" name="terms"
                                         required
                                         className={termsClass}
                                         value={terms}
                                         onChange={this.updateTerms}/>
                            <FormFeedback>Terms could not be empty</FormFeedback>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-success" onClick={this.submitDetails}>Add</button>
                </ModalFooter>
            </Modal>
        );
    }

    updateCompany = (event) => {
        if (event.target.name == "company") {
            let {companyClass} = this.state;
            let company = event.target.value;
            if (company.length > 0) {
                companyClass = "is-valid";
            } else {
                companyClass = "is-invalid";
            }
            this.setState({company: company, companyClass: companyClass});
        }
    }

    updateTitle = (event) => {
        if (event.target.name == "title") {
            let {titleClass} = this.state;
            let title = event.target.value;
            if (title.length > 0) {
                titleClass = "is-valid";
            } else {
                titleClass = "is-invalid";
            }
            this.setState({title: title, titleClass: titleClass});
        }
    }

    updateOfferImage = (event) => {
        if (event.target.name == "offerImage") {
            this.setState({
                offerImageUrl: URL.createObjectURL(event.target.files[0]),
                offerImage: event.target.files[0]
            });
        }
    }

    updateCategory = (event) => {
        if (event.target.name == "category") {
            let {categoryClass} = this.state;
            let category = event.target.value;
            console.log(category)
            if (category.length > 0) {
                categoryClass = "is-valid";
            } else {
                categoryClass = "is-invalid";
            }
            this.setState({category: category, categoryClass: categoryClass});
        }
    }

    updateStartDate = (date) => {
        this.setState({startDate: date});
    }

    updateLastDate = (date) => {
        this.setState({lastDate: date})
    }

    updateTerms = (event) => {
        if (event.target.name == "terms") {
            let {termsClass} = this.state;
            let terms = event.target.value;
            if (terms.length > 0) {
                termsClass = "is-valid";
            } else {
                termsClass = "is-invalid";
            }
            this.setState({terms: terms, termsClass: termsClass});
        }
    }

    validateForm = () => {
        let {company, title, summary, startDate, lastDate, terms, offerImage, category, offerImageUrl, companyClass, titleClass, termsClass, categoryClass} = this.state;
        let result = true;
        if (company.length < 1) {
            companyClass = "is-invalid";
            result = false;
        } else {
            companyClass = "is-valid";
        }

        if (title.length < 1) {
            titleClass = "is-invalid";
            result = false;
        } else {
            titleClass = "is-valid";
        }

        if (category.length < 1) {
            categoryClass = "is-invalid";
            result = false;
        } else {
            categoryClass = "is-valid";
        }

        if (terms.length < 1) {
            termsClass = "is-invalid";
            result = false;
        } else {
            termsClass = "is-valid";
        }

        this.setState({
            companyClass: companyClass,
            titleClass: titleClass,
            termsClass: termsClass,
            categoryClass: categoryClass,
            validated: true
        });
        return result;
    }

    submitDetails = () => {
        if (this.validateForm()) {
            let {company, title, summary, startDate, lastDate, terms, offerImage, category, offerImageUrl} = this.state;
            let offer = {
                company: company,
                title: title,
                summary: summary,
                duration: {
                    start: startDate,
                    last: lastDate,
                },
                terms: terms,
                offerImage: offerImage,
                category: category.toLowerCase()
            };
            let reader = new FileReader();
            let base64 = "";
            reader.onload = function (event) {
                let binary = event.target.result;
                base64 = window.btoa(binary);
                console.log(base64)
                offer.offerImage = base64;
                ApiAction.addOffer(offer)
                    .then((response) => {
                        if (response.data.success) {
                            this.props.onHide();
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            reader.readAsBinaryString(offer.offerImage);
        }
    }
}

export default OfferModal;