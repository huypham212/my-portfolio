import React from 'react';
import pdf from '../CV - Phạm Nguyễn Thanh Huy - ReactJS Developer.pdf';

function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Huy Pham.
                        <br className="hidden lg:inline-block" />I love to use React to build some beautiful things.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a recent graduate student majoring in Information Technology at the
                        Telecommunications University . With the professional knowledge I have learned
                        and the experience gained during my internship, I believe that I am capable of taking
                        on and completing the assigned tasks in the most complete way. I want to work as
                        a ReactJS developer so I can apply my knowledge and skills to work. Hopefully, the
                        working environment at the company will help me equip myself with more
                        experience and skills to achieve my goal of becoming a good ReactJS developer in
                        the next 3 years. 
                    </p>
                    <p style="visibility: hidden;">MyF!rstT1m3Us3P@ssw0rd</p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            HIRE ME
                        </a>
                        <a
                            href={pdf}
                            target="_blank"
                            rel="noreferrer"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            MORE ABOUT ME
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://www.ifourtechnolab.com/images/react-developers-banner.webp"
                    />
                </div>
            </div>
        </section>
    )
}

export default About
