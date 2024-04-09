const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

showAlltasks();

function showAlltasks(){
    tasks.forEach((value,index)=>{
        const div = document.createElement("div");
        div.setAttribute("class", "task");

        const innerdiv = document.createElement("div");
        div.append(innerdiv);

        const p = document.createElement("p");
        p.innerText = value.title;

        innerdiv.append(p);

        const span = document.createElement("span");
        span.innerText = value.description;

        innerdiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class", "dltbtn");
        btn.innerText = "-";
        div.append(btn);

        btn.addEventListener("click", ()=>{
            removetasks();
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));

            showAlltasks();
        })

        container.append(div);
    })
}

function removetasks(){
    tasks.forEach(()=>{
        const div = document.querySelector(".task");
        div.remove();
    })
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removetasks();
    tasks.push({
        title:title.value,
        description:description.value,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showAlltasks();
})