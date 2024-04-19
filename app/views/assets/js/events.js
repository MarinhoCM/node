document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("todo-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const taskInput = document.getElementById("task-input").value;
        console.log(`texto inserido: ${taskInput}`);
    });
});
