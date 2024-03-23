const body= document.querySelector('body')
const mainDiv = document.querySelector('.mainDiv')
const button = document.createElement('button')
button.innerText="apply"
const bottom=document.querySelector(".bottom")


bottom.appendChild(button)
let boxes=16
makeboxes(16); 


button.addEventListener("click", ()=>{
    mainDiv.innerHTML=''
    const amount=document.querySelector("#amount").value
    makeboxes(amount)
    console.log(amount)
})

function makeboxes(boxes){
    for(let i=0;i<boxes; i++){

        //declare height and width of the main container
        let height= "500px"
        let width="500px"

        //child container dimensions will depend of how many boxes user entered
        let heightChild = 500/boxes
        let widthChild = 500/boxes;
        
        //creating div for x amount of rows
        const divContainer = document.createElement('div')
        divContainer.style.display="flex"
       
        for(let j=0; j<boxes; j++){
            const divChild = document.createElement('div');
            divContainer.appendChild(divChild)
            divChild.className="divChild"
            divChild.style.backgroundColor="#614046";
            divChild.style.height=`${heightChild}px`
            divChild.style.width=`${widthChild}px`
    
            //making sure the child divs being added listens to mouse hovers
            divChild.addEventListener("mouseover",()=>{
                divChild.style.backgroundColor="#e78d9e";
                
            })
        divContainer.style.height=`${heightChild}px`
        divContainer.style.width=width
        }
        mainDiv.appendChild(divContainer);
        mainDiv.style.height=height
        mainDiv.style.width=width
        mainDiv.style.display="flex"
        mainDiv.style.flexDirection="column"
       
        
    }
    
}






