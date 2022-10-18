import "./App.css";
import Bar from "./components/progress-bar";
import api from "./api";
import BarAbout from "./components/bar-about";

function findAmounts(items, n) {
    let sum = 0;
    for (let item of items) {
        sum += item.value;
    }
    let mass = [];
    for (let item of items) {
        mass.push(+((item.value * 100) / sum).toFixed(2));
    }

    for (let i = 0; i < mass.length; i++) {
        let item = mass[i];
        if (item === 0) {
            delete mass[i];
        } else if (item % 2 === 0) {
            continue;
        } else if (item < 2) {
            mass[i] = 2;
        } else {
            if (mass[i].toFixed(0) > mass[i]) {
                if (mass[i].toFixed(0) % 2 === 0) {
                    mass[i] = +mass[i].toFixed(0);
                } else {
                    mass[i] = +mass[i].toFixed(0) - 1;
                }
            } else {
                if (mass[i].toFixed(0) % 2 === 0) {
                    mass[i] = +mass[i].toFixed(0);
                } else {
                    mass[i] = +mass[i].toFixed(0) + 1;
                }
            }
        }
    }
    let newMass = [];
    for (let elem of mass) {
        newMass.push(+((elem * n) / 100));
    }

    return newMass;
}

function App() {
    const items = api.items.fetchAll();
    let n = 100;
    if (items.width <= 50) n = 50;
    let count = findAmounts(items.items, n);
    console.log(count);
    return (
        <div className="App">
            <Bar
                items={items.items}
                count={count}
                width={items.width}
                height={items.height}
            />
            {/* <BarAbout
                items={items.items}
                count={count}
                width={items.width}
                height={items.height}
            /> */}
        </div>
    );
}

export default App;

// <div class="progress">
//                 <div
//                     class="progress-bar"
//                     role="progressbar"
//                     style={{width: 15 + '%'}}
//                     aria-valuenow="15"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                 ></div>
//                 <div
//                     class="progress-bar bg-success"
//                     role="progressbar"
//                     style={{width: 30 + '%'}}
//                     aria-valuenow="30"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                 ></div>
//                 <div
//                     class="progress-bar bg-info"
//                     role="progressbar"
//                     style={{width: 20 + '%'}}
//                     aria-valuenow="20"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                 ></div>
//             </div>
