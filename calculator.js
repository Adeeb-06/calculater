let result = document.getElementById("inputtext")

const calculate = (number) => {
    result.value+=number;
}

const Result = () =>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert('Enter the valid input')
    }
}
const clr = ()=>{
    result.value='';
}
const del =()=>{
    result.value=result.value.slice(0,-1);
}