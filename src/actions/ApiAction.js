import Api from "../util/Api";

class ApiAction {

    static refreshUser() {
        return Api.get('/api/auth/refresh');
    }

    static sendOtp(mobile) {
        return Api.post("api//auth/register", {
            mobile: mobile
        });
    }

    static verifyOtp(mobile, otp) {
        return Api.post("/api/auth/register/verify", {
            mobile: mobile,
            otp: otp
        });
    }

    static verifyCode(email, otp) {
        return Api.post("/api/auth/register/verify", {
            email: email,
            otp: otp
        });
    }

    static logIn(user, password) {
        return Api.post('api/auth/login', {
            username: user,
            password: password
        });
    }

    static logOut() {
        return Api.get('api/auth/logout');
    }

    static studentRegistration(student) {
        return Api.post('/api/auth/register/student', {
            student: student
        });
    }

    static businessRegistration(company) {
        return Api.post('/api/auth/register/company', {
            company: company
        });
    }

    static getTypeWorks(type) {
        return Api.get(`api/works/${type}`);
    }

    static forgotPass(mobile) {
        return Api.post('/api/auth/forgot-password', {mobile: mobile});
    }

    static passResetVerification(mobile, otp) {
        return Api.post('/api/auth/reset/verification', {
            mobile: mobile,
            otp: otp
        });
    }

    static resetPassword(password) {
        return Api.post('/api/auth/reset/password', {password: password});
    }

    static applyApplication(work) {
        return Api.post(`/api/application/apply/${work._id}`, {work: work});
    }

    static addWork(work, featured) {
        return Api.post('/api/works/instance', {work: work, featured: featured});
    }

    static getCompany(username) {
        return Api.get('api/business/');
    }

    static getWork(workId) {
        return Api.get(`/api/works/fetchWork/${workId}`);
    }

    static getAllWork() {
        return Api.get('/api/works');
    }

    static getCategoryOffers(category) {
        return Api.get(`/api/offers/category/${category}`);
    }

    static getAllOffers() {
        return Api.get('/api/offers');
    }

    static getOffer(category, id) {
        return Api.get(`/api/offers/${category}/${id}`);
    }

    static availOffer(offer) {
        return Api.post(`/api/offers/avail/${offer._id}`);
    }

    static getAllAvailedOffer() {
        return Api.get('/api/offers/availed');
    }

    static addOffer(offer) {
        return Api.post('/api/offers/instance', {offer: offer});
    }

    static editOffer(offer) {
        return Api.put(`/api/offers/${offer._id}`, {offer: offer});
    }

    static deleteOffer(offer) {
        return Api.delete(`/api/offers/${offer._id}`);
    }

    //student insights

    static getCompletedWork(student) {
        return Api.get(`/api/students/${student._id}/completedWork`);
    }

    static getOnGoingWork(student) {
        return Api.get(`/api/students/${student._id}/ongoing`);
    }

    static getStudentApplications(student){
        return Api.get(`/api/students/${student._id}/applications`);
    }

    static getWallet(student){
        return Api.get(`/api/students/${student._id}/wallet`);
    }

    // admin insights

    static getAllStudents() {
        return Api.get('/api/admin/users/students');
    }

    static getAllCompanies() {
        return Api.get('/api/admin/users/companies');
    }

    static getActiveUsers() {
        return Api.get('/api/admin/users/active');
    }

    // send notification
    static sendNotification(notification) {
        return Api.post(`/api/admin/sendNotification/`, {notification: notification});
    }

    // notification seen
    static notificationSeen(notification, user) {
        if (user.role == "STUDENT") {
            return Api.get(`/api/students/${user._id}/notifications/mark-as-seen/${notification._id}`);
        } else if (user.role == "COMPANY") {
            return Api.get(`/api/business/${user._id}/notifications/mark-as-seen/${notification._id}`);
        }
    }

    //student
    static addExperience(student, experience) {
        return Api.post(`/api/students/${student._id}/experience/`, {experience: experience})
    }

    static updateExperience(student, experience) {
        return Api.put(`/api/students/${student._id}/experience/${experience._id}`, {experience: experience});
    }

    static deleteExperience(student, experience) {
        return Api.delete(`/api/students/${student._id}/experience/${experience._id}`, {experience: experience});
    }

    static addSkill(student, skill) {
        return Api.post(`/api/students/${student._id}/skill/`, {skill: skill});
    }

    static updateSkill(student, skill) {
        return Api.put(`/api/students/${student._id}/skill/${skill._id}`, {skill: skill});
    }

    static deleteSkill(student, skill) {
        return Api.delete(`/api/students/${student._id}/skill/${skill._id}`, {skill: skill});
    }

    static addCertificate(student, certificate) {
        return Api.post(`/api/students/${student._id}/certificate`, {certificate: certificate});
    }

    static updateCertificate(student, certificate) {
        return Api.put(`/api/students/${student._id}/certificate/${certificate._id}`, {certificate: certificate});
    }

    static deleteCertificate(student, certificate) {
        return Api.delete(`/api/students/${student._id}/certificate/${certificate._id}`, {certificate: certificate});
    }

    static addEducation(student, education) {
        return Api.post(`/api/students/${student._id}/education`, {education: education});
    }

    static updateEducation(student, education) {
        return Api.put(`/api/students/${student._id}/education/${education._id}`, {education: education});
    }

    static deleteEducation(student, education) {
        return Api.delete(`/api/students/${student._id}/education/${education._id}`, {education: education});
    }

    static updatePersonalInfo(user, student) {
        return Api.put(`/api/students/${user._id}`, {student: student});
    }

    // verification document
    static getUploadsForVerification(userId) {
        return Api.get(`/api/verification/uploads/${userId}`);
    }

    static uploadDocument(user, document) {
        return Api.post(`/api/verification/upload/`, {document: document});
    }

    static verifyDocument(userId, document) {
        return Api.put(`/api/verification/uploads/${userId}/${document._id}`, {document: document});
    }

    // company
    // get application for a work

    static getApplication(work) {
        return Api.get(`/api/works/${work.mode}/${work._id}/applications`);
    }

    static updateApplication(work, notification, application) {
        return Api.put(`/api/works/${work.mode}/${work._id}/applications/${application._id}`, {
            application: application,
            notification: notification
        });
    }

    static updateCompany(user, company) {
        return Api.put(`/api/business/${user._id}`, {company: company});
    }
}

export default ApiAction;