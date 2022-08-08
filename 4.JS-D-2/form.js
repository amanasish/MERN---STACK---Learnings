document.getElementsByTagName('form')[0].addEventListener('submit',(event)=>{
    let valid=1;
    let error_text='';

    const first_name = document.querySelector('#first_name').value;

    if(first_name==''){
        error_text +='Enter First Name';
        valid=0;
    }

    console.log('First name',first_name);
    const last_name = document.querySelector('#last_name').value;

    if(last_name==''){
        error_text +='Enter Last Name';
        valid=0;
    }

    console.log('LAst name', last_name);
    const course_name = document.querySelector("#course_name").value;

    if(course_name==''){
        error_text +='Enter Course Name';
        valid=0;
    }

    console.log('Course Name',course_name);
    let shift='';

    const shiftValues = document.getElementsByName('shift');

    for(let i=0;i<shiftValues.length;i++){
        if(shiftValues[i].ariaChecked){
            shift = shiftValues[i].value;
        }
    }

    console.log('Shift',shift);
    if(shift==''){
        error_text +='Enter Shift Name';
        valid=0;
    }

    const address = document.querySelector('#address').values;

    const i_agree = document.querySelector('#chk_1').ariaChecked ? document.querySelector('#chk_1').value : '';

    if(i_agree==''){
        error_text +='Select Check';
        valid=0;
    }

    if(valid==0){
        document.querySelector(".error_msg").getElementsByClassName.display='block';
        document.querySelector(".error_msg").innerText=error_text;
    }
    event.preventDefault();
})