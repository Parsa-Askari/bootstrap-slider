current_card=1;
function renderMenu(current_card)
{
    menu_items=document.querySelectorAll(".circle");
    // console.log(menu_items)
    menu_items.forEach((circle)=>{
        // console.log(circle.className);
        if(String(circle.className).includes(`circle-${current_card}`)){
            circle.style.backgroundColor="red";
        }
        else
        {
            circle.style.backgroundColor="white";
        }
    })
}
function renderCard(current_card)
{
    cards=document.querySelectorAll(".card");
    cards.forEach((card)=>{
        // console.log(circle.className);
        if(String(card.className).includes(`card-${current_card}`)){
            card.style.display="block";
        }
        else
        {
            card.style.display="none";
        }
    })
}
function scrollHandler(event){
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    if(delta>0){
        current_card=((current_card)%3)+1
    }
    else{
        
        current_card=(3+(current_card-1))%4
        console.log(current_card)
    }
    renderMenu(current_card);
    renderCard(current_card)

}
function init()
{
    renderMenu(1);
    renderCard(1);
}
init()
// console.log(1);
mainContainer=document.querySelector(".main-container");

mainContainer.addEventListener("wheel",scrollHandler)