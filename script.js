const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


document.getElementById("send-button").addEventListener("click", function() {
	sendMessage();
  });
  
  document.getElementById("message-input").addEventListener("keypress", function(e) {
	if (e.key === "Enter") {
	  sendMessage();
	}
  });
  
  function sendMessage() {
	var messageInput = document.getElementById("message-input");
	var message = messageInput.value.trim();
	if (message !== "") {
	  appendMessage("outgoing", message);
	  messageInput.value = "";
	  // You can add additional functionality here, such as sending the message to a server
	}
  }
  
  function appendMessage(type, message) {
	var chatContainer = document.getElementById("chat-container");
	var messageElement = document.createElement("div");
	messageElement.classList.add("message", type);
	messageElement.innerHTML = '<div class="message-content">' + message + '</div>';
	chatContainer.appendChild(messageElement);
	// Scroll to the bottom of the chat container to show the latest message
	chatContainer.scrollTop = chatContainer.scrollHeight;
  }


  // Add an event listener to the message input to toggle typing indicator
document.getElementById("message-input").addEventListener("input", function() {
	toggleTypingIndicator();
  });
  
  function toggleTypingIndicator() {
	var typingIndicator = document.querySelector(".typing-indicator");
	var messageInput = document.getElementById("message-input");
	
	if (messageInput.value.trim() === "") {
	  typingIndicator.style.display = "none"; // Hide typing indicator if message input is empty
	} else {
	  typingIndicator.style.display = "block"; // Show typing indicator if message input is not empty
	}
  }


  // Function to handle file input change event
document.getElementById('picture').addEventListener('change', function() {
    var file = this.files[0]; // Get the selected file

    // Check if the file is an image
    if (file && file.type.startsWith('image/')) {
        var reader = new FileReader(); // Create a FileReader object

        // Set up the FileReader onload function
        reader.onload = function(e) {
            var imagePreview = document.getElementById('preview');
            imagePreview.src = e.target.result; // Set the src attribute of the image preview to the data URL
        };

        reader.readAsDataURL(file); // Read the selected file as a data URL
    }
});




  