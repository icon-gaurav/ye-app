/*
 * @author Gaurav Kumar    
*/

import ApiAction from "../../actions/ApiAction";

class Converter {
    static fileToBase64 = (file) => {
        let base64 = new Promise((resolve) => {
            let reader = new FileReader();
            reader.onload = (event) => resolve(event.target.result);
            if (file instanceof Blob) {
                reader.readAsDataURL(file);
            }

        });
        return base64;
        // let reader = new FileReader();
        // // let base64 = "";
        // // reader.onloadend = function (event) {
        // //     let binary = event.target.result;
        // //     base64 = window.btoa(binary);
        // //     return base64;
        // // };
        // if (file instanceof Blob) {
        //     return reader.readAsDataURL(file);
        // } else return "";
    }

    static bufferToBase64 = (buffer) => {
        if (buffer) {
           const base64 =
                new Uint8Array(buffer.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    '',
                );
            return base64;
        }
        else{
            return "";
        }
    }
}

export default Converter;
