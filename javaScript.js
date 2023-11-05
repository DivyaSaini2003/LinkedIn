var i=0;
var btn = document.getElementById('dropbtn');
function show(){
    if(i==0){
        document.getElementById('drpdown').style.display ='block';
        i=1;
    }
    else{
        document.getElementById('drpdown').style.display='none';
        i=0;
    }
}
var array = ["1. Spread love everywhere you go. Let no one ever come to you without leaving happier.<br><div>by Mother Terasa </div>",
"2. Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.<br><div>by Martin Luther King</div>",
"3. The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.<br><div>by Helen Keller</div>",
"4. Do not go where the path may lead, go instead where there is no path and leave a trail. <br> <div>by Ralph Waldo Emerson</div>",
"5. In the end, it's not the years in your life that count. It's the life in your years.<br> <div>by Abraham Lincoln</div>",
"6. Life is a succession of lessons which must be lived to be understood.<br> <div>by Ralph Waldo Emerson</div>",
"7. You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.<br> <div>by John Lennon</div>",
"8. The greatest glory in living lies not in never falling, but in rising every time we fall.<br> <div>by Oliver Goldsmith</div>",
"9. Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.<br> <div>by Steve Jobs</div>",
"10. Spread love everywhere you go. Let no one ever come to you without leaving happier.<br> <div>by Mother Terasa</div>"  
];
var currentIndex =0;
function displayQuote(){
    var parent = document.getElementById("quoteDisplay");
    if(currentIndex<array.length){
        var di = document.createElement("div");
        var dinner = document.createElement("p");
        dinner.innerHTML = array[currentIndex]+`<br><button id="${currentIndex}" onclick="f(${currentIndex})"><i class='bx bxs-bookmark'></i></button`;
        di.appendChild(dinner);
        parent.appendChild(di);
        currentIndex++;
    }
    if(currentIndex==array.length){
        alert("Its the last one!! Visit again tomorrow for more");
    }
}
function f(index){
    var parent = document.getElementById("Bookmarked");
    var d = document.createElement("div");
    d.innerHTML = array[index]+`<h1>hi</h1>`;
    parent.appendChild(d);
}
var container =  document.getElementById('drpdown');
var buttons = container.querySelectorAll('button')
console.log(buttons);
buttons.forEach(function(button) {
      button.addEventListener('click', function() {
      alert("Button Text: " + button.textContent);
   });
});
function display(e){
    alert(e.textContent);
}