import Api from "../util/Api";

class ApiAction {

    sendOtp(mobile) {
        return Api.post("api//auth/register", {
            mobile: mobile
        });
    }

    verifyOtp(mobile, otp) {
        return Api.post("/api/auth/register/verify", {
            mobile: mobile,
            otp: otp
        });
    }

    verifyCode(email, otp) {
        return Api.post("/api/auth/register/verify", {
            email: email,
            otp: otp
        });
    }

    logIn(user, password) {
        return Api.post('api/auth/login', {
            username: user,
            password: password
        });
    }

    logOut() {
        return Api.get('api/auth/logout');
    }

    studentRegistration(student) {
        return Api.post('/api/auth/register/student', {
            student: student
        });
    }

    businessRegistration(company) {
        return Api.post('/api/auth/register/company', {
            company: company
        });
    }

    fetchWork(type) {
        return Api.get(`api/works/${type}`);
    }

    forgotPass(mobile) {
        return Api.post('/api/auth/forgot-password', {mobile: mobile});
    }

    passResetVerification(mobile, otp) {
        return Api.post('/api/auth/reset/verification', {
            mobile: mobile,
            otp: otp
        });
    }

    resetPassword(password) {
        return Api.post('/api/auth/reset/password', {password: password});
    }

    applyApplication(work) {
        return Api.post(`/api/application/apply/${work._id}`, {work: work});
    }

    addWork(work, featured) {
        return Api.post('/api/works/instance', {work: work, featured: featured});
    }

    getCompany(username) {
        return Api.get('api/business/');
    }

    getWork(workId) {
        return Api.get(`/api/works/fetchWork/${workId}`);
    }

    getCategoryOffers(category) {
        return Api.get(`/api/offers/category/${category}`);
    }

    getAllOffers() {
        return Api.get('/api/offers');
    }

    getOffer(category, id) {
        return Api.get(`/api/offers/${category}/${id}`);
    }

    availOffer(offer) {
        return Api.post(`/api/offers/avail/${offer._id}`, {offer: offer});
    }

    addOffer(offer){
        return Api.post('/api/offers/instance', {offer:offer});
    }
}

export default new ApiAction();