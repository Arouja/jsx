
import './App.css';
import x from './image2.jpg'
function App() {
  return ( <div>
    <div className="App"/>
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}/>

<h1 class="title red">Your name here</h1>

<br />

<img src="/image1.jpg" />

<br />

<img src={x}/>



<video width="320" height="240" controls/>

<source src="myVideo.mp4" type="video/mp4"/>

</div>
   
   
  );
}

export default App;
