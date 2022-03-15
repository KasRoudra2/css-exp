const body = document.body;
const header = document.querySelector("header");
const mode = document.querySelector(".mode");
const search = document.querySelector(".search");
const menu = document.querySelector(".menu");

function lsTest(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

try {
    mode.addEventListener("click",()=>{
        body.classList.toggle("dark");
        mode.classList.toggle("dark");
        if(lsTest){
            if(body.classList.contains("dark")){
                localStorage.setItem("mode", "dark");
            }
            else{
                localStorage.removeItem("mode");
            }
        }
    });
    
    search.addEventListener("click",()=>{
        header.classList.toggle("showSearch");
    }) ;
    
    menu.addEventListener("click",()=>{
        header.classList.toggle("showMenu");
    });
    
    const local = localStorage.getItem("mode");
    if(local) mode.click();
    
} catch (e) {
    console.log(e)
}
