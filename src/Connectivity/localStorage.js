/**
 * Created by Isham on 3/28/2017.
 */
export const loadStore=()=>{
    try{
       const serealizedState = localStorage.getItem('userData');
        if(serealizedState==null){
            return undefined
        }
        return JSON.parse(serealizedState);
    }catch (e){
        console.log(e);
        return undefined;
    }

};
export const saveStore =(state)=>{
    try {
        const serealizeState = JSON.stringify(state);
        localStorage.setItem('userData',serealizeState);
    }catch (e){
            console.error(e);
    }

};
