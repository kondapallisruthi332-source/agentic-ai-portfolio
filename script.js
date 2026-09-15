function generateRecommendation() {

    const name =
        document.getElementById("studentName").value.trim();

    const skillsInput =
        document.getElementById("skills").value.trim();

    const career =
        document.getElementById("career").value;

    const interests =
        document.getElementById("interests").value.trim();


    /* VALIDATION */

    if (name === "" ||
        skillsInput === "" ||
        career === "") {

        alert("Please complete your name, skills and career goal.");

        return;
    }


    /* CONVERT SKILLS TO ARRAY */

    const skills = skillsInput
        .toLowerCase()
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill !== "");


    /* REQUIRED SKILLS */

    const careerSkills = {

        "Full Stack Developer": [
            "html",
            "css",
            "javascript",
            "java",
            "sql",
            "spring boot",
            "git"
        ],

        "Data Analyst": [
            "sql",
            "excel",
            "python",
            "statistics",
            "power bi"
        ],

        "AI/ML Engineer": [
            "python",
            "machine learning",
            "statistics",
            "sql",
            "pandas",
            "numpy"
        ],

        "Software Developer": [
            "java",
            "dsa",
            "sql",
            "git",
            "oops"
        ]
    };


    const requiredSkills =
        careerSkills[career];


    /* FIND SKILL GAPS */

    const missingSkills =
        requiredSkills.filter(
            skill => !skills.includes(skill)
        );


    /* DISPLAY PROFILE */

    document.getElementById("resultName")
        .textContent = name;

    document.getElementById("resultCareer")
        .textContent = career;

    document.getElementById("resultInterests")
        .textContent =
        interests || "Not provided";


    /* DISPLAY SKILL GAPS */

    const skillGap =
        document.getElementById("skillGap");


    if (missingSkills.length === 0) {

        skillGap.innerHTML = `
            <p>
                🎉 Great! Your current skills cover
                the main requirements for this career.
            </p>
        `;

    } else {

        skillGap.innerHTML = `
            <p>
                You should focus on these skills:
            </p>

            <div>
                ${missingSkills.map(skill => `
                    <span class="skill-tag">
                        ${skill}
                    </span>
                `).join("")}
            </div>
        `;
    }


    /* LEARNING ROADMAP */

    const learningPath =
        document.getElementById("learningPath");


    let roadmap = [];


    if (career === "Full Stack Developer") {

        roadmap = [
            "Strengthen HTML & CSS fundamentals",
            "Learn JavaScript and DOM manipulation",
            "Master Java and Object-Oriented Programming",
            "Learn SQL and database design",
            "Learn Spring Boot and REST APIs",
            "Build a full-stack project",
            "Learn Git, GitHub and deployment"
        ];

    }


    else if (career === "Data Analyst") {

        roadmap = [
            "Strengthen SQL fundamentals",
            "Learn Excel for data analysis",
            "Learn Python basics",
            "Learn Pandas and NumPy",
            "Study statistics",
            "Learn Power BI",
            "Build data analysis projects"
        ];

    }


    else if (career === "AI/ML Engineer") {

        roadmap = [
            "Learn Python programming",
            "Study mathematics and statistics",
            "Learn NumPy and Pandas",
            "Learn machine learning fundamentals",
            "Study model evaluation",
            "Build ML projects",
            "Learn Generative AI and RAG"
        ];

    }


    else {

        roadmap = [
            "Strengthen Java programming",
            "Learn Object-Oriented Programming",
            "Practice Data Structures and Algorithms",
            "Learn SQL and databases",
            "Learn Git and GitHub",
            "Build software projects",
            "Prepare for technical interviews"
        ];
    }


    learningPath.innerHTML =
        roadmap.map((item, index) => `

            <div class="learning-item">

                <div class="learning-number">
                    ${index + 1}
                </div>

                <div>
                    ${item}
                </div>

            </div>

        `).join("");


    /* PROJECT RECOMMENDATION */

    const projectRecommendation =
        document.getElementById("projectRecommendation");


    const projects = {

        "Full Stack Developer":
            "Build an AI-powered Student Career & Learning Dashboard using HTML, CSS, JavaScript, Java, Spring Boot and MySQL.",

        "Data Analyst":
            "Build a Student Placement Analytics Dashboard using SQL, Python and Power BI.",

        "AI/ML Engineer":
            "Build a Student Career Recommendation System using Machine Learning and Generative AI.",

        "Software Developer":
            "Build a Student Placement Management System using Java, SQL and Spring Boot."
    };


    projectRecommendation.innerHTML = `
        <p>${projects[career]}</p>
    `;


    /* CERTIFICATION */

    const certification =
        document.getElementById("certification");


    const certifications = {

        "Full Stack Developer":
            "Java Full Stack Development + GitHub",

        "Data Analyst":
            "SQL + Data Analytics / Power BI",

        "AI/ML Engineer":
            "Machine Learning + Generative AI",

        "Software Developer":
            "Java + Data Structures & Algorithms"
    };


    certification.innerHTML = `
        <p>${certifications[career]}</p>
    `;


    /* RESULT HEADING */

    document.getElementById("resultTitle")
        .textContent =
        `${name}'s Personalized Career Analysis`;


    /* SCROLL TO RESULT */

    document.getElementById("results")
        .scrollIntoView({
            behavior: "smooth"
        });
}