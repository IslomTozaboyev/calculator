import "./Kalkulator.css";
import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCalculator, faMinus, faRedoAlt, faSquareRootAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Input } from "reactstrap";
import Box from "../../components/Box";
import { faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import { faDraft2digital } from "@fortawesome/free-brands-svg-icons";


export default class Kalkulator extends Component {
    constructor(props) {
        super(props);

        this.state= {num1: "", num2: "", answer: "", a: true, b: true}
    }
    close = () => {
        this.setState((state) => {
            return { a: !state.a }
        })
    }

    small = () => {
        this.setState((state) => {
            console.log(state.b);
            return { b: !state.b }
        })
    }

    changed = (event) => {

        console.log(event.target.value);

        this.setState((state) => {
            return {num1: event.target.value}
        })
    }
    
    changed2 = (event) => {

        console.log(event.target.value);

        this.setState((state) => {
            return {num2: event.target.value}
        })
    }

    plus = () => {
        this.setState((state) => {
            state.answer = (this.state.num1 - 0) + (this.state.num2 - 0);
            return {answer: state.answer}
        })
    }

    minus = () => {
        this.setState((state) => {
            state.answer = this.state.num1 - this.state.num2;
            return {answer: state.answer}
        })
    }

    kopaytirish = () => {
        this.setState((state) => {
            state.answer = this.state.num1 * this.state.num2;
            return {answer: state.answer}
        })
    }

    bolish = () => {
        this.setState((state) => {
            state.answer = this.state.num1 / this.state.num2;
            return {answer: state.answer}
        })
    }

    kvadrat = () => {
        this.setState((state) => {
            state.answer = this.state.num1 * this.state.num1;
            return {answer: state.answer}
        })
    }

    ildiz = () => {
        this.setState((state) => {
            state.answer = Math.sqrt(this.state.num1);
            return {answer: state.answer}
        })
    }

    reflesh = () => {
        this.setState((state) => {
            return  window.location.reload(false);
        })
    }


    render() {
        return (
            <div>
                {this.state.a && <div className={`container ${this.state.b && "calculator" || "small__calculator "}`}>
                    <div className="form d-flex justify-content-between align-items-center">
                        <Button className={`${this.state.b && "reflesh bg-transparent text-dark" || "small__reflesh"}`} onClick={this.reflesh}>
                            <FontAwesomeIcon icon={faRedoAlt} />
                        </Button>
                        <h5 className={`${this.state.b && "fw-bold mb-0" || "small__text mb-0"}`}>Form 1</h5>
                        <div className={`${this.state.b && "icons" || "small__icons"}`}>
                            <Button className="shadow-none me-1"><FontAwesomeIcon icon={faMinus} /></Button>
                            <Button onClick={this.small} className="shadow-none "><FontAwesomeIcon icon={faWindowRestore} /></Button>
                            <Button onClick={this.close} className="shadow-none me-1"><FontAwesomeIcon icon={faTimes} /></Button>
                        </div>
                    </div>

                    <div className="p-3">
                        <Box className="my-4">
                            <h6>First Number</h6>
                            <Input className="shadow-none" type="text" onChange={this.changed} value={this.state.num1} />
                        </Box>
                        <Box className="my-4">
                            <h6>Second Number</h6>
                            <Input className="shadow-none" type="text" onChange={this.changed2} value={this.state.num2} />
                        </Box>
                        <Box className="my-3">
                            <h6>Answer</h6>
                            <Input className="shadow-none" type="text" value={this.state.answer} />
                        </Box>

                        <div className={`${this.state.b && "answer text-center" || "small__answer text-center"}`}>
                            <Box className="d-flex justify-content-between align-items-center my-4">
                                <Button className="text-dark shadow-none" onClick={this.plus} type="submit" color="secondary">+</Button>
                                <Button className="text-dark shadow-none" onClick={this.minus} color="secondary">-</Button>
                                <Button className="text-dark shadow-none" onClick={this.kopaytirish} color="secondary">*</Button>
                            </Box>

                            <Box className="d-flex justify-content-between align-items-center">
                                <Button className="text-dark shadow-none" onClick={this.bolish} color="secondary">/</Button>
                                <Button className="text-dark shadow-none" onClick={this.kvadrat} color="secondary">
                                    <FontAwesomeIcon icon={faDraft2digital} />
                                </Button>
                                <Button className="text-dark shadow-none" color="secondary">
                                    <FontAwesomeIcon onClick={this.ildiz} icon={faSquareRootAlt} />
                                </Button>
                            </Box>
                        </div>
                    </div>
                </div> || ""}
            </div>
        )
    }
}
