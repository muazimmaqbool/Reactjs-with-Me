export const fetchUsers=async()=>{
    console.log("Fetching users...")
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    if(!response.ok){
        throw new Error("failed to fetch users")
    }else{
        return response.json()
    }
}

export const fetchUsersID=async(id)=>{
    if (!id) return null; // Prevents unnecessary requests
    console.log("Fetching users...")
    const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if(!response.ok){
        throw new Error("failed to fetch users")
    }else{
        return response.json()
    }
}

export const fetchTodos=async()=>{
    console.log("Fetching Todos...")
    const response=await fetch("https://jsonplaceholder.typicode.com/todos")
    if(!response.ok){
        throw new Error("failed to fetch Todos")
    }else{
        return response.json()
    }
}

//Post Rquest
export const createUser = async (newUser) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
  
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    return response.json();
  };