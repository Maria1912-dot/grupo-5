import{movies} from ’./movies.js;
document.getElementByld(‘filmForm’).addEventListner(‘submit’,function (event){
event.preventDefault();
let age=parselnt(document.getElementByld(‘age’).value);
let categories=document.querySelectorAll(‘input[name=”category”]:checked’);
let selectedCategories=[];
for (let i = 0; i<categories.length; i++){
selectedCategories.push(categories[i].value);
}
let filteredMovies;
if (age>=1 && age<=9){
filteredMovies=movies.filter(
(movie)=>
movie.ageRating<=9 && selectedCategories.includes(mobile.genre)
);
} else {
filteredMovies.filter(
(movie)=>
selectedCategorias.includes(movie.genre) && movie.ageRating<=age
);
}
let movieResults=document.getElementByld(‘movieResults’);
movieResults innerHTML="
for (let i=0; i<filteredMovies.length; i++) ( let movie filteredMovies[i].
let movieDiv document.createElement('div'); movieDiv classList.add('movie')
movie Div.innerHTML =
<h3>$(movie.title)</h3>
<p><strong>Género: </strong> $(movie.genre)</p>
<p><strong>Sinopse:</strong> S(movie synopsis)</p> <iframe width="560" height="315" src="$(movie.trailer)"
frameborder="0" allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope.
picture-in-picture" allowfullscreen></iframe>
‘;
movieResults appendChild(movieDiv):
}
 if (filteredMovies. length === (0) {
movieResults.innerHTML = "<p>Nenhum filme encontrado para as categorias selelecionadas</p>
}
});

