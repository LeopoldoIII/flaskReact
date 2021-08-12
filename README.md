# flaskReact


### DB 
To create DB follow this steps from terminal 

````
python
Type "help", "copyright", "credits" or "license" for more information.
>>>
from app import db
db.create_all()
````
Verify tmp dir `test.db` shold be there

````
from app import TodoModel
todo = TodoModel(content='I want to eat')
db.session.add(todo)
db.session.commit()
todo = TodoModel.query.filter_by(id=1).first()
todo.id
1
todo.content
'I want to eat'
````