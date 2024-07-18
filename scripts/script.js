current_card=1;
function renderMenu()
{
    menu_items=document.querySelectorAll(".circle");
    Array(menu_items).forEach((circle)=>{
        if(String(circle.class).includes(`circle-${current_card}`)){
            circle.style.backgroundColor="red";
        }
        else
        {
            circle.style.backgroundColor="white";
        }
    })
}
function scrollHandler(event){
    current_card=(current_card+1)%4
    cards=document.querySelectorAll(".card");
    renderMenu(current_card);

}
function init()
{
    renderMenu(1);
}
init()
console.log(1);
mainContainer=document.querySelector(".main-container");
mainContainer.addEventListener("scroll",scrollHandler)