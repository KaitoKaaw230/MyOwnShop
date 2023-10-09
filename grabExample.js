var boxes = document.querySelectorAll('.box')
var target = document.querySelectorAll('.target')

boxes.forEach(box=>{
    box.addEventListener('dragover', function(e){
        e.preventDefault()
        this.appendChild(target)
    })
    box.addEventListener('drop', e=>{
        console.log('drop');
    })
})

