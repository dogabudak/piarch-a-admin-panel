Two examples
Create a user => 
mutation {
  createUser(username:"hello", password:"world") {
    _id
  }
}

Fetch all users => 

query {
  users {
    _id
    username
    password
  }
}



To start
npm run build
npm run start
# piarch-a-admin-panel
