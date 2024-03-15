const getTasks = async(id_user) =>{
    try{

    const response = await axios.post('http://localhost/todo_list_db/backend/getTasks.php',{

    body: JSON.stringify({"id_user": id_user})

    });
    const data = await response.json();
    return data;
}
catch(error){
    console.error(error);
}
}


const saveTask = async(user_id,description) =>{
    try{

        const form_data= new FormData();
        form_data.append('description', description);
        form_data.append('id_user', user_id);
        

    const response = await axios.post('http://localhost/todo_list_db/backend/createTask.php',{

    body: form_data

    });
    const data = await response.json();
    return data;
}
catch(error){
    console.error(error);
}
}


const updateTask = async(id,user_id,description) =>{
    try{

        const form_data= new FormData();
        form_data.append('description', description);
        form_data.append('id', id);
        form_data.append('id_user', user_id);

    const response = await axios.post('http://localhost/todo_list_db/backend/updateTask.php',{

    body: form_data

    });
    const data = await response.json();
    return data;
}
catch(error){
    console.error(error);
}
}

const deteleTask = async(id,user_id) =>{
    try{

        const form_data= new FormData();
        form_data.append('id', id);
        form_data.append('id_user', user_id);

    const response = await axios.post('http://localhost/todo_list_db/backend/deleteTask.php',{

    body: form_data

    });
    const data = await response.json();
    return data;
}
catch(error){
    console.error(error);
}
}

const login = async(username,email,password) =>{
    try{

        const form_data= new FormData();
        form_data.append('username', username);
        form_data.append('email', email);
        form_data.append('password', password);

    const response = await axios.post('http://localhost/todo_list_db/backend/login.php',{

    body: form_data

    });
    const data = await response.json();
    return data;
}
catch(error){
    console.error(error);
}
}


const signup = async(username,email,password) =>{
    try{

        const form_data= new FormData();
        form_data.append('username', username);
        form_data.append('email', email);
        form_data.append('password', password);

    const response = await axios.post('http://localhost/todo_list_db/backend/signup.php',{

    body: form_data

    });
    const data = await response.json();
    return data;
}
catch(error){
    console.error(error);
}
}