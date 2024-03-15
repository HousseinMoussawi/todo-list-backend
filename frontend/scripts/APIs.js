const getTasks = async() =>{

    const form_data = new FormData();
    form_data.append('description', description);

    const response = await axios.post('http://localhost/todo_list_db/getTasks.php',{
       body: form_data
    });
    const data = await response.json();
    return data;
}