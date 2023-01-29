# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: One way to correct this mistake would be to generate a new migration in order to add a new column to an already existing model. In this case, the new column would be the foriegn key and the model would be Student. The command would be as follows:
rails g migration add_cohort_id_to_students cohort_id:integer
Then run rake db:migrate to run the changes and create the new column, which will be the foreign key. The name of the foreign key is the name of the parent model, underscore, id, and would be in the Student model.

Researched answer: We would first need to generate a new migration with the changes we want to be applied. For example:
rails g migration add_cohort_id_to_students cohort_id:integer
We would then need to run rake db:migrate to actually make those changes in the app. The name of the foreign key is the name of the parent model, underscore, id. The foreign key would be in the Student model. I personally have made this very mistake before and had to research how to fix the mistake, but it taught me to always make sure I include the foreign key so that I don't have to go through these steps to fix the mistake!

2. Which RESTful routes must always be passed params? Why?

Your answer: I believe the RESTful routes show, edit, update, and destroy require params to be passed because each of these routes need to know what specific piece of data is being acted on. For example, if we have a model called Blog with multiple blogs inside, each blog will have a primary key assigned to it. This primary key is then used as the params and is identifying which specific blog we want to show, edit, update, or destroy.

Researched answer: Show, edit, update, and destroy must have params passed. These RESTful routes are targeting one specific primary key and performing their action on only the targeted id. For example, if we have a model called Blog with multiple blogs inside, each blog will have a primary key assigned to it. This primary key is then used as the params and is identifying which specific blog we want to show, edit, update, or destroy.

3. Name three rails generator commands. What is created by each?

Your answer: Three rails generator commands are:
1) rails g migration
2) rails g model
3) rails g controller
1 will generate a new migration, which will update the schema in the rails application. 2 will generate a model, which is a table containing different columns in the database. 3 will generate a controller, which is a logical center of the rails app.

Researched answer: Three examples of rails generator commands are:
1) rails g migration
2) rails g model
3) rails g controller
1 generates a new migration, 2 generates a new model, and 3 generates a new controller. A new migration will update the schema, a new model is a table in the database, and a controller controls the interactions between users, views and models.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
    Controller method: index
    Action: displays all the data within the Student model

action: "POST" location: /students
    Controller method: create
    Action: Creates a new row on the table that is the model Student

action: "GET" location: /students/new
    Controller method: new
    Action: displays a form for the user to fill out that accepts user input within the restrictions set in the strong params. Allows the user to fill out information in order to create a new row in the Student model. This does not actually update the database, it is just a form.

action: "GET" location: /students/2
    Controller method: show
    Action: displays the data within the Student model that has the primary key of 2.

action: "GET" location: /students/2/edit
    Controller method: edit
    Action: displays a form for the user to fill out that allows the user to edit an already existing row in the Student database. In this case, the row that has the primary key of 2 is being edited. This does not actually update the database, it is just a form.

action: "PATCH" location: /students/2
    Controller method: update
    Action: Updates the database with the changes made from the edit controller method. Whatever the user has filled out in the form will now be updated in the database.

action: "DELETE" location: /students/2
    Controller method: destroy
    Action: Removes the specified row in the database. In this case, the row with the primary key of 2 is being specified to be deleted from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1) As a user, I can see my full to do list on the landing page of the application.
2) As a user, I can click on one task and see the details for that task.
3) As a user, I can click a button that brings me to a form I can fill out to add a new task on my to do list.
4) As a user, I can click a button after filling out the form that will add the task to my to do list.
5) As a user, I can change the details of a task on my to do list.
6) As a user, I can remove a task from my to do list.
7) As a user, I can check off a task once I complete it.
8) As a user, if I check off a task, I get a message saying, "Nice Job! You completed ... task!".
9) As a user, if I check off all tasks on my to do list, I get a message saying, "You have completed all of your tasks for today, well done!".
10) As a user, if I check off a task, I get a message asking if I want to remove that item from the to do list or not.