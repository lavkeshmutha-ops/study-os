# Dashboard

## Screen Type

Primary Screen — Landing Page

---

## Accessible From

- Sidebar Navigation
- Bottom Navigation (Mobile)
- App Launch (Default Screen)
- Logo Click

---

## Primary User

Student

---

## Permissions

- View: All authenticated users
- Create: Study sessions, journal entries
- Edit: Daily plan, preferences
- Delete: Completed tasks
- Export: Daily summary as PDF

---

## Keyboard Shortcuts

- `D` — Go to Dashboard
- `S` — Start Study Session
- `J` — Open Journal
- `N` — Quick Add (FAB)
- `Z` — Open Zen AI
- `/` — Focus Search
- `?` — Show All Shortcuts

---

## Performance Expectations

- Initial Load: < 2 seconds
- Card Data Refresh: < 500 milliseconds
- Study Timer: Real-time updates
- AI Recommendation Load: < 3 seconds
- Search Results: < 300 milliseconds

---

## Purpose

The Dashboard is the home screen of StudyOS.

It provides a complete overview of the student's academic life for the current day.

The student should immediately know:
- What to study
- What to revise
- What assignments are pending
- Which classes are scheduled
- Upcoming exams
- Current academic progress

The Dashboard should eliminate decision fatigue by showing only the most relevant information.

---

## Header

Contains:

- Welcome Message
- Current Date
- Current Time
- Semester Selector
- Search Bar
- Notification Icon
- Theme Toggle
- User Profile

---

## Hero Section

Displays:

- Today's Study Plan
- AI Daily Recommendation
- Available Study Time
- Motivation Quote
- Current Study Streak

Primary Button

- Start Studying

Secondary Button

- Ask Zen

---

## Dashboard Cards

### Today's Plan

Displays:

- Tasks for today
- Estimated study time
- Completion percentage

Actions:

- Start
- Edit
- Mark Complete

---

### Today's Classes

Displays:

- Subject
- Time
- Classroom
- Faculty
- Status

Actions:

- Open Subject
- Add Notes

---

### Revision Due

Displays:

- Topics due today
- Priority
- Confidence Score

Actions:

- Start Revision
- Skip
- Complete

---

### Assignments

Displays:

- Assignment Name
- Subject
- Deadline
- Priority
- Progress

Actions:

- Open
- Complete

---

### Upcoming Exams

Displays:

- Exam Name
- Subject
- Remaining Days
- Preparation Progress

Actions:

- Open Preparation Plan

---

### Study Progress

Displays:

- Today's Study Hours
- Weekly Progress
- Monthly Progress
- Semester Progress

---

### Study Streak

Displays:

- Current Streak
- Longest Streak
- Weekly Consistency

---

### Recent Activity

Displays:

- Recently Studied Topics
- Uploaded Resources
- Completed Revisions
- Completed Assignments

---

### Zen AI Card

Displays:

- Daily Recommendation
- Suggested Action
- Smart Insight

Actions:

- Open Chat
- Generate Study Plan

---

## Floating Action Button

Quick Add Menu

Options:

- Add Subject
- Add Assignment
- Add Resource
- Add Journal Entry
- Start Study Session

---

## Quick Actions

- Start Focus Session
- Upload Resource
- Open Calendar
- Open Analytics
- View Journal

---

## Navigation

Dashboard → Subject

Dashboard → Assignment

Dashboard → Revision

Dashboard → Journal

Dashboard → Calendar

Dashboard → Zen AI

---

## Empty State

If no semester exists:

Show onboarding wizard.

If no subjects exist:

Display:

"Create your first subject."

If no assignments exist:

Display:

"No pending assignments."

---

## Loading State

Display skeleton cards while data loads.

---

## Error State

Display:

- Error Message
- Retry Button

---

## Mobile Layout

Cards become vertically stacked.

Sidebar becomes Bottom Navigation.

Floating Action Button remains visible.

Hero Section collapses into a compact card.

---

## Zen AI Integration

- Generates personalized daily study plan on dashboard load
- Provides smart recommendations based on progress and deadlines
- Displays motivational insights and productivity tips
- Suggests optimal study sessions based on energy patterns
- Highlights topics at risk of being forgotten
- Powers the "Ask Zen" quick action button

---

## Related Screens

- Subjects — View and manage all subjects
- Assignments — Track pending assignments
- Revision — Access today's revision queue
- Daily Journal — Log daily academic activity
- Calendar — View upcoming schedule
- Analytics — Deep dive into study metrics
- Zen AI — Full AI assistant interface

---

## Future Enhancements

- AI Widgets
- Weather
- Smart Timetable
- Pomodoro Timer
- Focus Music
- AI Voice Assistant

# Subjects

## Screen Type

Primary Screen — Academic Hub

---

## Accessible From

- Sidebar Navigation
- Dashboard (Subject Cards)
- Bottom Navigation (Mobile)
- Global Search Results

---

## Primary User

Student

---

## Permissions

- View: All authenticated users
- Create: New subjects
- Edit: Subject details, metadata
- Delete: Own subjects (with confirmation)
- Export: Subject list, progress data as CSV

---

## Keyboard Shortcuts

- `N` — New Subject
- `/` — Focus Search
- `G` then `G` — Grid View
- `G` then `L` — List View
- `F` — Open Filters
- `S` — Sort Options
- `Ctrl+A` — Select All (Bulk Mode)

---

## Performance Expectations

- Initial Load: < 2 seconds
- Search Results: < 300 milliseconds
- Filter Application: < 200 milliseconds
- Subject Card Render: < 100 milliseconds
- View Toggle: < 200 milliseconds

---

## Purpose

The Subjects screen is the central academic hub where students manage every subject throughout the semester.

Each subject acts as an independent workspace containing its syllabus, resources, notes, assignments, revisions, analytics, and progress.

The screen should provide a quick overview of every subject while allowing students to drill down into detailed academic information.

---

## Header

Contains:

- Page Title
- Semester Selector
- Search Bar
- Filter Button
- Sort Button
- View Toggle (Grid/List)
- Add Subject Button

---

## Subject Overview

Displays:

- Total Subjects
- Completed Subjects
- Overall Semester Progress
- Average Completion Percentage
- Total Pending Topics

---

## Subject Grid

Each Subject Card displays:

- Subject Name
- Subject Code
- Faculty Name
- Credits
- Progress Ring
- Current Unit
- Completed Topics
- Pending Topics
- Assignments Pending
- Revision Due
- Attendance Percentage
- Last Updated

---

## Subject Card Actions

Primary Actions

- Open Subject

Secondary Actions

- Edit Subject
- Archive Subject
- Delete Subject

Quick Actions

- Add Topic
- Upload Resource
- Add Assignment
- Open Notes
- Start Revision

---

## Filters

Students should be able to filter subjects by:

- Current Semester
- Progress
- Completion
- Revision Due
- Assignment Pending
- Attendance
- Alphabetical Order

---

## Search

Search should support:

- Subject Name
- Subject Code
- Faculty Name
- Topic Name
- Resource Name

---

## View Modes

### Grid View

Displays subject cards.

### List View

Displays detailed table.

---

## Bulk Actions

- Archive Multiple Subjects
- Delete Multiple Subjects
- Export Subjects
- Import Subjects
- Bulk Upload Resources

---

## Quick Statistics

Displays:

- Total Units
- Total Topics
- Completed Topics
- Pending Topics
- Total Resources
- Total Notes
- Total Assignments
- Revision Completion

---

## Subject Status

Each subject should display:

- Active
- Completed
- Archived

---

## Floating Action Button

Quick Add

Options:

- New Subject
- Upload Resource
- Create Assignment
- Add Topic

---

## Navigation

Subjects → Subject Details

Subjects → Assignment

Subjects → Resources

Subjects → Revision

Subjects → Analytics

---

## Empty State

If no subjects exist:

Display:

📚 No Subjects Added

Create your first subject to begin your academic journey.

Primary Button:

Add Subject

---

## Loading State

Display subject card skeletons.

---

## Error State

Display:

Unable to load subjects.

Retry Button

---

## Mobile Layout

Grid becomes single-column cards.

Filter and Search become bottom sheets.

Floating Action Button remains visible.

---

## Zen AI Integration

- AI-generated subject health scores
- Smart suggestions for next topics to study per subject
- Predicted completion timelines based on study patterns
- Automated weak area detection across subjects
- Resource recommendations per subject
- Attendance prediction and risk alerts

---

## Related Screens

- Dashboard — Overview of all academic activity
- Subject Details — Detailed subject workspace
- Assignments — Subject-specific assignments
- Resources — Subject-linked materials
- Revision — Subject revision queue
- Analytics — Subject performance metrics
- Calendar — Subject-related events

---

## Future Enhancements

- Subject Color Customization
- AI Subject Health Score
- Attendance Prediction
- Smart Resource Suggestions
- Collaboration
- Subject Sharing

# Subject Details

## Screen Type

Detail Screen — Subject Workspace

---

## Accessible From

- Subjects Grid / List
- Dashboard (Subject Card)
- Assignments (Subject Link)
- Revision (Subject Link)
- Calendar (Event Link)
- Global Search Results

---

## Primary User

Student

---

## Permissions

- View: All authenticated users
- Create: Units, topics, resources, notes, assignments
- Edit: Subject info, units, topics, resources
- Delete: Own content (with confirmation)
- Export: Subject data, notes, resources as ZIP

---

## Keyboard Shortcuts

- `E` — Edit Subject
- `T` — Add Topic
- `U` — Add Unit
- `R` — Upload Resource
- `Tab` / `Shift+Tab` — Navigate Tabs
- `Esc` — Back to Subjects
- `Ctrl+S` — Save Changes

---

## Performance Expectations

- Initial Load: < 2 seconds
- Tab Switch: < 300 milliseconds
- Resource Upload Feedback: < 500 milliseconds
- Search Within Subject: < 300 milliseconds
- AI Content Generation: < 5 seconds

---

## Purpose

The Subject Details screen is the complete workspace for a single subject.

It contains everything related to that subject including syllabus, units, topics, resources, notes, assignments, revisions, analytics, and AI insights.

Students should never need to leave this page while studying a subject.

---

## Header

Contains:

- Subject Name
- Subject Code
- Faculty Name
- Credits
- Semester
- Attendance Percentage
- Overall Progress
- Search
- More Options

---

## Subject Overview

Displays:

- Overall Completion
- Current Unit
- Next Unit
- Total Topics
- Completed Topics
- Pending Topics
- Revision Due
- Assignments Pending
- Study Hours
- Last Studied

---

## Tabs

The page should contain the following tabs:

- Overview
- Syllabus
- Units
- Topics
- Resources
- Notes
- Assignments
- Revision
- Analytics
- Zen AI

---

## Syllabus

Displays:

- Total Units
- Unit Completion
- Overall Progress
- Estimated Remaining Time

Actions:

- Upload Syllabus
- Edit Syllabus

---

## Units

Each Unit displays:

- Unit Name
- Unit Number
- Progress
- Number of Topics
- Estimated Study Time
- Completion Status

Actions:

- Open Unit
- Edit Unit
- Delete Unit
- Add Topic

---

## Topics

Each Topic displays:

- Topic Name
- Difficulty
- Importance
- Completion Status
- Confidence Score
- Last Revised
- Next Revision

Actions:

- Open Topic
- Mark Complete
- Add Notes
- Add Resource
- Start Revision

---

## Subtopics

Displays:

- Subtopic Name
- Completion
- Notes Count
- Resource Count

Actions:

- Edit
- Delete
- Complete

---

## Resources

Displays:

- Books
- PDFs
- PPTs
- Videos
- Websites
- GitHub Repositories
- Drive Links
- Question Banks
- Previous Year Papers

Actions:

- Upload
- Download
- Delete
- Share

---

## Notes

Displays:

- Personal Notes
- Teacher Notes
- AI Generated Notes
- Summaries

Actions:

- Create
- Edit
- Delete
- Export
- Share

---

## Assignments

Displays:

- Assignment Name
- Deadline
- Status
- Marks
- Attachments

Actions:

- Open
- Complete
- Submit

---

## Revision

Displays:

- Revision Queue
- Completed Revisions
- Upcoming Revisions
- Missed Revisions

Actions:

- Start Revision
- Skip
- Complete

---

## Analytics

Displays:

- Completion Percentage
- Study Hours
- Attendance
- Revision Count
- Confidence Score
- Weak Topics
- Strong Topics
- Quiz Performance

---

## Zen AI

Displays:

- Subject Summary
- Weak Areas
- Recommended Topics
- Suggested Revision
- Generated Quiz
- Flashcards
- AI Explanation

Actions:

- Ask Question
- Generate Quiz
- Summarize Unit
- Explain Topic

---

## Search

Search inside the subject for:

- Units
- Topics
- Notes
- PDFs
- Resources
- Assignments

---

## Quick Actions

- Add Unit
- Add Topic
- Upload Resource
- Create Assignment
- Start Study Session
- Ask Zen

---

## Navigation

Subject → Unit

Subject → Topic

Topic → Notes

Topic → Revision

Topic → Resources

---

## Empty State

If no syllabus exists:

Display:

"Upload your syllabus to begin."

If no topics exist:

Display:

"Create your first topic."

---

## Loading State

Display skeleton loaders for every section.

---

## Error State

Display:

- Error Message
- Retry Button

---

## Mobile Layout

Tabs become horizontally scrollable.

Cards become stacked vertically.

Floating Action Button remains visible.

---

## Zen AI Integration

- Topic difficulty prediction and study time estimation
- Auto-generated summaries for units and topics
- Smart revision scheduling based on confidence scores
- AI-powered quiz and flashcard generation per topic
- Contextual explanations and Q&A within topics
- Dependency graph generation between topics

---

## Related Screens

- Subjects — Return to subjects grid
- Assignments — Subject-specific assignments
- Revision — Topic-level revision queue
- Resources — Subject resource library
- Daily Journal — Related journal entries
- Calendar — Subject-related events
- Zen AI — Full AI assistant with subject context

---

## Future Enhancements

- AI Topic Difficulty Prediction
- Smart Revision Suggestions
- Topic Dependency Graph
- Collaborative Notes
- Voice Notes
- AI Mind Maps

# Daily Journal

## Screen Type

Primary Screen — Academic Diary

---

## Accessible From

- Sidebar Navigation
- Dashboard (Journal Card)
- Bottom Navigation (Mobile)
- Quick Actions Menu

---

## Primary User

Student

---

## Permissions

- View: Own entries only
- Create: Journal entries, learning logs, reflections
- Edit: Own entries (same-day editable, past entries read-only)
- Delete: Own entries (with confirmation)
- Export: Journal entries as PDF, Markdown

---

## Keyboard Shortcuts

- `N` — New Entry
- `←` / `→` — Previous / Next Day
- `T` — Jump to Today
- `/` — Focus Search
- `Ctrl+S` — Save Entry
- `M` — Open Mood Selector
- `Esc` — Close Editor

---

## Performance Expectations

- Initial Load: < 2 seconds
- Entry Save: < 500 milliseconds
- Timeline Render: < 300 milliseconds
- AI Summary Generation: < 5 seconds
- Calendar Navigation: < 200 milliseconds

---

## Purpose

The Daily Journal is the student's academic diary.

It records everything learned throughout the day and becomes the foundation of the student's academic memory.

Every journal entry helps Zen AI understand the student's progress, generate future study plans, schedule revisions, and provide personalized recommendations.

Students should never lose track of what they learned on any day.

---

## Header

Contains:

- Current Date
- Calendar Picker
- Search Bar
- Filter Button
- Export Button
- New Entry Button

---

## Today's Overview

Displays:

- Study Goal
- Study Hours
- Classes Attended
- Topics Learned
- Assignments Completed
- Revision Completed
- Productivity Score

---

## Daily Timeline

Displays every activity performed during the day.

Examples:

- College Lectures
- Self Study
- Revision Sessions
- Assignment Work
- Practice Problems
- Quiz Attempts
- Resource Uploads

Each activity should display:

- Time
- Subject
- Activity Type
- Duration
- Status

---

## Learning Log

Students can record:

- Subject
- Unit
- Topic
- Subtopic
- Key Concepts Learned
- Important Points
- Doubts
- Questions Asked
- Teacher Instructions

---

## Homework

Displays:

- Homework Title
- Subject
- Deadline
- Status
- Priority

Actions:

- Mark Complete
- Edit
- Delete

---

## Assignments

Displays:

- Assignment Name
- Subject
- Progress
- Due Date

Actions:

- Open
- Complete
- Attach Files

---

## Study Sessions

Displays:

- Start Time
- End Time
- Duration
- Focus Score
- Subject
- Topics Covered

---

## Resources Added

Displays:

- PDFs
- Books
- PPTs
- Videos
- Websites
- Notes

Actions:

- Open
- Edit
- Delete

---

## Daily Reflection

Students answer:

- What did I learn today?
- What was difficult?
- What should I revise?
- What am I proud of today?
- What can I improve tomorrow?

---

## Mood Tracker

Students can select:

- Excellent
- Good
- Average
- Tired
- Stressed

---

## AI Summary

Zen AI automatically generates:

- Summary of today's learning
- Strong topics
- Weak topics
- Recommended revision
- Tomorrow's priorities

---

## AI Insights

Displays:

- Study consistency
- Productivity trend
- Learning pattern
- Revision suggestions
- Time management advice

---

## Attachments

Students can attach:

- PDFs
- Images
- Documents
- Audio Notes
- Videos

---

## Search

Search journal by:

- Date
- Subject
- Topic
- Assignment
- Resource
- Reflection
- Keywords

---

## Filters

Filter by:

- Date
- Subject
- Activity Type
- Study Hours
- Mood

---

## Quick Actions

- Add Learning
- Add Homework
- Add Assignment
- Start Study Session
- Upload Resource
- Ask Zen

---

## Navigation

Daily Journal → Subject

Daily Journal → Assignment

Daily Journal → Resources

Daily Journal → Zen AI

---

## Empty State

Display:

📖

No journal entry for today.

Start recording your academic journey.

Primary Button:

Create Today's Journal

---

## Loading State

Display skeleton cards while journal data loads.

---

## Error State

Display:

Unable to load journal.

Retry Button

---

## Mobile Layout

Timeline becomes vertical.

Cards stack vertically.

Floating Action Button remains visible.

---

## Zen AI Integration

- Auto-generates end-of-day learning summary
- Identifies strong and weak topics from daily entries
- Recommends next-day priorities based on journal data
- Tracks study consistency and productivity trends
- Suggests revision topics based on learning patterns
- Mood-aware study recommendations

---

## Related Screens

- Dashboard — Daily overview and quick stats
- Subjects — Subjects referenced in journal entries
- Assignments — Assignments worked on during the day
- Resources — Resources used during study sessions
- Revision — Topics flagged for revision
- Calendar — Day's scheduled events
- Analytics — Productivity and mood trends

---

## Future Enhancements

- Voice Journal
- AI Auto Journal from Timetable
- Handwriting Recognition
- Daily Learning Timeline
- Weekly Reflection
- Monthly Reflection
- AI Mood Analysis
- Smart Productivity Reports

# Assignments

## Screen Type

Primary Screen — Task Management

---

## Accessible From

- Sidebar Navigation
- Dashboard (Assignments Card)
- Subject Details (Assignments Tab)
- Calendar (Assignment Events)
- Bottom Navigation (Mobile)

---

## Primary User

Student

---

## Permissions

- View: All authenticated users
- Create: New assignments, subtasks, reminders
- Edit: Own assignments, status, priority
- Delete: Own assignments (with confirmation)
- Export: Assignment list as PDF, CSV

---

## Keyboard Shortcuts

- `N` — New Assignment
- `/` — Focus Search
- `K` — Kanban View
- `L` — List View
- `C` — Calendar View
- `F` — Open Filters
- `M` — Mark Complete
- `Ctrl+S` — Save Assignment

---

## Performance Expectations

- Initial Load: < 2 seconds
- View Switch: < 300 milliseconds
- Status Update: < 200 milliseconds
- File Upload Feedback: < 500 milliseconds
- AI Recommendation Load: < 3 seconds

---

## Purpose

The Assignments screen helps students manage, track, prioritize, and complete academic assignments efficiently.

It provides a centralized workspace for all assignments across subjects while helping students avoid missed deadlines through reminders, progress tracking, and AI-powered planning.

Zen AI should continuously monitor assignment deadlines and recommend when to start working on them based on the student's schedule and workload.

---

## Header

Contains:

- Page Title
- Search Bar
- Filter Button
- Sort Button
- Calendar View Toggle
- Add Assignment Button

---

## Assignment Overview

Displays:

- Total Assignments
- Completed Assignments
- Pending Assignments
- Overdue Assignments
- Due This Week
- Completion Percentage

---

## Assignment Views

Students can switch between:

- List View
- Kanban Board
- Calendar View

---

## Assignment Card

Each Assignment displays:

- Assignment Title
- Subject
- Faculty
- Due Date
- Priority
- Status
- Progress Percentage
- Estimated Completion Time
- Attachments Count

---

## Assignment Details

Displays:

- Title
- Description
- Subject
- Faculty
- Deadline
- Created Date
- Priority
- Status
- Marks
- Submission Method
- Submission Link
- Estimated Time
- Notes

---

## Status

Assignments can have:

- Not Started
- In Progress
- Waiting
- Completed
- Submitted
- Overdue

---

## Priority

Priority Levels:

- Critical
- High
- Medium
- Low

---

## Attachments

Students can attach:

- PDFs
- Images
- Documents
- ZIP Files
- Source Code
- External Links

Actions:

- Upload
- Preview
- Download
- Delete

---

## Subtasks

Each assignment can contain:

- Checklist
- Individual Tasks
- Progress Tracking

Actions:

- Add Task
- Complete Task
- Delete Task

---

## Reminders

Students can create reminders:

- 7 Days Before
- 3 Days Before
- 1 Day Before
- Same Day
- Custom Reminder

---

## AI Recommendations

Zen AI should display:

- Best time to complete the assignment
- Estimated completion duration
- Suggested study sessions
- Priority recommendation
- Deadline risk level

Actions:

- Generate Work Plan
- Break Into Smaller Tasks

---

## Filters

Filter assignments by:

- Subject
- Status
- Priority
- Deadline
- Faculty
- Completion

---

## Search

Search by:

- Assignment Name
- Subject
- Faculty
- Keywords

---

## Quick Actions

- Create Assignment
- Upload Attachment
- Mark Complete
- Ask Zen
- Export Assignment

---

## Navigation

Assignments → Subject

Assignments → Calendar

Assignments → Resources

Assignments → Zen AI

---

## Empty State

Display:

📝

No assignments available.

Create your first assignment to get started.

Primary Button:

Add Assignment

---

## Loading State

Display assignment skeleton cards while loading.

---

## Error State

Display:

Unable to load assignments.

Retry Button

---

## Mobile Layout

Cards stack vertically.

Kanban becomes swipeable.

Floating Action Button remains visible.

---

## Zen AI Integration

- Predicts optimal start time for each assignment
- Estimates completion duration based on complexity
- Auto-generates subtask breakdowns for large assignments
- Monitors deadline risk and sends proactive alerts
- Suggests study sessions to prepare for assignments
- Workload balancing across concurrent assignments

---

## Related Screens

- Dashboard — Assignment summary cards
- Subjects — Parent subject for each assignment
- Subject Details — Assignment tab within subject
- Calendar — Assignment deadlines on calendar
- Resources — Related reference materials
- Daily Journal — Assignment work logged in journal
- Zen AI — AI-powered work planning

---

## Future Enhancements

- OCR Assignment Scanner
- AI Deadline Prediction
- Smart Workload Balancer
- Group Assignments
- Assignment Templates
- Google Classroom Integration
- LMS Integration
- Auto Submission Checklist

# Revision

## Screen Type

Primary Screen — Spaced Repetition Engine

---

## Accessible From

- Sidebar Navigation
- Dashboard (Revision Card)
- Subject Details (Revision Tab)
- Calendar (Revision Events)
- Bottom Navigation (Mobile)

---

## Primary User

Student

---

## Permissions

- View: Own revision data
- Create: Manual revision entries, custom schedules
- Edit: Confidence scores, revision schedule
- Delete: Revision history (with confirmation)
- Export: Revision analytics as PDF, CSV

---

## Keyboard Shortcuts

- `S` — Start Today's Revision
- `Q` — Generate Quiz
- `F` — Generate Flashcards
- `N` — Next Topic
- `P` — Previous Topic
- `/` — Focus Search
- `Space` — Mark Complete
- `Esc` — Exit Revision Mode

---

## Performance Expectations

- Initial Load: < 2 seconds
- Revision Queue Render: < 500 milliseconds
- Quiz Generation: < 3 seconds
- Flashcard Generation: < 2 seconds
- Confidence Score Update: < 200 milliseconds

---

## Purpose

The Revision module ensures students retain knowledge through intelligent spaced repetition.

Instead of manually deciding what to revise, Zen AI automatically schedules revisions based on learning history, confidence scores, upcoming exams, and previous revision performance.

The goal is to maximize long-term retention while minimizing unnecessary repetition.

---

## Header

Contains:

- Page Title
- Search Bar
- Filter Button
- Sort Button
- Calendar View
- Revision Statistics

---

## Revision Overview

Displays:

- Today's Revision Tasks
- Completed Today
- Pending
- Missed
- Weekly Completion
- Average Confidence Score
- Upcoming Revisions

---

## Today's Revision Queue

Displays:

- Topic Name
- Subject
- Unit
- Estimated Time
- Confidence Score
- Revision Level
- Due Time

Actions:

- Start Revision
- Skip
- Mark Complete

---

## Revision Timeline

Displays:

- Morning Revision
- Afternoon Revision
- Evening Revision

Shows:

- Estimated Duration
- Priority
- Topic Count

---

## Revision Levels

Each topic should maintain a revision level.

Level 1

- First Revision

Level 2

- Second Revision

Level 3

- Third Revision

Level 4

- Fourth Revision

Level 5

- Mastered

---

## Topic Card

Displays:

- Topic Name
- Subject
- Unit
- Difficulty
- Confidence Score
- Last Revised
- Next Revision
- Total Revisions
- Study Time

Actions:

- Open Topic
- Revise
- Generate Quiz
- Generate Flashcards
- Ask Zen

---

## Revision Schedule

Displays:

- Today
- Tomorrow
- This Week
- Next Week
- Upcoming Month

---

## Spaced Repetition Engine

Automatically schedules revisions using:

- First Learning Date
- Previous Revision Date
- Confidence Score
- Quiz Performance
- Upcoming Exams
- Topic Difficulty
- Student Study Pattern

---

## Revision Statistics

Displays:

- Total Topics Revised
- Average Study Time
- Revision Completion Rate
- Missed Revisions
- Weak Topics
- Strong Topics
- Knowledge Retention Score

---

## Confidence Score

Each topic receives a confidence score.

- Excellent
- Good
- Average
- Weak
- Critical

The score updates after every revision, quiz, and AI interaction.

---

## AI Recommendations

Zen AI should provide:

- Topics to revise today
- Topics at risk of being forgotten
- Best revision order
- Estimated revision time
- Personalized revision strategy

Actions:

- Generate Today's Plan
- Generate Weekly Plan
- Rearrange Revision Queue

---

## Revision Methods

Students can choose:

- Read Notes
- Flashcards
- Quiz
- Mind Map
- Practice Questions
- AI Explanation
- Voice Revision

---

## Filters

Filter revisions by:

- Subject
- Unit
- Topic
- Confidence
- Difficulty
- Due Today
- Overdue

---

## Search

Search by:

- Subject
- Unit
- Topic
- Keywords

---

## Quick Actions

- Start Today's Revision
- Generate Quiz
- Generate Flashcards
- Ask Zen
- View Analytics

---

## Navigation

Revision → Subject

Revision → Topic

Revision → Analytics

Revision → Zen AI

---

## Empty State

Display:

📚

No revisions scheduled today.

You're all caught up.

Primary Button:

Review Completed Topics

---

## Loading State

Display revision skeleton cards while loading.

---

## Error State

Display:

Unable to load revision schedule.

Retry Button

---

## Mobile Layout

Revision queue becomes vertically stacked.

Timeline becomes collapsible.

Floating Action Button remains visible.

---

## Zen AI Integration

- Powers the spaced repetition scheduling engine
- Dynamically adjusts revision intervals based on performance
- Generates quizzes and flashcards for revision sessions
- Predicts forgetting curves per topic
- Recommends optimal revision order and timing
- Adaptive difficulty adjustment during revision

---

## Related Screens

- Dashboard — Today's revision summary
- Subjects — Subject-level revision progress
- Subject Details — Topic-level revision data
- Calendar — Scheduled revision events
- Resources — Study materials for revision topics
- Analytics — Revision performance metrics
- Zen AI — AI-powered revision assistance

---

## Future Enhancements

- AI Forgetting Curve Prediction
- Adaptive Revision Scheduling
- Voice-Based Revision
- Collaborative Revision Sessions
- Smart Memory Score
- AR/VR Revision Mode
- Offline Revision Support

# Resources

## Screen Type

Primary Screen — Knowledge Repository

---

## Accessible From

- Sidebar Navigation
- Dashboard (Resources Card)
- Subject Details (Resources Tab)
- Bottom Navigation (Mobile)
- Global Search Results

---

## Primary User

Student

---

## Permissions

- View: All authenticated users
- Create: Upload resources, add external links
- Edit: Resource metadata, tags, descriptions
- Delete: Own resources (with confirmation)
- Export: Download individual or bulk resources

---

## Keyboard Shortcuts

- `U` — Upload Resource
- `/` — Focus Search
- `F` — Open Filters
- `S` — Sort Options
- `B` — Toggle Bookmark
- `Ctrl+A` — Select All (Bulk Mode)
- `P` — Preview Resource
- `Esc` — Close Preview

---

## Performance Expectations

- Initial Load: < 2 seconds
- File Upload: < 5 seconds (up to 10 MB)
- Preview Render: < 1 second
- Search Results: < 300 milliseconds
- AI Indexing: < 10 seconds per resource

---

## Purpose

The Resources module serves as the centralized academic knowledge repository for StudyOS.

It allows students to organize, access, search, and manage all learning materials from a single location.

Every resource should be linked to a Subject, Unit, and Topic so that Zen AI can use it for explanations, summaries, quizzes, flashcards, and study recommendations.

---

## Header

Contains:

- Page Title
- Search Bar
- Filter Button
- Sort Button
- Upload Resource Button

---

## Resource Overview

Displays:

- Total Resources
- Recently Added
- Favorite Resources
- Storage Used
- Downloads
- AI Indexed Resources

---

## Resource Categories

Supports:

- Books
- PDFs
- PPTs
- Notes
- Images
- Videos
- Audio Notes
- Websites
- YouTube Videos
- GitHub Repositories
- Google Drive Links
- Question Banks
- Previous Year Papers
- Cheat Sheets
- Lab Manuals
- Reference Documents

---

## Resource Card

Each Resource displays:

- Resource Name
- Subject
- Unit
- Topic
- Resource Type
- File Size
- Upload Date
- Last Opened
- Tags
- Favorite Status

Actions:

- Open
- Download
- Edit
- Delete
- Share
- Bookmark

---

## Resource Details

Displays:

- Title
- Description
- Subject
- Unit
- Topic
- File Type
- Author
- Source
- Upload Date
- Last Modified
- File Size
- Tags

---

## File Preview

Supports preview for:

- PDF
- Image
- PPT
- Text Notes
- Markdown
- Video
- Audio

Actions:

- Zoom
- Full Screen
- Download
- Print
- Share

---

## AI Features

Zen AI can:

- Summarize Resource
- Explain Content
- Generate Quiz
- Generate Flashcards
- Extract Key Points
- Find Important Questions
- Translate Content
- Search Inside Files

---

## Tags

Students can organize resources using tags.

Examples:

- Unit 1
- Important
- Exam
- Assignment
- Lab
- Notes
- Revision
- PYQ

---

## Favorites

Students can bookmark important resources.

Displays:

- Favorite Resources
- Recently Viewed
- Frequently Used

---

## Search

Search by:

- File Name
- Subject
- Unit
- Topic
- File Type
- Tags
- Keywords
- Author

Supports AI semantic search.

---

## Filters

Filter by:

- Subject
- Resource Type
- Upload Date
- Tags
- Favorites
- Recently Added

---

## Sort Options

Sort by:

- Name
- Date
- Size
- Subject
- Last Opened
- Most Used

---

## Bulk Actions

Supports:

- Delete Multiple
- Download Multiple
- Export
- Move
- Tag
- Share

---

## Upload Resource

Students can upload:

- Files
- Images
- Videos
- Audio
- External Links
- Drive Links
- GitHub Links
- YouTube Links

---

## Quick Actions

- Upload Resource
- Create Folder
- Add Link
- Ask Zen
- Generate Notes

---

## Navigation

Resources → Subject

Resources → Topic

Resources → Notes

Resources → Zen AI

---

## Empty State

Display:

📂

No resources available.

Upload your first resource to build your academic library.

Primary Button:

Upload Resource

---

## Loading State

Display resource skeleton cards while loading.

---

## Error State

Display:

Unable to load resources.

Retry Button

---

## Mobile Layout

Cards become vertically stacked.

Upload button remains floating.

Preview opens in full-screen mode.

---

## Zen AI Integration

- Semantic search across all uploaded resources
- Auto-generates summaries and key points from PDFs
- Extracts important questions from study materials
- Suggests relevant resources based on current study topic
- AI-powered content indexing and tagging
- Cross-resource knowledge linking

---

## Related Screens

- Dashboard — Recently added resources
- Subjects — Subject-linked resources
- Subject Details — Topic-level resource attachments
- Assignments — Assignment reference materials
- Revision — Revision study materials
- Daily Journal — Resources used during study
- Zen AI — AI-powered resource analysis

---

## Future Enhancements

- OCR for Images
- AI Auto Tagging
- Duplicate Detection
- Cloud Sync
- Offline Downloads
- Resource Version History
- Collaborative Resource Sharing
- Smart Folder Organization
- AI Citation Generator
- AI Resource Recommendations

# Calendar

## Screen Type

Primary Screen — Academic Scheduler

---

## Accessible From

- Sidebar Navigation
- Dashboard (Calendar Card)
- Assignments (Calendar View)
- Revision (Calendar Link)
- Bottom Navigation (Mobile)

---

## Primary User

Student

---

## Permissions

- View: All authenticated users
- Create: Events, reminders, study sessions
- Edit: Own events, schedules
- Delete: Own events (with confirmation)
- Export: Calendar data as ICS, PDF

---

## Keyboard Shortcuts

- `N` — New Event
- `T` — Jump to Today
- `D` — Day View
- `W` — Week View
- `M` — Month View
- `A` — Agenda View
- `←` / `→` — Navigate Previous / Next Period
- `Esc` — Close Event Detail

---

## Performance Expectations

- Initial Load: < 2 seconds
- View Switch: < 300 milliseconds
- Event Creation: < 500 milliseconds
- AI Schedule Generation: < 3 seconds
- Calendar Render: < 500 milliseconds

---

## Purpose

The Calendar module serves as the central scheduling and planning system of StudyOS.

It provides students with a complete timeline of their academic activities, including lectures, assignments, revisions, exams, study sessions, deadlines, and AI-generated study plans.

Students should be able to understand their entire academic schedule at a glance.

---

## Header

Contains:

- Page Title
- Current Month
- Previous Month
- Next Month
- Today Button
- Search Bar
- Filter Button
- Add Event Button

---

## Calendar Views

Supports:

- Day View
- Week View
- Month View
- Agenda View

---

## Calendar Overview

Displays:

- Today's Events
- Upcoming Exams
- Upcoming Assignments
- Scheduled Revisions
- Planned Study Sessions
- College Timetable
- AI Recommendations

---

## Event Types

Supports:

- College Lecture
- Practical/Lab
- Assignment
- Examination
- Quiz
- Revision
- Study Session
- Personal Reminder
- Holiday
- Custom Event

Each event should have its own color.

---

## Event Card

Displays:

- Event Title
- Subject
- Date
- Start Time
- End Time
- Duration
- Priority
- Status
- Location
- Faculty

Actions:

- Open
- Edit
- Delete
- Mark Complete

---

## College Timetable

Displays:

- Subject
- Faculty
- Classroom
- Start Time
- End Time
- Lecture Type

Actions:

- Edit Timetable
- Mark Attendance

---

## Exam Schedule

Displays:

- Exam Name
- Subject
- Date
- Time
- Remaining Days
- Preparation Progress

Actions:

- Open Study Plan
- Generate Revision Plan

---

## Assignment Schedule

Displays:

- Assignment Name
- Subject
- Due Date
- Priority
- Completion Percentage

Actions:

- Open Assignment
- Mark Complete

---

## Revision Schedule

Displays:

- Topic
- Subject
- Revision Level
- Confidence Score
- Estimated Duration

Actions:

- Start Revision
- Skip
- Complete

---

## Study Sessions

Displays:

- Subject
- Duration
- Goal
- Status
- Focus Score

Actions:

- Start
- Pause
- Complete

---

## AI Schedule

Zen AI automatically displays:

- Today's Study Plan
- Weekly Study Plan
- Suggested Free Time Usage
- Recommended Breaks
- Upcoming Workload

Actions:

- Regenerate Plan
- Optimize Schedule

---

## Search

Search by:

- Event Name
- Subject
- Faculty
- Date
- Keywords

---

## Filters

Filter events by:

- Subject
- Event Type
- Priority
- Status
- Date
- Completed
- Pending

---

## Quick Actions

- Add Event
- Add Assignment
- Add Revision
- Add Study Session
- Ask Zen

---

## Navigation

Calendar → Subject

Calendar → Assignment

Calendar → Revision

Calendar → Zen AI

---

## Empty State

Display:

📅

No events scheduled.

Start planning your academic journey.

Primary Button:

Add Event

---

## Loading State

Display calendar skeleton while loading.

---

## Error State

Display:

Unable to load calendar.

Retry Button

---

## Mobile Layout

Month View adapts to compact layout.

Week View becomes swipeable.

Agenda View becomes the default.

Floating Action Button remains visible.

---

## Zen AI Integration

- Auto-generates optimized weekly study schedules
- Detects scheduling conflicts and suggests resolutions
- Recommends best times for study sessions based on patterns
- Predicts workload intensity for upcoming weeks
- Integrates revision and assignment deadlines into smart plans
- Free time optimization suggestions

---

## Related Screens

- Dashboard — Today's schedule overview
- Subjects — Subject-related events
- Assignments — Assignment deadlines and due dates
- Revision — Scheduled revision sessions
- Daily Journal — Daily activity correlation
- Analytics — Time management insights
- Zen AI — AI schedule optimization

---

## Future Enhancements

- Google Calendar Sync
- Outlook Calendar Sync
- Apple Calendar Sync
- AI Smart Scheduling
- Automatic Lecture Import
- Travel Time Calculation
- Recurring Events
- Shared Calendars
- Smart Conflict Detection
- Voice Event Creation

# Analytics

## Screen Type

Primary Screen — Performance Intelligence

---

## Accessible From

- Sidebar Navigation
- Dashboard (Study Progress Card)
- Subject Details (Analytics Tab)
- Bottom Navigation (Mobile)

---

## Primary User

Student

---

## Permissions

- View: Own analytics data
- Create: Custom reports, saved views
- Edit: Report parameters, date ranges
- Delete: Saved reports (with confirmation)
- Export: Analytics data as PDF, CSV, PNG

---

## Keyboard Shortcuts

- `R` — Refresh Data
- `D` — Daily View
- `W` — Weekly View
- `M` — Monthly View
- `S` — Semester View
- `E` — Export Current View
- `/` — Focus Search
- `F` — Open Filters
- `P` — Print Report

---

## Performance Expectations

- Initial Load: < 2 seconds
- Chart Render: < 500 milliseconds
- Date Range Change: < 300 milliseconds
- Report Generation: < 3 seconds
- Export Generation: < 5 seconds

---

## Purpose

The Analytics screen is the intelligence center of StudyOS.

It transforms raw academic data into actionable insights through visualizations, trend analysis, and AI-generated recommendations.

Students should be able to understand their study habits, identify strengths and weaknesses, track progress across subjects, and make data-driven decisions about their academic strategy.

Zen AI uses analytics data to continuously refine study plans, revision schedules, and personalized recommendations.

---

## Header

Contains:

- Page Title
- Date Range Selector
- Semester Selector
- Search Bar
- Filter Button
- Export Button
- Print Button
- Refresh Button

---

## Analytics Overview

Displays:

- Total Study Hours (Current Period)
- Average Daily Study Hours
- Active Subjects
- Overall Completion Percentage
- Revision Completion Rate
- Assignment Completion Rate
- Current Study Streak
- Productivity Score

---

## Study Time Analytics

Displays:

- Daily Study Hours (Bar Chart)
- Weekly Study Hours (Line Chart)
- Monthly Study Hours (Area Chart)
- Semester Study Hours (Cumulative Chart)
- Study Time by Subject (Stacked Bar)
- Study Time by Activity Type (Pie Chart)
- Peak Study Hours (Heatmap)
- Average Session Duration

---

## Subject Performance

Each Subject displays:

- Subject Name
- Completion Percentage
- Study Hours
- Topics Completed
- Topics Pending
- Revision Score
- Assignment Score
- Attendance Percentage
- Confidence Score
- Trend Indicator

Actions:

- View Subject Details
- Generate Report
- Compare Subjects

---

## Topic Analytics

Displays:

- Strong Topics (Confidence > 80%)
- Average Topics (Confidence 50-80%)
- Weak Topics (Confidence < 50%)
- Topics Never Revised
- Most Revised Topics
- Topic Difficulty Distribution
- Confidence Score Trend

Actions:

- Focus on Weak Topics
- Generate Revision Plan
- View Topic Details

---

## Revision Analytics

Displays:

- Total Revisions Completed
- Revision Completion Rate
- Average Revisions Per Topic
- Missed Revisions
- Knowledge Retention Score
- Spaced Repetition Effectiveness
- Revision Streak
- Forgetting Curve Visualization

---

## Assignment Analytics

Displays:

- Total Assignments
- Completed On Time
- Completed Late
- Overdue
- Average Completion Time
- Priority Distribution
- Subject-wise Assignment Load
- Submission Trend

---

## Attendance Analytics

Displays:

- Overall Attendance Percentage
- Subject-wise Attendance
- Monthly Attendance Trend
- Attendance vs Performance Correlation
- Classes Missed
- Attendance Prediction

---

## Productivity Insights

Displays:

- Productivity Score (Daily / Weekly / Monthly)
- Best Study Day
- Best Study Time
- Focus Score Trend
- Distraction Patterns
- Study Session Duration Trend
- Break Patterns
- Goal Completion Rate

---

## AI Insights

Zen AI generates:

- Weekly Performance Summary
- Strength and Weakness Analysis
- Personalized Study Recommendations
- Risk Alerts (Falling Behind)
- Predicted Exam Readiness
- Suggested Focus Areas
- Optimal Study Schedule Recommendation

Actions:

- Generate Weekly Report
- Generate Semester Report
- Ask Zen for Analysis

---

## Charts and Visualizations

Supports:

- Bar Charts
- Line Charts
- Area Charts
- Pie Charts
- Donut Charts
- Heatmaps
- Radar Charts
- Progress Rings
- Sparklines
- Trend Indicators

All charts support:

- Hover Tooltips
- Click to Drill Down
- Date Range Selection
- Export as PNG
- Full Screen View

---

## Comparison

Students can compare:

- Week over Week
- Month over Month
- Semester over Semester
- Subject vs Subject
- Predicted vs Actual Progress

---

## Date Range Selector

Options:

- Today
- This Week
- This Month
- This Semester
- Last 7 Days
- Last 30 Days
- Last 90 Days
- Custom Range

---

## Search

Search by:

- Subject
- Topic
- Date Range
- Activity Type
- Keywords

---

## Filters

Filter by:

- Subject
- Date Range
- Activity Type
- Performance Level
- Completion Status

---

## Quick Actions

- Generate Weekly Report
- Export Analytics
- Share Report
- Set Study Goal
- Ask Zen
- Print Report

---

## Navigation

Analytics → Subject Details

Analytics → Revision

Analytics → Assignments

Analytics → Calendar

Analytics → Zen AI

---

## Empty State

Display:

📊

No analytics data available yet.

Start studying to see your progress here.

Primary Button:

Go to Dashboard

---

## Loading State

Display chart skeleton loaders with animated shimmer.

Each chart section loads independently.

---

## Error State

Display:

Unable to load analytics data.

Retry Button

---

## Mobile Layout

Charts become full-width and vertically stacked.

Date Range Selector becomes a bottom sheet.

Horizontal scrolling for comparison tables.

Floating Action Button for export.

---

## Zen AI Integration

- Generates automated weekly and monthly performance reports
- Identifies study patterns and suggests improvements
- Predicts exam readiness based on current progress
- Detects declining performance trends and sends alerts
- Recommends optimal study schedules from historical data
- Correlates mood data with study performance

---

## Related Screens

- Dashboard — Summary statistics and quick overview
- Subjects — Subject-level progress tracking
- Subject Details — Topic-level analytics within a subject
- Revision — Revision performance and retention metrics
- Assignments — Assignment completion analytics
- Calendar — Study time distribution and scheduling
- Zen AI — AI-generated insights and recommendations

---

## Future Enhancements

- Peer Comparison (Anonymous)
- Department Averages
- Predictive GPA Calculator
- Custom Dashboard Widgets
- Shareable Report Links
- Goal Tracking with Milestones
- Export to Google Sheets
- AI Study Pattern Recognition
- Gamification Leaderboard
- Semester Comparison Timeline

# Zen AI

## Screen Type

Primary Screen — AI Assistant

---

## Accessible From

- Sidebar Navigation
- Dashboard (Zen AI Card)
- Bottom Navigation (Mobile)
- Floating Action Button (All Screens)
- Quick Actions Menu (All Screens)
- Global Keyboard Shortcut

---

## Primary User

Student

---

## Permissions

- View: All authenticated users
- Create: Conversations, study plans, quizzes, flashcards
- Edit: Conversation titles, saved plans
- Delete: Own conversations (with confirmation)
- Export: Conversations, generated content as PDF, Markdown

---

## Keyboard Shortcuts

- `Z` — Open Zen AI (Global)
- `N` — New Conversation
- `Enter` — Send Message
- `Shift+Enter` — New Line in Input
- `/` — Focus Chat Input
- `↑` — Edit Last Message
- `Ctrl+K` — Open Command Palette
- `Esc` — Close Zen AI Panel
- `H` — Toggle Conversation History

---

## Performance Expectations

- Chat Panel Open: < 300 milliseconds
- Message Send: < 200 milliseconds
- AI Response Start: < 1 second (streaming)
- AI Response Complete: < 10 seconds
- Quiz Generation: < 5 seconds
- Flashcard Generation: < 3 seconds
- Study Plan Generation: < 5 seconds
- Context Switch: < 500 milliseconds

---

## Purpose

Zen AI is the intelligent academic assistant at the heart of StudyOS.

It acts as a personal tutor, study planner, quiz master, and academic advisor rolled into one.

Zen AI has full context of the student's subjects, topics, progress, revision history, assignments, and study patterns. It uses this context to provide deeply personalized academic support.

Students should be able to ask Zen anything about their academics and receive accurate, contextual, and actionable responses.

Zen AI is not a generic chatbot. It is an academic operating system's intelligence layer.

---

## Header

Contains:

- Page Title
- New Conversation Button
- Conversation History Toggle
- Context Indicator (Current Subject / Topic)
- Model Info
- Clear Conversation Button
- Settings Button

---

## Chat Interface

Displays:

- Message Thread (User and AI Messages)
- Streaming Response Indicator
- Typing Indicator
- Message Timestamps
- Code Blocks with Syntax Highlighting
- LaTeX / Math Rendering
- Inline Images and Charts
- Copy Button per Message
- Regenerate Button per AI Response

Input Area:

- Text Input (Multi-line)
- Send Button
- Attach File Button
- Voice Input Button
- Context Selector (Subject / Topic)
- Quick Action Chips

---

## Conversation History

Displays:

- Conversation Title
- Last Message Preview
- Timestamp
- Subject Context
- Message Count

Actions:

- Open Conversation
- Rename Conversation
- Pin Conversation
- Delete Conversation
- Search Conversations

---

## Quick Action Chips

Displays above the input area:

- Explain Topic
- Generate Quiz
- Generate Flashcards
- Summarize Unit
- Create Study Plan
- Solve Problem
- Generate Notes
- Compare Topics
- Prepare for Exam

---

## AI Capabilities

### Study Plan Generation

Generates personalized study plans based on:

- Remaining Syllabus
- Available Time
- Upcoming Exams
- Assignment Deadlines
- Revision Queue
- Student Preferences

Output includes:

- Daily Schedule
- Weekly Overview
- Priority Topics
- Estimated Completion Date

---

### Quiz Generation

Generates quizzes based on:

- Selected Topic
- Difficulty Level
- Question Count
- Question Types (MCQ, Short Answer, True/False, Fill in the Blank)

Displays:

- Question
- Options
- Correct Answer
- Explanation
- Score Summary

---

### Flashcard Generation

Generates flashcards based on:

- Selected Topic
- Key Concepts
- Definitions
- Formulas
- Important Dates

Displays:

- Front (Question / Term)
- Back (Answer / Definition)
- Confidence Rating
- Next Review Date

---

### Topic Explanation

Provides:

- Simple Explanation
- Detailed Explanation
- Real-world Examples
- Analogies
- Visual Diagrams (Mermaid)
- Related Topics
- Practice Questions

---

### Resource Analysis

Analyzes uploaded resources to provide:

- Summary
- Key Points
- Important Questions
- Chapter Breakdown
- Glossary
- Practice Problems

---

### Exam Preparation

Generates:

- Revision Checklist
- Important Topics
- Predicted Questions
- Mock Tests
- Last-minute Summary
- Confidence Assessment

---

## Context Panel

Displays:

- Current Subject
- Current Unit
- Current Topic
- Related Resources
- Recent Activity
- Confidence Score

Students can switch context to get subject-specific responses.

---

## AI Response Actions

Each AI response supports:

- Copy to Clipboard
- Save to Notes
- Regenerate Response
- Rate Response (Helpful / Not Helpful)
- Share Response
- Export as PDF

---

## Voice Mode

Supports:

- Voice Input (Speech to Text)
- Voice Output (Text to Speech)
- Hands-free Study Mode
- Voice Commands

---

## Search

Search by:

- Conversation Title
- Message Content
- Date
- Subject Context
- Keywords

---

## Filters

Filter conversations by:

- Subject
- Date
- Pinned
- Activity Type (Quiz, Plan, Chat)
- Starred

---

## Quick Actions

- New Conversation
- Generate Study Plan
- Generate Quiz
- Generate Flashcards
- Explain Topic
- Summarize Resource
- Ask a Question

---

## Navigation

Zen AI → Subject Details

Zen AI → Revision

Zen AI → Resources

Zen AI → Analytics

Zen AI → Assignments

---

## Empty State

Display:

🤖

Welcome to Zen AI.

I'm your personal academic assistant. Ask me anything about your studies.

Quick Start Chips:

- Create a Study Plan
- Explain a Topic
- Generate a Quiz
- Summarize my Progress

---

## Loading State

Display animated typing indicator for AI responses.

Stream responses word by word for natural feel.

Display skeleton loaders for conversation history.

---

## Error State

Display:

Zen AI is temporarily unavailable.

Please try again in a moment.

Retry Button

Secondary Text:

Your conversations are saved and will be available when Zen AI is back online.

---

## Mobile Layout

Chat interface becomes full-screen.

Conversation history becomes a slide-out drawer.

Context panel moves to a collapsible header.

Voice input button becomes prominent.

Quick action chips become horizontally scrollable.

---

## Zen AI Integration

- Core AI engine powering all intelligent features across StudyOS
- Maintains conversation context across sessions
- Learns from student interactions to improve recommendations
- Integrates with all modules for contextual awareness
- Supports multi-turn academic conversations
- Generates content in multiple formats (text, quiz, flashcard, plan)

---

## Related Screens

- Dashboard — Zen AI summary card and quick access
- Subjects — Subject-specific AI context
- Subject Details — Topic-level AI assistance
- Revision — AI-powered revision sessions
- Resources — AI resource analysis and summarization
- Assignments — AI work planning and subtask generation
- Analytics — AI-generated performance insights
- Calendar — AI schedule optimization

---

## Future Enhancements

- Multi-language Support
- Image Recognition (Solve from Photo)
- Handwriting Recognition
- AI Voice Tutor Mode
- Collaborative AI Sessions
- Custom AI Personas (Strict Tutor, Friendly Guide)
- Plugin System for AI Extensions
- Offline AI Mode (On-device)
- AI Memory (Long-term Student Profile)
- Integration with External LLMs

# Settings

## Screen Type

System Screen — Application Configuration

---

## Accessible From

- Sidebar Navigation (Bottom)
- Profile Menu
- Header Settings Icon
- Global Keyboard Shortcut

---

## Primary User

Student

---

## Permissions

- View: Own settings only
- Create: Notification rules, custom themes
- Edit: All personal settings
- Delete: Custom themes, notification rules
- Export: Settings configuration as JSON

---

## Keyboard Shortcuts

- `Ctrl+,` — Open Settings (Global)
- `Tab` / `Shift+Tab` — Navigate Setting Sections
- `Enter` — Toggle Switch / Confirm Selection
- `Esc` — Close Settings / Cancel Changes
- `/` — Search Settings
- `Ctrl+S` — Save Changes
- `Ctrl+Z` — Undo Last Change

---

## Performance Expectations

- Settings Load: < 1 second
- Setting Change: < 100 milliseconds (instant)
- Theme Switch: < 300 milliseconds
- Settings Save: < 500 milliseconds
- Import Configuration: < 2 seconds
- Export Configuration: < 1 second

---

## Purpose

The Settings screen is the control center for personalizing and configuring StudyOS.

It allows students to customize their experience, manage notifications, configure AI preferences, control privacy, and manage their academic data.

Every setting should have a clear label, description, and sensible default value.

Changes should be applied immediately with an undo option where appropriate.

---

## Header

Contains:

- Page Title
- Search Settings Bar
- Save Button
- Reset to Defaults Button

---

## Settings Navigation

Displays a vertical navigation panel with sections:

- General
- Academic
- Appearance
- Notifications
- Zen AI
- Privacy
- Data Management
- Integrations
- Accessibility
- About

---

## General Settings

Contains:

- Language (Default: English)
- Timezone (Auto-detected)
- Date Format (DD/MM/YYYY, MM/DD/YYYY, YYYY-MM-DD)
- Time Format (12-hour, 24-hour)
- First Day of Week (Sunday, Monday)
- Default Landing Page (Dashboard, Subjects, Calendar)

---

## Academic Settings

Contains:

- Current Semester (Selector)
- Institution Name
- Branch / Department
- Year of Study
- Grading System (CGPA, Percentage, GPA)
- Credits System Configuration
- Academic Calendar (Start Date, End Date)
- Working Days Configuration

---

## Appearance Settings

Contains:

- Theme (Light, Dark, System Default)
- Accent Color (Preset Palette, Custom Color Picker)
- Font Size (Small, Medium, Large, Extra Large)
- Font Family (System Default, Inter, Roboto, Outfit)
- Sidebar Position (Left, Right)
- Compact Mode (Toggle)
- Reduced Motion (Toggle)
- Card Layout Density (Comfortable, Compact)
- Dashboard Card Order (Drag to Reorder)

---

## Notification Settings

Contains:

- Push Notifications (Toggle)
- Email Notifications (Toggle)
- Notification Sound (Toggle, Sound Selector)
- Do Not Disturb Schedule (Start Time, End Time)

Notification Types:

- Assignment Due (Toggle, Reminder Timing)
- Revision Due (Toggle, Reminder Timing)
- Exam Reminder (Toggle, Days Before)
- Study Reminder (Toggle, Frequency)
- Daily Summary (Toggle, Time)
- Weekly Report (Toggle, Day)
- AI Recommendations (Toggle)
- System Updates (Toggle)

---

## Zen AI Settings

Contains:

- AI Enabled (Toggle)
- Response Style (Concise, Detailed, Academic)
- Auto-generate Daily Summary (Toggle)
- Auto-generate Study Plans (Toggle)
- AI Revision Scheduling (Toggle)
- Quiz Difficulty Default (Easy, Medium, Hard)
- Flashcard Generation Style (Simple, Detailed)
- Voice Mode (Toggle)
- AI Context Memory (Toggle)
- Preferred Explanation Style (Simple, Technical, Example-based)

---

## Privacy Settings

Contains:

- Profile Visibility (Public, Private)
- Show Study Streak (Toggle)
- Show Analytics to AI (Toggle)
- Data Collection for AI Improvement (Toggle)
- Two-Factor Authentication (Toggle)
- Session Timeout Duration (15 min, 30 min, 1 hour, Never)
- Login History (View / Clear)
- Active Sessions (View / Revoke)

---

## Data Management

Contains:

- Export All Data (JSON, CSV)
- Import Data (JSON)
- Clear Study History
- Clear Revision History
- Clear AI Conversations
- Reset All Settings
- Delete Account

Each destructive action requires:

- Confirmation Dialog
- Password Verification
- Countdown Timer (for irreversible actions)

---

## Integration Settings

Contains:

- Google Calendar (Connect / Disconnect)
- Outlook Calendar (Connect / Disconnect)
- Google Drive (Connect / Disconnect)
- GitHub (Connect / Disconnect)
- Cloud Backup (Enable / Disable, Frequency)

Each integration displays:

- Connection Status
- Last Synced
- Sync Frequency
- Permissions Granted
- Disconnect Button

---

## Accessibility Settings

Contains:

- High Contrast Mode (Toggle)
- Reduced Motion (Toggle)
- Screen Reader Optimization (Toggle)
- Focus Indicators (Toggle)
- Keyboard Navigation Mode (Toggle)
- Font Scaling (Slider: 75% - 200%)
- Color Blind Mode (Protanopia, Deuteranopia, Tritanopia)
- Auto-play Media (Toggle)

---

## About

Displays:

- App Name
- Version Number
- Build Number
- Last Updated
- Terms of Service (Link)
- Privacy Policy (Link)
- Open Source Licenses (Link)
- Contact Support (Link)
- Feedback (Link)

---

## Search

Search by:

- Setting Name
- Setting Category
- Keywords

Search displays matching settings with category breadcrumbs.

---

## Filters

Filter by:

- Category
- Modified Settings (Changed from Default)
- Recently Changed

---

## Quick Actions

- Save All Changes
- Reset to Defaults
- Export Settings
- Import Settings
- Contact Support

---

## Navigation

Settings → Profile

Settings → Dashboard

Settings → Zen AI

Settings → About

---

## Empty State

Not applicable. Settings always display default values.

---

## Loading State

Display skeleton loaders for each settings section.

Load sections independently for faster perceived performance.

---

## Error State

Display:

Unable to load settings.

Retry Button

If save fails:

Unable to save settings. Your changes have been preserved locally.

Retry Save Button

---

## Mobile Layout

Settings navigation becomes a collapsible accordion.

Toggle switches and selectors become full-width.

Search becomes a sticky header element.

Save button becomes a floating action button.

---

## Zen AI Integration

- AI-powered setting recommendations based on usage patterns
- Smart notification timing based on study schedule
- Auto-adjusts theme based on time of day (if enabled)
- Suggests optimal AI settings based on student interaction style
- Recommends accessibility settings based on device capabilities
- Personalized onboarding configuration

---

## Related Screens

- Profile — User identity and account details
- Dashboard — Default landing page configuration
- Zen AI — AI assistant preferences and behavior
- Calendar — Integration and sync settings
- Analytics — Report and export preferences
- All Screens — Theme and appearance apply globally

---

## Future Enhancements

- Setting Sync Across Devices
- Setting Profiles (Study Mode, Exam Mode, Relaxed Mode)
- Scheduled Theme Changes
- AI-Powered Setting Optimization
- Backup and Restore Settings to Cloud
- Admin Settings Panel (for Institutional Accounts)
- Plugin and Extension Settings
- Custom Keyboard Shortcut Mapping
- Widget Configuration
- Notification Channel Management

# Profile

## Screen Type

System Screen — User Identity

---

## Accessible From

- Sidebar Navigation (Bottom)
- Header Avatar Click
- Settings (Profile Link)

---

## Primary User

Student

---

## Permissions

- View: Own profile data
- Create: Not applicable
- Edit: Own profile information, avatar, academic details
- Delete: Profile picture, connected accounts
- Export: Profile data as PDF, JSON

---

## Keyboard Shortcuts

- `E` — Edit Profile
- `Ctrl+S` — Save Changes
- `Esc` — Cancel Editing / Close
- `A` — Change Avatar
- `Tab` / `Shift+Tab` — Navigate Profile Sections1

---

## Performance Expectations

- Profile Load: < 1 second
- Avatar Upload: < 2 seconds
- Profile Save: < 500 milliseconds
- Statistics Load: < 1 second
- Achievement Render: < 300 milliseconds

---

## Purpose

The Profile screen is the student's academic identity within StudyOS.

It displays personal information, academic details, lifetime study statistics, achievements, and account management options.

The profile acts as a personal academic portfolio that grows with the student's journey.

It also serves as the central place for account security and identity management.

---

## Header

Contains:

- Profile Avatar (Upload / Change)
- Full Name
- Email Address
- Institution Name
- Branch / Department
- Year of Study
- Current Semester
- Member Since Date
- Edit Profile Button

---

## Profile Overview

Displays:

- Academic Summary Card
- Current Semester
- Active Subjects Count
- Overall Completion Percentage
- Current Study Streak
- Total Study Hours (Lifetime)
- Total Topics Completed
- Total Assignments Completed
- Total Revisions Completed

---

## Personal Information

Displays:

- Full Name
- Email Address
- Phone Number
- Date of Birth
- Gender
- Bio / About Me

Actions:

- Edit
- Save
- Cancel

---

## Academic Information

Displays:

- Institution Name
- University / Board
- Branch / Department
- Year of Study
- Current Semester
- Enrollment Number
- Academic Year

Actions:

- Edit
- Save
- Cancel

---

## Study Statistics

Displays:

- Total Study Hours (Lifetime)
- Average Daily Study Hours
- Total Topics Completed
- Total Assignments Completed
- Total Revisions Completed
- Total Resources Uploaded
- Total Journal Entries
- Total AI Conversations
- Longest Study Streak
- Current Study Streak
- Total Quizzes Taken
- Average Quiz Score
- Knowledge Retention Score

---

## Achievements and Badges

Displays earned badges:

- First Study Session
- 7-Day Streak
- 30-Day Streak
- 100-Day Streak
- First Subject Completed
- All Assignments On Time
- Revision Master (100 Revisions)
- Resource Collector (50 Resources)
- Perfect Attendance (Monthly)
- AI Explorer (50 AI Conversations)
- Quiz Champion (90% Average)
- Night Owl (Late Night Study Sessions)
- Early Bird (Morning Study Sessions)
- Consistency King (No Missed Revisions for 30 Days)

Each badge displays:

- Badge Icon
- Badge Name
- Description
- Date Earned
- Rarity Level

Locked badges display:

- Greyed Out Icon
- Progress Toward Unlock
- Requirements

---

## Study Streak History

Displays:

- Current Streak (Days)
- Longest Streak (Days)
- Streak Calendar (GitHub-style Contribution Grid)
- Monthly Consistency Percentage
- Streak Recovery Options

---

## Account Security

Displays:

- Password (Change Password)
- Two-Factor Authentication (Enable / Disable)
- Login History (Recent Logins)
- Active Sessions (View / Revoke)
- Last Password Change

Actions:

- Change Password
- Enable 2FA
- Revoke Session
- View Login History

---

## Connected Accounts

Displays:

- Google Account (Connect / Disconnect)
- GitHub Account (Connect / Disconnect)
- Microsoft Account (Connect / Disconnect)

Each connection displays:

- Connection Status
- Connected Email
- Connected Since
- Disconnect Button

---

## Data and Privacy

Displays:

- Download My Data (Full Export)
- Data Retention Policy (Link)
- Privacy Settings (Link to Settings)
- Delete Account

Actions:

- Request Data Export
- View Privacy Policy
- Delete Account (with multi-step confirmation)

---

## Search

Search by:

- Setting Name
- Achievement Name
- Activity Type
- Keywords

---

## Filters

Filter achievements by:

- Earned / Locked
- Category (Study, Revision, Assignment, Streak)
- Rarity Level

---

## Quick Actions

- Edit Profile
- Change Avatar
- Download My Data
- View Achievements
- Share Profile
- Change Password

---

## Navigation

Profile → Settings

Profile → Analytics

Profile → Dashboard

Profile → Zen AI

---

## Empty State

If no study data exists:

Display:

👤

Welcome to StudyOS.

Complete your profile and start your academic journey.

Primary Button:

Complete Profile

---

## Loading State

Display profile skeleton with avatar placeholder and shimmer animation.

Load statistics and achievements independently.

---

## Error State

Display:

Unable to load profile data.

Retry Button

---

## Mobile Layout

Profile header becomes a compact card with avatar and key stats.

Sections become expandable accordions.

Achievements display as a horizontally scrollable grid.

Streak calendar becomes scrollable.

Edit actions move to a floating action button.

---

## Zen AI Integration

- Generates personalized study insights on the profile page
- Tracks and celebrates achievement milestones
- Provides study habit analysis based on lifetime data
- Suggests profile completion improvements
- Powers the streak recovery and motivation system
- Generates semester-end academic summary

---

## Related Screens

- Settings — Account configuration and preferences
- Dashboard — Daily overview and activity summary
- Analytics — Detailed performance metrics
- Subjects — Active subjects and progress
- Zen AI — AI-powered profile insights
- Calendar — Study schedule and consistency tracking

---

## Future Enhancements

- Public Profile Page
- Academic Portfolio Export
- Resume Generation from Profile
- Social Features (Follow Students)
- Mentor Connection
- Institutional Verification Badge
- QR Code Profile Sharing
- Custom Profile Themes
- Annual Study Report (Spotify Wrapped Style)
- Alumni Network Integration
