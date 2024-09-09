document.addEventListener("DOMContentLoaded",function(e){
    let image = document.querySelector("img")
    let button = document.querySelector("input")
    let img1 = "img/profile.jpg";
    let img2 = "img/hl1.jpg";
    let img3 = "img/hl2.jpg";
    button.addEventListener("click",function(e){
        //img태그의 src를 수정해야 함
        let src = image.getAttribute("src");
        if(src === img1){
            image.setAttribute("src",img2);
        }else if(src === img2){
            image.setAttribute("src",img3);
        }else{
            image.setAttribute("src",img1);
        }
    })
})