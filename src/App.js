import './App.css';
import Touch1 from './components/chatfake/Touch1';
import Mount from './components/mount/Mount';
import CallBack from './components/useCallback/CallBack';
import Effect from './components/useEffect/Effect';
import Touch from './components/useEffect/Touch';
import LayoutEffect from './components/useLayoutEffect/LayoutEffect';
import Memo from './components/Memo/Memo';
import Ref from './components/useRef/Ref';
import MemoUse from './components/useMemo/MemoUse';
import Reducer from './components/useReducer/Reducer';
import TodoAppReducer from './components/todoAppReducer/TodoAppReducer';
import Context from './components/context/Context';
import GlobalState from './components/globalState/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalState />
    </div>
  );
}

export default App;
