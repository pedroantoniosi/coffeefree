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

    if (toggleSidebar.children[0].classList.contains('bi-list')){
      toggleSidebar.children[0].classList.replace('bi-list','bi-x-lg');
    }else{
      toggleSidebar.children[0].classList.replace('bi-x-lg','bi-list');
    }
  });

