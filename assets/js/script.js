const toggleSidebar = document.querySelector('.toggle_sidebar')
console.log(toggleSidebar)

const mobileSidebar = document.getElementById('header')
console.log(mobileSidebar)

  function openMobileNavbar() {
    mobileSidebar.classList.add("active");
  }
  
  function closeMobileNavbar() {
    mobileSidebar.classList.remove("active");
  }
  
toggleSidebar.addEventListener("click", () => {
    if (mobileSidebar.classList.contains("active")) {
      closeMobileNavbar();
    } else {
      openMobileNavbar();
    }

    if (toggleSidebar.children[0].classList.contains('bi-arrow-right-circle-fill')){
      toggleSidebar.children[0].classList.replace('bi-arrow-right-circle-fill','bi-arrow-left-circle-fill');
    }else{
      toggleSidebar.children[0].classList.replace('bi-arrow-left-circle-fill','bi-arrow-right-circle-fill');
    }
  });

