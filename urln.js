const buttonM = `
<style>
#show, #contentM { display: none; }
#show:checked ~ #contentM { display: block; }
#data{width:80%;position:fixed;z-index:10;left:0;top:0;}
</style>
<input id="show" type="checkbox">
<label for="show" style="background:#eee;position:fixed;top:0;right:0;z-index:10;border:5px solid #ddd; padding:5px; display:inline-block;">MENU</label>
<div style="margin-top:40px;" id="contentM"></div>
`;

document.body.insertAdjacentHTML('beforeend', buttonM);

const content = document.getElementById('contentM');
const divE = document.createElement('div');
divE.setAttribute('id', 'data');
divE.textContent = 'Loading......';
content.appendChild(divE);

divE.style.fontFamily = "sans-serif"; 
divE.style.margin = "0"; 
divE.style.padding = "0"; 

const url = `https://api.github.com/repos/urln/urln.github.io/contents/post`;
fetch(url)
    .then(response => response.json())
    .then(data => {
        const dataDiv = document.getElementById('data');
        dataDiv.innerHTML = '';
        const ul = document.createElement('ul');
        ul.style.listStyleType = "none";
        ul.style.margin = "0";
        ul.style.padding = "0";
        
        
        data.forEach(item => {
            const oSt = `${item.html_url}`;
            const nSt = oSt.replace(/https:\/\/github.com\/urln\/urln.github.io\/blob\/main\/post\//g, "");
            const eNs = nSt.replace(/.html|.css|.js|.txt|.md|.png/g, "");
            const li = document.createElement('li');
            
            li.style.backgroundColor = "#eee"; 
            li.style.margin = "1px 0"; 
            li.style.padding = "5px"; 
            li.style.border = "5px solid #ddd"; 
            li.style.borderRadius = "5px";
            li.innerHTML = `
<a style="text-decoration:none;color:#123456" href="post/${eNs}.html">${eNs}</a> 
<a style="float:right;color:#456789" href="${item.download_url}">raw</a>`;
            ul.appendChild(li);
        });
        
        dataDiv.appendChild(ul);
    })
    .catch(error => {
        const dataDiv = document.getElementById('data');
        dataDiv.innerHTML = 'Error fetching data: ' + error.message;
    });