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
    // let year = document.createElement("p");

    // year.innerText = "Year : " +newnews.Year;

   des.style.fontSize = "15px";
   des.style.fontWeight = "200";
   des.style.color = "#757575"

    div.append(name,des, img);
    newsData.append(div)

});

}

getNews();