CREATE DATABASE careerpath_ai;

USE careerpath_ai;


-- STUDENT TABLE

CREATE TABLE students (

    student_id INT PRIMARY KEY AUTO_INCREMENT,

    name VARCHAR(100) NOT NULL,

    career_goal VARCHAR(100),

    interests VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


-- SKILLS TABLE

CREATE TABLE skills (

    skill_id INT PRIMARY KEY AUTO_INCREMENT,

    skill_name VARCHAR(100) NOT NULL

);


-- STUDENT SKILLS

CREATE TABLE student_skills (

    student_id INT,

    skill_id INT,

    PRIMARY KEY(student_id, skill_id),

    FOREIGN KEY(student_id)
        REFERENCES students(student_id),

    FOREIGN KEY(skill_id)
        REFERENCES skills(skill_id)

);


-- CAREER PATHS

CREATE TABLE career_paths (

    career_id INT PRIMARY KEY AUTO_INCREMENT,

    career_name VARCHAR(100) NOT NULL,

    description TEXT

);


-- CAREER REQUIRED SKILLS

CREATE TABLE career_skills (

    career_id INT,

    skill_id INT,

    PRIMARY KEY(career_id, skill_id),

    FOREIGN KEY(career_id)
        REFERENCES career_paths(career_id),

    FOREIGN KEY(skill_id)
        REFERENCES skills(skill_id)

);


-- COURSES

CREATE TABLE courses (

    course_id INT PRIMARY KEY AUTO_INCREMENT,

    course_name VARCHAR(200),

    skill_id INT,

    platform VARCHAR(100),

    FOREIGN KEY(skill_id)
        REFERENCES skills(skill_id)

);


-- PROJECTS

CREATE TABLE projects (

    project_id INT PRIMARY KEY AUTO_INCREMENT,

    project_name VARCHAR(200),

    description TEXT,

    career_id INT,

    FOREIGN KEY(career_id)
        REFERENCES career_paths(career_id)

);


-- ASSESSMENTS

CREATE TABLE assessments (

    assessment_id INT PRIMARY KEY AUTO_INCREMENT,

    assessment_name VARCHAR(200),

    skill_id INT,

    FOREIGN KEY(skill_id)
        REFERENCES skills(skill_id)

);


-- ASSESSMENT RESULTS

CREATE TABLE assessment_results (

    result_id INT PRIMARY KEY AUTO_INCREMENT,

    student_id INT,

    assessment_id INT,

    score INT,

    FOREIGN KEY(student_id)
        REFERENCES students(student_id),

    FOREIGN KEY(assessment_id)
        REFERENCES assessments(assessment_id)

);


-- RECOMMENDATIONS

CREATE TABLE recommendations (

    recommendation_id INT PRIMARY KEY AUTO_INCREMENT,

    student_id INT,

    recommendation_type VARCHAR(100),

    recommendation_text TEXT,

    FOREIGN KEY(student_id)
        REFERENCES students(student_id)

);


-- SAMPLE SKILLS

INSERT INTO skills(skill_name) VALUES
('HTML'),
('CSS'),
('JavaScript'),
('Java'),
('SQL'),
('Spring Boot'),
('Git'),
('Python'),
('Excel'),
('Statistics'),
('Power BI'),
('Machine Learning'),
('Pandas'),
('NumPy'),
('DSA'),
('OOPS');


-- SAMPLE CAREERS

INSERT INTO career_paths
(career_name, description)
VALUES

(
    'Full Stack Developer',
    'Develops frontend and backend web applications.'
),

(
    'Data Analyst',
    'Analyzes data and creates business insights.'
),

(
    'AI/ML Engineer',
    'Develops artificial intelligence and machine learning solutions.'
),

(
    'Software Developer',
    'Designs and develops software applications.'
);


-- SAMPLE COURSES

INSERT INTO courses
(course_name, skill_id, platform)
VALUES

(
    'HTML & CSS Fundamentals',
    1,
    'Online Learning'
),

(
    'Java Programming',
    4,
    'Online Learning'
),

(
    'SQL Fundamentals',
    5,
    'Online Learning'
),

(
    'JavaScript Fundamentals',
    3,
    'Online Learning'
);


-- SAMPLE PROJECTS

INSERT INTO projects
(project_name, description, career_id)
VALUES

(
    'AI Career Recommendation Platform',
    'Personalized career and learning recommendation system.',
    1
),

(
    'Student Placement Analytics',
    'Analytics dashboard for student placement data.',
    2
),

(
    'AI Career Prediction System',
    'Machine learning based career recommendation system.',
    3
),

(
    'Student Management System',
    'Java based student management application.',
    4
);