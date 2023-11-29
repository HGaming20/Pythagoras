function calculate(){

    const C= document.getElementById("C");
    const aInput= document.getElementById("a");
    const bInput= document.getElementById("b"); 

    let  a=Number(aInput.value*aInput.value);
    let  b=Number(bInput.value*bInput.value);
    const result=Math.sqrt( a + b )
    C.textContent=result;

}