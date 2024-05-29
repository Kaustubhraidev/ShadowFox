
  let mybutton = document.getElementsByClassName("mybtn");
  window.onscroll = function(){scrollFunction()};
  function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      mybutton.style.display = "block";
    }else{
      mybutton.style.display = "none";
    }
  }
  function topfunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Assuming you have a function to update the progress (0 to 100)
const updateProgress = (percentage) => {
  const progressBar = document.querySelector('.bg-blue-500');
  progressBar.style.width = `${percentage}%`;
};
