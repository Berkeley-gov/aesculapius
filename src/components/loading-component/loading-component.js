import React, { Component } from 'react';
import anime from 'animejs';

class LoadingAnimation extends Component {
    componentDidMount() {
        anime({
            targets: '.loading-bar',
            translateX: '50px',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true
        });

        anime.timeline({loop: true})
        .add({
            targets: '.text-container .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: function(el, i) {
            return 150 * (i+1)
            }
        }).add({
            targets: '.text-container .letter',
            opacity: [1,0],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: function(el, i) {
            return 150 * (i+1)
            }
        });
    }
    render() {
        return(
            <main>
                <div className="text-container">
                    <span className="letter">A</span>
                    <span className="letter">e</span>
                    <span className="letter">s</span>
                    <span className="letter">c</span>
                    <span className="letter">u</span>
                    <span className="letter">l</span>
                    <span className="letter">a</span>
                    <span className="letter">p</span>
                    <span className="letter">i</span>
                    <span className="letter">u</span>
                    <span className="letter">s</span>
                </div>

                <div className="loading-container">
                    <div className="loading-bar shadow"></div>
                </div>
            </main>    
        );
    }
}

export default LoadingAnimation;