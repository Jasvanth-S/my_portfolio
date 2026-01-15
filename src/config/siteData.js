import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const siteData = {
    name: "Jasvanth. S",
    roles: [
        {
            title: "Generative AI Engineer",
            description: "Architecting next-generation AI systems powered by GPT, Claude, and custom LLMs. Expert in prompt engineering, RAG pipelines, and fine-tuning transformer models to deliver production-ready generative solutions."
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
    bio: "Passionate AI/ML engineer with expertise in generative AI, agentic systems, and full-stack development. I specialize in creating intelligent solutions using cutting-edge technologies like LangChain, RAG systems, and modern web frameworks.",
    email: "jasvanth1010@gmail.com",
    socials: [
        { name: "GitHub", url: "https://github.com/Jasvanth-S", icon: <FaGithub /> },
        { name: "LinkedIn", url: "https://linkedin.com/in/jasvanth1010", icon: <FaLinkedin /> },
        { name: "Email", url: "mailto:jasvanth1010@gmail.com", icon: <FaEnvelope /> },
    ],
    // Profile photo path - update this when you add your photo
    profilePhoto: "/assets/profile.png", // or "/assets/profile.jpg"
    // CV files for each role - update paths as needed
    cvFiles: [
        { role: "Generative AI Engineer", file: "/assets/cv/Jasvanth_CV_Generative_AI_Engineer.pdf" },
        { role: "AI/ML Engineer", file: "/assets/cv/Jasvanth_CV_AI_ML_Engineer.pdf" },
        { role: "Agentic AI Engineer", file: "/assets/cv/Jasvanth_CV_Agentic_AI_Engineer.pdf" },
        { role: "FARM Stack Developer", file: "/assets/cv/Jasvanth_CV_FARM_Stack_Developer.pdf" },
        { role: "Prompt Engineer", file: "/assets/cv/Jasvanth_CV_Prompt_Engineer.pdf" },
        { role: "Data/Business Analyst", file: "/assets/cv/Jasvanth_CV_Data_Business_Analyst.pdf" },
    ],
    skills: [
        { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "FastAPI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { name: "Flask", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Machine Learning", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "Deep Learning", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
        { name: "NLP", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
        { name: "OpenCV", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "Generative AI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
        { name: "Prompt Engineering", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
        { name: "Agentic AI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "LangChain", iconUrl: "https://api.iconify.design/simple-icons:langchain.svg?color=%2300F0FF" },
        { name: "LangGraph", iconUrl: "https://api.iconify.design/simple-icons:langchain.svg?color=%23FF6B6B" },
        { name: "CrewAI", iconUrl: "https://avatars.githubusercontent.com/u/170677839?s=200&v=4" },
        { name: "RAG Systems", iconUrl: "https://api.iconify.design/mdi:database-search.svg?color=%2300F0FF" },
        { name: "Pandas", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
        { name: "NumPy", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
        { name: "SciPy", iconUrl: "https://api.iconify.design/simple-icons:scipy.svg?color=%230054A6" },
        { name: "Seaborn", iconUrl: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" },
        { name: "Matplotlib", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
        { name: "SQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
        { name: "PowerBI", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        { name: "Tableau", iconUrl: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
        { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Git & GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
    projects: [
        {
            title: "Project One",
            description: "A cool project built with React and Tailwind.",
            image: "https://via.placeholder.com/400x250",
            github: "https://github.com",
            live: "https://example.com",
            tags: ["React", "Tailwind"],
        },
        {
            title: "Project Two",
            description: "Another awesome project.",
            image: "https://via.placeholder.com/400x250",
            github: "https://github.com",
            live: "https://example.com",
            tags: ["Python", "FastAPI"],
        },
        {
            title: "Project Three",
            description: "Yet another amazing creation.",
            image: "https://via.placeholder.com/400x250",
            github: "https://github.com",
            live: "https://example.com",
            tags: ["AI/ML", "LangChain"],
        },
    ],
};

export default siteData;
