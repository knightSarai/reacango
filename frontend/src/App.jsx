import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
import Header from './components/Header';
import navlinks from './data/navlinks.data';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header links={navlinks} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
