const users = [
    {
        id: "1",
        name: "Nikita",
    },
    {
        id: "2",
        name: "Arpita",
    },
    {
        id: "3",
        name: "Saurabh"
    }
]

export const getUser = (name) => users.find(user => user.name == name)