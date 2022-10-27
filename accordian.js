let accordin = document.getElementsByClassName('accordin');
let i;
for(i=0; i < accordin.length; i++){
    accordin[i].addEventListener("click",function() {
        this.classList.toggle("active")

        let description = this.nextElementSibling;
        if(description.style.display === "block") {
            description.style.display = "none";
        }
        else{
            description.style.display = "block";
        }

    })

}
