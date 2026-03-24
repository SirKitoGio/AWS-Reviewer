import { domains, examTips, domainContent, Diagrams } from './data/index.js';
import { allQuestions } from './questions/index.js';

const state = {
    view: 'home',
    quizMode: null,
    currentQuestionIndex: 0,
    selectedOptions: [],
    answered: false,
    score: 0,
    history: [],
    shuffledQuestions: [],
    activeStudyDomain: 1
};

const appContainer = document.getElementById('app-container');
const navButtons = document.querySelectorAll('.nav-btn');
const logoBtn = document.getElementById('logo-btn');

function init() {
    logoBtn.addEventListener('click', () => setView('home'));
    navButtons.forEach(btn => {
        if (btn.dataset.view === 'quiz') {
            btn.addEventListener('click', () => startQuiz('all', 10));
        } else {
            btn.addEventListener('click', () => setView(btn.dataset.view));
        }
    });
    
    if (!document.getElementById('diagram-modal')) {
        const modal = document.createElement('div');
        modal.id = 'diagram-modal';
        modal.style.display = 'none';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
        modal.style.zIndex = '1000';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.cursor = 'zoom-out';
        modal.onclick = () => modal.style.display = 'none';
        document.body.appendChild(modal);
    }
    
    render();
}

function setView(view, studyDomain = 1) {
    state.view = view;
    state.quizMode = null;
    state.currentQuestionIndex = 0;
    state.selectedOptions = [];
    state.answered = false;
    state.score = 0;
    state.history = [];
    state.shuffledQuestions = [];
    if (view === 'study') {
        state.activeStudyDomain = studyDomain;
    }
    
    navButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
    
    render();
}

function startQuiz(mode, limit = null) {
    let pool = mode === 'all' ? allQuestions : allQuestions.filter(q => q.domain === parseInt(mode));
    let shuffled = [...pool].sort(() => Math.random() - 0.5);
    state.shuffledQuestions = limit ? shuffled.slice(0, limit) : shuffled;
    state.quizMode = mode;
    state.view = 'quiz';
    state.currentQuestionIndex = 0;
    state.selectedOptions = [];
    state.answered = false;
    state.score = 0;
    state.history = [];
    
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    render();
}

function enlargeDiagram(content) {
    const modal = document.getElementById('diagram-modal');
    modal.innerHTML = `<div style="width: 90%; max-width: 1000px; padding: 20px; background: var(--dark); border-radius: 12px; border: 1px solid var(--border)">${content}</div>`;
    modal.style.display = 'flex';
}

function render() {
    appContainer.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.className = 'fade-in';
    appContainer.appendChild(wrapper); 
    
    if (state.view === 'home') renderHome(wrapper);
    else if (state.view === 'study') renderStudy(wrapper);
    else if (state.view === 'tips') renderTips(wrapper);
    else if (state.view === 'quiz') renderQuiz(wrapper);
}

function renderHome(container) {
    const hero = document.createElement('div');
    hero.style.textAlign = 'center';
    hero.style.marginBottom = '40px';
    hero.innerHTML = `
        <div style="margin-bottom: 16px;">
            <span class="badge" style="color: var(--orange); border: 1px solid var(--orange)">CLF-C02</span>
            <span class="badge" style="color: var(--green); border: 1px solid var(--green)">${allQuestions.length} QUESTIONS</span>
            <span class="badge" style="color: var(--blue); border: 1px solid var(--blue)">70% PASSING</span>
        </div>
        <h1 style="font-size: clamp(2rem, 8vw, 3.5rem); margin-bottom: 12px; line-height: 1.1">AWS Certified<br><span style="color: var(--orange)">Cloud Practitioner</span></h1>
        <p style="color: var(--muted); margin-bottom: 30px; max-width: 600px; margin-left: auto; margin-right: auto;">Master the essentials with our professional study guide and comprehensive practice exams.</p>
        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap">
            <button class="btn btn-primary" id="start-full-quiz">Full Practice Exam</button>
        </div>
    `;
    container.appendChild(hero);
    container.querySelector('#start-full-quiz').onclick = () => startQuiz('all');

    // LEARN BY DOMAIN
    const learnLabel = document.createElement('p');
    learnLabel.className = 'section-label';
    learnLabel.textContent = 'Learn by Domain';
    container.appendChild(learnLabel);

    const learnGrid = document.createElement('div');
    learnGrid.className = 'grid-4';
    domains.forEach(d => {
        const card = document.createElement('div');
        card.className = 'domain-card';
        card.style.borderLeft = `4px solid ${d.color}`;
        card.innerHTML = `
            <div style="font-size: 10px; color: ${d.color}; font-weight: 700; margin-bottom: 4px">DOMAIN ${d.id} • ${d.weight}</div>
            <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px">${d.name}</div>
            <div style="font-size: 11px; color: var(--muted)">View concepts and use cases</div>
        `;
        card.onclick = () => setView('study', d.id);
        learnGrid.appendChild(card);
    });
    container.appendChild(learnGrid);

    // PRACTICE BY DOMAIN
    const practiceLabel = document.createElement('p');
    practiceLabel.className = 'section-label';
    practiceLabel.textContent = 'Practice by Domain';
    practiceLabel.style.marginTop = '40px';
    container.appendChild(practiceLabel);

    const practiceGrid = document.createElement('div');
    practiceGrid.className = 'grid-4';
    domains.forEach(d => {
        const card = document.createElement('div');
        card.className = 'domain-card';
        card.innerHTML = `
            <div style="font-size: 10px; color: ${d.color}; font-weight: 700; margin-bottom: 4px">DOMAIN ${d.id}</div>
            <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px">${d.name}</div>
            <div style="font-size: 11px; color: var(--muted)">${allQuestions.filter(q => q.domain === d.id).length} questions</div>
        `;
        card.onclick = () => startQuiz(d.id);
        practiceGrid.appendChild(card);
    });
    container.appendChild(practiceGrid);

    // VISUAL DIAGRAMS
    const diagramsLabel = document.createElement('p');
    diagramsLabel.className = 'section-label';
    diagramsLabel.textContent = 'Visual Diagrams';
    diagramsLabel.style.marginTop = '40px';
    container.appendChild(diagramsLabel);

    const diagramsGrid = document.createElement('div');
    diagramsGrid.className = 'grid-2';
    const sampleDiagrams = [
        {title: 'Shared Responsibility', content: Diagrams.SharedResponsibilityDiagram},
        {title: 'Well-Architected Framework', content: Diagrams.WellArchitecturedDiagram},
        {title: 'Global Infrastructure', content: Diagrams.GlobalInfrastructureDiagram},
        {title: 'S3 Storage Classes', content: Diagrams.S3StorageClassesDiagram},
        {title: 'EC2 Pricing Comparison', content: Diagrams.PricingModelsDiagram}
    ];
    
    sampleDiagrams.forEach(d => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.padding = '12px';
        card.style.cursor = 'zoom-in';
        card.innerHTML = `
            <div style="font-size: 11px; color: var(--muted); font-weight: 700; margin-bottom: 8px; text-transform: uppercase">${d.title}</div>
            <div style="background: rgba(0,0,0,0.2); border-radius: 8px; padding: 6px">${d.content}</div>
        `;
        card.onclick = () => enlargeDiagram(d.content);
        diagramsGrid.appendChild(card);
    });
    container.appendChild(diagramsGrid);
}

function renderStudy(container) {
    function updateStudyContent() {
        container.innerHTML = '';
        
        const header = document.createElement('div');
        header.innerHTML = `
            <h2 style="margin-bottom: 8px">Study Materials</h2>
            <p style="color: var(--muted); margin-bottom: 24px">Master each exam domain through structured concepts and real-world examples.</p>
        `;
        container.appendChild(header);

        const tabs = document.createElement('div');
        tabs.style.display = 'flex';
        tabs.style.gap = '8px';
        tabs.style.marginBottom = '30px';
        tabs.style.overflowX = 'auto';
        tabs.style.paddingBottom = '8px';
        
        domains.forEach(d => {
            const tab = document.createElement('button');
            tab.className = `btn ${state.activeStudyDomain === d.id ? 'btn-primary' : 'btn-outline'}`;
            tab.style.whiteSpace = 'nowrap';
            tab.innerHTML = `Domain ${d.id}`;
            tab.onclick = () => {
                state.activeStudyDomain = d.id;
                updateStudyContent();
            };
            tabs.appendChild(tab);
        });
        container.appendChild(tabs);

        const d = domainContent[state.activeStudyDomain];
        const contentArea = document.createElement('div');
        contentArea.className = 'fade-in';
        
        contentArea.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; border-bottom: 1px solid var(--border); padding-bottom: 16px">
                <div>
                    <h3 style="color: ${d.color}; margin-bottom: 4px">${d.name}</h3>
                    <div style="font-size: 12px; color: var(--muted)">WEIGHT: ${d.weight} • QUESTIONS: ${allQuestions.filter(q => q.domain === d.id).length}</div>
                </div>
                <button class="btn btn-outline" id="practice-this-domain">Practice Quiz</button>
            </div>

            ${d.detailedNotes ? `
            <div style="background: rgba(0,0,0,0.1); border-left: 4px solid ${d.color}; padding: 24px; border-radius: 8px; margin-bottom: 30px; font-size: 14px; line-height: 1.6; color: var(--text);">
                ${d.detailedNotes}
            </div>
            ` : ''}

            <div class="study-visuals" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 40px">
                ${d.diagram ? `
                    <div class="card diagram-card" style="padding: 16px; background: rgba(0,0,0,0.2); cursor: zoom-in" id="diag-1">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
                            <div style="font-size: 10px; color: var(--muted); font-weight: 700; letter-spacing: 1px">${d.diagramTitle || 'CONCEPTUAL MAP'}</div>
                            <div style="font-size: 10px; color: ${d.color}">[CLICK TO ENLARGE]</div>
                        </div>
                        ${d.diagram}
                    </div>` : ''}
                ${d.diagram2 ? `
                    <div class="card diagram-card" style="padding: 16px; background: rgba(0,0,0,0.2); cursor: zoom-in" id="diag-2">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
                            <div style="font-size: 10px; color: var(--muted); font-weight: 700; letter-spacing: 1px">${d.diagram2Title || 'ARCHITECTURE VIEW'}</div>
                            <div style="font-size: 10px; color: ${d.color}">[CLICK TO ENLARGE]</div>
                        </div>
                        ${d.diagram2}
                    </div>` : ''}
            </div>

            <div class="lessons-container" style="display: grid; gap: 40px">
                ${d.sections.map(s => `
                    <div>
                        <h4 style="font-size: 14px; margin-bottom: 16px; color: var(--muted); border-left: 3px solid ${d.color}; padding-left: 12px; text-transform: uppercase; letter-spacing: 1px">${s.title}</h4>
                        <div class="study-table" style="width: 100%; border: 1px solid var(--border); border-radius: 8px; overflow: hidden">
                            <div style="display: grid; grid-template-columns: 180px 1fr 1fr; background: var(--card); border-bottom: 1px solid var(--border); font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 1px">
                                <div style="padding: 12px; border-right: 1px solid var(--border)">Concept</div>
                                <div style="padding: 12px; border-right: 1px solid var(--border)">Key Focus</div>
                                <div style="padding: 12px">Real-World Example</div>
                            </div>
                            ${s.items.map(item => `
                                <div style="display: grid; grid-template-columns: 180px 1fr 1fr; border-bottom: 1px solid var(--border); font-size: 13px; min-height: 60px">
                                    <div style="padding: 12px; border-right: 1px solid var(--border); font-weight: 700; color: ${d.color}">${item.term}</div>
                                    <div style="padding: 12px; border-right: 1px solid var(--border); line-height: 1.5">${item.def || item.focus || ''}</div>
                                    <div style="padding: 12px; color: var(--muted); font-size: 12px; line-height: 1.5; background: rgba(255,255,255,0.01)">${item.example || 'Standard cloud implementation.'}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}

                ${d.concepts ? `
                    <div style="margin-top: 20px">
                        <h4 style="font-size: 14px; margin-bottom: 16px; color: var(--muted); border-left: 3px solid var(--orange); padding-left: 12px; text-transform: uppercase; letter-spacing: 1px">Corporate Use Cases</h4>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px">
                            ${d.concepts.map(c => `
                                <div class="card" style="padding: 20px; border-top: 4px solid ${d.color}">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
                                        <div style="font-weight: 700; color: ${d.color}; font-size: 15px">${c.company}</div>
                                        <div style="font-size: 10px; color: var(--muted); font-weight: 700">${c.industry.toUpperCase()}</div>
                                    </div>
                                    <div style="font-size: 13px; line-height: 1.6; color: var(--text)">
                                        <div style="margin-bottom: 8px"><span style="color: var(--muted); font-weight: 700">CHALLENGE:</span> ${c.challenge}</div>
                                        <div><span style="color: var(--muted); font-weight: 700">AWS SOLUTION:</span> ${c.solution}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
        
        container.appendChild(contentArea);
        container.querySelector('#practice-this-domain').onclick = () => startQuiz(d.id);
        
        const d1 = container.querySelector('#diag-1');
        if (d1) d1.onclick = () => enlargeDiagram(d.diagram);
        
        const d2 = container.querySelector('#diag-2');
        if (d2) d2.onclick = () => enlargeDiagram(d.diagram2);
    }

    updateStudyContent();
}

function renderTips(container) {
    container.innerHTML = `
        <h2 style="margin-bottom: 10px">Exam Strategy & Tips</h2>
        <p style="color: var(--muted); margin-bottom: 30px">Patterns and quick rules observed from common exam questions.</p>
        <div class="grid-2"></div>
    `;
    
    const grid = container.querySelector('.grid-2');
    examTips.forEach((t, i) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.borderLeft = `4px solid var(--orange)`;
        card.innerHTML = `
            <div style="display: flex; gap: 12px">
                <span style="background: rgba(255, 153, 0, 0.1); color: var(--orange); padding: 2px 8px; border-radius: 4px; height: fit-content; font-size: 12px; font-weight: 700">${i+1}</span>
                <div>
                    <div style="font-weight: 700; color: var(--orange); margin-bottom: 6px; font-size: 14px">${t.tip}</div>
                    <div style="font-size: 13px; color: var(--muted); line-height: 1.6">${t.detail}</div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function checkAnswer(q) {
    if (q.multi) {
        return q.correct.length === state.selectedOptions.length && q.correct.every(val => state.selectedOptions.includes(val));
    }
    return state.selectedOptions[0] === q.correct;
}

function renderQuiz(container) {
    if (!state.quizMode) {
        setView('home');
        return;
    }

    if (state.currentQuestionIndex >= state.shuffledQuestions.length) {
        renderResults(container);
        return;
    }

    const q = state.shuffledQuestions[state.currentQuestionIndex];
    const progress = (state.currentQuestionIndex / state.shuffledQuestions.length) * 100;

    container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px">
            <span style="font-size: 12px; color: var(--muted)">Question ${state.currentQuestionIndex + 1} of ${state.shuffledQuestions.length}</span>
            <span style="font-size: 12px; color: var(--orange)">Score: ${state.score}</span>
        </div>
        <div class="progress-container">
            <div class="progress-bar" style="width: ${progress}%"></div>
        </div>
        
        <div class="card" style="margin-top: 24px">
            <div style="margin-bottom: 12px">
                <span class="badge" style="color: ${domains[q.domain-1].color}; border: 1px solid ${domains[q.domain-1].color}">DOMAIN ${q.domain}</span>
                ${q.multi ? '<span class="badge" style="color: var(--blue); border: 1px solid var(--blue)">CHOOSE TWO</span>' : ''}
            </div>
            <p style="font-size: 16px; font-weight: 500; line-height: 1.6">${q.question}</p>
        </div>

        <div id="options-container" style="margin-bottom: 24px"></div>

        <div id="feedback-container"></div>

        <div style="display: flex; justify-content: flex-end; gap: 12px">
            <button class="btn btn-outline" id="quit-btn">Quit</button>
            <button class="btn btn-primary" id="submit-btn" ${state.selectedOptions.length === 0 ? 'disabled style="opacity: 0.5"' : ''}>Submit Answer</button>
        </div>
    `;

    container.querySelector('#quit-btn').onclick = () => setView('home');

    const optionsContainer = container.querySelector('#options-container');
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (state.selectedOptions.includes(idx)) btn.classList.add('selected');
        
        btn.innerHTML = `
            <span style="width: 22px; height: 22px; border: 1px solid currentColor; border-radius: ${q.multi ? '4px' : '50%'}; display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0">
                ${String.fromCharCode(65 + idx)}
            </span>
            <span>${opt}</span>
        `;
        
        btn.onclick = () => {
            if (state.answered) return;
            if (q.multi) {
                if (state.selectedOptions.includes(idx)) {
                    state.selectedOptions = state.selectedOptions.filter(i => i !== idx);
                } else if (state.selectedOptions.length < 2) {
                    state.selectedOptions.push(idx);
                }
            } else {
                state.selectedOptions = [idx];
            }
            renderQuiz(container);
        };
        optionsContainer.appendChild(btn);
    });

    const submitBtn = container.querySelector('#submit-btn');
    if (state.answered) {
        submitBtn.textContent = state.currentQuestionIndex + 1 >= state.shuffledQuestions.length ? 'See Results' : 'Next Question';
        submitBtn.onclick = () => {
            state.currentQuestionIndex++;
            state.selectedOptions = [];
            state.answered = false;
            renderQuiz(container);
        };

        const feedback = container.querySelector('#feedback-container');
        const isCorrect = checkAnswer(q);
        feedback.innerHTML = `
            <div class="card" style="border-color: ${isCorrect ? 'var(--green)' : 'var(--red)'}; background: ${isCorrect ? 'rgba(63, 185, 80, 0.05)' : 'rgba(248, 81, 73, 0.05)'}">
                <div style="font-weight: 700; color: ${isCorrect ? 'var(--green)' : 'var(--red)'}; margin-bottom: 8px">
                    ${isCorrect ? 'Correct!' : 'Incorrect'}
                </div>
                <p style="font-size: 13px; line-height: 1.6">${q.explanation}</p>
            </div>
        `;
        
        optionsContainer.querySelectorAll('.option-btn').forEach((btn, idx) => {
            btn.classList.remove('selected');
            if (q.multi) {
                if (q.correct.includes(idx)) btn.classList.add('correct');
                else if (state.selectedOptions.includes(idx)) btn.classList.add('wrong');
            } else {
                if (idx === q.correct) btn.classList.add('correct');
                else if (state.selectedOptions.includes(idx)) btn.classList.add('wrong');
            }
        });
    } else {
        submitBtn.onclick = () => {
            state.answered = true;
            if (checkAnswer(q)) state.score++;
            state.history.push({ index: state.currentQuestionIndex, correct: checkAnswer(q) });
            renderQuiz(container);
        };
    }
}

function renderResults(container) {
    const percent = Math.round((state.score / state.shuffledQuestions.length) * 100);
    const passed = percent >= 70;
    
    container.innerHTML = `
        <div style="text-align: center; max-width: 600px; margin: 0 auto">
            <div style="font-size: 4rem; margin-bottom: 10px">${passed ? 'PASSED' : 'STUDY MORE'}</div>
            <h2 style="margin-bottom: 4px">${passed ? 'Congratulations!' : 'Keep Studying!'}</h2>
            <p style="color: var(--muted); margin-bottom: 30px">You've completed the ${state.quizMode === 'all' ? 'Full Exam' : 'Domain ' + state.quizMode + ' Quiz'}.</p>
            
            <div class="card" style="margin-bottom: 30px">
                <div style="font-size: 11px; color: var(--muted); letter-spacing: 2px; margin-bottom: 10px">FINAL SCORE</div>
                <div style="font-size: 4rem; font-weight: 700; color: ${passed ? 'var(--green)' : 'var(--orange)'}">${percent}%</div>
                <p style="margin-bottom: 0">${state.score} out of ${state.shuffledQuestions.length} correct</p>
            </div>

            <div style="display: flex; gap: 12px; justify-content: center">
                <button class="btn btn-primary" id="retry-btn">Retry Quiz</button>
                <button class="btn btn-outline" id="home-btn">Finish</button>
            </div>
        </div>
    `;

    container.querySelector('#retry-btn').onclick = () => startQuiz(state.quizMode);
    container.querySelector('#home-btn').onclick = () => setView('home');
}

init();
