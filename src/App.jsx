import Hello from './assets/Hello.jsx'
import Contact from './assets/Contact.jsx'
import Counter from './assets/Counter.jsx';


function App() 
{
  const helloData = [
    {name: 'Nattawut', message: 'Hi there'},
    {name: 'John', message: 'Hello'},
  ];


  return (
    <div className='App'>
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="nat87972@gmail.com" phone="0637809503"/>

      <Counter />
    </div>
  );
};


export default App;