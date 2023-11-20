const products = [
  {
    id: 1,
    name: "Black & White Pair Shoes",
    image: "./images/prod1.jpg",
    price: 3400,
    discountPrice: 5000,
  },
  {
    id: 2,
    name: "Black & Green Pair Shoes",
    image: "./images/prod2.jpg",
    price: 3600,
    discountPrice: 4000,
  },
  {
    id: 3,
    name: "Black & White Pair Shoes",
    image: "./images/prod3.jpg",
    price: 6600,
    discountPrice: 8000,
  },
  {
    id: 4,
    name: "Black & White Pair Shoes",
    image: "./images/prod4.jpg",
    price: 2600,
    discountPrice: 4700,
  },
  {
    id: 5,
    name: "Black & White Pair Shoes",
    image: "./images/prod1.jpg",
    price: 3400,
    discountPrice: 5000,
  },
  {
    id: 6,
    name: "Black & Green Pair Shoes",
    image: "./images/prod2.jpg",
    price: 3600,
    discountPrice: 4000,
  },
  {
    id: 7,
    name: "Black & White Pair Shoes",
    image: "./images/prod3.jpg",
    price: 6600,
    discountPrice: 8000,
  },
  {
    id: 8,
    name: "Black & White Pair Shoes",
    image: "./images/prod4.jpg",
    price: 2600,
    discountPrice: 4700,
  },
  {
    id: 9,
    name: "Black & White Pair Shoes",
    image: "./images/prod1.jpg",
    price: 3400,
    discountPrice: 5000,
  },
  {
    id: 10,
    name: "Black & Green Pair Shoes",
    image: "./images/prod2.jpg",
    price: 3600,
    discountPrice: 4000,
  },
  {
    id: 11,
    name: "Black & White Pair Shoes",
    image: "./images/prod3.jpg",
    price: 6600,
    discountPrice: 8000,
  },
  {
    id: 12,
    name: "Black & White Pair Shoes",
    image: "./images/prod4.jpg",
    price: 2600,
    discountPrice: 4700,
  },
];

function validateUserDetails(event) {
  event.preventDefault();
  const enteredEmail = document.getElementById("username").value;
  const enteredPassword = document.getElementById("sign-password").value;

  // Clear previous error messages
  document.getElementById("login-email-error").textContent = "";
  document.getElementById("login-password-error").textContent = "";

  // Get user data from session storage
  const userDataArray = JSON.parse(localStorage.getItem("userArray")) || [];

  // Find a user with a matching email
  const matchingUser = userDataArray.find(
    (user) => user.email === enteredEmail
  );

  if (matchingUser) {
    // User with the entered email exists, now check the password
    if (matchingUser.password === enteredPassword) {
      // Successful login
      document.getElementById("loggedInUserContainer").style.display = "block";
      document.getElementById("loggedInUserName").textContent =
        "Welcome, " + matchingUser.name;
      document.getElementById("logoutButton").style.display = "block";
      document.getElementById("modal").style.display = "none";

      // Close the "Login" modal after successful registration
      $("#loginModal").modal("hide");

      sessionStorage.setItem("currentUser", JSON.stringify(matchingUser));

      // Display user details on the UI
      displayUserDetails(matchingUser);
    } else {
      // Display an error message for invalid password
      const errorElement = document.getElementById("login-password-error");
      errorElement.textContent = "Invalid password. Please try again.";
    }
  } else {
    // Display an error message for an email that doesn't exist
    const errorElement = document.getElementById("login-email-error");
    errorElement.textContent =
      "Email does not exist. Please try again or register.";
  }
}

function saveUsers(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const mobile = document.getElementById("mobile").value;

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const nameRegex = /^.{3,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const mobileRegex = /^\d{10}$/;

  const isValidEmail = emailRegex.test(email);
  const isValidName = nameRegex.test(name);
  const isValidPassword = passwordRegex.test(password);
  const isValidMobile = mobileRegex.test(mobile);

  // Clear previous error messages
  document.getElementById("email-error").style.display = "none";
  document.getElementById("name-error").style.display = "none";
  document.getElementById("password-error").style.display = "none";
  document.getElementById("mobile-error").style.display = "none";

  if (!isValidEmail) {
    displayError("email-error", "Please enter a valid email address.");
  }
  if (!isValidName) {
    displayError("name-error", "Name should be at least 3 characters");
  }
  if (!isValidPassword) {
    displayError(
      "password-error",
      "Password must have one uppercase, lowercase , special character and number"
    );
  }
  if (!isValidMobile) {
    displayError("mobile-error", "Mobile number must be 10 digits");
  }

  if (isValidEmail && isValidName && isValidPassword && isValidMobile) {
    const userDataArray = JSON.parse(localStorage.getItem("userArray")) || [];
    const emailExists = userDataArray.some((user) => user.email === email);

    if (emailExists) {
      // Display an error message
      displayError("email-error", "Email already exists.");
    } else {
      // If email doesn't exist, add the user to the array and update the UI
      const user = {
        email,
        name,
        mobile,
        password,
      };

      userDataArray.push(user);
      localStorage.setItem("userArray", JSON.stringify(userDataArray));

      // Show the "Welcome, User Name" and "Logout" button
      document.getElementById("loggedInUserContainer").style.display = "block";
      document.getElementById("loggedInUserName").textContent =
        "Welcome, " + name;
      document.getElementById("logoutButton").style.display = "block";
      document.getElementById("modal").style.display = "none";

      // Close the "Register" modal after successful registration
      $("#registerModal").modal("hide");

      // Store user details in session storage
      sessionStorage.setItem("currentUser", JSON.stringify(user));

      // Display user details on the UI
      displayUserDetails(user);
    }
  }
}

function displayError(elementId, errorMessage) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = errorMessage;
  errorElement.style.display = "block"; // Make sure the error element is visible
}

function displayUserDetails(user) {
  if (condition) {
  }
  document.getElementById("loggedInUserContainer").style.display = "block";
  document.getElementById("loggedInUserName").textContent =
    "Welcome, " + user.name;
  document.getElementById("logoutButton").style.display = "block";
  document.getElementById("modal").style.display = "none";
}

function displayUserDetails(user) {
  console.log("object");
  document.getElementById("loggedInUserContainer").style.display = "block";
  document.getElementById("loggedInUserName").textContent =
    "Welcome, " + user.name;
  document.getElementById("logoutButton").style.display = "block";
  document.getElementById("modal").style.display = "none";
}

function handleLogout() {
  document.getElementById("logoutButton").style.display = "none";
  document.getElementById("loggedInUserContainer").style.display = "none";
  document.getElementById("modal").style.display = "block";

  // Reset cartCount to 0
  const countDiv = document.getElementById("cartCount");
  if (countDiv) {
    countDiv.innerText = "0";
  }

  // Reset all "Add To Cart" buttons
  const addToCartButtons = document.querySelectorAll(".btn-danger");
  addToCartButtons.forEach((button) => {
    button.innerText = "Add To Cart";
  });

  // Remove currentUser from sessionStorage and reset cartItems
  sessionStorage.removeItem("currentUser");
}

let cartCount = 0;
const cartState = {};

function addToCart(productId) {
  event.preventDefault();

  // Retrieve the current user from sessionStorage
  let currentUser = JSON.parse(sessionStorage.getItem("currentUser")) || {
    cartItems: [],
  };

  // Find the product in the products array based on the productId
  const selectedProduct = products.find((product) => product.id === productId);

  if (!selectedProduct) {
    console.error("Product not found");
    return;
  }

  const addButton = document.getElementById(productId);

  // Ensure currentUser has a cartItems array, create it if not
  if (!currentUser.cartItems) {
    currentUser.cartItems = [];
  }

  console.log(currentUser.cartItems, "c");

  const existingCartItem = currentUser.cartItems.find(
    (item) => item.id === productId
  );

  if (existingCartItem) {
    // Product is already in the cart, update the quantity
    cartCount--;
    existingCartItem.quantity--;
    if (existingCartItem.quantity === 0) {
      // Remove the product from the cartItems array
      currentUser.cartItems = currentUser.cartItems.filter(
        (item) => item.id !== productId
      );
    }
    addButton.innerText = "Add To Cart";
  } else {
    // Add the product to the cartItems array
    cartCount++;
    currentUser.cartItems.push({
      ...selectedProduct,
      quantity: 1,
    });
    addButton.innerText = "Remove From Cart";
  }

  // Update the currentUser in sessionStorage
  sessionStorage.setItem("currentUser", JSON.stringify(currentUser));

  // Update the UI or perform other actions as needed
  updateCartCount();
}

function updateCartCount() {
  const countDiv = document.getElementById("cartCount");
  if (countDiv) {
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    const cartCount =
      currentUser && Array.isArray(currentUser.cartItems)
        ? currentUser.cartItems.length
        : 0;

    countDiv.innerText = cartCount;
  }
}
