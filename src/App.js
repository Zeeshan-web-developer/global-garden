/**
 * @Author: ZEESHAN AHMAD
 * @Date:   2021-10-25 07:41:34
 * @Last Modified by:   ZEESHAN AHMAD
 * @Last Modified time: 2021-10-27 01:00:08
 */
import Header from "./Header";
import Display from "./Display";
import "./App.css";
import AddStudent from "./AddStudent";
import { options } from "./utils/index";
import { Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
function App() {
  return (
    <Provider template={AlertTemplate} {...options}>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <AddStudent />
              <Display />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
