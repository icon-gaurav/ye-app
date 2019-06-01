import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalFooter from "react-bootstrap/ModalFooter";
import LoginModal from "./login-module/LoginModal";
import StudentRegistration from "./signup-module/StudentRegistration";
import Registration from "./signup-module/Registration";
import BusinessRegistration from "./signup-module/BusinessRegistration";
import StudentDetails from "./signup-module/StudentDetails";

class ModalViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            isRegister: false,
            isStudent: false,
            isBusiness: false,
            studentVerification: false,
            studentDetails: false,
            businessVerification: false,
            businessDetails: false,
            modalTitle: "Log In",
        };

        this.registerUpdate = this.registerUpdate.bind(this);
        this.studentRegisterUpdate = this.studentRegisterUpdate.bind(this);
        this.businessRegisterUpdate = this.businessRegisterUpdate.bind(this);
        this.studentDetailsUpdate = this.studentDetailsUpdate.bind(this);
    }

    /*/ titles=["Log In","Register","Student Registration","Business Registration","Enter details"];

    // loginUpdate(){
    //     this.setState({isLogin:true,}, this.renderModalBody);
    // }*/

    componentWillMount() {
        this.setState({
            isLogin: true,
            isRegister: false,
            isStudent: false,
            isBusiness: false,
            studentVerification: false,
            studentDetails: false,
            businessVerification: false,
            businessDetails: false,
            modalTitle: "Member Login",
        });
        this.renderModalBody();
    }

    registerUpdate() {
        this.setState({isLogin: false, isRegister: true, modalTitle: "Register As"});
    }

    studentRegisterUpdate() {
        this.setState({isRegister: false, isStudent: true, modalTitle: "Student Registration"});
    }

    businessRegisterUpdate() {
        this.setState({isRegister: false, isBusiness: true, modalTitle: "Business Registration"});
    }

    studentDetailsUpdate() {
        this.setState({isStudent: false, studentDetails: true, modalTitle: "Personal Details"})
    }

    renderModalBody() {
        if (this.state.isLogin) {
            return <LoginModal show={true} triggerRegisterUpdate={this.registerUpdate} loggedIn={this.props.loggedIn}/>;
        } else if (this.state.isRegister) {
            return <Registration triggerStudentUpdate={this.studentRegisterUpdate}
                                 triggerBusinessUpdate={this.businessRegisterUpdate}/>;
        } else if (this.state.isStudent) {
            return <StudentRegistration triggerDetailsUpdate={this.studentDetailsUpdate}/>
        } else if (this.state.isBusiness) {
            return <BusinessRegistration/>
        } else if (this.state.studentDetails) {
            return <StudentDetails/>
        }/*else if(this.state.businessDetails){
            return <Company/>
        }*/
        else {
            return null;
        }
    }

    renderModalFooter() {
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} className="mt-lg-5 mt-md-3 mt-sm-auto">
                <ModalHeader style={{borderBottom: "none", paddingLeft: "10%", paddingRight: "10%", paddingTop:"8%"}} closeButton>
                    <ModalTitle></ModalTitle>
                </ModalHeader>
                {this.renderModalBody()}
                {/*<ModalFooter>*/}
                {/*    {this.renderModalFooter()}*/}
                {/*</ModalFooter>*/}
            </Modal>
        );
    }
}

export default ModalViewer;