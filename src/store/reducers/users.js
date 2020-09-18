const usersDefaults = [
    {
        id: 1,
        name: 'Willian',
        age: 30
    }
]

export default function users(users = usersDefaults, action) {
    const user = action.user 
    switch (action.type) {
      case "ADD_USER":
        return [...users, { id: Math.random(), ...user }];
      case "SET_USER":
        const newUsers = users.map(u => { return u.id === user.id ? user : u })
        console.log(newUsers)
        return [...newUsers];
      default:
        return users;
    }
}