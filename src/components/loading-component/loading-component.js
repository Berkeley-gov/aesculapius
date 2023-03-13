import React, { Component } from 'react';
import anime from 'animejs';

class LoadingAnimation extends Component {
    componentDidMount() {
        anime({
            targets: '.fading-circle',
            easing: 'easeOutExpo',
            loop: true,
            scale: [0, 4],
            opacity: {
                value: [1, 0],
                easing: 'linear',
                duration: 800,
            },
            delay: (el, i) => 200 * i,
        });
    }
    render() {
        return(
            <div className="container">
                <h1 className="display-1">Aesculapius</h1>
                <div className="spinner-wrapper row justify-content-center align-items-center">
                    <div className="fading-circle"></div>
                    <div className="fading-circle"></div>
                    <div className="fading-circle"></div>
                </div>
            </div>
        );
    }
}

export default LoadingAnimation;