import React, {useCallback, useEffect, useRef, useState} from 'react';
import {animateScroll as scroll, Link} from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [indicatorStyle, setIndicatorStyle] = useState({width: 0, transform: 'translateX(0)'});
    const navItemRefs = useRef([]);
    const lastScrollY = useRef(0);

    const moveIndicator = useCallback((index) => {
        const item = navItemRefs.current[index];

        if (!item) return;

        setIndicatorStyle({
            width: item.offsetWidth,
            transform: `translateX(${item.offsetLeft}px)`,
        });
    }, []);

    useEffect(() => {
        let frameId = null;

        const updateScrollProgress = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentScrollY = Math.max(window.scrollY, 0);
            const progress = scrollableHeight > 0 ? currentScrollY / scrollableHeight : 0;

            if (currentScrollY <= 10) {
                setIsNavVisible(true);
            } else if (currentScrollY > lastScrollY.current + 2) {
                setIsNavVisible(false);
            } else if (currentScrollY < lastScrollY.current - 2) {
                setIsNavVisible(true);
            }

            lastScrollY.current = currentScrollY;
            setScrollProgress(Math.min(Math.max(progress, 0), 1));
            frameId = null;
        };

        const handleScroll = () => {
            if (frameId === null) frameId = window.requestAnimationFrame(updateScrollProgress);
        };

        updateScrollProgress();
        window.addEventListener('scroll', handleScroll, {passive: true});
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            if (frameId !== null) window.cancelAnimationFrame(frameId);
        };
    }, []);

    useEffect(() => {
        moveIndicator(activeIndex);

        const handleResize = () => moveIndicator(activeIndex);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [activeIndex, moveIndicator]);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <nav className={isNavVisible ? 'nav-visible' : 'nav-hidden'}>
            <div
                className='scroll-progress'
                style={{transform: `scaleX(${scrollProgress})`}}
                aria-hidden='true'
            />
            <div className='nav-content'>
                <div>
                    <button className='logo' onClick={scrollToTop}>
                        AO
                    </button>
                </div>
                <div>
                    <ul className='nav-items' onMouseLeave={() => moveIndicator(activeIndex)}>
                        <li
                            className='nav-item one'
                            ref={(item) => { navItemRefs.current[0] = item; }}
                            onMouseEnter={() => moveIndicator(0)}
                        >
                            <Link
                                activeClass='active'
                                to='welcome'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onSetActive={() => setActiveIndex(0)}
                            >
                                HOME
                            </Link>
                        </li>
                        <li
                            className='nav-item two'
                            ref={(item) => { navItemRefs.current[1] = item; }}
                            onMouseEnter={() => moveIndicator(1)}
                        >
                            <Link
                                activeClass='active'
                                to='portfolio'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onSetActive={() => setActiveIndex(1)}
                            >
                                PORTFOLIO
                            </Link>
                        </li>
                        <li
                            className='nav-item three'
                            ref={(item) => { navItemRefs.current[2] = item; }}
                            onMouseEnter={() => moveIndicator(2)}
                        >
                            <Link
                                activeClass='active'
                                to='about'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onSetActive={() => setActiveIndex(2)}
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li
                            className='nav-item four'
                            ref={(item) => { navItemRefs.current[3] = item; }}
                            onMouseEnter={() => moveIndicator(3)}
                        >
                            <Link
                                activeClass='active'
                                to='contact'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onSetActive={() => setActiveIndex(3)}
                            >
                                CONTACT
                            </Link>
                        </li>
                        <li
                            className='nav-indicator'
                            style={indicatorStyle}
                            aria-hidden='true'
                        />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
