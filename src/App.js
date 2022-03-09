import Background from './components/Background';
import Settings from './components/Settings';
import useGetImages from './hooks/useGetImages';

function App() {
  const images = useGetImages();
  console.log({ images });

  const startGame = (options) => {
    console.log(options);
  };

  return (
    <>
      <Background />
      <h1>Memory Game</h1>
      <Settings startGame={startGame} />
    </>
  );
}

export default App;
