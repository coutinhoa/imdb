/* 1. fetch the data on the parent class using useEffect
we parse the response of the promise to json and only after we get an array do we put it in the movies variables

2. map the movies to get a movie
we always have to put a key when we map a JSX
pass a movie object and it renders a movie object

3. we ned to extract the movies from a props object with curly brakets like so: 
Movie = ({ movie })

What we get is 
Movie = (props) and by doing Movie = ({ movie }) its like we do props.movie

4. get link in trailer
ancors <a> are used for links outside of the application like youtube or google link
if the link is for a details page then we use React router

5. Put a link in the Movie.jsx

6.Set the Routes in the main.jsx, using the id

7. Fetch the id in MovieDeatils.jsx (use useEffect) using params:id and js string templates, this gets us the id, but not the rest of the data

8. The response has all the data of the id that the params gets. Get the rest of the data correspondent to the id that the lick we clicked has. 

9. Noe our data object is stored in a variable called details, using the setDetails function
*/
