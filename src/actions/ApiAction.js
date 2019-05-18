import Api from "../util/Api";

class ApiAction{
    NOT_FOUND=404;
    INVALID_USERNAME_OR_PASSWORD=403;
    OK=200;
    sendOtp(mobile){
        return Api.post("api//auth/register", {
            mobile:mobile
        });
    }

    verifyOtp(mobile, otp){
        return Api.post("/api/auth/register/verify",{
            mobile:mobile,
            otp:otp
        });
    }

    logIn(user, password) {
        return Api.post('api/auth/login',{
            username:user,
            password:password
        });
    }

    studentRegistration(student){
        return Api.post('/api/auth/register/student',{
            student:student
        });
    }
}

export default new ApiAction();