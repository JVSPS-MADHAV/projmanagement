document.addEventListener('DOMContentLoaded', function() {
  const taskList = document.getElementById('task-list');
  const chatMessages = document.getElementById('chat-messages');
  const assigneeInput = document.getElementById('assignee-input');
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const messageInput = document.getElementById('message-input');
  const sendBtn = document.getElementById('send-btn');

  // Function to add a task to the task board
  function addTask(assignee, task) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task');
    taskItem.innerHTML = `<strong>${assignee}:</strong> ${task}`;
    taskList.appendChild(taskItem);
  }

  // Function to add a chat message to the chat window
  function addChatMessage(message) {
    const chatMessage = document.createElement('div');
    chatMessage.classList.add('message');
    chatMessage.textContent = message;
    chatMessages.appendChild(chatMessage);
  }

  // Event listener for adding a task
  addTaskBtn.addEventListener('click', function() {
    const assignee = assigneeInput.value.trim();
    const task = taskInput.value.trim();

    if (assignee !== '' && task !== '') {
      addTask(assignee, task);
      assigneeInput.value = '';
      taskInput.value = '';
    }
  });

  // Event listener for sending a chat message
  sendBtn.addEventListener('click', function() {
    const message = messageInput.value;
    if (message.trim() !== '') {
      addChatMessage(message);
      messageInput.value = '';
    }
  });

  // Example usage: Adding tasks and chat messages
  addTask('User A', 'Task 1');
  addTask('User B', 'Task 2');
  addChatMessage('User A: Hello!');
  addChatMessage('User B: Hi there!');
});
