//api key 9a5d374eae9c80f4b3eb140db75ffcff 
//authentication token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVkMzc0ZWFlOWM4MGY0YjNlYjE0MGRiNzVmZmNmZiIsInN1YiI6IjY1OTg0NTBmMWQxYmY0MDIwMjNjODBjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1VrqvBo8M6JtJLAag_J5c4vy9oHp4n-QWZOn_bR0WQ'


//keyword Search Result Function
function matchString(val,title)
{

        // let stringResult=title.replace(/\s+/g, '');

        if(title.startsWith(val))
        {
          console.log("yes");
          return true;
        }
        else{
          return false;
        }
}

function showData(response)
{
   let value1=document.getElementById("inputData").value;

   let i=0;
 while(i!=response.results.length)
 {
   if(matchString(value1,response.results[i].title))
   {
    console.log(response.results[i]);

    let newDiv = document.createElement("img");

         newDiv.src =
 `https://www.themoviedb.org/t/p/w220_and_h330_face${response.results[i].poster_path}`;
         document.getElementById('demo').appendChild(newDiv);

   }

  i++;

  }
}

function Trending(response)
{

  console.log(response);
  let target=document.getElementById("trending");
  let cards=document.createElement("div");
  let img=document.createElement("img");
  cards.className="cardsDiv";
  img.className="cardsImage";

  img.src=`https://www.themoviedb.org/t/p/w220_and_h330_face${response.results[0].poster_path}`;

  cards.appendChild(img);

  target.appendChild(cards);


}




function pullData(event)
{

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVkMzc0ZWFlOWM4MGY0YjNlYjE0MGRiNzVmZmNmZiIsInN1YiI6IjY1OTg0NTBmMWQxYmY0MDIwMjNjODBjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1VrqvBo8M6JtJLAag_J5c4vy9oHp4n-QWZOn_bR0WQ'
  //   }
  // };
  
  // fetch('https://api.themoviedb.org/3/movie/popular', options)
  //   .then(response => response.json())
  //   .then(response => showData(response))
  //   .catch(err => console.error(err));
 
  //   event.preventDefault();


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVkMzc0ZWFlOWM4MGY0YjNlYjE0MGRiNzVmZmNmZiIsInN1YiI6IjY1OTg0NTBmMWQxYmY0MDIwMjNjODBjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1VrqvBo8M6JtJLAag_J5c4vy9oHp4n-QWZOn_bR0WQ'
    }
  };
  
  fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => Trending(response))
    .catch(err => console.error(err));

}



  








//     function resultStore(response)
//     {

//         console.log(response.results[0].title);

//         pullData(response);
       
//         let img = document.createElement('img');
//         img.src =
// `https://www.themoviedb.org/t/p/w220_and_h330_face${response.results[0].poster_path}`;
//         document.getElementById('demo').appendChild(img);
      

//     }

    