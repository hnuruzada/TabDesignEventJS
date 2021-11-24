let btn = document.querySelectorAll(".btn")


btn.forEach((button) => {
    button.onclick = function () {
        let dataid = button.getAttribute("data-id")
        btn.forEach((btn)=>{
            btn.classList.remove("active")

        })
        let content = document.getElementById(dataid)

        let contents = document.querySelectorAll(".content")
        contents.forEach((cont) => {
            cont.classList.add("d-none")
        })
        button.classList.add("active")

        content.classList.remove("d-none")
    }
})