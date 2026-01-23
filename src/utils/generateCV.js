import { jsPDF } from 'jspdf';

export const generateCV = (role) => {
    const doc = new jsPDF();

    // Set colors
    const primaryColor = [0, 240, 255]; // Cyan
    const darkColor = [5, 5, 5];
    const grayColor = [60, 60, 60];

    // Header with gradient effect
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 210, 45, 'F');

    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.setFontSize(32);
    doc.setFont('helvetica', 'bold');
    doc.text('JASVANTH S', 105, 22, { align: 'center' });

    doc.setFontSize(16);
    doc.setFont('helvetica', 'normal');
    doc.text(role, 105, 33, { align: 'center' });

    // Contact Info
    doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
    doc.setFontSize(9);
    doc.text('jasvanth1010@gmail.com | jasvanth-s.github.io/my_portfolio | github.com/Jasvanth-S | linkedin.com/in/jasvanth-s', 105, 55, { align: 'center' });

    let yPos = 70;

    // Professional Summary - Role-specific
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL SUMMARY', 20, yPos);

    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.8);
    doc.line(20, yPos + 2, 190, yPos + 2);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);

    const summaries = {
        'Full-Stack AI Developer': 'Passionate Full-Stack AI Developer with hands-on experience in building intelligent systems. Specializing in\nGenerative AI, RAG pipelines, and Agentic AI workflows. Proficient in combining data analysis with backend\n(Python, FastAPI, Flask) and frontend development (React, JavaScript) using modern web frameworks.',
        'AI/ML Engineer': 'Results-driven AI/ML Engineer with expertise in developing end-to-end machine learning solutions. Strong\nbackground in Deep Learning, NLP, and Computer Vision using PyTorch and scikit-learn. Experienced in building\nproduction-ready ML models, data preprocessing pipelines, and deploying AI systems at scale.',
        'Agentic AI Engineer': 'Specialized Agentic AI Engineer focused on building autonomous AI systems and intelligent agents. Expert in\nLangChain, LangGraph, and CrewAI frameworks. Proven track record in developing RAG systems, multi-agent\nworkflows, and LLM-powered applications with advanced prompt engineering techniques.',
        'FARM Stack Developer': 'Full-Stack Developer proficient in FARM stack (FastAPI, React, MongoDB). Experienced in building scalable\nweb applications with modern architectures. Strong skills in RESTful API development, database design, and\nresponsive frontend interfaces. Passionate about creating efficient, user-centric solutions.',
        'Prompt Engineer': 'Expert Prompt Engineer with deep understanding of LLM capabilities and limitations. Skilled in crafting effective\nprompts for GPT-4, Claude, and other language models. Experience in optimizing AI outputs, building prompt\ntemplates, and implementing few-shot learning strategies for various business applications.',
        'Data/Business Analyst': 'Data-driven Business Analyst with strong analytical and problem-solving skills. Proficient in SQL, Python, Pandas,\nand visualization tools (Power BI, Tableau). Experienced in transforming raw data into actionable insights,\ncreating dashboards, and supporting data-driven decision-making processes.'
    };

    yPos += 10;
    const summaryLines = doc.splitTextToSize(summaries[role], 170);
    doc.text(summaryLines, 20, yPos);
    yPos += summaryLines.length * 5 + 8;

    // Core Skills - Role-specific
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('CORE SKILLS', 20, yPos);
    doc.line(20, yPos + 2, 190, yPos + 2);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);

    const skillSets = {
        'Full-Stack AI Developer': [
            '• AI/ML: Generative AI, LangChain, LangGraph, RAG Systems, Prompt Engineering, LLM Integration',
            '• Backend: Python, FastAPI, Flask, RESTful APIs, Microservices Architecture',
            '• Frontend: React, JavaScript, Tailwind CSS, Responsive Design, Modern UI/UX',
            '• Data: Pandas, NumPy, Data Preprocessing, Feature Engineering',
            '• Databases: MongoDB, PostgreSQL, SQL, Vector Databases',
            '• Tools: Git, Docker, VS Code, Jupyter Notebook, n8n, Postman'
        ],
        'AI/ML Engineer': [
            '• Machine Learning: Scikit-learn, Model Training, Hyperparameter Tuning, Cross-validation',
            '• Deep Learning: PyTorch, Neural Networks, CNNs, RNNs, Transfer Learning',
            '• NLP: SpaCy, Text Processing, Sentiment Analysis, Named Entity Recognition',
            '• Computer Vision: OpenCV, Image Processing, Object Detection',
            '• Data Science: Pandas, NumPy, SciPy, Matplotlib, Seaborn, Statistical Analysis',
            '• MLOps: Model Deployment, API Integration, Performance Monitoring'
        ],
        'Agentic AI Engineer': [
            '• Agentic Frameworks: LangChain, LangGraph, CrewAI, AutoGPT, Multi-agent Systems',
            '• LLM Integration: GPT-4, Claude, Llama, Groq, API Integration, Fine-tuning',
            '• RAG Systems: Vector Databases, Embeddings, Retrieval Strategies, Context Management',
            '• Prompt Engineering: Chain-of-Thought, Few-shot Learning, Prompt Optimization',
            '• Workflow Automation: n8n, Agent Orchestration, Task Decomposition',
            '• Tools: LangSmith, Pinecone, Chroma, Hugging Face, OpenAI API'
        ],
        'FARM Stack Developer': [
            '• Backend: FastAPI, Python, Async Programming, Pydantic, Dependency Injection',
            '• Frontend: React, JavaScript, Hooks, State Management, Component Architecture',
            '• Database: MongoDB, Mongoose, Aggregation Pipelines, Schema Design',
            '• API Development: RESTful APIs, WebSockets, Authentication, JWT, OAuth',
            '• Styling: Tailwind CSS, Responsive Design, CSS Grid, Flexbox',
            '• DevOps: Docker, Git, CI/CD, Cloud Deployment, Render, Vercel'
        ],
        'Prompt Engineer': [
            '• LLM Expertise: GPT-4, Claude, Llama 3, Gemini, Model Selection & Optimization',
            '• Prompt Techniques: Chain-of-Thought, Few-shot, Zero-shot, Role Prompting',
            '• Frameworks: LangChain, LangGraph, Prompt Templates, Output Parsing',
            '• Evaluation: A/B Testing, Quality Metrics, Response Validation',
            '• Applications: Chatbots, Content Generation, Code Assistance, Data Extraction',
            '• Tools: OpenAI Playground, Anthropic Console, LangSmith, Prompt Libraries'
        ],
        'Data/Business Analyst': [
            '• Data Analysis: Python, Pandas, NumPy, Statistical Analysis, Hypothesis Testing',
            '• Visualization: Power BI, Tableau, Matplotlib, Seaborn, Dashboard Creation',
            '• Database: SQL, PostgreSQL, MongoDB, Query Optimization, Data Modeling',
            '• Business Intelligence: KPI Development, Reporting, Trend Analysis, Forecasting',
            '• Tools: Excel (Advanced), Jupyter Notebook, Git, Data Cleaning & Transformation',
            '• Communication: Stakeholder Presentations, Data Storytelling, Report Writing'
        ]
    };

    yPos += 10;
    skillSets[role].forEach(skill => {
        doc.text(skill, 20, yPos);
        yPos += 5;
    });

    yPos += 5;

    // Professional Experience
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL EXPERIENCE', 20, yPos);
    doc.line(20, yPos + 2, 190, yPos + 2);

    yPos += 10;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Artificial Intelligence Intern', 20, yPos);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
    doc.text('Grow Your Skills | Bengaluru, Karnataka (Remote) | Jul 2025 - Oct 2025', 20, yPos + 5);

    doc.setFont('helvetica', 'normal');
    const expPoints = [
        '• Built end-to-end AI solutions covering data preprocessing, model development, and API deployment using Python',
        '• Developed LLM-based applications with exposure to agentic AI systems and autonomous workflows',
        '• Designed and optimized data analysis pipelines for intelligent automation use cases',
        '• Strengthened problem-solving skills through hands-on projects, mentorship, and continuous feedback'
    ];

    yPos += 11;
    expPoints.forEach(point => {
        const lines = doc.splitTextToSize(point, 170);
        doc.text(lines, 20, yPos);
        yPos += lines.length * 4.5;
    });

    yPos += 5;

    // Featured Projects
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('FEATURED PROJECTS', 20, yPos);
    doc.line(20, yPos + 2, 190, yPos + 2);

    yPos += 10;

    // Project 1
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Smart Academic Assistance', 20, yPos);

    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
    doc.text('Python | LangChain | RAG | Telegram Bot | Groq | Google Drive API', 20, yPos + 4);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    yPos += 8;
    const proj1Desc = doc.splitTextToSize('Production-ready Agentic RAG Telegram Bot with Dual-Brain architecture. Prioritizes strict answers from private Google Drive, seamlessly falling back to Llama 3 for general knowledge.', 170);
    doc.text(proj1Desc, 20, yPos);
    yPos += proj1Desc.length * 4 + 4;

    // Project 2
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.text('EasyML - ML Web Application', 20, yPos);

    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
    doc.text('Python | Flask | Scikit-learn | Machine Learning | Cloud Deployment', 20, yPos + 4);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    yPos += 8;
    const proj2Desc = doc.splitTextToSize('End-to-end web app for exploring data, training ML models, and running predictions. Streamlines the full ML workflow without needing notebooks or complex setup.', 170);
    doc.text(proj2Desc, 20, yPos);
    yPos += proj2Desc.length * 4 + 4;

    // Project 3
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.text('Heart Disease Prediction System', 20, yPos);

    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
    doc.text('Python | Machine Learning | Random Forest | EDA | Feature Engineering', 20, yPos + 4);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    yPos += 8;
    const proj3Desc = doc.splitTextToSize('ML project demonstrating full pipeline: data cleaning, EDA, model training, evaluation, and feature importance analysis with Random Forest Classifier.', 170);
    doc.text(proj3Desc, 20, yPos);

    // Education (if space allows)
    if (yPos < 250) {
        yPos += proj3Desc.length * 4 + 8;
        doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('EDUCATION', 20, yPos);
        doc.line(20, yPos + 2, 190, yPos + 2);

        yPos += 10;
        doc.setFontSize(11);
        doc.text('Bachelor of Technology (B.Tech)', 20, yPos);

        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
        doc.text('Computer Science & Engineering | Expected Graduation: 2026', 20, yPos + 5);
    }

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
    doc.setFont('helvetica', 'italic');
    doc.text('Portfolio: https://jasvanth-s.github.io/my_portfolio', 105, 285, { align: 'center' });

    // Download the PDF
    doc.save(`Jasvanth_S_CV_${role.replace(/\s+/g, '_').replace(/\//g, '_')}.pdf`);
};
