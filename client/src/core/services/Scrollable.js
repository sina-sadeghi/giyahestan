export default function ScrollBar(state) {
    console.log(state)
    if(state)
        document.body.classList.add("no-scroll")
    else
        document.body.classList.remove("no-scroll")
}