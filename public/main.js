const topMenu = document.getElementById('ct-top-menu')
const toggleTopMenuIcon = document.getElementById('ct-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        // Click to Toggle top menu icon
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('ct-topmenu-expanded')
    } else {
        // Click outside from Toggle top menu icon
        if (topMenu.classList.contains('ct-topmenu-expanded')) {
            topMenu.classList.remove('ct-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})