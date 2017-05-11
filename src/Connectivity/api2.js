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
    console.log(request);
    const response = await fetch(url,request);
    const data= await response.json();
    return [response,data];
}
export async function registerEmployee(formData){
    console.log("called Registration");
    const url = "http://localhost/aboutgcc/web/app_dev.php/employee";
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
                "firstName":formData.firstName,
                "lastName":formData.lastName,
                "contactNum": formData.contactNumber,
                "nicNumber":formData.nic,
                "doorAddress":formData.doorAddress,
                "country":formData.location,
                "aboutMe":formData.aboutMe
            })
    };
    console.log(request);
    const response = await fetch(url,request);
    const data= await response.json();
    return [response,data];
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
export async function adminGetAllPost(token){
    const url="http://127.0.0.1/aboutgcc/web/app_dev.php/post-admin/get-all";
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
export async function adminGetAllApplications(token){
    const url="http://127.0.0.1/aboutgcc/web/app_dev.php/post-admin/get-all-applications";
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
export async function employerMoreInfo(id,token,type){
    const url = type==1? "http://127.0.0.1/aboutgcc/web/app_dev.php/full_info_employer/"+id:"http://127.0.0.1/aboutgcc/web/app_dev.php/full_info_employee";
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
    console.log(response);
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
export async function tags(){
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/tags";
    const request={
        method:"GET",
        mode:"cors",
        headers:{
            'Content-Type': 'application/json',
        }
    };
    const response= await fetch(url,request);
    const data=await response.json();
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
export async function employerUpdateTags(token,body){
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/post-employer/set-tags";
    const request={
        method:"PUT",
        mode:"cors",
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+token
        },
        body: JSON.stringify(body)
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
export async function employerDeletePost(token,id){
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/post-employer/delete/"+id;
    const request={
        method:"GET",
        mode:"cors",
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+token
        }
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
export async function employerPostToggleView(token,id,status){
    const url = status===1 ? "http://127.0.0.1/aboutgcc/web/app_dev.php/post-employer/suspend/"+id : "http://127.0.0.1/aboutgcc/web/app_dev.php/post-employer/activate/"+id;
    const request={
        method:"GET",
        mode:"cors",
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+token
        }
    };
    console.log(request);
    const response= await fetch(url,request);
    const data=await response.json();
    console.log(response,"fdfs",data);
    if(data===200){
        return true;
    }
    else if(response.status===204){
        return "NO_CONTENT";
    }
    else if(response.status===401){
        return false;
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );
}
export async function changeDP(token,file,user){
    var form = new FormData();
    form.append("dp", file);
    const url = user=="EMPLOYER"? "http://127.0.0.1/aboutgcc/web/app_dev.php/set-dp-employer":"http://127.0.0.1/aboutgcc/web/app_dev.php/set-dp-employee";
    const request={
        method:"POST",
        mode:"cors",
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data",
        headers:{
            'Authorization':'Bearer '+token,
            'processData': false,
            'contentType': false,
            'mimeType': "multipart/form-data"
        },
        body:form

    };
    console.log(request);
    const response= await fetch(url,request);
    const data=await response.json();
    if(response.status==200){
        return data;
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );
}
export async function changeCV(token,file){
    var form = new FormData();
    form.append("cv", file);
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/set-cv-employee";
    const request={
        method:"POST",
        mode:"cors",
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data",
        headers:{
            'Authorization':'Bearer '+token,
            'processData': false,
            'contentType': false,
            'mimeType': "multipart/form-data"
        },
        body:form

    };
    console.log(request);
    const response= await fetch(url,request);
    const data=await response.json();
    if(response.status==200){
        return data;
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );
}
export async function posts(){
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/posts";
    const request={
        method:"GET",
        mode:"cors",
        headers:{
            'Content-Type': 'application/json',
        }
    };
    const response= await fetch(url,request);
    const data=await response.json();
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
export async function postFulDetails(id){
    const url = "http://localhost/aboutgcc/web/app_dev.php/post-full-details/"+id;
    const request={
        method:"GET",
        mode:"cors",
        headers:{
            'Content-Type': 'application/json',
        }
    };
    console.log("calling!!!!!!!!!!",request);
    const response= await fetch(url,request);
    const data=await response.json();
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
export async function employeeAplly(token,postId){
    const url = "http://localhost/aboutgcc/web/app_dev.php/post-employee/apply/"+postId;
    const request={
        method:"GET",
        mode:"cors",
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+token
        }
    };
    console.log(request);
    const response= await fetch(url,request);
    const data=await response.json();
    if(response.status==200){
        return true;
    }
    else if(response.status==200){
        return false;
    }else if(response.status==401){
        return "logout";
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );
}

export async function employeeCancelApplication(token,applicationId){
    const url = "http://localhost/aboutgcc/web/app_dev.php/post-employee/cancel/"+applicationId;
    const request={
        method:"GET",
        mode:"cors",
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+token
        }
    };
    console.log(request);
    const response= await fetch(url,request);
    const data=await response.json();
    if(response.status==200){
        return true;
    }
    else if(response.status==406){
        return false;
    }else if(response.status==401){
        return "logout";
    }
    else{
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );
    }
}

export async function employeeAllApplication(token){
    const url = "http://localhost/aboutgcc/web/app_dev.php/post-employee/get-all-applications";
    const request={
        method:"GET",
        mode:"cors",
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+token
        }
    };
    console.log(request);
    const response= await fetch(url,request);
    const data=await response.json();
    if(response.status==200){
        console.log("calling Correctly");
        return data;
    }
    else if(response.status==406){
        console.log("calling Wrongly");
        return false;
    }else if(response.status==401){
        return "logout";
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );
}
export async function allowPost(id,token){
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/post-admin/activate/"+id;
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
}export async function blockPost(id,token){
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/post-admin/suspend/"+id;
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
export async function getSpecificPost(id,token){
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/post-admin/get-post/"+id;
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
    else if(response.status==404){
        return false;
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );

}
export async function adminGetAllEmployee(token){
    const url="http://127.0.0.1/aboutgcc/web/app_dev.php/admin-employee";
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
export async function blockUnblockEmployee(id,token,block){
    const url = block?"http://127.0.0.1/aboutgcc/web/app_dev.php/admin-employee/block/"+id:"http://127.0.0.1/aboutgcc/web/app_dev.php/admin-employee/unblock/"+id;
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
export async function acceptApplication(applicationId,token){
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/post-admin/accept-application/"+applicationId;
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
       return true
    }
    else{
        return false;
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );
}
export async function rejectApplication(applicationId,token){
    const url = "http://127.0.0.1/aboutgcc/web/app_dev.php/post-admin/reject-application/"+applicationId;
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
       return true
    }
    else{
        return false;
    }
    throw new ApiError(
        data.message||response.statusText,
        response.status
    );
}