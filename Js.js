var button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Form has been submitted');
});
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'red';  
});
button.addEventListener('mouseout', function() {
    button.style.backgroundColor = '';  
});

var button1 = document.getElementById('myButton');
button1.addEventListener("click", function() {
    alert("Form has been submitted");
});
