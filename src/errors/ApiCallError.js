/**
 * Created by Isham on 3/28/2017.
 */
export default class ApiCallError extends Error{
    constructor(message,statusCode){
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.stack = (new Error(message)).stack;
        this.name = 'ApiCallError';
    }

}