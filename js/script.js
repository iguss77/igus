function theme_mode() {
    var element = document.documentElement;
    var currentTheme = element.getAttribute("data-theme") || "light"; // Default to light theme if not set
    var newTheme = currentTheme === "dark" ? "light" : "dark";
      
    if (newTheme === "dark") {
        document.getElementById('mode').innerHTML = "<i class='bx bxs-sun'></i>";
    } else {
        document.getElementById('mode').innerHTML = "<i class='bx bxs-moon'></i>";
    }

    element.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save the new theme to localStorage
  }

  function apply_mode() {
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
    if (savedTheme === "dark") {
        document.getElementById('mode').innerHTML = "<i class='bx bxs-sun'></i>";
    } else {
        document.getElementById('mode').innerHTML = "<i class='bx bxs-moon'></i>";
    }
    document.querySelector('.page').style.display = 'block';
  }