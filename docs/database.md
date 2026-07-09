# StudyOS Database Design

> Database Design Document (DDD)

**Version:** 1.0.0

**Project:** StudyOS

**Database:** PostgreSQL

**ORM:** Prisma

**Created By:** Lavkesh Mutha

**Status:** Planning

---

# Table of Contents

1. Overview
2. Database Philosophy
3. Database Architecture
4. Entity Relationship Overview
5. Core Entities
6. User Module
7. Semester Module
8. Subject Module
9. Unit Module
10. Topic Module
11. Subtopic Module
12. Resource Module
13. Assignment Module
14. Revision Module
15. Daily Journal Module
16. Calendar Module
17. Analytics Module
18. Zen AI Module
19. Notification Module
20. Settings Module
21. Authentication
22. Relationships
23. Indexing Strategy
24. Security
25. Backup Strategy
26. Future Expansion

---

# Overview

The StudyOS database is designed to serve as the central knowledge foundation of the application.

Unlike a traditional student management database, StudyOS stores not only academic information but also learning history, revision progress, AI memory, study analytics, and personalized recommendations.

The database follows a modular architecture where every academic object is interconnected.

Every resource, topic, assignment, journal entry, and AI conversation can be traced back to its related subject and semester.

The database is optimized for:

- Fast retrieval
- AI context generation
- Academic analytics
- Scalable architecture
- Long-term academic memory
- Personalized learning experiences

The primary goal is to ensure that Zen AI has access to structured academic data, enabling intelligent planning, revision scheduling, and academic assistance.

# Database Philosophy

## Purpose

The StudyOS database is designed around the concept of an Academic Operating System rather than a traditional student management system.

Instead of only storing records, the database captures the complete academic journey of a student, including learning progress, study habits, revision history, AI interactions, and long-term knowledge retention.

Every database entity should contribute to building a personalized academic memory for each student.

---

## Core Principles

### 1. User-Centric Design

Every piece of data belongs to a specific user.

No academic record should exist without an associated user.

---

### 2. Academic Hierarchy

StudyOS follows a strict academic hierarchy.

```
User
    ↓
Semester
    ↓
Subject
    ↓
Unit
    ↓
Topic
    ↓
Subtopic
    ↓
Resources
    ↓
Notes
    ↓
Revision
```

Every module should respect this hierarchy.

---

### 3. Modular Architecture

Each feature is represented by an independent module.

Examples:

- Users
- Subjects
- Assignments
- Calendar
- Resources
- Revision
- Analytics
- Zen AI

Modules communicate through relationships rather than duplicated data.

---

### 4. Single Source of Truth

Information should never be duplicated unnecessarily.

Each piece of data should exist in only one location.

Other modules should reference it using relationships.

---

### 5. Scalability

The database must support future features without major redesign.

Future examples include:

- Multi-user collaboration
- Teacher accounts
- Institution management
- Cloud synchronization
- AI memory expansion
- Mobile applications

---

### 6. Performance First

Database queries should remain fast even with large datasets.

Optimization strategies include:

- Proper indexing
- Normalized tables
- Efficient relationships
- Query optimization
- Pagination

---

### 7. AI-Ready Structure

Every academic object should be understandable by Zen AI.

This includes:

- Subjects
- Topics
- Resources
- Journal Entries
- Revision History
- Assignments
- Calendar Events

Zen AI should be able to retrieve relevant academic context with minimal database queries.

---

### 8. Historical Tracking

StudyOS should never overwrite important academic history.

Instead, it should preserve historical records whenever possible.

Examples:

- Previous revisions
- Old assignments
- Semester history
- Study sessions
- AI conversations

---

### 9. Security

Each user's academic data is private.

Users should only access their own data.

Future support should allow role-based permissions for:

- Students
- Teachers
- Administrators

---

### 10. Extensibility

Every table should support future expansion.

New columns and relationships should be easy to introduce without breaking the existing structure.

---

## Database Goals

The database should enable:

- Fast academic search
- Intelligent revision planning
- AI-powered recommendations
- Academic analytics
- Personalized learning
- Complete academic history
- Secure cloud synchronization
- Long-term scalability

---

## Expected Characteristics

The StudyOS database should be:

- Normalized
- Scalable
- Maintainable
- Secure
- AI-Friendly
- High Performance
- Modular
- Extensible
- Reliable
- Future-Proof
 
 # Database Architecture

## Purpose

The StudyOS database follows a modular, relational architecture designed for scalability, maintainability, security, and AI integration.

The architecture separates academic data into independent modules while maintaining strong relationships between them.

Every module has a single responsibility and communicates with other modules through foreign key relationships.

---

# Database Technology

Database Management System

- PostgreSQL

ORM

- Prisma ORM

Backend

- Next.js Server Actions
- Next.js API Routes

Authentication

- Clerk Authentication

Caching

- Redis (Future)

File Storage

- Cloudinary / AWS S3 (Future)

Search

- PostgreSQL Full Text Search
- AI Semantic Search (Future)

---

# Architecture Principles

The database follows these principles:

- Modular Design
- Normalized Structure
- Relationship Driven
- AI Ready
- Secure by Default
- Scalable
- Maintainable
- High Performance

---

# Database Modules

The StudyOS database is divided into the following logical modules.

## Authentication Module

Responsible for:

- User Login
- Registration
- Sessions
- Account Security

---

## Academic Module

Responsible for:

- Semesters
- Subjects
- Units
- Topics
- Subtopics

---

## Learning Module

Responsible for:

- Study Sessions
- Notes
- Daily Journal
- Learning Progress

---

## Resource Module

Responsible for:

- PDFs
- Books
- Videos
- Websites
- Question Banks
- Attachments

---

## Assignment Module

Responsible for:

- Assignments
- Homework
- Deadlines
- Submission Status

---

## Revision Module

Responsible for:

- Spaced Repetition
- Revision Queue
- Revision History
- Confidence Scores

---

## Calendar Module

Responsible for:

- Timetable
- Events
- Exams
- Study Sessions
- Reminders

---

## Analytics Module

Responsible for:

- Study Statistics
- Performance
- Attendance
- Productivity
- Reports

---

## Zen AI Module

Responsible for:

- Conversations
- AI Memory
- AI Recommendations
- Flashcards
- Quizzes
- Summaries

---

## Notification Module

Responsible for:

- Assignment Alerts
- Exam Alerts
- Revision Reminders
- Daily Plans
- AI Suggestions

---

## Settings Module

Responsible for:

- Preferences
- Themes
- Notifications
- Privacy
- Personalization

---

# Database Standards

Every table should contain:

- id
- createdAt
- updatedAt

Optional fields when required:

- deletedAt
- archivedAt

---

# Primary Keys

Every table uses:

UUID Version 4

Example

```
550e8400-e29b-41d4-a716-446655440000
```

Reasons:

- Globally Unique
- Better Security
- Easier Synchronization
- Cloud Ready

---

# Foreign Keys

Relationships must always use UUID foreign keys.

Example

Subject

↓

semesterId

↓

Semester.id

---

# Naming Convention

Tables

Plural

Examples

- users
- subjects
- assignments

Columns

camelCase

Examples

- createdAt
- updatedAt
- dueDate
- confidenceScore

Primary Key

id

Foreign Keys

userId

semesterId

subjectId

topicId

assignmentId

resourceId

---

# Timestamp Policy

Every table must include:

- createdAt
- updatedAt

Optional:

- deletedAt
- completedAt
- lastAccessedAt

---

# Soft Delete Strategy

Records should not be permanently deleted immediately.

Instead:

deletedAt

stores the deletion timestamp.

This enables:

- Restore
- Audit History
- AI Historical Context

---

# Indexing Strategy

Frequently queried columns should be indexed.

Examples:

- email
- userId
- semesterId
- subjectId
- topicId
- assignmentId
- dueDate
- createdAt

---

# File Storage Strategy

Large files should never be stored directly inside PostgreSQL.

Database stores:

- URL
- Metadata
- File Type
- File Size

Actual files stored in:

- Cloudinary
- AWS S3
- Local Storage (Development)

---

# Security Principles

Every query must verify ownership.

Example

User A

↓

Can only access

↓

User A's data

Never User B's data.

---

# Backup Strategy

Future support:

- Automatic Daily Backup
- Weekly Backup
- Monthly Snapshot
- Point-in-Time Recovery

---

# Scalability Goals

The architecture should support:

- Millions of records
- Multiple devices
- Offline synchronization
- Multi-semester history
- AI memory expansion
- Institution support
- Teacher accounts
- Team collaboration

---

# Future Architecture

Future improvements include:

- Read Replicas
- Database Sharding
- Distributed Caching
- Vector Database for AI Memory
- Event-Driven Architecture
- Multi-Tenant Support

# Entity Relationship Overview

## Purpose

The Entity Relationship Overview provides a high-level view of how all database entities interact within StudyOS.

Rather than functioning as isolated tables, every entity is connected to build a complete academic ecosystem.

These relationships enable Zen AI to understand a student's academic journey, generate personalized recommendations, and maintain long-term academic memory.

---

# Relationship Legend

Relationship Types

One-to-One (1:1)

One-to-Many (1:N)

Many-to-Many (N:N)

Primary Key (PK)

Foreign Key (FK)

---

# High-Level Entity Hierarchy

User
│
├── Semesters
│     │
│     ├── Subjects
│     │      │
│     │      ├── Units
│     │      │      │
│     │      │      ├── Topics
│     │      │      │      │
│     │      │      │      ├── Subtopics
│     │      │      │      │
│     │      │      │      ├── Resources
│     │      │      │      ├── Notes
│     │      │      │      ├── Revision
│     │      │      │      ├── Flashcards
│     │      │      │      └── Quizzes
│     │      │
│     │      ├── Assignments
│     │      ├── Attendance
│     │      └── Analytics
│     │
│     ├── Calendar
│     ├── Daily Journal
│     ├── Study Sessions
│     ├── Notifications
│     ├── Settings
│     └── Zen AI

---

# Core Relationships

User

↓

One User

↓

Many Semesters

Relationship

1:N

---

Semester

↓

One Semester

↓

Many Subjects

Relationship

1:N

---

Subject

↓

One Subject

↓

Many Units

Relationship

1:N

---

Unit

↓

One Unit

↓

Many Topics

Relationship

1:N

---

Topic

↓

One Topic

↓

Many Subtopics

Relationship

1:N

---

Subtopic

↓

One Subtopic

↓

Many Resources

Relationship

1:N

---

Topic

↓

One Topic

↓

Many Notes

Relationship

1:N

---

Topic

↓

One Topic

↓

Many Revision Records

Relationship

1:N

---

Topic

↓

One Topic

↓

Many Flashcards

Relationship

1:N

---

Topic

↓

One Topic

↓

Many Quiz Questions

Relationship

1:N

---

Subject

↓

One Subject

↓

Many Assignments

Relationship

1:N

---

Subject

↓

One Subject

↓

Many Calendar Events

Relationship

1:N

---

Subject

↓

One Subject

↓

Many Study Sessions

Relationship

1:N

---

User

↓

One User

↓

Many Journal Entries

Relationship

1:N

---

User

↓

One User

↓

Many Notifications

Relationship

1:N

---

User

↓

One User

↓

One Settings Record

Relationship

1:1

---

User

↓

One User

↓

Many Zen AI Conversations

Relationship

1:N

---

Zen AI Conversation

↓

One Conversation

↓

Many Messages

Relationship

1:N

---

# Entity Dependency Flow

User

↓

Semester

↓

Subject

↓

Unit

↓

Topic

↓

Subtopic

↓

Resources

↓

Revision

↓

Analytics

↓

Zen AI

---

# Cross Module Relationships

Assignments

↔ Subjects

Assignments

↔ Calendar

Assignments

↔ Notifications

Resources

↔ Topics

Resources

↔ Zen AI

Journal

↔ Revision

Journal

↔ Analytics

Calendar

↔ Revision

Calendar

↔ Assignments

Study Sessions

↔ Analytics

Study Sessions

↔ Journal

Zen AI

↔ Resources

Zen AI

↔ Notes

Zen AI

↔ Revision

Zen AI

↔ Assignments

Zen AI

↔ Calendar

Zen AI

↔ Analytics

---

# Data Flow

Student

↓

Creates Semester

↓

Adds Subjects

↓

Adds Units

↓

Adds Topics

↓

Uploads Resources

↓

Studies

↓

Creates Journal Entry

↓

Revision Generated

↓

Analytics Updated

↓

Zen AI Learns

↓

Personalized Recommendations

---

# Future Relationships

Institution

↓

Many Students

Teacher

↓

Many Subjects

Classroom

↓

Many Students

Groups

↓

Many Members

Shared Resources

↓

Multiple Users

Collaborative Notes

↓

Multiple Editors

---

# Relationship Goals

The entity relationships are designed to:

- Eliminate duplicate data
- Maintain data consistency
- Enable fast queries
- Support AI context retrieval
- Simplify analytics generation
- Improve scalability
- Enable future feature expansion
 
 # Core Entities

## Purpose

The Core Entities section provides an overview of every major database table used in StudyOS.

Each entity represents a specific domain of the application and is responsible for storing related academic information.

Together, these entities form the complete Academic Operating System.

---

# Entity Categories

The database is organized into the following logical categories:

- User Management
- Academic Structure
- Learning Management
- Resource Management
- Revision System
- Analytics
- Calendar & Scheduling
- AI Module
- Notifications
- Settings

---

# Core Entity List

## 1. Users

Purpose

Stores user profile, authentication details, preferences, and account information.

Primary Relationships

- Semesters
- Settings
- Notifications
- Zen AI Conversations
- Daily Journal
- Study Sessions

---

## 2. Semesters

Purpose

Stores semester information and groups all academic activities for a specific semester.

Primary Relationships

- User
- Subjects
- Calendar
- Analytics

---

## 3. Subjects

Purpose

Stores all academic subjects for a semester.

Primary Relationships

- Semester
- Units
- Assignments
- Resources
- Revision
- Analytics

---

## 4. Units

Purpose

Stores syllabus units belonging to a subject.

Primary Relationships

- Subject
- Topics

---

## 5. Topics

Purpose

Stores individual learning topics within each unit.

Primary Relationships

- Unit
- Subtopics
- Resources
- Notes
- Revision
- Flashcards
- Quizzes

---

## 6. Subtopics

Purpose

Stores smaller learning concepts under each topic.

Primary Relationships

- Topic
- Resources
- Notes

---

## 7. Resources

Purpose

Stores all academic learning resources.

Supported Types

- PDF
- Book
- PPT
- Image
- Video
- Audio
- Website
- GitHub Repository
- Google Drive Link
- Question Bank
- Previous Year Papers

Primary Relationships

- Subject
- Topic
- User

---

## 8. Notes

Purpose

Stores handwritten, typed, or AI-generated notes.

Primary Relationships

- Topic
- Resource
- User

---

## 9. Assignments

Purpose

Stores assignments, homework, projects, and submissions.

Primary Relationships

- Subject
- User
- Calendar

---

## 10. Revision Records

Purpose

Tracks every revision session and spaced repetition history.

Primary Relationships

- Topic
- User
- Analytics

---

## 11. Study Sessions

Purpose

Stores focus sessions, study timers, and productivity information.

Primary Relationships

- User
- Subject
- Analytics

---

## 12. Daily Journal

Purpose

Stores the student's daily academic activities and reflections.

Primary Relationships

- User
- Subject
- Revision
- Analytics

---

## 13. Calendar Events

Purpose

Stores lectures, exams, assignments, reminders, and study sessions.

Primary Relationships

- User
- Subject
- Assignment

---

## 14. Analytics

Purpose

Stores calculated academic statistics and performance metrics.

Primary Relationships

- User
- Subject
- Revision
- Study Sessions
- Journal

---

## 15. Flashcards

Purpose

Stores AI-generated and user-created flashcards.

Primary Relationships

- Topic
- User

---

## 16. Quizzes

Purpose

Stores quizzes, practice questions, and assessment results.

Primary Relationships

- Topic
- User
- Analytics

---

## 17. Zen AI Conversations

Purpose

Stores all conversations between the student and Zen AI.

Primary Relationships

- User
- AI Messages
- Resources
- Topics

---

## 18. AI Messages

Purpose

Stores individual messages within each AI conversation.

Primary Relationships

- Conversation

---

## 19. Notifications

Purpose

Stores reminders, alerts, AI recommendations, and system notifications.

Primary Relationships

- User

---

## 20. Settings

Purpose

Stores user preferences and application configuration.

Primary Relationships

- User

---

## 21. Achievements

Purpose

Stores badges, milestones, streaks, and academic achievements.

Primary Relationships

- User
- Analytics

---

## 22. Attendance

Purpose

Stores lecture attendance records for each subject.

Primary Relationships

- Subject
- User

---

## 23. Goals

Purpose

Stores personal academic goals such as target CGPA, study hours, and revision objectives.

Primary Relationships

- User
- Analytics

---

# Entity Dependency Order

The entities should be created in the following order during development:

1. Users
2. Semesters
3. Subjects
4. Units
5. Topics
6. Subtopics
7. Resources
8. Notes
9. Assignments
10. Calendar Events
11. Study Sessions
12. Revision Records
13. Daily Journal
14. Flashcards
15. Quizzes
16. Analytics
17. Zen AI Conversations
18. AI Messages
19. Notifications
20. Settings
21. Achievements
22. Attendance
23. Goals

---

# Total Planned Entities

Current Version

- 23 Core Entities

Future Expansion

- Teacher Module
- Institution Module
- Classroom Module
- Collaboration Module
- Marketplace Module
- Plugin System

---

# Design Goals

Every entity should:

- Have a single responsibility.
- Be properly normalized.
- Support future scalability.
- Maintain referential integrity.
- Be optimized for AI context retrieval.
- Minimize duplicate data.
- Support efficient querying.
  
  # User Module

## Purpose

The Users module is the foundation of the StudyOS database.

Every academic record belongs to a specific user.

The Users table stores profile information, authentication details, academic preferences, and account settings required throughout the application.

This entity acts as the root of the entire database hierarchy.

---

# Table Name

users

---

# Description

Stores all registered StudyOS users.

Every other module references this table directly or indirectly.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique identifier |
| clerkId | String | Unique, Not Null | Clerk Authentication ID |
| fullName | String | Not Null | User's full name |
| email | String | Unique, Not Null | User email address |
| username | String | Unique | Username |
| avatar | String | Nullable | Profile image URL |
| dateOfBirth | Date | Nullable | User birth date |
| gender | Enum | Nullable | Gender |
| phoneNumber | String | Nullable | Contact number |
| collegeName | String | Nullable | College |
| course | String | Nullable | Course |
| branch | String | Nullable | Branch |
| currentSemesterId | UUID | Nullable | Active semester |
| targetCGPA | Decimal | Nullable | Desired CGPA |
| currentCGPA | Decimal | Nullable | Current CGPA |
| timezone | String | Default UTC | User timezone |
| language | String | Default English | Preferred language |
| theme | Enum | Default System | UI Theme |
| onboardingCompleted | Boolean | Default False | Onboarding status |
| emailVerified | Boolean | Default False | Email verification |
| lastLoginAt | Timestamp | Nullable | Last login |
| createdAt | Timestamp | Default Now | Record creation |
| updatedAt | Timestamp | Auto Update | Last update |
| deletedAt | Timestamp | Nullable | Soft delete |

---

# Enumerations

## Theme

- Light
- Dark
- System
- AMOLED

---

## Gender

- Male
- Female
- Other
- Prefer Not To Say

---

# Relationships

Users

↓

One User

↓

Many Semesters

(1:N)

---

Users

↓

One User

↓

Many Subjects

(Indirect)

---

Users

↓

One User

↓

Many Journal Entries

(1:N)

---

Users

↓

One User

↓

Many Assignments

(1:N)

---

Users

↓

One User

↓

Many Study Sessions

(1:N)

---

Users

↓

One User

↓

Many Notifications

(1:N)

---

Users

↓

One User

↓

Many Zen AI Conversations

(1:N)

---

Users

↓

One User

↓

One Settings Record

(1:1)

---

# Indexes

Create indexes on:

- clerkId
- email
- username
- currentSemesterId
- createdAt

---

# Validation Rules

Email

- Must be unique
- Must be valid

Username

- Minimum 3 characters
- Maximum 30 characters
- Unique

Target CGPA

- Between 0 and 10

Current CGPA

- Between 0 and 10

---

# Business Rules

- One email can only belong to one account.
- One Clerk account maps to exactly one user.
- Users cannot permanently delete academic history.
- Users can have multiple semesters.
- Only one semester can be active at a time.
- All academic records must belong to a valid user.

---

# Example Record

```json
{
  "id": "uuid",
  "clerkId": "user_2abc123",
  "fullName": "Lavkesh Mutha",
  "email": "lavkesh@example.com",
  "username": "lavkeshm",
  "collegeName": "MIT-WPU",
  "course": "Diploma",
  "branch": "Computer Science",
  "targetCGPA": 9.5,
  "currentCGPA": 8.2,
  "theme": "Dark",
  "onboardingCompleted": true
}
```

---

# Security

- Row-level ownership enforced.
- Authentication via Clerk.
- Soft delete only.
- Email verification required.
- Sensitive data encrypted where applicable.

---

# Future Expansion

- Multiple Colleges
- Student Verification
- Premium Membership
- Mentor Accounts
- Parent Accounts
- Teacher Accounts
- Social Profiles
- Public Academic Portfolio

# Semester Module

## Purpose

The Semester module organizes the student's academic journey into distinct semesters.

Every academic record including subjects, assignments, resources, revisions, analytics, and journals belongs to a semester.

This allows StudyOS to maintain complete academic history while keeping current semester data organized.

---

# Table Name

semesters

---

# Description

Stores semester information for each user.

A user can have multiple semesters, but only one semester can be active at a time.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique semester identifier |
| userId | UUID | Foreign Key, Not Null | Owner of the semester |
| semesterNumber | Integer | Not Null | Semester number |
| semesterName | String | Not Null | Semester name |
| academicYear | String | Not Null | Academic year |
| startDate | Date | Not Null | Semester start date |
| endDate | Date | Not Null | Semester end date |
| totalCredits | Integer | Default 0 | Total semester credits |
| completedCredits | Integer | Default 0 | Completed credits |
| targetCGPA | Decimal | Nullable | Semester target CGPA |
| currentCGPA | Decimal | Nullable | Current semester CGPA |
| status | Enum | Default Active | Semester status |
| isCurrent | Boolean | Default False | Active semester flag |
| notes | Text | Nullable | Semester notes |
| createdAt | Timestamp | Default Now | Record creation |
| updatedAt | Timestamp | Auto Update | Last update |
| deletedAt | Timestamp | Nullable | Soft delete |

---

# Enumerations

## Semester Status

- Planned
- Active
- Completed
- Archived

---

# Relationships

Semester

↓

Belongs To

↓

One User

(N:1)

---

Semester

↓

Contains

↓

Many Subjects

(1:N)

---

Semester

↓

Contains

↓

Many Calendar Events

(1:N)

---

Semester

↓

Contains

↓

Many Journal Entries

(1:N)

---

Semester

↓

Contains

↓

Many Analytics Records

(1:N)

---

Semester

↓

Contains

↓

Many Study Sessions

(1:N)

---

# Indexes

Create indexes on:

- userId
- semesterNumber
- academicYear
- status
- isCurrent
- createdAt

---

# Validation Rules

Semester Number

- Greater than zero

Academic Year

Format:

2026-2027

Start Date

- Must be before End Date

Only one semester can have:

isCurrent = true

for a user.

---

# Business Rules

- A user may create multiple semesters.
- Only one semester can be active at any time.
- Subjects cannot exist without a semester.
- Completed semesters become read-only by default.
- Archived semesters remain accessible for analytics.
- Deleting a semester should soft delete all related records.

---

# Example Record

```json
{
  "id": "uuid",
  "userId": "uuid",
  "semesterNumber": 3,
  "semesterName": "Semester 3",
  "academicYear": "2026-2027",
  "startDate": "2026-07-01",
  "endDate": "2026-12-15",
  "targetCGPA": 9.5,
  "currentCGPA": 8.8,
  "status": "Active",
  "isCurrent": true
}
```

---

# Security

- Users can only access their own semesters.
- Soft delete only.
- Academic history must never be permanently removed without explicit confirmation.

---

# Future Expansion

- Trimester Support
- Quarter System Support
- Institution Templates
- Semester Cloning
- GPA Prediction
- Semester Comparison
- Multi-Campus Support
- Academic Calendar Integration

# Subject Module

## Purpose

The Subject module stores all academic subjects belonging to a semester.

It acts as the primary organizational entity for the student's academic journey.

Every unit, topic, resource, assignment, revision, attendance record, analytics report, study session, and AI recommendation is directly or indirectly associated with a subject.

The Subject module enables StudyOS to provide subject-wise planning, analytics, revision scheduling, and AI-powered academic assistance.

---

# Table Name

subjects

---

# Description

Stores all academic subjects created by a user for a particular semester.

A semester can contain multiple subjects.

Each subject serves as the parent entity for all learning content related to that subject.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique subject identifier |
| semesterId | UUID | Foreign Key, Not Null | Parent semester |
| userId | UUID | Foreign Key, Not Null | Owner of the subject |
| subjectCode | String | Nullable | Official subject code |
| subjectName | String | Not Null | Subject name |
| shortName | String | Nullable | Short display name |
| description | Text | Nullable | Subject description |
| facultyName | String | Nullable | Faculty/Incharge |
| facultyEmail | String | Nullable | Faculty email |
| classroom | String | Nullable | Classroom/Lab |
| credits | Integer | Default 0 | Credit value |
| totalUnits | Integer | Default 0 | Number of syllabus units |
| completedUnits | Integer | Default 0 | Completed units |
| totalTopics | Integer | Default 0 | Total topics |
| completedTopics | Integer | Default 0 | Completed topics |
| attendancePercentage | Decimal | Default 100 | Attendance percentage |
| progressPercentage | Decimal | Default 0 | Overall completion |
| confidenceScore | Decimal | Default 0 | AI confidence score |
| aiHealthScore | Decimal | Default 0 | AI subject health score |
| estimatedStudyHours | Integer | Default 0 | Estimated total study hours |
| actualStudyHours | Integer | Default 0 | Actual study hours |
| color | String | Nullable | UI theme color |
| icon | String | Nullable | Subject icon |
| priority | Enum | Default Medium | Study priority |
| difficulty | Enum | Default Medium | Subject difficulty |
| status | Enum | Default Active | Subject status |
| lastStudiedAt | Timestamp | Nullable | Last study session |
| createdAt | Timestamp | Default Now | Record creation |
| updatedAt | Timestamp | Auto Update | Last update |
| deletedAt | Timestamp | Nullable | Soft delete |

---

# Enumerations

## Priority

- Critical
- High
- Medium
- Low

---

## Difficulty

- Easy
- Medium
- Hard
- Very Hard

---

## Status

- Active
- Completed
- Archived

---

# Relationships

Subject

↓

Belongs To

↓

Semester

(N:1)

---

Subject

↓

Belongs To

↓

User

(N:1)

---

Subject

↓

Contains

↓

Many Units

(1:N)

---

Subject

↓

Contains

↓

Many Resources

(1:N)

---

Subject

↓

Contains

↓

Many Notes

(1:N)

---

Subject

↓

Contains

↓

Many Assignments

(1:N)

---

Subject

↓

Contains

↓

Many Calendar Events

(1:N)

---

Subject

↓

Contains

↓

Many Study Sessions

(1:N)

---

Subject

↓

Contains

↓

Many Revision Records

(1:N)

---

Subject

↓

Contains

↓

Many Analytics Records

(1:N)

---

Subject

↓

Contains

↓

Many Flashcards

(1:N)

---

Subject

↓

Contains

↓

Many Quizzes

(1:N)

---

# Indexes

Create indexes on:

- semesterId
- userId
- subjectName
- subjectCode
- facultyName
- status
- priority
- progressPercentage
- attendancePercentage
- createdAt

---

# Validation Rules

Subject Name

- Required
- Maximum 100 characters

Credits

- Greater than or equal to 0

Attendance Percentage

- Between 0 and 100

Progress Percentage

- Between 0 and 100

Confidence Score

- Between 0 and 100

AI Health Score

- Between 0 and 100

---

# Business Rules

- Every subject must belong to one semester.
- Every subject belongs to one user.
- Subject names should be unique within a semester.
- Progress is automatically calculated from completed topics.
- AI Health Score is continuously updated based on study behavior.
- Attendance is updated from attendance records.
- Subjects cannot be permanently deleted without confirmation.

---

# Example Record

```json
{
  "id": "uuid",
  "semesterId": "uuid",
  "userId": "uuid",
  "subjectCode": "CS301",
  "subjectName": "Database Management Systems",
  "facultyName": "Dr. Sharma",
  "credits": 4,
  "totalUnits": 6,
  "completedUnits": 2,
  "totalTopics": 42,
  "completedTopics": 15,
  "attendancePercentage": 92.5,
  "progressPercentage": 36,
  "confidenceScore": 74,
  "aiHealthScore": 81,
  "estimatedStudyHours": 90,
  "actualStudyHours": 41,
  "priority": "High",
  "difficulty": "Medium",
  "status": "Active"
}
```

---

# Security

- Users can only access their own subjects.
- Subject deletion uses soft delete.
- Progress statistics are system-generated.
- AI scores are read-only and updated automatically.

---

# Future Expansion

- Subject Templates
- AI Difficulty Prediction
- Attendance Synchronization
- LMS Integration
- Google Classroom Integration
- Collaborative Subjects
- Faculty Portal
- Smart Study Plans
- Subject Benchmarks
- AI Performance Forecasting

# Unit Module

## Purpose

The Unit module organizes the syllabus of a subject into logical sections.

Each unit represents a major chapter or section within a subject and contains multiple topics.

Units help students track syllabus completion, monitor progress, estimate study time, and organize learning resources efficiently.

Zen AI uses units to generate study plans, revision schedules, and progress analytics.

---

# Table Name

units

---

# Description

Stores syllabus units for a specific subject.

Each unit belongs to one subject and contains multiple topics.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique unit identifier |
| subjectId | UUID | Foreign Key, Not Null | Parent subject |
| userId | UUID | Foreign Key, Not Null | Owner of the unit |
| unitNumber | Integer | Not Null | Order of the unit |
| unitName | String | Not Null | Unit title |
| description | Text | Nullable | Unit description |
| learningObjectives | Text | Nullable | Learning outcomes |
| estimatedStudyHours | Integer | Default 0 | Estimated completion time |
| actualStudyHours | Integer | Default 0 | Actual study time |
| difficulty | Enum | Default Medium | Unit difficulty |
| importance | Enum | Default Medium | Exam importance |
| totalTopics | Integer | Default 0 | Number of topics |
| completedTopics | Integer | Default 0 | Completed topics |
| progressPercentage | Decimal | Default 0 | Completion percentage |
| confidenceScore | Decimal | Default 0 | AI confidence score |
| revisionCount | Integer | Default 0 | Total revisions |
| lastStudiedAt | Timestamp | Nullable | Last study session |
| nextRevisionAt | Timestamp | Nullable | Next scheduled revision |
| notes | Text | Nullable | Additional notes |
| createdAt | Timestamp | Default Now | Record creation |
| updatedAt | Timestamp | Auto Update | Last update |
| deletedAt | Timestamp | Nullable | Soft delete |

---

# Enumerations

## Difficulty

- Easy
- Medium
- Hard
- Very Hard

---

## Importance

- Critical
- High
- Medium
- Low

---

# Relationships

Unit

↓

Belongs To

↓

Subject

(N:1)

---

Unit

↓

Belongs To

↓

User

(N:1)

---

Unit

↓

Contains

↓

Many Topics

(1:N)

---

Unit

↓

Contains

↓

Many Resources (Indirect)

---

Unit

↓

Contains

↓

Many Notes (Indirect)

---

Unit

↓

Contains

↓

Many Revision Records (Indirect)

---

# Indexes

Create indexes on:

- subjectId
- userId
- unitNumber
- unitName
- progressPercentage
- difficulty
- importance
- createdAt

---

# Validation Rules

Unit Number

- Greater than zero
- Unique within a subject

Progress Percentage

- Between 0 and 100

Confidence Score

- Between 0 and 100

Estimated Study Hours

- Greater than or equal to zero

---

# Business Rules

- Every unit belongs to one subject.
- Unit numbers must be unique within a subject.
- Progress is automatically calculated from completed topics.
- Confidence Score is generated by Zen AI.
- Revision count updates automatically.
- Units cannot exist without a parent subject.

---

# Example Record

```json
{
  "id": "uuid",
  "subjectId": "uuid",
  "userId": "uuid",
  "unitNumber": 2,
  "unitName": "Normalization",
  "estimatedStudyHours": 8,
  "actualStudyHours": 5,
  "difficulty": "Medium",
  "importance": "High",
  "totalTopics": 7,
  "completedTopics": 4,
  "progressPercentage": 57,
  "confidenceScore": 72,
  "revisionCount": 3
}
```

---

# Security

- Users can only access their own units.
- Unit deletion uses soft delete.
- Progress values are system-generated.

---

# Future Expansion

- AI Unit Summaries
- Mind Maps
- Unit Templates
- Unit Prerequisites
- AI Difficulty Prediction
- Unit Health Score
- Voice Notes
- Collaborative Units

# Topic Module

## Purpose

The Topic module represents the smallest core learning unit within StudyOS.

Every learning activity revolves around topics.

Topics are used by Zen AI to generate study plans, revision schedules, quizzes, flashcards, notes, summaries, analytics, and personalized recommendations.

A topic belongs to exactly one unit and may contain multiple subtopics, resources, notes, revisions, and assessments.

---

# Table Name

topics

---

# Description

Stores all syllabus topics belonging to a unit.

Topics act as the central entity connecting nearly every academic module inside StudyOS.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique topic identifier |
| unitId | UUID | Foreign Key, Not Null | Parent unit |
| subjectId | UUID | Foreign Key, Not Null | Parent subject |
| userId | UUID | Foreign Key, Not Null | Owner |
| topicNumber | Integer | Not Null | Topic order |
| topicName | String | Not Null | Topic

# Subtopic Module

## Purpose

The Subtopic module represents detailed concepts within a topic.

Breaking topics into subtopics allows students to study smaller learning units, making progress tracking, revision scheduling, AI recommendations, and analytics much more accurate.

Zen AI uses subtopics to identify precise strengths and weaknesses instead of evaluating an entire topic as a single unit.

---

# Table Name

subtopics

---

# Description

Stores detailed learning concepts belonging to a topic.

Each subtopic acts as an individual learning object that can contain resources, notes, flashcards, quizzes, and revision history.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique subtopic identifier |
| topicId | UUID | Foreign Key, Not Null | Parent topic |
| unitId | UUID | Foreign Key, Not Null | Parent unit |
| subjectId | UUID | Foreign Key, Not Null | Parent subject |
| userId | UUID | Foreign Key, Not Null | Owner |
| subtopicNumber | Integer | Not Null | Order within topic |
| subtopicName | String | Not Null | Subtopic title |
| description | Text | Nullable | Description |
| learningObjectives | Text | Nullable | Learning goals |
| estimatedStudyMinutes | Integer | Default 0 | Estimated study duration |
| actualStudyMinutes | Integer | Default 0 | Actual study duration |
| difficulty | Enum | Default Medium | Learning difficulty |
| importance | Enum | Default Medium | Exam importance |
| completionStatus | Enum | Default Not Started | Current status |
| progressPercentage | Decimal | Default 0 | Completion percentage |
| confidenceScore | Decimal | Default 0 | AI confidence score |
| revisionCount | Integer | Default 0 | Total revisions |
| masteryLevel | Enum | Default Beginner | Learning mastery |
| lastStudiedAt | Timestamp | Nullable | Last study time |
| nextRevisionAt | Timestamp | Nullable | Next revision |
| createdAt | Timestamp | Default Now | Record creation |
| updatedAt | Timestamp | Auto Update | Last update |
| deletedAt | Timestamp | Nullable | Soft delete |

---

# Enumerations

## Difficulty

- Easy
- Medium
- Hard
- Very Hard

---

## Importance

- Critical
- High
- Medium
- Low

---

## Completion Status

- Not Started
- In Progress
- Completed
- Mastered

---

## Mastery Level

- Beginner
- Intermediate
- Advanced
- Expert

---

# Relationships

Subtopic

↓

Belongs To

↓

Topic

(N:1)

---

Subtopic

↓

Belongs To

↓

Unit

(N:1)

---

Subtopic

↓

Belongs To

↓

Subject

(N:1)

---

Subtopic

↓

Belongs To

↓

User

(N:1)

---

Subtopic

↓

Contains

↓

Many Resources

(1:N)

---

Subtopic

↓

Contains

↓

Many Notes

(1:N)

---

Subtopic

↓

Contains

↓

Many Flashcards

(1:N)

---

Subtopic

↓

Contains

↓

Many Quiz Questions

(1:N)

---

Subtopic

↓

Contains

↓

Many Revision Records

(1:N)

---

# Indexes

Create indexes on:

- topicId
- unitId
- subjectId
- userId
- subtopicName
- completionStatus
- confidenceScore
- nextRevisionAt
- createdAt

---

# Validation Rules

Subtopic Number

- Greater than zero

Progress Percentage

- Between 0 and 100

Confidence Score

- Between 0 and 100

Estimated Study Minutes

- Greater than or equal to zero

---

# Business Rules

- Every subtopic belongs to exactly one topic.
- Progress updates automatically based on study activity.
- Confidence Score is calculated by Zen AI.
- Revision schedule is automatically generated.
- Mastery Level changes based on quiz and revision performance.
- Subtopics cannot exist without a parent topic.

---

# Example Record

```json
{
  "id": "uuid",
  "topicId": "uuid",
  "unitId": "uuid",
  "subjectId": "uuid",
  "userId": "uuid",
  "subtopicNumber": 3,
  "subtopicName": "Third Normal Form (3NF)",
  "estimatedStudyMinutes": 45,
  "actualStudyMinutes": 38,
  "difficulty": "Medium",
  "importance": "High",
  "completionStatus": "Completed",
  "progressPercentage": 100,
  "confidenceScore": 86,
  "revisionCount": 4,
  "masteryLevel": "Advanced"
}
```

---

# Security

- Users can only access their own subtopics.
- Soft delete is enforced.
- AI-generated fields cannot be edited manually.

---

# Future Expansion

- AI Knowledge Graph
- Concept Dependencies
- Voice Explanations
- AI Difficulty Prediction
- Interactive Simulations
- Smart Learning Paths
- Concept Maps
- Collaborative Learning
# Resource Module

## Purpose

The Resource module serves as the centralized knowledge repository for StudyOS.

It stores and organizes every learning material associated with a student's academic journey.

Resources are intelligently linked to Subjects, Units, Topics, and Subtopics, allowing Zen AI to understand, analyze, summarize, and utilize academic content for personalized learning.

Rather than functioning as simple file storage, the Resource module transforms uploaded content into searchable academic knowledge.

---

# Table Name

resources

---

# Description

Stores all academic learning resources uploaded or linked by users.

Supports both uploaded files and external resources.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique resource identifier |
| userId | UUID | Foreign Key, Not Null | Owner |
| subjectId | UUID | Foreign Key | Related subject |
| unitId | UUID | Foreign Key | Related unit |
| topicId | UUID | Foreign Key | Related topic |
| subtopicId | UUID | Foreign Key | Related subtopic |
| title | String | Not Null | Resource title |
| description | Text | Nullable | Resource description |
| resourceType | Enum | Not Null | Type of resource |
| fileName | String | Nullable | Original filename |
| fileExtension | String | Nullable | Extension |
| mimeType | String | Nullable | MIME type |
| fileSize | BigInt | Nullable | Size in bytes |
| storageProvider | Enum | Default Local | Storage location |
| fileUrl | String | Nullable | Storage URL |
| thumbnailUrl | String | Nullable | Preview image |
| sourceUrl | String | Nullable | External link |
| author | String | Nullable | Author |
| publisher | String | Nullable | Publisher |
| language | String | Default English | Resource language |
| tags | JSON | Nullable | Custom tags |
| aiSummary | Text | Nullable | AI-generated summary |
| aiKeywords | JSON | Nullable | AI keywords |
| aiDifficulty | Enum | Nullable | AI detected difficulty |
| aiIndexed | Boolean | Default False | AI indexing status |
| totalViews | Integer | Default 0 | View count |
| lastViewedAt | Timestamp | Nullable | Last viewed |
| isFavorite | Boolean | Default False | Favorite flag |
| isArchived | Boolean | Default False | Archive status |
| createdAt | Timestamp | Default Now | Record creation |
| updatedAt | Timestamp | Auto Update | Last update |
| deletedAt | Timestamp | Nullable | Soft delete |

---

# Enumerations

## Resource Type

- PDF
- Book
- Notes
- PPT
- Image
- Video
- Audio
- Website
- YouTube
- GitHub
- Google Drive
- ZIP
- Document
- Spreadsheet
- Question Bank
- Previous Year Paper
- Lab Manual

---

## Storage Provider

- Local
- Cloudinary
- AWS S3
- Google Drive

---

## AI Difficulty

- Easy
- Medium
- Hard
- Very Hard

---

# Relationships

Resource

↓

Belongs To

↓

User

(N:1)

---

Resource

↓

Belongs To

↓

Subject

(N:1)

---

Resource

↓

Belongs To

↓

Unit

(N:1)

---

Resource

↓

Belongs To

↓

Topic

(N:1)

---

Resource

↓

Belongs To

↓

Subtopic

(N:1)

---

Resource

↓

Referenced By

↓

Zen AI

(1:N)

---

Resource

↓

Referenced By

↓

Flashcards

(1:N)

---

Resource

↓

Referenced By

↓

Quizzes

(1:N)

---

# Indexes

Create indexes on:

- userId
- subjectId
- unitId
- topicId
- subtopicId
- resourceType
- aiIndexed
- isFavorite
- createdAt
- lastViewedAt

---

# Validation Rules

Title

- Required
- Maximum 200 characters

File Size

- Must be greater than zero

Source URL

- Must be a valid URL

Resource Type

- Required

---

# Business Rules

- Every resource belongs to one user.
- A resource may optionally belong to a Subject, Unit, Topic, or Subtopic.
- Uploaded files are stored outside PostgreSQL.
- Database stores only metadata and references.
- AI automatically indexes supported resources.
- AI summaries are generated asynchronously.
- Deleting a resource uses soft delete.

---

# AI Processing Pipeline

When a supported resource is uploaded:

1. File Upload
2. Metadata Extraction
3. OCR (if required)
4. AI Content Analysis
5. Keyword Extraction
6. Summary Generation
7. Topic Detection
8. Subject Mapping
9. Flashcard Generation
10. Quiz Generation
11. Search Index Update

---

# Example Record

```json
{
  "id": "uuid",
  "userId": "uuid",
  "subjectId": "uuid",
  "topicId": "uuid",
  "title": "Database Normalization Notes",
  "resourceType": "PDF",
  "fileName": "dbms_normalization.pdf",
  "fileSize": 2457600,
  "storageProvider": "Cloudinary",
  "fileUrl": "https://...",
  "aiIndexed": true,
  "aiDifficulty": "Medium",
  "isFavorite": true
}
```

---

# Security

- Users can only access their own resources.
- Secure signed URLs for private files.
- Malware scanning before upload.
- Soft delete enabled.
- Encrypted cloud storage.

---

# Future Expansion

- AI Semantic Search
- OCR Improvements
- Automatic Topic Detection
- Duplicate Detection
- Version History
- Offline Downloads
- Collaborative Resources
- AI Citation Generator
- AI Mind Map Generation
- Vector Embeddings for Semantic Search
# Notes Module

## Purpose

The Notes module serves as the student's personal knowledge base.

It stores handwritten, typed, imported, and AI-generated notes while maintaining strong relationships with Subjects, Units, Topics, Resources, and Study Sessions.

Zen AI uses notes to generate summaries, quizzes, flashcards, revision plans, and personalized recommendations.

Every note becomes part of the student's long-term academic memory.

---

# Table Name

notes

---

# Description

Stores all notes created by the student or generated by Zen AI.

Notes can be linked to one or more academic entities and support rich text formatting.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique note identifier |
| userId | UUID | Foreign Key, Not Null | Owner |
| subjectId | UUID | Foreign Key | Related subject |
| unitId | UUID | Foreign Key | Related unit |
| topicId | UUID | Foreign Key | Related topic |
| subtopicId | UUID | Foreign Key | Related subtopic |
| resourceId | UUID | Foreign Key | Source resource |
| title | String | Not Null | Note title |
| content | Text | Not Null | Rich note content |
| summary | Text | Nullable | AI generated summary |
| noteType | Enum | Default Personal | Type of note |
| format | Enum | Default Markdown | Content format |
| tags | JSON | Nullable | User defined tags |
| aiKeywords | JSON | Nullable | AI extracted keywords |
| importance | Enum | Default Medium | Importance level |
| difficulty | Enum | Default Medium | Topic difficulty |
| confidenceScore | Decimal | Default 0 | AI confidence score |
| wordCount | Integer | Default 0 | Total words |
| readingTime | Integer | Default 0 | Estimated reading time (minutes) |
| revisionCount | Integer | Default 0 | Number of revisions |
| lastRevisedAt | Timestamp | Nullable | Last revision |
| lastViewedAt | Timestamp | Nullable | Last opened |
| isPinned | Boolean | Default False | Pinned note |
| isFavorite | Boolean | Default False | Favorite |
| isArchived | Boolean | Default False | Archive status |
| createdAt | Timestamp | Default Now | Record creation |
| updatedAt | Timestamp | Auto Update | Last update |
| deletedAt | Timestamp | Nullable | Soft delete |

---

# Enumerations

## Note Type

- Personal
- Lecture
- AI Generated
- Summary
- Formula Sheet
- Lab Note
- Revision Note

---

## Format

- Markdown
- Rich Text
- Plain Text

---

## Importance

- Critical
- High
- Medium
- Low

---

## Difficulty

- Easy
- Medium
- Hard
- Very Hard

---

# Relationships

Note

↓

Belongs To

↓

User

(N:1)

---

Note

↓

Belongs To

↓

Subject

(N:1)

---

Note

↓

Belongs To

↓

Unit

(N:1)

---

Note

↓

Belongs To

↓

Topic

(N:1)

---

Note

↓

Belongs To

↓

Subtopic

(N:1)

---

Note

↓

Created From

↓

Resource

(N:1)

---

Note

↓

Referenced By

↓

Zen AI

(1:N)

---

Note

↓

Used In

↓

Revision Sessions

(1:N)

---

# Indexes

Create indexes on:

- userId
- subjectId
- topicId
- noteType
- isPinned
- isFavorite
- createdAt
- updatedAt

---

# Validation Rules

Title

- Required
- Maximum 200 characters

Content

- Cannot be empty

Word Count

- Automatically calculated

Reading Time

- Automatically generated

---

# Business Rules

- Every note belongs to one user.
- Notes may optionally belong to a Subject, Unit, Topic, or Subtopic.
- AI summaries are regenerated whenever content changes.
- Notes support version history.
- Soft delete is mandatory.
- Revision count updates automatically.

---

# AI Features

Zen AI can:

- Summarize Notes
- Explain Notes
- Generate Flashcards
- Generate Quiz
- Find Weak Concepts
- Extract Key Points
- Create Mind Maps
- Translate Notes
- Improve Formatting

---

# Example Record

```json
{
  "id": "uuid",
  "userId": "uuid",
  "subjectId": "uuid",
  "topicId": "uuid",
  "title": "Normalization Short Notes",
  "noteType": "Lecture",
  "format": "Markdown",
  "importance": "High",
  "wordCount": 1240,
  "readingTime": 6,
  "confidenceScore": 81,
  "isPinned": true
}
```

---

# Security

- Users can only access their own notes.
- AI-generated notes are editable.
- Version history is preserved.
- Soft delete enabled.

---

# Future Expansion

- Real-time Collaborative Notes
- Handwriting Recognition
- Infinite Canvas
- Voice Notes
- AI Auto Note Generation
- Note Version History
- Embedded Drawings
- LaTeX Support
- Code Blocks
- AI Knowledge Graph Integration
# Assignment Module

## Purpose

The Assignment module manages the complete lifecycle of academic assignments, projects, homework, lab work, presentations, and submissions.

It enables students to organize tasks, track progress, manage deadlines, upload submissions, collaborate on group projects, and receive AI-powered planning assistance.

Zen AI continuously analyzes assignment deadlines, workload, difficulty, and study schedule to recommend the best completion strategy.

---

# Table Name

assignments

---

# Description

Stores all academic assignments, projects, lab work, presentations, and homework associated with a subject.

Supports both individual and group assignments.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique assignment identifier |
| userId | UUID | Foreign Key, Not Null | Owner |
| semesterId | UUID | Foreign Key | Parent semester |
| subjectId | UUID | Foreign Key | Related subject |
| unitId | UUID | Foreign Key | Related unit |
| topicId | UUID | Foreign Key | Related topic |
| title | String | Not Null | Assignment title |
| description | Text | Nullable | Assignment description |
| assignmentType | Enum | Not Null | Assignment type |
| priority | Enum | Default Medium | Priority level |
| difficulty | Enum | Default Medium | Difficulty |
| status | Enum | Default Not Started | Current status |
| totalMarks | Integer | Nullable | Maximum marks |
| obtainedMarks | Decimal | Nullable | Marks obtained |
| estimatedHours | Integer | Default 0 | Estimated completion time |
| actualHours | Integer | Default 0 | Actual study time |
| progressPercentage | Decimal | Default 0 | Completion progress |
| aiCompletionScore | Decimal | Default 0 | AI completion prediction |
| aiRiskLevel | Enum | Default Low | Deadline risk |
| dueDate | Timestamp | Not Null | Submission deadline |
| submissionDate | Timestamp | Nullable | Actual submission time |
| reminderDate | Timestamp | Nullable | Reminder |
| submissionLink | String | Nullable | LMS/Portal link |
| attachmentCount | Integer | Default 0 | Total attachments |
| isGroupAssignment | Boolean | Default False | Group assignment |
| groupName | String | Nullable | Group name |
| facultyName | String | Nullable | Faculty |
| remarks | Text | Nullable | Additional remarks |
| createdAt | Timestamp | Default Now | Record creation |
| updatedAt | Timestamp | Auto Update | Last update |
| deletedAt | Timestamp | Nullable | Soft delete |

---

# Enumerations

## Assignment Type

- Homework
- Project
- Lab Work
- Presentation
- Report
- Viva
- Case Study
- Research Paper
- Practical
- Custom

---

## Priority

- Critical
- High
- Medium
- Low

---

## Difficulty

- Easy
- Medium
- Hard
- Very Hard

---

## Status

- Not Started
- In Progress
- Waiting
- Submitted
- Completed
- Overdue
- Cancelled

---

## AI Risk Level

- Low
- Medium
- High
- Critical

---

# Relationships

Assignment

↓

Belongs To

↓

User

(N:1)

---

Assignment

↓

Belongs To

↓

Semester

(N:1)

---

Assignment

↓

Belongs To

↓

Subject

(N:1)

---

Assignment

↓

Belongs To

↓

Unit

(N:1)

---

Assignment

↓

Belongs To

↓

Topic

(N:1)

---

Assignment

↓

Linked To

↓

Calendar Events

(1:N)

---

Assignment

↓

Triggers

↓

Notifications

(1:N)

---

Assignment

↓

Analyzed By

↓

Zen AI

(1:N)

---

# Indexes

Create indexes on:

- userId
- semesterId
- subjectId
- dueDate
- status
- priority
- aiRiskLevel
- createdAt

---

# Validation Rules

Title

- Required
- Maximum 200 characters

Due Date

- Required

Progress Percentage

- Between 0 and 100

Marks

- Cannot be negative

Estimated Hours

- Greater than or equal to zero

---

# Business Rules

- Every assignment belongs to one user.
- Every assignment belongs to one subject.
- Assignment progress updates automatically.
- Overdue assignments are detected automatically.
- AI recalculates risk level every day.
- Submission date is automatically recorded.
- Soft delete is mandatory.

---

# AI Features

Zen AI can:

- Predict Completion Time
- Estimate Deadline Risk
- Break Assignment into Tasks
- Generate Work Schedule
- Recommend Study Sessions
- Detect Workload Conflicts
- Suggest Submission Timeline
- Summarize Assignment Requirements

---

# Example Record

```json
{
  "id": "uuid",
  "userId": "uuid",
  "subjectId": "uuid",
  "title": "DBMS Mini Project",
  "assignmentType": "Project",
  "priority": "High",
  "difficulty": "Hard",
  "status": "In Progress",
  "progressPercentage": 45,
  "estimatedHours": 12,
  "actualHours": 5,
  "aiCompletionScore": 82,
  "aiRiskLevel": "Medium",
  "dueDate": "2026-09-15T23:59:00Z"
}
```

---

# Security

- Users can only access their own assignments.
- Soft delete enabled.
- Submission history is preserved.
- AI-generated fields are read-only.

---

# Future Expansion

- LMS Integration
- Google Classroom Integration
- Microsoft Teams Integration
- Rubric Evaluation
- Peer Review
- Group Member Tracking
- Assignment Templates
- AI Auto-Grading
- Plagiarism Detection
- Version History
# Revision Module

## Purpose

The Revision module powers StudyOS's intelligent learning system using spaced repetition, AI recommendations, confidence scoring, and memory retention analysis.

It continuously tracks every revision session, predicts forgetting patterns, calculates retention scores, and generates personalized revision schedules.

Rather than simply storing revision history, the module actively determines the optimal time to revisit every topic.

---

# Table Name

revisions

---

# Description

Stores every revision session performed by the student.

Tracks revision history, confidence evolution, memory retention, quiz performance, and AI-generated revision schedules.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique revision record |
| userId | UUID | Foreign Key, Not Null | Owner |
| semesterId | UUID | Foreign Key | Related semester |
| subjectId | UUID | Foreign Key | Related subject |
| unitId | UUID | Foreign Key | Related unit |
| topicId | UUID | Foreign Key | Related topic |
| subtopicId | UUID | Foreign Key | Related subtopic |
| studySessionId | UUID | Foreign Key | Related study session |
| revisionNumber | Integer | Default 1 | Revision sequence |
| revisionType | Enum | Default Manual | Revision method |
| status | Enum | Default Scheduled | Revision status |
| scheduledAt | Timestamp | Not Null | Scheduled revision time |
| startedAt | Timestamp | Nullable | Revision start |
| completedAt | Timestamp | Nullable | Revision completion |
| durationMinutes | Integer | Default 0 | Time spent revising |
| confidenceBefore | Decimal | Default 0 | Confidence before revision |
| confidenceAfter | Decimal | Default 0 | Confidence after revision |
| retentionScore | Decimal | Default 0 | Knowledge retention |
| forgettingRisk | Enum | Default Medium | Forgetting probability |
| aiDifficulty | Enum | Default Medium | AI estimated difficulty |
| quizScore | Decimal | Nullable | Linked quiz score |
| revisionOutcome | Enum | Nullable | Revision result |
| nextRevisionAt | Timestamp | Nullable | Next AI-generated revision |
| aiRecommendation | Text | Nullable | AI recommendation |
| notes | Text | Nullable | Student notes |
| createdAt | Timestamp | Default Now | Record creation |
| updatedAt | Timestamp | Auto Update | Last update |
| deletedAt | Timestamp | Nullable | Soft delete |

---

# Enumerations

## Revision Type

- Manual
- Scheduled
- AI Recommended
- Exam Preparation
- Quick Review
- Flashcards
- Quiz Based

---

## Status

- Scheduled
- In Progress
- Completed
- Skipped
- Missed
- Cancelled

---

## Forgetting Risk

- Low
- Medium
- High
- Critical

---

## AI Difficulty

- Easy
- Medium
- Hard
- Very Hard

---

## Revision Outcome

- Mastered
- Improved
- Unchanged
- Needs More Practice

---

# Relationships

Revision

↓

Belongs To

↓

User

(N:1)

---

Revision

↓

Belongs To

↓

Semester

(N:1)

---

Revision

↓

Belongs To

↓

Subject

(N:1)

---

Revision

↓

Belongs To

↓

Unit

(N:1)

---

Revision

↓

Belongs To

↓

Topic

(N:1)

---

Revision

↓

Belongs To

↓

Subtopic

(N:1)

---

Revision

↓

Linked To

↓

Study Session

(N:1)

---

Revision

↓

Used By

↓

Analytics

(1:N)

---

Revision

↓

Analyzed By

↓

Zen AI

(1:N)

---

# Indexes

Create indexes on:

- userId
- semesterId
- subjectId
- topicId
- scheduledAt
- nextRevisionAt
- status
- retentionScore
- forgettingRisk
- createdAt

---

# Validation Rules

Revision Number

- Greater than zero

Duration

- Greater than or equal to zero

Confidence Scores

- Between 0 and 100

Retention Score

- Between 0 and 100

Quiz Score

- Between 0 and 100

---

# Business Rules

- Every revision belongs to one user.
- Every revision belongs to one topic.
- Revision history cannot be deleted permanently.
- Next revision is automatically calculated by Zen AI.
- Confidence scores update after every completed revision.
- Missed revisions increase forgetting risk.
- Retention score improves through successful revisions.
- Soft delete is mandatory.

---

# AI Features

Zen AI can:

- Schedule Next Revision
- Predict Forgetting Curve
- Estimate Memory Retention
- Recommend Revision Order
- Calculate Confidence Score
- Detect Weak Topics
- Generate Flashcards
- Generate Quiz
- Recommend Revision Method
- Predict Exam Readiness

---

# Example Record

```json
{
  "id": "uuid",
  "userId": "uuid",
  "subjectId": "uuid",
  "topicId": "uuid",
  "revisionNumber": 3,
  "revisionType": "AI Recommended",
  "status": "Completed",
  "durationMinutes": 28,
  "confidenceBefore": 62,
  "confidenceAfter": 87,
  "retentionScore": 84,
  "forgettingRisk": "Low",
  "nextRevisionAt": "2026-08-12T09:00:00Z"
}
```

---

# Security

- Users can only access their own revision history.
- AI-generated schedules cannot be manually modified without confirmation.
- Revision history is preserved permanently for analytics.
- Soft delete enabled.

---

# Future Expansion

- Adaptive Spaced Repetition Algorithm
- AI Forgetting Curve Prediction
- Memory Heatmap
- Voice-Based Revision
- Collaborative Revision
- Wearable Device Integration
- Offline Revision Sync
- Personalized Memory Model
- Exam Readiness Predictor
- Revision Gamification
# Study Session Module

## Purpose

The Study Session module records every focused study activity performed by the student.

It tracks when the student studies, what they study, how long they study, their productivity, distractions, breaks, and learning outcomes.

Study Sessions provide the primary data source for analytics, revision scheduling, productivity reports, and Zen AI recommendations.

---

# Table Name

study_sessions

---

# Description

Stores every study session created manually or automatically by StudyOS.

Sessions may be linked to Subjects, Topics, Revisions, Assignments, and Calendar Events.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique session identifier |
| userId | UUID | Foreign Key, Not Null | Owner |
| semesterId | UUID | Foreign Key | Related semester |
| subjectId | UUID | Foreign Key | Related subject |
| unitId | UUID | Foreign Key | Related unit |
| topicId | UUID | Foreign Key | Related topic |
| assignmentId | UUID | Foreign Key | Related assignment |
| revisionId | UUID | Foreign Key | Related revision |
| calendarEventId | UUID | Foreign Key | Related calendar event |
| sessionTitle | String | Not Null | Session title |
| sessionType | Enum | Default Self Study | Study type |
| sessionMode | Enum | Default Focus | Session mode |
| goal | Text | Nullable | Study goal |
| plannedDuration | Integer | Default 0 | Planned duration (minutes) |
| actualDuration | Integer | Default 0 | Actual duration (minutes) |
| focusScore | Decimal | Default 0 | AI-calculated focus score |
| productivityScore | Decimal | Default 0 | Productivity score |
| distractionCount | Integer | Default 0 | Number of distractions |
| breakCount | Integer | Default 0 | Number of breaks |
| completedTopics | Integer | Default 0 | Topics completed |
| notesCreated | Integer | Default 0 | Notes created |
| resourcesViewed | Integer | Default 0 | Resources opened |
| sessionStatus | Enum | Default Planned | Session status |
| startedAt | Timestamp | Nullable | Start time |
| endedAt | Timestamp | Nullable | End time |
| completedAt | Timestamp | Nullable | Completion time |
| aiFeedback | Text | Nullable | AI feedback |
| createdAt | Timestamp | Default Now | Record creation |
| updatedAt | Timestamp | Auto Update | Last update |
| deletedAt | Timestamp | Nullable | Soft delete |

---

# Enumerations

## Session Type

- Self Study
- College Lecture
- Revision
- Assignment
- Practice
- Lab
- Group Study
- Mock Test

---

## Session Mode

- Focus
- Pomodoro
- Deep Work
- Quick Revision
- Practice Mode

---

## Session Status

- Planned
- In Progress
- Paused
- Completed
- Cancelled
- Interrupted

---

# Relationships

Study Session

↓

Belongs To

↓

User

(N:1)

---

Study Session

↓

Belongs To

↓

Semester

(N:1)

---

Study Session

↓

Belongs To

↓

Subject

(N:1)

---

Study Session

↓

Belongs To

↓

Topic

(N:1)

---

Study Session

↓

Linked To

↓

Assignment

(N:1)

---

Study Session

↓

Linked To

↓

Revision

(N:1)

---

Study Session

↓

Linked To

↓

Calendar Event

(N:1)

---

Study Session

↓

Used By

↓

Analytics

(1:N)

---

Study Session

↓

Analyzed By

↓

Zen AI

(1:N)

---

# Indexes

Create indexes on:

- userId
- semesterId
- subjectId
- topicId
- sessionStatus
- sessionType
- startedAt
- completedAt
- focusScore
- createdAt

---

# Validation Rules

Planned Duration

- Greater than zero

Actual Duration

- Greater than or equal to zero

Focus Score

- Between 0 and 100

Productivity Score

- Between 0 and 100

---

# Business Rules

- Every session belongs to one user.
- Sessions may optionally link to assignments and revisions.
- Productivity Score is automatically calculated.
- Focus Score is generated by Zen AI.
- Session duration is calculated automatically.
- Soft delete is mandatory.

---

# AI Features

Zen AI can:

- Analyze Focus
- Detect Productivity Trends
- Recommend Break Timing
- Suggest Better Study Hours
- Identify Peak Performance Times
- Generate Daily Productivity Report
- Recommend Next Study Session
- Estimate Burnout Risk

---

# Example Record

```json
{
  "id": "uuid",
  "userId": "uuid",
  "subjectId": "uuid",
  "topicId": "uuid",
  "sessionTitle": "DBMS Normalization Revision",
  "sessionType": "Revision",
  "sessionMode": "Pomodoro",
  "plannedDuration": 60,
  "actualDuration": 58,
  "focusScore": 91,
  "productivityScore": 88,
  "distractionCount": 2,
  "breakCount": 1,
  "sessionStatus": "Completed"
}
```

---

# Security

- Users can only access their own study sessions.
- Session history is preserved.
- AI-generated scores are read-only.
- Soft delete enabled.

---

# Future Expansion

- Cross-device Session Sync
- Website/App Blocking Integration
- Eye Strain Detection
- Smart Break Recommendations
- Wearable Device Integration
- Heart Rate Monitoring
- Ambient Noise Analysis
- AI Burnout Detection
- Study Session Replay
- Voice-controlled Sessions
# Daily Journal Module

## Purpose

The Daily Journal module captures the complete academic activity of a student for each day.

It automatically records study sessions, completed topics, revisions, assignments, resources used, achievements, and AI-generated insights while allowing students to add personal reflections.

Rather than functioning as a traditional diary, the Daily Journal serves as the student's long-term academic memory, enabling Zen AI to understand learning patterns, productivity trends, and personal growth.

---

# Table Name

daily_journals

---

# Description

Stores one journal entry per user per day.

Journal entries combine automatic academic tracking with manual reflections.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique journal identifier |
| userId | UUID | Foreign Key, Not Null | Owner |
| semesterId | UUID | Foreign Key | Related semester |
| journalDate | Date | Not Null | Journal date |
| title | String | Nullable | Journal title |
| reflection | Text | Nullable | Student reflection |
| mood | Enum | Nullable | Mood |
| energyLevel | Integer | Default 5 | Energy (1–10) |
| motivationLevel | Integer | Default 5 | Motivation (1–10) |
| studyHours | Decimal | Default 0 | Total study hours |
| focusScore | Decimal | Default 0 | Average focus score |
| productivityScore | Decimal | Default 0 | Daily productivity |
| completedStudySessions | Integer | Default 0 | Sessions completed |
| completedTopics | Integer | Default 0 | Topics completed |
| completedRevisions | Integer | Default 0 | Revisions completed |
| completedAssignments | Integer | Default 0 | Assignments completed |
| resourcesUsed | Integer | Default 0 | Resources accessed |
| notesCreated | Integer | Default 0 | Notes created |
| streakDay | Integer | Default 0 | Current study streak |
| winsToday | JSON | Nullable | Daily achievements |
| challengesToday | JSON | Nullable | Challenges faced |
| tomorrowGoals | JSON | Nullable | Goals for tomorrow |
| aiSummary | Text | Nullable | AI-generated summary |
| aiSuggestions | JSON | Nullable | AI recommendations |
| createdAt | Timestamp | Default Now | Record creation |
| updatedAt | Timestamp | Auto Update | Last update |
| deletedAt | Timestamp | Nullable | Soft delete |

---

# Enumerations

## Mood

- Excellent
- Happy
- Calm
- Neutral
- Tired
- Stressed
- Frustrated

---

# Relationships

Daily Journal

↓

Belongs To

↓

User

(N:1)

---

Daily Journal

↓

Belongs To

↓

Semester

(N:1)

---

Daily Journal

↓

References

↓

Study Sessions

(1:N)

---

Daily Journal

↓

References

↓

Assignments

(1:N)

---

Daily Journal

↓

References

↓

Revision Records

(1:N)

---

Daily Journal

↓

Analyzed By

↓

Zen AI

(1:N)

---

# Indexes

Create indexes on:

- userId
- semesterId
- journalDate
- productivityScore
- focusScore
- createdAt

---

# Validation Rules

Journal Date

- Required
- One journal per user per day

Energy Level

- Between 1 and 10

Motivation Level

- Between 1 and 10

Focus Score

- Between 0 and 100

Productivity Score

- Between 0 and 100

---

# Business Rules

- Each user can have only one journal entry per day.
- Academic statistics are automatically populated from related modules.
- Manual reflections remain editable.
- AI summaries regenerate whenever daily activity changes.
- Journal history is never permanently deleted.
- Soft delete is mandatory.

---

# AI Features

Zen AI can:

- Generate Daily Summary
- Analyze Productivity
- Detect Learning Patterns
- Recommend Tomorrow's Plan
- Detect Burnout Risk
- Highlight Achievements
- Suggest Weak Areas
- Compare Previous Days
- Track Habit Formation
- Generate Weekly Reflection

---

# Example Record

```json
{
  "id": "uuid",
  "userId": "uuid",
  "journalDate": "2026-07-20",
  "studyHours": 5.5,
  "completedStudySessions": 4,
  "completedTopics": 6,
  "completedRevisions": 9,
  "completedAssignments": 1,
  "focusScore": 89,
  "productivityScore": 92,
  "streakDay": 17,
  "mood": "Happy",
  "energyLevel": 8,
  "motivationLevel": 9
}
```

---

# Security

- Users can only access their own journal.
- AI-generated summaries are editable only as personal notes.
- Historical journals are preserved.
- Soft delete enabled.

---

# Future Expansion

- Voice Journal
- Photo Journal
- Mood Timeline
- AI Reflection Coach
- Habit Tracker
- Gratitude Journal
- Weekly & Monthly Review
- Emotion Analysis
- Burnout Prediction
- Academic Timeline Visualization
# Calendar Module

## Purpose

The Calendar module serves as the centralized scheduling system for StudyOS.

It manages all academic events including lectures, assignments, examinations, study sessions, revision schedules, reminders, holidays, and AI-generated study plans.

Zen AI continuously analyzes the calendar to optimize workload, prevent schedule conflicts, recommend study timings, and improve academic productivity.

---

# Table Name

calendar_events

---

# Description

Stores all scheduled academic and personal events.

Supports both manually created events and automatically generated events from other StudyOS modules.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique event identifier |
| userId | UUID | Foreign Key, Not Null | Owner |
| semesterId | UUID | Foreign Key | Related semester |
| subjectId | UUID | Foreign Key | Related subject |
| assignmentId | UUID | Foreign Key | Related assignment |
| revisionId | UUID | Foreign Key | Related revision |
| studySessionId | UUID | Foreign Key | Related study session |
| title | String | Not Null | Event title |
| description | Text | Nullable | Event description |
| eventType | Enum | Not Null | Event category |
| priority | Enum | Default Medium | Priority level |
| status | Enum | Default Scheduled | Event status |
| startTime | Timestamp | Not Null | Event start |
| endTime | Timestamp | Not Null | Event end |
| durationMinutes | Integer | Default 0 | Event duration |
| location | String | Nullable | Venue |
| meetingLink | String | Nullable | Online meeting link |
| reminderMinutes | Integer | Default 30 | Reminder before event |
| recurrenceRule | String | Nullable | Recurring event rule |
| color | String | Nullable | Calendar color |
| isAllDay | Boolean | Default False | All-day event |
| aiImportance | Enum | Default Medium | AI importance |
| aiRecommendation | Text | Nullable | AI suggestion |
| completedAt | Timestamp | Nullable | Completion time |
| createdAt | Timestamp | Default Now | Record creation |
| updatedAt | Timestamp | Auto Update | Last update |
| deletedAt | Timestamp | Nullable | Soft delete |

---

# Enumerations

## Event Type

- Lecture
- Lab
- Assignment
- Examination
- Quiz
- Study Session
- Revision
- Personal
- Holiday
- Meeting
- Reminder
- Custom

---

## Priority

- Critical
- High
- Medium
- Low

---

## Status

- Scheduled
- In Progress
- Completed
- Missed
- Cancelled
- Postponed

---

## AI Importance

- Critical
- High
- Medium
- Low

---

# Relationships

Calendar Event

↓

Belongs To

↓

User

(N:1)

---

Calendar Event

↓

Belongs To

↓

Semester

(N:1)

---

Calendar Event

↓

Linked To

↓

Subject

(N:1)

---

Calendar Event

↓

Linked To

↓

Assignment

(N:1)

---

Calendar Event

↓

Linked To

↓

Revision

(N:1)

---

Calendar Event

↓

Linked To

↓

Study Session

(N:1)

---

Calendar Event

↓

Generates

↓

Notifications

(1:N)

---

Calendar Event

↓

Analyzed By

↓

Zen AI

(1:N)

---

# Indexes

Create indexes on:

- userId
- semesterId
- subjectId
- eventType
- status
- startTime
- endTime
- priority
- createdAt

---

# Validation Rules

Title

- Required
- Maximum 200 characters

Start Time

- Required

End Time

- Must be greater than Start Time

Reminder Minutes

- Greater than or equal to zero

---

# Business Rules

- Every event belongs to one user.
- Events may optionally link to assignments, revisions, or study sessions.
- Recurring events generate future calendar entries automatically.
- AI can suggest rescheduling but cannot modify events without user approval.
- Reminder notifications are generated automatically.
- Soft delete is mandatory.

---

# AI Features

Zen AI can:

- Optimize Daily Schedule
- Detect Schedule Conflicts
- Recommend Best Study Times
- Balance Workload
- Suggest Breaks
- Auto Schedule Revisions
- Auto Schedule Study Sessions
- Predict Busy Days
- Recommend Free Time Usage
- Generate Weekly Academic Plan

---

# Example Record

```json
{
  "id": "uuid",
  "userId": "uuid",
  "subjectId": "uuid",
  "title": "DBMS Revision Session",
  "eventType": "Revision",
  "priority": "High",
  "status": "Scheduled",
  "startTime": "2026-07-22T18:00:00Z",
  "endTime": "2026-07-22T19:00:00Z",
  "durationMinutes": 60,
  "reminderMinutes": 15,
  "aiImportance": "High"
}
```

---

# Security

- Users can only access their own calendar.
- Soft delete enabled.
- AI recommendations require user confirmation before modifying schedules.
- Calendar data is encrypted during synchronization.

---

# Future Expansion

- Google Calendar Sync
- Outlook Calendar Sync
- Apple Calendar Sync
- Time Zone Support
- Travel Time Estimation
- Smart Recurring Events
- Shared Calendars
- Team Study Scheduling
- AI Auto Scheduling
- Voice Event Creation
# Analytics Module

## Purpose

The Analytics module provides comprehensive insights into the student's academic performance, study habits, productivity, revision effectiveness, and learning progress.

Rather than simply displaying statistics, Analytics transforms raw academic data into actionable insights through AI-powered analysis.

Zen AI continuously analyzes trends to identify strengths, weaknesses, learning patterns, and opportunities for improvement.

---

# Table Name

analytics

---

# Description

Stores aggregated academic analytics and performance metrics.

Analytics are generated automatically from Study Sessions, Revisions, Assignments, Calendar Events, Notes, Resources, and Daily Journals.

This table primarily stores cached summaries for faster performance while raw data remains in their respective modules.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique analytics record |
| userId | UUID | Foreign Key, Not Null | Owner |
| semesterId | UUID | Foreign Key | Related semester |
| subjectId | UUID | Foreign Key | Related subject |
| analyticsDate | Date | Not Null | Analytics date |
| analyticsPeriod | Enum | Not Null | Daily/Weekly/Monthly |
| totalStudyHours | Decimal | Default 0 | Total study hours |
| totalStudySessions | Integer | Default 0 | Sessions completed |
| completedAssignments | Integer | Default 0 | Assignments completed |
| pendingAssignments | Integer | Default 0 | Pending assignments |
| completedRevisions | Integer | Default 0 | Revisions completed |
| revisionSuccessRate | Decimal | Default 0 | Revision effectiveness |
| completedTopics | Integer | Default 0 | Topics completed |
| completedUnits | Integer | Default 0 | Units completed |
| attendancePercentage | Decimal | Default 0 | Attendance |
| productivityScore | Decimal | Default 0 | Overall productivity |
| focusScore | Decimal | Default 0 | Average focus |
| consistencyScore | Decimal | Default 0 | Study consistency |
| retentionScore | Decimal | Default 0 | Knowledge retention |
| confidenceScore | Decimal | Default 0 | Overall confidence |
| academicHealthScore | Decimal | Default 0 | AI-calculated academic health |
| burnoutRisk | Enum | Default Low | Burnout prediction |
| aiInsights | JSON | Nullable | AI-generated insights |
| recommendations | JSON | Nullable | Personalized recommendations |
| createdAt | Timestamp | Default Now | Record creation |
| updatedAt | Timestamp | Auto Update | Last update |

---

# Enumerations

## Analytics Period

- Daily
- Weekly
- Monthly
- Semester
- Yearly

---

## Burnout Risk

- Low
- Medium
- High
- Critical

---

# Relationships

Analytics

↓

Belongs To

↓

User

(N:1)

---

Analytics

↓

Belongs To

↓

Semester

(N:1)

---

Analytics

↓

Belongs To

↓

Subject

(N:1)

---

Analytics

↓

Generated From

↓

Study Sessions

(1:N)

---

Analytics

↓

Generated From

↓

Revision Records

(1:N)

---

Analytics

↓

Generated From

↓

Assignments

(1:N)

---

Analytics

↓

Generated From

↓

Daily Journal

(1:N)

---

Analytics

↓

Consumed By

↓

Zen AI

(1:N)

---

# Indexes

Create indexes on:

- userId
- semesterId
- subjectId
- analyticsDate
- analyticsPeriod
- productivityScore
- academicHealthScore
- createdAt

---

# Validation Rules

Scores

- Between 0 and 100

Study Hours

- Greater than or equal to zero

Attendance

- Between 0 and 100

Analytics Date

- Required

---

# Business Rules

- Analytics are generated automatically.
- Users cannot manually edit analytics.
- Cached analytics refresh whenever source data changes.
- Historical analytics are preserved.
- One analytics record per period per user.
- Soft delete is not recommended for analytics history.

---

# AI Features

Zen AI can:

- Predict Semester Performance
- Detect Weak Subjects
- Identify Strong Subjects
- Predict Burnout
- Recommend Study Plans
- Optimize Revision Schedule
- Compare Weekly Progress
- Generate Academic Reports
- Recommend Productivity Improvements
- Forecast CGPA

---

# Example Record

```json
{
  "id": "uuid",
  "userId": "uuid",
  "semesterId": "uuid",
  "analyticsDate": "2026-07-20",
  "analyticsPeriod": "Weekly",
  "totalStudyHours": 32.5,
  "completedAssignments": 5,
  "completedRevisions": 18,
  "productivityScore": 91,
  "focusScore": 88,
  "consistencyScore": 86,
  "retentionScore": 84,
  "academicHealthScore": 89,
  "burnoutRisk": "Low"
}
```

---

# Security

- Users can only access their own analytics.
- Analytics are read-only.
- AI-generated metrics cannot be edited manually.
- Historical analytics are permanently preserved.

---

# Future Expansion

- Predictive CGPA Modeling
- AI Semester Forecasting
- Benchmark Against Previous Semesters
- Anonymous Peer Comparison
- Learning Style Detection
- Burnout Prevention Engine
- Career Readiness Score
- Goal Achievement Forecast
- AI Performance Coach
- Interactive Analytics Dashboard
# Zen AI Module

## Purpose

The Zen AI module serves as the intelligent academic assistant and long-term learning companion within StudyOS.

Unlike traditional AI chatbots, Zen AI maintains contextual awareness of the student's complete academic journey.

It continuously learns from study sessions, revision history, assignments, notes, uploaded resources, calendar events, analytics, and user preferences to deliver highly personalized academic guidance.

Zen AI functions as the cognitive layer of StudyOS, transforming structured academic data into intelligent recommendations, study plans, explanations, summaries, quizzes, flashcards, and long-term learning strategies.

---

# Module Architecture

The Zen AI module consists of multiple interconnected tables.

- ai_conversations
- ai_messages
- ai_memory
- ai_recommendations
- ai_generated_content
- ai_learning_profile

Each table has a specific responsibility to ensure scalability, maintainability, and efficient AI context retrieval.

---

# Table 1

## ai_conversations

### Purpose

Stores every conversation between the student and Zen AI.

---

### Columns

| Column | Type | Constraints | Description |
|---------|------|-------------|-------------|
| id | UUID | Primary Key | Conversation ID |
| userId | UUID | Foreign Key | Owner |
| title | String | Nullable | Conversation title |
| conversationType | Enum | Default Academic | Conversation category |
| totalMessages | Integer | Default 0 | Message count |
| lastMessageAt | Timestamp | Nullable | Last activity |
| createdAt | Timestamp | Default Now | Creation |
| updatedAt | Timestamp | Auto Update | Update |

---

## Conversation Types

- Academic
- Assignment
- Revision
- Notes
- Planning
- Resources
- Career
- General

---

# Table 2

## ai_messages

### Purpose

Stores every individual message.

---

### Columns

| Column | Type | Constraints | Description |
|---------|------|-------------|-------------|
| id | UUID | Primary Key | Message ID |
| conversationId | UUID | Foreign Key | Parent conversation |
| sender | Enum | User/AI | Sender |
| content | Text | Not Null | Message |
| tokenCount | Integer | Nullable | Token usage |
| contextUsed | JSON | Nullable | Academic context |
| createdAt | Timestamp | Default Now | Timestamp |

---

## Sender

- User
- Zen AI

---

# Table 3

## ai_memory

### Purpose

Stores long-term academic memory.

Zen AI remembers important academic information rather than every conversation.

Examples

- Weak topics
- Preferred study time
- Learning speed
- Favorite revision method
- Frequently forgotten concepts
- Exam patterns

---

### Columns

| Column | Type | Constraints | Description |
|---------|------|-------------|-------------|
| id | UUID | Primary Key | Memory ID |
| userId | UUID | Foreign Key | Owner |
| memoryType | Enum | Not Null | Memory category |
| title | String | Not Null | Memory title |
| memory | Text | Not Null | Stored memory |
| confidence | Decimal | Default 100 | Confidence |
| lastUsedAt | Timestamp | Nullable | Last retrieval |
| createdAt | Timestamp | Default Now | Creation |

---

## Memory Types

- Preference
- Weakness
- Strength
- Habit
- Goal
- Learning Style
- Academic Pattern

---

# Table 4

## ai_recommendations

### Purpose

Stores AI-generated recommendations.

Examples

- Revise DBMS today
- Complete Assignment 3
- Focus on Unit 5
- Increase study time
- Practice previous year questions

---

### Columns

| Column | Type | Constraints | Description |
|---------|------|-------------|-------------|
| id | UUID | Primary Key | Recommendation ID |
| userId | UUID | Foreign Key | Owner |
| category | Enum | Recommendation type |
| recommendation | Text | Not Null | Recommendation |
| priority | Enum | Default Medium | Priority |
| status | Enum | Default Pending | Status |
| generatedAt | Timestamp | Default Now | Generated |
| expiresAt | Timestamp | Nullable | Expiration |

---

# Recommendation Categories

- Study
- Revision
- Assignment
- Calendar
- Resource
- Analytics
- Productivity

---

# Table 5

## ai_generated_content

### Purpose

Stores educational content generated by Zen AI.

Examples

- Flashcards
- Quizzes
- Summaries
- Mind Maps
- Notes
- Study Plans

---

### Columns

| Column | Type | Constraints | Description |
|---------|------|-------------|-------------|
| id | UUID | Primary Key | Content ID |
| userId | UUID | Foreign Key | Owner |
| subjectId | UUID | Foreign Key | Related subject |
| topicId | UUID | Foreign Key | Related topic |
| contentType | Enum | Generated content |
| title | String | Title |
| content | JSON | Generated output |
| createdAt | Timestamp | Default Now | Creation |

---

## Generated Content Types

- Summary
- Quiz
- Flashcards
- Notes
- Mind Map
- Study Plan
- Practice Questions

---

# Table 6

## ai_learning_profile

### Purpose

Stores the AI's continuously evolving understanding of the student.

Examples

- Preferred study duration
- Best study time
- Focus pattern
- Weakest subject
- Strongest subject
- Average confidence
- Preferred learning style

---

### Columns

| Column | Type | Constraints | Description |
|---------|------|-------------|-------------|
| id | UUID | Primary Key | Profile ID |
| userId | UUID | Foreign Key | Owner |
| learningStyle | Enum | Learning preference |
| preferredStudyTime | String | Preferred study period |
| averageFocusScore | Decimal | Focus |
| strongestSubject | UUID | Subject |
| weakestSubject | UUID | Subject |
| averageConfidence | Decimal | Confidence |
| burnoutRisk | Enum | Burnout prediction |
| updatedAt | Timestamp | Auto Update | Last update |

---

# AI Relationships

Zen AI

↓

Reads

↓

Users

Semesters

Subjects

Units

Topics

Subtopics

Resources

Notes

Assignments

Revision

Study Sessions

Journal

Calendar

Analytics

Notifications

Settings

↓

Generates

↓

Recommendations

Flashcards

Quizzes

Study Plans

Summaries

Notes

Daily Plans

Weekly Reports

Exam Preparation Plans

---

# AI Business Rules

- AI never modifies academic data without user confirmation.
- AI memories are continuously updated.
- Conversations are preserved.
- Recommendations expire automatically.
- AI generated content can be edited by users.
- AI context is built from academic data rather than only chat history.

---

# Security

- AI conversations are private.
- AI memory belongs only to the user.
- Sensitive data is encrypted.
- AI context retrieval follows user permissions.
- Users can delete conversations without deleting long-term AI memories.

---

# Future Expansion

- Multi-Agent AI
- Voice Conversations
- Vision Support
- Real-Time Tutoring
- AI Debate Mode
- AI Coding Assistant
- AI Career Mentor
- AI Research Assistant
- AI Memory Graph
- Vector Database Integration
- Retrieval-Augmented Generation (RAG)
- Offline AI Models
# Notification Module

## Purpose

The Notification module manages all alerts, reminders, AI recommendations, academic updates, and system messages throughout StudyOS.

It ensures students stay informed about upcoming assignments, revisions, exams, study sessions, achievements, and AI suggestions without becoming overwhelming.

The notification system supports intelligent prioritization, scheduling, delivery tracking, and user preferences.

---

# Table Name

notifications

---

# Description

Stores every notification generated by StudyOS.

Notifications may be generated manually by the user, automatically by the system, or intelligently by Zen AI.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique notification identifier |
| userId | UUID | Foreign Key, Not Null | Notification owner |
| subjectId | UUID | Foreign Key | Related subject |
| assignmentId | UUID | Foreign Key | Related assignment |
| revisionId | UUID | Foreign Key | Related revision |
| studySessionId | UUID | Foreign Key | Related study session |
| calendarEventId | UUID | Foreign Key | Related calendar event |
| notificationType | Enum | Not Null | Notification category |
| title | String | Not Null | Notification title |
| message | Text | Not Null | Notification content |
| priority | Enum | Default Medium | Notification priority |
| status | Enum | Default Unread | Current status |
| deliveryChannel | Enum | Default In-App | Delivery method |
| scheduledAt | Timestamp | Nullable | Scheduled delivery |
| deliveredAt | Timestamp | Nullable | Delivery timestamp |
| readAt | Timestamp | Nullable | Read timestamp |
| expiresAt | Timestamp | Nullable | Expiration |
| actionUrl | String | Nullable | Navigation link |
| aiGenerated | Boolean | Default False | AI generated notification |
| createdAt | Timestamp | Default Now | Record creation |
| updatedAt | Timestamp | Auto Update | Last update |
| deletedAt | Timestamp | Nullable | Soft delete |

---

# Enumerations

## Notification Type

- Assignment Due
- Revision Reminder
- Study Reminder
- Exam Reminder
- Lecture Reminder
- Calendar Event
- Achievement
- Productivity Insight
- AI Recommendation
- Goal Completed
- Daily Summary
- Weekly Summary
- Monthly Report
- System Update
- Security Alert
- Custom

---

## Priority

- Critical
- High
- Medium
- Low

---

## Status

- Unread
- Read
- Archived
- Dismissed

---

## Delivery Channel

- In-App
- Push Notification
- Email
- SMS
- Desktop Notification

---

# Relationships

Notification

↓

Belongs To

↓

User

(N:1)

---

Notification

↓

References

↓

Assignment

(N:1)

---

Notification

↓

References

↓

Revision

(N:1)

---

Notification

↓

References

↓

Study Session

(N:1)

---

Notification

↓

References

↓

Calendar Event

(N:1)

---

Notification

↓

Generated By

↓

Zen AI

(1:N)

---

# Indexes

Create indexes on:

- userId
- notificationType
- priority
- status
- scheduledAt
- deliveredAt
- createdAt

---

# Validation Rules

Title

- Required
- Maximum 150 characters

Message

- Required

Scheduled Time

- Must be in the future

---

# Business Rules

- Every notification belongs to one user.
- Notifications can be scheduled.
- Critical notifications cannot be silently dismissed.
- AI-generated notifications are clearly identified.
- Expired notifications are archived automatically.
- Soft delete is mandatory.

---

# AI Features

Zen AI can:

- Prioritize Notifications
- Merge Similar Notifications
- Delay Non-Urgent Notifications
- Recommend Best Notification Time
- Detect Notification Fatigue
- Generate Smart Reminders
- Create Daily Digest
- Create Weekly Digest

---

# Example Record

```json
{
  "id": "uuid",
  "userId": "uuid",
  "notificationType": "Revision Reminder",
  "title": "Time to Revise DBMS",
  "message": "Your Normalization topic is scheduled for revision today.",
  "priority": "High",
  "status": "Unread",
  "deliveryChannel": "Push Notification",
  "aiGenerated": true
}
```

---

# Security

- Users only receive their own notifications.
- Sensitive notifications are encrypted.
- Notification history is preserved.
- Soft delete enabled.

---

# Future Expansion

- Smart Notification Bundling
- Cross-Device Sync
- WhatsApp Notifications
- Telegram Integration
- Slack Integration
- Apple Watch Support
- Android Wear Support
- AI Notification Prioritization
- Location-Based Notifications
- Voice Notifications
# Settings Module

## Purpose

The Settings module stores all user preferences, personalization options, privacy controls, notification preferences, AI behavior, and application configuration.

Rather than storing settings across multiple tables, StudyOS centralizes user preferences into a single configurable module.

This ensures every user has a personalized academic environment while allowing Zen AI to adapt recommendations based on individual preferences.

---

# Table Name

settings

---

# Description

Stores all application settings and user preferences.

Each user has exactly one settings record.

---

# Columns

| Column | Data Type | Constraints | Description |
|----------|-----------|-------------|-------------|
| id | UUID | Primary Key | Unique settings identifier |
| userId | UUID | Foreign Key, Unique | Owner |
| theme | Enum | Default System | UI theme |
| accentColor | String | Default Blue | Accent color |
| language | String | Default English | Preferred language |
| timezone | String | Default UTC | Time zone |
| dateFormat | Enum | Default DD/MM/YYYY | Date format |
| timeFormat | Enum | Default 24 Hour | Time format |
| firstDayOfWeek | Enum | Default Monday | Calendar preference |
| notificationsEnabled | Boolean | Default True | Master notification switch |
| emailNotifications | Boolean | Default True | Email notifications |
| pushNotifications | Boolean | Default True | Push notifications |
| reminderNotifications | Boolean | Default True | Study reminders |
| aiSuggestionsEnabled | Boolean | Default True | AI recommendations |
| aiAutoPlanning | Boolean | Default True | Automatic planning |
| aiMemoryEnabled | Boolean | Default True | Long-term AI memory |
| focusModeEnabled | Boolean | Default False | Focus mode |
| autoStartStudyTimer | Boolean | Default False | Auto timer |
| defaultStudyDuration | Integer | Default 60 | Minutes |
| breakDuration | Integer | Default 10 | Minutes |
| pomodoroEnabled | Boolean | Default False | Pomodoro mode |
| autoBackup | Boolean | Default True | Automatic backups |
| cloudSyncEnabled | Boolean | Default True | Cloud synchronization |
| analyticsEnabled | Boolean | Default True | Usage analytics |
| profileVisibility | Enum | Default Private | Profile visibility |
| createdAt | Timestamp | Default Now | Record creation |
| updatedAt | Timestamp | Auto Update | Last update |

---

# Enumerations

## Theme

- Light
- Dark
- AMOLED
- System

---

## Date Format

- DD/MM/YYYY
- MM/DD/YYYY
- YYYY/MM/DD

---

## Time Format

- 12 Hour
- 24 Hour

---

## First Day Of Week

- Monday
- Sunday

---

## Profile Visibility

- Private
- Friends
- Public

---

# Relationships

Settings

↓

Belongs To

↓

User

(1:1)

---

Settings

↓

Referenced By

↓

Zen AI

(1:N)

---

Settings

↓

Controls

↓

Notifications

(1:N)

---

Settings

↓

Controls

↓

Calendar

(1:N)

---

# Indexes

Create indexes on:

- userId
- language
- theme
- updatedAt

---

# Validation Rules

Default Study Duration

- Between 15 and 480 minutes

Break Duration

- Between 5 and 60 minutes

Timezone

- Must be a valid IANA timezone

Accent Color

- Must be a supported application color

---

# Business Rules

- Every user has exactly one settings record.
- Settings are automatically created during onboarding.
- Changes take effect immediately unless otherwise specified.
- Settings synchronize across all logged-in devices.
- AI respects user privacy and personalization settings.

---

# AI Features

Zen AI uses settings to:

- Personalize Study Plans
- Choose Notification Frequency
- Adjust Revision Schedule
- Respect Focus Hours
- Recommend Study Duration
- Adapt Learning Style
- Respect Privacy Preferences
- Customize Responses

---

# Example Record

```json
{
  "id": "uuid",
  "userId": "uuid",
  "theme": "Dark",
  "language": "English",
  "timezone": "Asia/Kolkata",
  "notificationsEnabled": true,
  "aiSuggestionsEnabled": true,
  "aiAutoPlanning": true,
  "defaultStudyDuration": 90,
  "breakDuration": 15,
  "cloudSyncEnabled": true,
  "profileVisibility": "Private"
}
```

---

# Security

- Only the owner can modify settings.
- Settings synchronize securely across devices.
- Privacy settings are enforced across all modules.
- Sensitive preferences are encrypted when necessary.

---

# Future Expansion

- Custom Themes
- Dynamic Color Palettes
- Multiple Profiles
- Device-Specific Settings
- AI Personality Modes
- Accessibility Presets
- Regional Academic Templates
- Plugin Configuration
- Experimental Features
- Advanced Developer Options