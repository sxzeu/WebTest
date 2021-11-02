const first_page = document.querySelector('#first_page');
const second_page = document.querySelector('#second_page');

const test_start_page = document.querySelector('#test_start_page');
const test_q1=document.querySelector('#test_q1');
const test_q2_1=document.querySelector('#test_q2_1');
const test_q2_2=document.querySelector('#test_q2_2');

const type_a=document.querySelector('#type_a');
const type_b=document.querySelector('#type_b');
const type_c=document.querySelector('#type_c');
const type_d=document.querySelector('#type_d');

function FirstToSecond()
{
    first_page.style.animation="fadeOut 3s";
    setTimeout(() => {
        second_page.style.animation="fadeIn 3s";
        setTimeout(() =>{
            first_page.style.display="none";
            second_page.style.display="block";
        },300)
    },400);
}

function SecondToTest()
{
    second_page.style.animation="fadeOut 1s";
    setTimeout(()=> {
        test_start_page.style.animation="fadeIn 1s";
        setTimeout(()=>{
            second_page.style.display="none";
            test_start_page.style.display="block";
        },0)
    },4);
}

function TestToQ1()
{
    test_start_page.style.animation="fadeOut 1s";
    setTimeout(()=> {
        test_q1.style.animation="fadeIn 1s";
        setTimeout(()=>{
            test_start_page.style.display="none";
            test_q1.style.display="block";
        },0)
    },4);
}

function Q1ToQ2_1()
{
    test_q1.style.animation="fadeOut 1s";
    setTimeout(()=> {
        test_q2_1.style.animation="fadeIn 1s";
        setTimeout(()=>{
            test_q1.style.display="none";
            test_q2_1.style.display="block";
        },0)
    },4);
}

function Q1ToQ2_2()
{
    test_q1.style.animation="fadeOut 1s";
    setTimeout(()=> {
        test_q2_2.style.animation="fadeIn 1s";
        setTimeout(()=>{
            test_q1.style.display="none";
            test_q2_2.style.display="block";
        },0)
    },4);
}

function Q2_1ToType_a()
{
    test_q2_1.style.animation="fadeOut 1s";
    setTimeout(()=> {
        type_a.style.animation="fadeIn 1s";
        setTimeout(()=>{
            test_q2_1.style.display="none";
            type_a.style.display="block";
        },0)
    },4);
}

function Q2_1ToType_b()
{
    test_q2_1.style.animation="fadeOut 1s";
    setTimeout(()=> {
        type_b.style.animation="fadeIn 1s";
        setTimeout(()=>{
            test_q2_1.style.display="none";
            type_b.style.display="block";
        },0)
    },4);
}

function Q2_2ToType_c()
{
    test_q2_2.style.animation="fadeOut 1s";
    setTimeout(()=> {
        type_c.style.animation="fadeIn 1s";
        setTimeout(()=>{
            test_q2_2.style.display="none";
            type_c.style.display="block";
        },0)
    },4);
}

function Q2_2ToType_d()
{
    test_q2_2.style.animation="fadeOut 1s";
    setTimeout(()=> {
        type_d.style.animation="fadeIn 1s";
        setTimeout(()=>{
            test_q2_2.style.display="none";
            type_d.style.display="block";
        },0)
    },4);
}