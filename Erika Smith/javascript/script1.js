window.addEventListener('load', () => {
    const left = document.querySelector('.caret_l');
    const right = document.querySelector('.caret_r');

    const slider= document.querySelector('.carusel__slide');

    const images = document.querySelectorAll('.carusel__slide img');

    let counter = 0
    const stepSize = images[0].clientWidth
    //console.log(stepSize);

    slider.style.transform='translateX(' + `${-stepSize * counter}px)`;

    right.addEventListener('click', () =>{
        counter >= images.length - 1 ? (counter = -1) : null;

        slider.classList.add('transformAnimation');  
        counter++;
        slider.style.transform='translateX(' + `${-stepSize * counter}px)`;
    })
    left.addEventListener('click', () =>{
        if(counter <= 0) counter = images.length

        slider.classList.add('transformAnimation');  
        counter--;
        slider.style.transform='translateX(' + `${-stepSize * counter}px)`;
    })
    document.getElementById("id-fon").style.display="none";
})

window.onscroll = function() {myFunction()};
function myFunction() {
    document.getElementById("myDiv").style.display='flex';
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("myDiv").className = "test";
    } else {
      document.getElementById("myDiv").className = "";
    }
  }

  document.getElementById("span2").style.display='none';
  document.getElementById("ts1").style.display='none';

  let a
			a=0;
			function myF(){
	
			if (a==0){
			document.getElementById("span2").style.display='block';
			document.getElementById("save").style.display='none';
			document.getElementById("ts1").style.display='block';
			
			
			a=1
			}
			else{document.getElementById("ts1").style.display='none';a=0}
			}
			function myFunction2(){
			document.getElementById("save").style.display='block';
            document.getElementById("save").style.justifyContent='center';
			document.getElementById("span2").style.display='none';
			document.getElementById("ts1").style.display='none';
			}
    
