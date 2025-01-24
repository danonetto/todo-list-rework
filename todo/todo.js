let counter=0;
const gomb=document.getElementById("create").addEventListener("click",function(){
        counter+=1;

        const main=document.getElementById("main");
        const newdiv=document.createElement("div");
        const counterdiv=document.createElement("div");
        counterdiv.textContent=`${counter}.`;
        newdiv.appendChild(counterdiv);

        const input=document.createElement("input");
        input.type = 'text';
        newdiv.appendChild(input);
        const checkbox=document.createElement("input");
        checkbox.type='checkbox';
        checkbox.id="status";
        newdiv.appendChild(checkbox);
        main.appendChild(newdiv);
        checkbox.addEventListener("click", function() {
            const parent = checkbox.parentElement;
            parent.remove();
        });
    
    
});
