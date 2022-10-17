import { ThemeProvider } from 'styled-components';
import { Game } from './components';
import light from './themes/light';

const App = () => {

  return (
    <ThemeProvider theme={light}>
      <Game />
    </ThemeProvider>
  );
};

export default App;
