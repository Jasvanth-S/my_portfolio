import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const siteData = {
    name: "Jasvanth. S",
    roles: [
        {
            title: "Full-Stack AI Developer",
            description: "Engineering intelligent full-stack applications that seamlessly integrate frontend interfaces with AI-driven backends. Specialized in deploying LLMs, RAG systems, agentic AI pipelines, and analytics engines into scalable web platforms using modern frameworks, APIs, and cloud-native architectures."
        },
        {
            title: "AI/ML Engineer",
            description: "Building end-to-end machine learning pipelines from data preprocessing to model deployment. Proficient in supervised, unsupervised, and reinforcement learning techniques using PyTorch, TensorFlow, and scikit-learn."
        },
        {
            title: "Agentic AI Engineer",
            description: "Creating intelligent autonomous agents with LangChain and CrewAI that can plan, reason, and execute complex multi-step tasks. Specialized in tool-calling, memory systems, and agent orchestration frameworks."
        },
        {
            title: "FARM Stack Developer",
            description: "Crafting modern, high-performance web applications using FastAPI for blazing-fast APIs, React for dynamic UIs, and MongoDB for flexible data storage. Delivering scalable full-stack solutions with clean architecture."
        },
        {
            title: "Prompt Engineer",
            description: "Mastering the art and science of AI communication. Designing advanced prompting strategies including chain-of-thought, few-shot learning, and system instructions to unlock maximum potential from language models."
        },
        {
            title: "Data/Business Analyst",
            description: "Converting raw data into strategic insights through advanced analytics, statistical modeling, and compelling visualizations. Leveraging SQL, Python, PowerBI, and Tableau to drive evidence-based business decisions."
        }
    ],
    bio: "Passionate Full-Stack AI Developer and Analyst with hands-on experience in building and evaluating intelligent systems. I specialize in Generative AI, RAG pipelines and Agentic AI workflows, combining data analysis with backend and frontend development using Python, FastAPI, React and modern web frameworks.",
    email: "jasvanth1010@gmail.com",
    socials: [
        { name: "GitHub", url: "https://github.com/Jasvanth-S", icon: <FaGithub /> },
        { name: "LinkedIn", url: "https://linkedin.com/in/jasvanth1010", icon: <FaLinkedin /> },
        { name: "Email", url: "mailto:jasvanth1010@gmail.com", icon: <FaEnvelope /> },
    ],
    // Profile photo path - update this when you add your photo
    profilePhoto: "/assets/profile.png", // or "/assets/profile.jpg"
    // CV files for each role - Add your actual PDF files to public/assets/cv/
    cvFiles: [
        { role: "Full-Stack AI Developer", file: "/assets/cv/Jasvanth_CV_Full_Stack_AI_Developer.pdf" },
        { role: "AI/ML Engineer", file: "/assets/cv/Jasvanth_CV_AI_ML_Engineer.pdf" },
        { role: "Agentic AI Engineer", file: "/assets/cv/Jasvanth_CV_Agentic_AI_Engineer.pdf" },
        { role: "FARM Stack Developer", file: "/assets/cv/Jasvanth_CV_FARM_Stack_Developer.pdf" },
        { role: "Prompt Engineer", file: "/assets/cv/Jasvanth_CV_Prompt_Engineer.pdf" },
        { role: "Data/Business Analyst", file: "/assets/cv/Jasvanth_CV_Data_Business_Analyst.pdf" },
    ],
    // Work Experience
    experience: [
        {
            role: "Artificial Intelligence Intern",
            company: "Grow Your Skills",
            location: "Bengaluru, Karnataka, India (Remote)",
            period: "Jul 2025 - Oct 2025",
            description:
                "Worked as an Artificial Intelligence Intern with a strong focus on Generative AI, applied machine learning and data analytics. Contributed to the development of LLM-powered applications, intelligent automation systems and agentic AI workflows.",
            achievements: [
                "Built end-to-end AI solutions covering data preprocessing, model development and API deployment using Python",
                "Developed LLM-based applications with exposure to agentic AI systems and autonomous workflows",
                "Designed and optimized data analysis pipelines for intelligent automation use cases",
                "Strengthened problem-solving skills through hands-on projects, mentorship and continuous feedback"
            ]
        },

        {
            role: "Data Analyst Intern",
            company: "Besant Technologies",
            location: "Coimbatore, Tamil Nadu, India (Remote)",
            period: "Aug 2025 - Sep 2025",
            description:
                "Completed a virtual internship in Data Analytics with hands-on experience in SQL, Power BI and Python. Focused on transforming raw datasets into meaningful insights through analysis and visualization.",
            achievements: [
                "Performed data analysis using SQL and Python to extract actionable business insights",
                "Designed interactive dashboards and reports using Power BI",
                "Improved data visualization and reporting clarity for better decision-making",
                "Gained practical exposure to real-world analytical workflows and reporting standards"
            ]
        },

        {
            role: "Data Visualization Intern (Power BI)",
            company: "Gateway Software Solutions",
            location: "Remote",
            period: "Apr 2025 - May 2025",
            description:
                "Worked on data visualization projects using Power BI, collaborating with teams to convert business requirements into interactive dashboards and reports.",
            achievements: [
                "Designed 4+ interactive Power BI dashboards to visualize sales and customer data",
                "Collaborated with stakeholders to gather requirements and translate them into visual reports",
                "Improved report clarity by approximately 30%, enabling faster data-driven decisions",
                "Applied best practices in dashboard design and data storytelling"
            ]
        },

        {
            role: "Web Development Intern",
            company: "Gateway Software Solutions",
            location: "Remote",
            period: "2025",
            description:
                "Contributed to web development projects with a focus on responsive design and performance optimization.",
            achievements: [
                "Developed and optimized web pages using modern HTML, CSS and JavaScript",
                "Collaborated with design and development teams to enhance UI/UX",
                "Improved layout performance and usability across devices",
                "Gained hands-on experience in real-world web development workflows"
            ]
        },

        {
            role: "Data Analyst Intern",
            company: "Edunet Foundation",
            location: "Remote",
            period: "Sep 2024 - Oct 2024",
            description:
                "Worked as a Data Analyst Intern focusing on data analysis, visualization and stakeholder reporting using Power BI and Python.",
            achievements: [
                "Analyzed datasets with 10,000+ records to extract insights for business decision-making",
                "Developed 5+ interactive Power BI dashboards, improving reporting clarity by 30%",
                "Optimized data collection workflows, increasing data accuracy by 15%",
                "Presented analytical insights to stakeholders, reducing decision-making time"
            ]
        }

    ],
    skills: [
        // Core Programming & Web
        { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },

        // Backend & APIs
        { name: "FastAPI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { name: "Flask", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },

        // AI / ML Core
        { name: "Machine Learning", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "Deep Learning", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
        
        // Generative AI & LLMs
        { name: "Generative AI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
        { name: "LLM", iconUrl: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
        { name: "Prompt Engineering", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },

        // Agentic AI & Frameworks
        { name: "Agentic AI", iconUrl: "https://cdn0.iconfinder.com/data/icons/ai-agent/512/ai-intelligent-agent-robot-03-256.png" },
        { name: "LangChain", iconUrl: "https://api.iconify.design/simple-icons:langchain.svg?color=%2300F0FF" },
        { name: "LangGraph", iconUrl: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langgraph-color.png" },
        { name: "CrewAI", iconUrl: "https://avatars.githubusercontent.com/u/170677839?s=200&v=4" },
        { name: "RAG Systems", iconUrl: "https://api.iconify.design/mdi:database-search.svg?color=%2300F0FF" },

        // Data Analysis & Visualization
        { name: "Pandas", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
        { name: "NumPy", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
        { name: "Matplotlib", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
        { name: "Seaborn", iconUrl: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" },

        // Databases & BI
        { name: "SQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
        { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Power BI", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        { name: "Tableau", iconUrl: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },

        // DevOps & Tools
        { name: "Git & GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "VS Code", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Jupyter Notebook", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "n8n", iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/n8n.png" },
    ],
    projects: [
        {
            title: "My_Portfolio",
            description: "My Personal portfolio showcasing my work in Generative AI, Agentic AI and full-stack development. It highlights projects, skills and experience in AI systems, intelligent agents, data analytics and scalable web applications built with modern technologies.",
            image: "https://avatars.githubusercontent.com/u/178203878?s=96&v=4",
            github: "https://github.com/Jasvanth-S/my_portfolio",
            live: "https://jasvanth-s.github.io/my_portfolio",
            tags: ["JavaScript", "HTML", "CSS", "React", "Tailwind CSS", "Framer Motion", "FCC", "Git & GitHub", "VS Code", "Google Antigravity", "Prompt Engineering"],
        },
        {
            title: "Smart_Academic_Assistance",
            description: "A production-ready Agentic RAG Telegram Bot with a 'Dual-Brain' architecture. It prioritizes strict answers from your private Google Drive, seamlessly falling back to Llama 3 (Groq) for general knowledge when files are missing. Bridges static docs with dynamic AI.",
            image: "https://avatars.githubusercontent.com/u/178203878?s=96&v=4",
            github: "https://github.com/Jasvanth-S/Smart_Academic_Assistance",
            live: "https://t.me/Academic_Smart_v1_bot",
            tags: ["Python", "FastAPI", "LangChain", "LangGraph", "CrewAI", "RAG Systems", "MongoDB", "Git & GitHub", "Docker", "Groq", "Telegram-bot", "Google Drive", "Llama 3", "OpenAI", "Google Sheets"],
        },
        {
            title: "Heart_Disease_Prediction",
            description: "A machine learning project for heart disease prediction using a Random Forest Classifier. This repository contains a Jupyter Notebook that details the full ML pipeline: data cleaning, EDA, model training, evaluation, and feature importance analysis. The project demonstrates how to save and use the trained model for making new predictions.",
            image: "https://avatars.githubusercontent.com/u/178203878?s=96&v=4",
            github: "https://github.com/Jasvanth-S/Heart_Disease_Prediction",

            tags: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Logistic Regression", "Random Forest Classifier", "Jupyter Notebook", "EDA", "Feature Importance", "Git & GitHub"],
        },
        {
            title: "EasyML",
            description: "EasyML is a lightweight, end-to-end web app that lets you explore tabular data, clean it, select features, choose and train machine learning models, visualize results, and run real‑time predictions—all through a simple, friendly UI. Built for CSV/XLSX datasets, it streamlines the full ML workflow without needing notebooks or complex setup.",
            image: "https://avatars.githubusercontent.com/u/178203878?s=96&v=4",
            github: "https://github.com/Jasvanth-S/EasyML",
            live: "https://easyml-webapp.onrender.com/",
            tags: ["Python", "AI/ML", "Flask", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Regression", "Classification", "Clustering", "Feature Selection", "Model Evaluation", "Git & GitHub", "Cloud Deployment", "Render"],
        },
        {
            title: "Love_Calculator",
            description: "The Love Calculator Web App is a simple and entertaining application built. It allows users to enter two names and generates a fun and playful love compatibility percentage. The goal of this app is to provide a light-hearted user experience while demonstrating how backend logic and frontend design can work together in a web application.",
            image: "https://avatars.githubusercontent.com/u/178203878?s=96&v=4",
            github: "https://github.com/Jasvanth-S/Love_Calculator",

            tags: ["Python", "Flask", "HTML", "CSS", "JavaScript", "React", "Mailtolink", "Git & GitHub"],
        },
        {
            title: "Trading_Prediction",
            description: "The Trading Prediction App is an interactive web application that uses machine learning to forecast short-term stock and cryptocurrency price movements. Built with Streamlit, Scikit-Learn, and Yahoo Finance (yfinance), it provides a simple yet powerful platform for exploring how AI can support basic trading decisions.",
            image: "https://avatars.githubusercontent.com/u/178203878?s=96&v=4",
            github: "https://github.com/Jasvanth-S/Trading_Prediction",

            tags: ["Python", "AI/ML", "FastAPI", "Streamlit", "LangChain", "Yahoo Finance", "SQlite3", "SQL", "DerivAPI", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Regression", "Feature Selection", "Model Evaluation", "Git & GitHub"],
        },
    ],
};

export default siteData;
