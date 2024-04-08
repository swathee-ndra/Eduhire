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

// Function to preview the uploaded image
function previewImage() {
    var fileInput = document.getElementById('fileInput');
    var previewImage = document.getElementById('previewImage');
  
    fileInput.addEventListener('change', function() {
      var file = this.files[0];
  
      if (file) {
        var reader = new FileReader();
  
        reader.addEventListener('load', function() {
          previewImage.src = reader.result;
          previewImage.style.display = 'block';
        });
  
        reader.readAsDataURL(file);
      }
    });
  }
  
  // Call the function to enable image preview
  previewImage();
  
