// Create the array of friends
let friends = [];

// Function to add a friend to the array and update the list
function addFriend() {
    // Get the value from the input field
    let name = document.getElementById('friendName').value.trim();

    // Check if the input is not empty
    if (name === '') {
        alert('Please enter a name.'); // Notify the user if the input is empty
        return;
    }

    // Check if the name is already in the array
    if (friends.includes(name)) {
        alert('This friend is already in the list.'); // Notify the user if the friend is already present
        document.getElementById('friendName').value = '';
        return;
    }

    // Add the friend to the array
    friends.push(name);

    // Clear the input field
    document.getElementById('friendName').value = '';

    // Update the friend list on the webpage
    updateFriendList();
}

// Function to update the friend list on the webpage
function updateFriendList() {
    // Get the <ul> element by its correct ID
    let friendList = document.getElementById('friendsList');

    // Clear the list before adding new items
    friendList.innerHTML = '';

    // Loop through the friends array and add each friend as an <li> element
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement('li');
        li.textContent = friends[i];
        friendList.appendChild(li);
    }

    // Log the current list of friends to the console (for debugging)
    console.log(friends);
}

// Function to randomly select a friend
function randomFriend() {
    // Check if there are at least two friends in the list
    if (friends.length < 2) {
        alert('Please add at least two friends to sort them out.');
        return;
    }

    // Randomly select a friend
    let randomIndex = Math.floor(Math.random() * friends.length);
    let selectedFriend = friends[randomIndex];

    // Display the friend in the console
    console.log(`The selected friend is: ${selectedFriend}`);

    // Display the result and just create one li item
    let resultList = document.getElementById('result');
    let result = document.createElement('li');
    resultList.innerHTML = ''; // Clear the previous result list item (if any)
    result.textContent = `The Secret Friend was: ${selectedFriend}`;
    resultList.appendChild(result);
}

/*
        let li = document.createElement('li');
        li.textContent = friends[i];
        friendList.appendChild(li);
*/
