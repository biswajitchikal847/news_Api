// api link : https://newsapi.org/
   // api key : 6488b89f352c4e92b6037e54ffaffb45


   fetch("http://newsapi.org/v2/everything?q=${data}&from=2021-09-18&sortBy=publishedA&apikey=6488b89f352c4e92b6037e54ffaffb45")
   .then(function (res){
       return res.json();
   })
 
   .then(function (res){
     getNews(res);
     console.log(res)
   });
 
 
 let newsData = document.getElementById("data");
 
 function getNews(news) {
 // // console.log("movies",movies.Search);
 // container.innerHTML = null;
 
 if(news.status === "False"){
     alert("No such movie Avalaible")
 }
 news.articles.forEach(function (newnews) {
 
 
     let div = document.createElement("div");
 
     let img = document.createElement("img");
 
     img.src = newnews.urlToImage;
 
     let name = document.createElement("p");
 
     name.innerText = "Title : " +newnews.title;
      
     let des = document.createElement("p");
     des.innerText = newnews.description;
     let line = document.createElement("div");
     
 
    des.style.fontSize = "15px";
    des.style.fontWeight = "200";
    des.style.color = "#757575"
 
     div.append(name,des, img,line);
     newsData.append(div)
 
 });
 
 }
 
 getNews();
 
 async function getSearchMovies() {
 
 let search = document.getElementById("search").value;
 
 let res = await fetch(`http://newsapi.org/v2/everything?q=${search}&from=2021-09-18&sortBy=publishedA&apikey=6488b89f352c4e92b6037e54ffaffb45`);
 //   console.log(res)
 let data = await res.json();
 console.log(data);
 searchNews(data);
 }
 
 
 
 function searchNews(newssearch) {
 
 newsData.innerHTML = null;
 
 newssearch.articles.forEach(function (ns) {
 
 
     let div = document.createElement("div");
 
    
     let img = document.createElement("img");
 
     img.src = ns.urlToImage;
 
     let name = document.createElement("p");
 
     name.innerText = "Title : " +ns.title;
      
     let des = document.createElement("p");
     des.innerText = ns.description;
     
     let line = document.createElement("div");
 
    des.style.fontSize = "15px";
    des.style.fontWeight = "200";
    des.style.color = "#757575"
 
    
 if(newssearch.articles.length === 0){
     alert("No such news Avalaible")
 }
   
     div.append(name,des, img,line);
     newsData.append(div)
 
    
 
 
 });
 
 }