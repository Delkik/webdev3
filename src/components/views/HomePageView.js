import { Link } from 'react-router-dom';
import "../styles/home.css"


const HomePageView = () => {
  return (
    <div className='home-main'>
      <h1>Final Project</h1>
      <Link to={'/employees'} > All Employees </Link>
      <Link to={'/tasks'} > All Tasks </Link>
      <div>
        <a target="_blank" href="https://www.dailymail.co.uk/sport/football/article-11557321/The-WORST-World-Cup-time-Cristiano-Ronaldos-sister-derides-Qatar-tournament.html">
          <img className='gifs'  src="https://media.tenor.com/67iB7B7g59YAAAAM/siu-ronaldo-siu.gif" alt='ronaldo'/>
        </a>
        <a target="_blank" href='https://www.latimes.com/sports/soccer/story/2022-12-20/lionel-messi-beats-egg-most-instagram-likes-argentina-world-cup'>
          <img className='gifs' src="https://media.tenor.com/kxUvYMjIhCwAAAAM/r2v-messi.gif" alt='messi'/>
        </a>
      </div>
    </div>
  );    
}




export default HomePageView;