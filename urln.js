const buttonM = `
<style>
.btn{width:40px;height:40px;overflow:hidden;position:fixed;
top:15px;right:3%;z-index:1;display:inline-block;transition:1s;
background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" fill="none"/><line x1="24" y1="8" x2="24" y2="40" stroke="black" stroke-width="6"/><line x1="8" y1="24" x2="40" y2="24" stroke="black" stroke-width="6"/></svg>');background-size:100% 100%;background-repeat:no-repeat;
}
#btn{display:none}
#btn:checked~.btn{transform: rotate(-0.87turn);}
#btn:checked~#menu{height:100%;#data{background:white;}}
#menu{
  height:0;
  transition:1s;
  width:82%;
  margin:0;
  padding:0;
  position:fixed;left:0;top:0;bottom:0;
  background: linear-gradient(60deg,green,yellow,red);
}
#data{
  transition:1s;
  position:absolute;
  left:4px;top:4px;right:4px;bottom:4px;
  overflow:scroll;
}
</style>
<input id="btn" type="checkbox">
<label for="btn" class="btn"></label>
<div id="menu"></div>
`;

document.body.insertAdjacentHTML("beforeend", buttonM);

const content = document.getElementById("menu");
const divE = document.createElement("div");
divE.setAttribute("id", "data");
divE.textContent = "Loading......";
content.appendChild(divE);

divE.style.fontFamily = "sans-serif";
divE.style.margin = "0";
divE.style.padding = "0";

const url = `https://api.github.com/repos/urln/urln.github.io/contents/post`;
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    const dataDiv = document.getElementById("data");
    dataDiv.innerHTML = "";
    const ul = document.createElement("ul");
    ul.style.listStyleType = "none";
    ul.style.margin = "0";
    ul.style.padding = "0";

    data.forEach((item) => {
      const oSt = `${item.html_url}`;
      const nSt = oSt.replace(
        /https:\/\/github.com\/urln\/urln.github.io\/blob\/main\/post\//g,
        ""
      );
      const eNs = nSt.replace(/.html|.css|.js|.txt|.md|.png/g, "");
      const li = document.createElement("li");
      li.style.backgroundColor = "#eee";
      li.style.margin = "1px 0";
      li.style.padding = "5px";
      li.style.border = "5px solid #ddd";
      li.style.borderRadius = "5px";
      li.innerHTML = `<a style="color:#123456" href="post/${eNs}.html">${eNs}</a> 
                            <a style="float:right;color:#456789" href="${item.download_url}">raw</a>`;
      ul.appendChild(li);
    });

    dataDiv.appendChild(ul);
  })
  .catch((error) => {
    const dataDiv = document.getElementById("data");
    dataDiv.innerHTML = "Error fetching data: " + error.message;
  });
