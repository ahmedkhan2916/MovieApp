//api key 9a5d374eae9c80f4b3eb140db75ffcff 
//authentication token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVkMzc0ZWFlOWM4MGY0YjNlYjE0MGRiNzVmZmNmZiIsInN1YiI6IjY1OTg0NTBmMWQxYmY0MDIwMjNjODBjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1VrqvBo8M6JtJLAag_J5c4vy9oHp4n-QWZOn_bR0WQ'

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVkMzc0ZWFlOWM4MGY0YjNlYjE0MGRiNzVmZmNmZiIsInN1YiI6IjY1OTg0NTBmMWQxYmY0MDIwMjNjODBjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1VrqvBo8M6JtJLAag_J5c4vy9oHp4n-QWZOn_bR0WQ'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular', options)
    .then(response => response.json())
    .then(response => resultStore(response))
    .catch(err => console.error(err));


    function resultStore(response)
    {

        console.log(response);
       
        let img = document.createElement('img');
        img.src =
`https://www.themoviedb.org/t/p/w220_and_h330_face${response.results[0].poster_path}`;
        document.getElementById('demo').appendChild(img);
      

    }