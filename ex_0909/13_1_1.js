document.addEventListener("DOMContentLoaded",function(e){
    let keydown = document.querySelector("#keydown");
    keydown.addEventListener("keydown",function(e){
        //key라는 키는 누른 버튼에 대한 정보를 가지고 있다.
        console.log(e.key);
        //q 를 눌렀을때 "This is Q"라는 문구를 가진
        //경고창 띄우기
        if(e.key === 'q'){
            alert(`This is Q`)
        }
    })

    //change
    //웹 문서에서 change라는 id값을 가진 태그의 정보를 변수에 저장
    let change = document.querySelector("#change");
    //change의 경우 내용이 변경되고 포커스가 벗어나면 적용
    change.addEventListener("change",function(e){
        console.log(e.target.value);
    })

    //input
    let input = document.querySelector("#input");
    input.addEventListener("input",function(e){
        console.log(e.target.value);
    })
})