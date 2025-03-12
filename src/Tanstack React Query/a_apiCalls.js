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