var countup;
var progressBar = document.createElement("shuffle-progress");
progressBar.innerHTML = "";
document.body.appendChild(progressBar);

chrome.runtime.sendMessage({type:"visit",hostname:window.location.hostname});

function shuffle(){
  chrome.runtime.sendMessage({type:"random"},function(item){
    window.location.href = item.url;
  });
}

function activate(e){
  var i = 0;
  countup = setInterval(function(){
    i++;
    progressBar.style.visibility = "visible";
    progressBar.style.width = 20 + (i*2) + "%";
    if(i == 40){
      clearInterval(countup);
      active = false;
      shuffle();
    }
  },15);
}

function reset(){
  clearInterval(countup);
  progressBar.style.width = "20%";
  progressBar.style.visibility = "hidden";
}

window.addEventListener("mousedown",activate);
window.addEventListener("mouseup",reset);
window.addEventListener("mousemove",reset);
window.addEventListener("click",reset);

/*
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-61221904-15"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-61221904-15');
</script>
*/
