import React from "react";
import "./Expertise.css";

const Expertise = () => {
    return (
        <div className="expertise-container" id="expertise">
            <div className="expertise-content">
                <h1 className="expertise-title">My Expertise</h1>
                
                <div className="expertise-grid">
                    {/* Software Development Card */}
                    <div className="expertise-card">
                        <div className="card-header">
                            <div className="card-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                                    <rect x="6" y="8" width="4" height="8" fill="currentColor"/>
                                    <rect x="14" y="10" width="4" height="6" fill="currentColor"/>
                                </svg>
                            </div>
                            <div className="card-title">
                                <h3>Software</h3>
                                <h3>Development</h3>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="code-tag">&lt;h3&gt;</div>
                            <p className="card-description">
                                Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.
                            </p>
                            <div className="code-tag">&lt;/h3&gt;</div>
                        </div>
                    </div>

                    {/* Frontend Development Card */}
                    <div className="expertise-card">
                        <div className="card-header">
                            <div className="card-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M12 1v6m0 8v6m11-7h-6m-8 0H1" stroke="currentColor" strokeWidth="2"/>
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <div className="card-title">
                                <h3>Frontend Dev</h3>
                                <h3>React, NextJS</h3>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="code-tag">&lt;h3&gt;</div>
                            <p className="card-description">
                                Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.
                            </p>
                            <div className="code-tag">&lt;/h3&gt;</div>
                        </div>
                    </div>

                    {/* AI and Machine Learning Card */}
                    <div className="expertise-card">
                        <div className="card-header">
                            <div className="card-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 12l10 10 10-10L12 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                                    <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="1"/>
                                </svg>
                            </div>
                            <div className="card-title">
                                <h3>AI and Machine</h3>
                                <h3>Learning</h3>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="code-tag">&lt;h3&gt;</div>
                            <p className="card-description">
                                Skilled in developing intelligent solutions using machine learning algorithms and AI frameworks.
                            </p>
                            <div className="code-tag">&lt;/h3&gt;</div>
                        </div>
                    </div>
                </div>

                {/* Code Editor Section */}
                <div className="code-editor">
                    <div className="code-line">
                        <span className="line-number">1</span>
                        <span className="code-keyword">const</span>
                        <span className="code-variable"> button</span>
                        <span className="code-operator"> = </span>
                        <span className="code-string">"contact"</span>
                        <span className="code-punctuation">;</span>
                    </div>
                    
                    <div className="code-line">
                        <span className="line-number">2</span>
                        <span className="code-keyword">const</span>
                        <span className="code-variable"> inputName</span>
                        <span className="code-operator"> = </span>
                        <span className="code-string">"Amen Allah"</span>
                        <span className="code-punctuation">;</span>
                    </div>
                    
                    <div className="code-line">
                        <span className="line-number">3</span>
                        <span className="code-keyword">const</span>
                        <span className="code-variable"> inputEmail</span>
                        <span className="code-operator"> = </span>
                        <span className="code-string">"amen.a.bejaoui@gmail.com"</span>
                        <span className="code-punctuation">;</span>
                    </div>
                    
                    <div className="code-line">
                        <span className="line-number">4</span>
                    </div>
                    
                    <div className="code-line">
                        <span className="line-number">5</span>
                        <span className="code-comment">// Things I do to get a perfect background image:</span>
                    </div>
                    
                    <div className="code-line">
                        <span className="line-number">6</span>
                    </div>
                    
                    <div className="code-line">
                        <span className="line-number">7</span>
                        <span className="code-comment">// Maybe I should stop tinkering with VSCode settings</span>
                    </div>
                    
                    <div className="code-line">
                        <span className="line-number">8</span>
                        <span className="code-comment">// Just to take a screenshot of this dummy html code.</span>
                    </div>
                    
                    <div className="code-line">
                        <span className="line-number">9</span>
                    </div>
                    
                    <div className="code-line">
                        <span className="line-number">10</span>
                        <span className="code-variable">console</span>
                        <span className="code-punctuation">.</span>
                        <span className="code-function">log</span>
                        <span className="code-punctuation">(</span>
                        <span className="code-string">"Hello World!"</span>
                        <span className="code-punctuation">);</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;
