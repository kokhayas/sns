//  node.jsのrequire関数でfsをimport. fsのreadFileSyncを用いてtest.txtを読み込みstdoutする

// fs = require("fs")

// console.log(fs.readFileSync("test.txt", {encoding: "utf8"}))
// console.log(fs.readFileSync("test.txt").toString())

// node.jsのrequire関数でhttpをimport. httpのServerをinstance化. serverはrequestが来たらhello worldを返す. port3000でlisten

// const http = require("http");
// const server = http.Server();

// const f = (request, response) => {
// 	response.write("hello");
// 	response.end();
// }

// server.addListener("request", f)

// server.listen(3000);

// const http = require("http");
// const server = new http.createServer((request, response) => {
// 	response.write("hello world!!");
// 	response.end();
// 	// response.writeHead(200, {
// 	// 	"Content-Type": "text/html"
// 	// });
// 	// responseMessage="<h1>hello world</h1>"
// 	// response.end(responseMessage);
// 	console.log(`sent a response: ${responseMessage}`)
// });

// const port = 3000;
// server.listen(port);

//  名前と年齢をPerson objectは引数にとる。私の名前は~で~歳です と紹介するintroduceSelf method を持つ。

// class Person {
// 	name;
// 	age;
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	introduceSelf() {
// 		console.log(`My name is ${this.name}. I'm ${this.age} years old.`);
// 	}
// }

// person = new Person("kokhayas", 22);
// person.introduceSelf();

// const http = {
// 	Server: ServerClass,
// }

// class ServerClass {
// 	listener;
// 	addListener(type, listener) {
// 		this.listener = listener
// 	}
// 	listen(port) {
// 		while (true) {
// 			this.listener(request, response)
// 		}
// 	}

// }

// const http = require("http");
// server = http.Server();
// server.addListener("request", (request, response) => {
// 	response.write("hello world");
// 	response.end();
// });
// server.listen(3000);


// npm はnode package manager
// root directoryでnpm install expressを実行するとnode_modulesとpackage-lock.jsonが生成される

// const express = require("express");
// app = express();
// let count = 0;
// app.get("/", (request, response) => {
// 	// response.send("hello world!!");
// 	count += 1;
// 	response.send(`you are the ${count}th viewer!`);
// })
// app.listen(3000);

// fs moduleを使ってstatic/index.htmlをexpressで表示しよう

// const fs = require("fs");
// const express = require("express");

// const app = express();
// app.get("/", (request, response) => {
//   // static/index.html ファイルを読み込む
//   const html = fs.readFileSync("static/index.html").toString();
//   response.send(html);
// });
// app.listen(3000);

// const express = require("express");
// app = express();
// app.use(express.static("static"));
// app.listen(3000);


// ejs を使って template.ejsを出力しよう

// const express = require("express");
// const fs = require("fs");
// const ejs = require("ejs");

// const app = express();
// app.get("/", (request, response) => {
//   const template = fs.readFileSync("template.ejs").toString();
//   response.send(ejs.render(template, { name: "kokhayas", age: 22 }));
// });
// app.listen(3000);


const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded());
// app.use(express.static("static"));

let names = [];
let messages = [];

app.get("/", (request, response) => {
	const template = fs.readFileSync("template.ejs").toString();
	const html = ejs.render(template, {names: names, messages: messages});
	response.send(html);
});
// app.get("/", (request, response) => {
// 	response.send(fs.readFileSync("static/index.html").toString());
// });

// app.get("/send", (request, response) => {
// 	response.send(`your name is ${request.query.name}. your age is ${request.query.age}`);
// });


app.post("/send", (request, response) => {
	names.push(request.body.name);
	messages.push(request.body.message);
	// response.send("送信しました")


	// const template = fs.readFileSync("template.ejs").toString();
	// const html = ejs.render(template, {names: names, messages: messages});
	// response.send(`your name is ${request.body.name} and your age is ${request.body.age}`);
})

const port = process.env.PORT || 3000;

app.listen(port);

