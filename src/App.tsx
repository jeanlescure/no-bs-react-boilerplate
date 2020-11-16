const App = () => {
  const clickHandler = () => {
    alert('Hello World');
  };

  return (
    <div>
      <p>
        <img src="/image.png" />
      </p>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default App;
