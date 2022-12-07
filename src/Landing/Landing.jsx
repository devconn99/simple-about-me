import "./Landing.css";

const Landing = () => {
  return (
    <>
      <h1>John Doe</h1>
      <div>
        <h3>Education</h3>
        <ul>
            <li><span style={{color: "black", fontWeight: "bold"}}>Institution: </span>University</li>
            <li><span style={{color: "black", fontWeight: "bold"}}>Major: </span>Data Science </li>
            <li><span style={{color: "black", fontWeight: "bold"}}>College: </span>Letters and Sciences</li>
        </ul>
      </div>
      <h4>About Me</h4>
      <p>I am from <a href="https://en.wikipedia.org/wiki/United_States">United States</a> (GMT+6).</p>
      <p>My hobbies include watch partying movies, trying out restaurants, sneakers, and going on road trips with friends.</p>
      <p>This summer I visited <a href="https://en.wikipedia.org/wiki/Melbourne">Melbourne, Australia</a>.</p>
      <h5>Trivia</h5>
      <form>
        <label for="ftrivia">Why did the chicken cross the road?</label><br />
        <input type="text" answer="answer" /><br />
        <label for="ftrivia">Who is the greatest tennis player of all time?</label><br />
        <input type="radio" id="Roger Federer" name="Roger Federer" value="Roger Federer" />
        <label for="ftrivia">Roger Federer</label><br />
        <input type="radio" id="Novak Djokovic" name="Novak Djokovic" value="Novak Djokovic" />
        <label for="ftrivia">Novak Djokovic</label><br />
        <input type="radio" id="Rafael Nadal" name="Rafael Nadal" value="Rafael Nadal" />
        <label for="ftrivia">Rafael Nadal</label><br />
        <input type="radio" id="Serena Williams" name="Serena Williams" value="Serena Williams" />
        <label for="ftrivia">Serena Williams</label><br />
      </form>
    </>
  );
};

export default Landing;