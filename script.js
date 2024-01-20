//api key 9a5d374eae9c80f4b3eb140db75ffcff 
//authentication token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVkMzc0ZWFlOWM4MGY0YjNlYjE0MGRiNzVmZmNmZiIsInN1YiI6IjY1OTg0NTBmMWQxYmY0MDIwMjNjODBjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1VrqvBo8M6JtJLAag_J5c4vy9oHp4n-QWZOn_bR0WQ'

window.onload = (event) => {
  pullDataTrending();
  pullTrailerData();
};

let ImageArr={

  src1:"./images/img1.jpg",

  src2:"./images/img2.jpg",

  src3:"./images/img3.jpg",

  src4:"./images/img4.jpg",

  src5:"./images/img5.jpg",

  src6:"./images/img6.jpg",

  src7:"./images/img7.jpg",

  src8:"./images/img8.jpg",

  src9:"./images/img9.jpg",

  src11:"./images/img11.jpg",

  src12:"./images/img12.jpg",

};





function pullTrailerData()
{
let i=1;
  for(const property in ImageArr)
  {
     let trailer=document.getElementById("Trailer");
  let card=document.createElement("div");
  let childDiv=document.createElement("div");
  let img=document.createElement("img");


  // let img=document.createElement("img");
  childDiv.className="childCont";
  img.className="playButton";
  card.class="trailerCard";
 
  // img.class="TrailercardImage  ";
  card.id=`A${+i}`;
  card.className="imageContainer"

  img.src=`${"./images/play.png"}`;
  card.style.backgroundImage = `url(${ImageArr[property]})`; 

  // SVG.style.backgroundImage = `url(${"./images/playbtn"})`; 

  // card.appendChild(img);
  childDiv.appendChild(img);
  card.appendChild(childDiv);
  trailer.appendChild(card);
  i++;


  }
// console.log(i);

let Element1 = document.getElementById("A1");
let Element2 = document.getElementById("A2");
let Element3 = document.getElementById("A3");





  Element1.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      let trailer=document.getElementById("Trailer");

      // trailer.style.backgroundColor = "green";
      trailer.style.backgroundImage = `url(${ImageArr.src1})`; 
  
    
    },
  
  );

  Element2.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      let trailer=document.getElementById("Trailer");
      trailer.style.backgroundColor = "grey";
      trailer.style.backgroundImage = `url(${ImageArr.src2})`; 
      trailer.style.backgroundImage="opacity(0.5)";
      // trailer.style.background=  `linear-gradient(  #d7d7d7, rgba(0, 0, 0, 0.7), url(${ImageArr.src2}))`;
  
    
    },
  
  );

  Element3.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      let trailer=document.getElementById("Trailer");
      // let idImg=document.getElementById("trailerimg");
       trailer.style.backgroundImage = `url(${ImageArr.src3})`; 
  
    
    },
  
  );
  


}

//keyword Search Result Function
// function matchString(val,title)  
// {

//         // let stringResult=title.replace(/\s+/g, '');

//         if(title.startsWith(val))
//         {
//           console.log("yes");
//           return true;
//         }
//         else{
//           return false;
//         }
// }

// function showData(response)
// {
//    let value1=document.getElementById("inputData").value;

//    let i=0;
//  while(i!=response.results.length)
//  {
//    if(matchString(value1,response.results[i].title))
//    {
//     console.log(response.results[i]);

//     let newDiv = document.createElement("img");

//          newDiv.src =
//  `https://www.themoviedb.org/t/p/w220_and_h330_face${response.results[i].poster_path}`;
//          document.getElementById('demo').appendChild(newDiv);

//    }

//   i++;

//   }
// }

//Trending section here:
function Trending(response)
{

  let i=0;
  while(i<20)
  {

  let target=document.getElementById("trending");
  let cards=document.createElement("div");
  let img=document.createElement("img");
  cards.className="cardsDiv";
  img.className="cardsImage";

  img.src=`https://www.themoviedb.org/t/p/w220_and_h330_face${response.results[i].poster_path}`;

  cards.appendChild(img);

  target.appendChild(cards);
  i++;
  }
}


//tv serials section
function tvSerials(response)
{

  // console.log(response);

  let i=0;
  while(i<20)
  {

  let target=document.getElementById("tvSerial");
  let cards=document.createElement("div");
  let img=document.createElement("img");
  cards.className="cardsDiv";
  img.className="cardsImage";

  img.src=`https://www.themoviedb.org/t/p/w220_and_h330_face${response.results[i].poster_path}`;

  cards.appendChild(img);

  target.appendChild(cards);
  i++;
  }

}


//Upcoming movies section
  function Upcoming(response)
{

  let i=0;
  while(i<20)
  {

  let target=document.getElementById("Upcoming");
  let cards=document.createElement("div");
  let img=document.createElement("img");
  cards.className="cardsDiv";
  img.className="cardsImage";

  img.src=`https://www.themoviedb.org/t/p/w220_and_h330_face${response.results[i].poster_path}`;

  cards.appendChild(img);

  target.appendChild(cards);
  i++;
  }

}

//adding event here for search movies

document.getElementById("searchMovie").addEventListener("click",(e)=>{
  e.preventDefault()
  searchMovie(e);


});

function searchMovie(e)
{
  
  let values=document.getElementById("inputData");  

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVkMzc0ZWFlOWM4MGY0YjNlYjE0MGRiNzVmZmNmZiIsInN1YiI6IjY1OTg0NTBmMWQxYmY0MDIwMjNjODBjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1VrqvBo8M6JtJLAag_J5c4vy9oHp4n-QWZOn_bR0WQ'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => searching(response,values))
    .catch(err => console.error(err));



}



//underConstruction
function searching(response,values)
{


      let query=values.value;
    // let api=response.results[i].title;
    // let ans=`/${api}/`;

   let ans=query.charAt(0).toUpperCase();
    // query.toUpperCase();
   
  for(let i=1;i<query.length;i++)
  {

    ans+=query[i];


  }

  console.log(ans);


  
  for(let i=0;i<20;i++)
  {
   
    let api=response.results[i].title;
    // let ans=`/${api}/`;
   
    

    if(ans.startsWith(api))
    {
    console.log(response.results)
      let Block=document.getElementById("searchResults");
      Block.style.display="block";

      console.log(response.results[i]);
      let newDiv = document.createElement("div");
      let Heading = document.createElement("div");
      let h1=document.createElement("h1");
      let newtext=document.createTextNode("Search Result...!");
      h1.appendChild(newtext);
      Heading.className="heading";
      Heading.appendChild(h1);
      document.getElementById("searchResults").appendChild(Heading);

      

      newDiv.className="ResultDiv";
      newDiv.style.backgroundImage=`url(${`https://www.themoviedb.org/t/p/w220_and_h330_face${response.results[i].poster_path}`})`; 

      document.getElementById("searchResults").appendChild(newDiv);

     
return

    }
    
  }

}


//fetch function fetching all the ott data here using api:

function pullDataTrending(event)
{

  //first list
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVkMzc0ZWFlOWM4MGY0YjNlYjE0MGRiNzVmZmNmZiIsInN1YiI6IjY1OTg0NTBmMWQxYmY0MDIwMjNjODBjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1VrqvBo8M6JtJLAag_J5c4vy9oHp4n-QWZOn_bR0WQ'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => Trending(response))
    .catch(err => console.error(err));


    // second list
    const options2 = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVkMzc0ZWFlOWM4MGY0YjNlYjE0MGRiNzVmZmNmZiIsInN1YiI6IjY1OTg0NTBmMWQxYmY0MDIwMjNjODBjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1VrqvBo8M6JtJLAag_J5c4vy9oHp4n-QWZOn_bR0WQ'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
      .then(response => response.json())
      .then(response => tvSerials(response))
      .catch(err => console.error(err));

      //third list
      const options3 = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVkMzc0ZWFlOWM4MGY0YjNlYjE0MGRiNzVmZmNmZiIsInN1YiI6IjY1OTg0NTBmMWQxYmY0MDIwMjNjODBjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1VrqvBo8M6JtJLAag_J5c4vy9oHp4n-QWZOn_bR0WQ'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => Upcoming(response))
        .catch(err => console.error(err));


  }
