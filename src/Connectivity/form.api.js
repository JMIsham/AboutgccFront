/**
 * Created by Isham on 4/4/2017.
 */
import ApiError from '../errors/ApiCallError';
export async  function checkUsername(username){
    const url="http://127.0.0.1/aboutgcc/web/app_dev.php/employer/check_username/"+username;
    const request={
        method:"GET",
        mode:"cors",
        headers:{
            'Content-Type': 'application/json',
        }
    };
    const response= await fetch(url,request);
    const data=await response.json();
    console.log(data);
    if(response.status==202){
        console.log(data);
        return true;
    }
    else if(response.status==406){
        return false
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );


}

export async  function checkEmail(email){
    const url="http://127.0.0.1/aboutgcc/web/app_dev.php/employer/check_email/"+email;
    const request={
        method:"GET",
        mode:"cors",
        headers:{
            'Content-Type': 'application/json',
        }
    };
    const response= await fetch(url,request);
    const data=await response.json();
    console.log(data);
    if(response.status==202){
        console.log(data);
        return true;
    }
    else if(response.status==406){
        return false
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );


}