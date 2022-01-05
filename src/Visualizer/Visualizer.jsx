import React from 'react';
//import Grid from '@material-ui/core/Grid';
//import Typography from '@material-ui/core/Typography';
//import Slider from '@material-ui/core/Slider';
import { getBubble } from '../Algorithms/Bubble';
import { getHeap } from '../Algorithms/Heap';
import { getInsertion } from '../Algorithms/Insertion';
import { getQuick } from '../Algorithms/Quick';
import { getMerge } from '../Algorithms/Merge';
import { getShell } from '../Algorithms/Shell';
import { getSelection } from '../Algorithms/Selection';

import './Visualizer.css';

// animation speed of sort
const SPEED = 1;

// size of array
const SIZE = 300;

// main color
const COLOR = '#8db596';

// sorting color
const COLOR2 = '#f1f6f9';

export default class Visualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            size: 300,
        };
    }

    componentDidMount() {
        this.createArray();
    }

    createArray() {
        const array = [];
        for (let i = 0; i < SIZE; i++) {
            array.push(randomIntInterval(5, 730));
        }
        this.setState({ array: array });
    }

    animateSort(display) {
        for (let i = 0; i < display.length; i++) {
            const bars = document.getElementsByClassName('array-bar');
            const [thisBar, thatBar, swap, isColor] = display[i];
            if (!swap) {
                const thisStyle = bars[thisBar].style;
                const thatStyle = bars[thatBar].style;
                let color;
                if (isColor) {
                    color = COLOR2;
                }
                else {
                    color = COLOR;
                }
                setTimeout(() => {
                    thisStyle.backgroundColor = color;
                    thatStyle.backgroundColor = color;
                }, i * SPEED);
            } else {
                setTimeout(() => {
                    const [thisBar, newHeight] = display[i];
                    const thisStyle = bars[thisBar].style;
                    thisStyle.height = `${newHeight}px`;
                }, i * SPEED);
            }
        }
    }

    quickSort() {
        const display = getQuick(this.state.array);
        this.animateSort(display);
    }

    mergeSort() {
        const display = getMerge(this.state.array);
        for (let i = 0; i < display.length; i++) {
            const bars = document.getElementsByClassName('array-bar');
            const changeColor = i % 3 !== 2;
            if (changeColor) {
                const [thisBar, thatBar] = display[i];
                const thisStyle = bars[thisBar].style;
                const thatStyle = bars[thatBar].style;
                const color = i % 3 === 0 ? COLOR2 : COLOR;
                setTimeout(() => {
                    thisStyle.backgroundColor = color;
                    thatStyle.backgroundColor = color;
                }, i * SPEED);
            } else {
                setTimeout(() => {
                    const [thisBar, newHeight] = display[i];
                    const thisStyle = bars[thisBar].style;
                    thisStyle.height = `${newHeight}px`;
                }, i * SPEED);
            }
        }
    }

    heapSort() {
        const display = getHeap(this.state.array);
        this.animateSort(display);
    }

    shellSort() {
        const display = getShell(this.state.array);
        this.animateSort(display);
    }

    insertionSort() {
        const display = getInsertion(this.state.array);
        this.animateSort(display);
    }

    bubbleSort() {
        const display = getBubble(this.state.array);
        this.animateSort(display);
    }

    selectionSort() {
        const display = getSelection(this.state.array);
        this.animateSort(display);
    }

    render() {
        const { array } = this.state;

        return (
            <div className="container">
                <div className="nav">
                    {/* <SizeSlider></SizeSlider> */}
                    <button onClick={() => this.createArray()}>Generate New Array</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.shellSort()}>Shell Sort</button>
                    <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.selectionSort()}>Selection Sort</button>
                </div>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                                backgroundColor: COLOR,
                                height: `${value}px`,
                            }}>
                        </div>
                    ))}
                </div>


            </div>
        );
    }
}

function randomIntInterval(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

/*const SizeSlider = () => {
    const [value, setValue] = React.useState(30);
};*/

/*const handleChange = (event, newValue) => {
    setValue(newValue);
};

return (
    <div className="size-slider">
        <Typography id="slider-text" gutterBottom>
            Size
            </Typography>
        <Grid container spacing={2}>
            <Grid item xs>

            </Grid>
        </Grid>
    </div>
);*/
