import ApiError from '../errors/ApiCallError';
export async  function login(username,password){
    console.log("called!!!!!! :)");
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/login";
    const request = {
        method: "POST",
        mode: "cors",
        headers:{
            'Content-Type': 'application/json'
        },
        body :JSON.stringify({
            'username' : username,
            'password' : password
        })
    };

    const response = await fetch(url,request);
    const data= await response.json();

    if(response.status==200){
        console.log(data);
        return data;
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );


}
export async function registerEmployer(formData){
    console.log("called Registration");
    const url = "http://localhost/aboutgcc/web/app_dev.php/employer";
    const request = {
        method: "POST",
        mode: "cors",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {   "username":formData.username,
                "password":formData.password,
                "email":formData.email,
                "name":formData.companyName,
                "contactNum": formData.contactNumber,
                "RegNumber":formData.registrationNumber,
                "doorAddress":formData.doorAddress,
                "country":formData.location,
                "aboutUs":formData.aboutUs
            })
    };
    const response = await fetch(url,request);
    console.log(response);
    const data= response.json();
    return data;
}

export async function adminGetAllEmployer(token){
    const url="http://127.0.0.1/aboutgcc/web/app_dev.php/admin/employers";
    const request={
        method:"GET",
        mode:"cors",
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+token
        }
    };
    const response= await fetch(url,request);
    const data=await response.json();
    console.log(data);
    if(response.status==200){
        console.log(data);
        return data;
    }
    else if(response.status==204){
        return false;
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );

}