import axios from "axios";

class Api {
    constuctor() {
        axios.defaults.baseURL = !localStorage.backendURL ? process.env.REACT_APP_API_URL : localStorage.backendURL;
    }

    post(url, data) {
        return axios({
            url:`${url}`,
            method:'post',
            data:this.addParams(data,url),
            headers:this.addAuth(data),
        })
    }

    addParams(params, url) {
        if(url === "/user/upload"){  /// BECAUSE IT'S FORM DATA AND YOU DON'T WANA MESS WITH IT
            return params;
        }else{
            const newParams = Object.assign({}, params);
            if(params && params.hasOwnProperty("public")){
                delete newParams.public;
            }
            return newParams;

        }
    }

    addAuth(data) {

    }

    get = (url, params)=>{
        return axios({
            url:url,
            method:'get',
        });
    }

    post = (url, params)=>{
        return axios({
            url:`${url}`,
            method:'post',
            data:params
        });
    }
}

export default new Api();