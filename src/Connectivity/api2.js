import ApiError from '../errors/ApiCallError';
import moment from 'moment';

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
export async function getSpecificEmployer(id,token){
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/admin/employer/"+id;
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
export async function blockUser(id,token){
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/admin/block_employer/"+id;
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
export async function unblockUser(id,token){
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/admin/unblock_employer/"+id;
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
export async function employerMoreInfo(id,token){
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/full_info_employer/"+id;
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
    else if(response.status==401){
        return false;
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );
}
export async function employerAllPosts(token){
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/post-employer/get-all";
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
    if(response.status==200){
        return data;
    }
    else if(response.status==204){
        return "NO_CONTENT";
    }
    else if(response.status==401){
        return false;
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );
}
export async function employerCreatePost(token,formData){
    const expDate=moment(formData.exp_date).format('DD-MM-YYYY');
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/post-employer";
    const request={
        method:"POST",
        mode:"cors",
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+token
        },
        body: JSON.stringify({
            "subject":formData.subject,
            "aboutJob":formData.about_job,
            "aboutSalary":formData.about_salary,
            "aboutSkill":formData.about_skill,
            "country":formData.location,
            "eDate":expDate
        })
    };
    console.log(request);
    const response= await fetch(url,request);
    const data=await response.json();
    if(response.status==200){
        return data;
    }
    else if(response.status==204){
        return "NO_CONTENT";
    }
    else if(response.status==401){
        return false;
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );
}
export async function employerUpdatePost(token,formData,id){
    const expDate=moment(formData.exp_date).format('DD-MM-YYYY');
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/post-employer";
    const request={
        method:"PUT",
        mode:"cors",
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+token
        },
        body: JSON.stringify({
            "subject":formData.subject,
            "aboutJob":formData.about_job,
            "aboutSalary":formData.about_salary,
            "aboutSkill":formData.about_skill,
            "country":formData.location,
            "eDate":expDate,
            "id":id
        })
    };
    console.log(request);
    const response= await fetch(url,request);
    const data=await response.json();
    if(response.status==200){
        return data;
    }
    else if(response.status==204){
        return "NO_CONTENT";
    }
    else if(response.status==401){
        return false;
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );
}