# AI-Powered Personalized Learning & Career Intelligence Platform
## Hack With Vizag 4.0
### Problem Statement

Students have access to a large amount of educational content, courses, certifications, and career opportunities. However, many students do not know what skills they are missing, what they should learn next, or which career path is suitable for them.

Our solution provides personalized learning and career recommendations based on a student's academic profile, technical skills, interests, projects, assessment performance, and career goals.

## Our Solution

We are developing an AI-powered platform that analyzes a student's profile and generates a personalized learning and career pathway.

The platform helps students:

* Identify their current skills
* Find skill gaps
* Assess their knowledge
* Receive personalized learning recommendations
* Get project and certification suggestions
* Explore suitable career paths
* Track their learning progress

## Key Features

### 1. Student Profile

Students can enter their academic details, technical skills, interests, projects, certifications, and career goals.

### 2. Skill Gap Analysis

The system compares the student's current skills with the skills required for their selected career path and identifies missing skills.

### 3. Personalized Learning Path

Based on the identified skill gaps, the platform recommends a step-by-step learning path.

### 4. AI Career Guidance

The system provides career recommendations based on the student's profile, interests, skills, and goals.

### 5. Assessment

Students can take assessments to validate their knowledge and identify areas that require improvement.

### 6. Progress Tracking

Students can track completed skills, courses, projects, and assessments.

## How It Work

Student Profile
      ↓
Skills + Interests + Goals
      ↓
Assessment
      ↓
Skill Gap Analysis
      ↓
AI Recommendation Engine
      ↓
Personalized Learning Path
      ↓
Projects + Courses + Certifications
      ↓
Career Recommendation
```

## System Architecture


                ┌─────────────────────┐
                │      Student        │
                └──────────┬──────────┘
                           ↓
                ┌─────────────────────┐
                │   Web Application   │
                │   HTML/CSS/JS       │
                └──────────┬──────────┘
                           ↓
                ┌─────────────────────┐
                │   Backend / API     │
                │      Java           │
                └──────────┬──────────┘
                           ↓
          ┌────────────────┴────────────────┐
          ↓                                 ↓
┌─────────────────────┐          ┌─────────────────────┐
│      MySQL          │          │   AI Recommendation │
│   Student Data      │          │       Engine        │
└─────────────────────┘          └──────────┬──────────┘
                                            ↓
                              Personalized Recommendations
```

## Technology Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Java
* Spring Boot (planned/in development)

### Database

* MySQL

### AI

* Generative AI
* Recommendation logic
* RAG/AI integration (planned)

### Development Tools

* Visual Studio Code
* IntelliJ IDEA / Eclipse
* Git
* GitHub

## Database

The planned database contains tables such as:

* Students
* Skills
* Student_Skills
* Career_Paths
* Career_Skills
* Courses
* Projects
* Assessments
* Assessment_Results
* Recommendations

## Future Scope

The platform can be extended with:

* Advanced RAG-based career guidance
* AI chatbot
* Resume analysis
* Job-role matching
* Real-time job recommendations
* Learning analytics
* Adaptive assessments
* Certification recommendations

**Hack With Vizag 4.0**

Team members:

* k.sruthi
* ch.hima varshini
* m.haritha

## Project Status

 Prototype under development for Hack With Vizag 4.0.

The current prototype demonstrates the core concept of personalized learning, skill-gap analysis, and career recommendations.
