const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panel.addEventListener('mouseover', () => {
        addshrinkclass()
        removeActiveClasses()
        removenormalclass()
        panel.classList.add('active')
    })
    panel.addEventListener('mouseleave', () => {
        removeshrinkClasses()
        addnormalclass()
        removeActiveClasses()
        
    })
})
function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}
function removeshrinkClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('shrink')
    })
}
function addshrinkclass(){
    panels.forEach(panel=>{
        panel.classList.add('shrink')
    })
}
function removenormalclass(){
    panels.forEach(panel=>{
        panel.classList.remove('normal')
    })
}
function addnormalclass(){
    panels.forEach(panel=>{
        panel.classList.add('normal')
    })
}