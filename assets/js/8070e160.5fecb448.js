(self.webpackChunkpistache_io=self.webpackChunkpistache_io||[]).push([[651],{7917:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(2122),l=n(9756),i=(n(7294),n(3905)),s=["components"],r={title:"Getting started",slug:"/"},o=void 0,p={unversionedId:"quickstart",id:"quickstart",isDocsHomePage:!1,title:"Getting started",description:"\x3c!--",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/",permalink:"/pistache/docs/",editUrl:"https://github.com/pistacheio/pistache/edit/master/pistache.io/docs/quickstart.md",version:"current",frontMatter:{title:"Getting started",slug:"/"},sidebar:"leftSidebar",previous:{title:"HTTP handler",permalink:"/pistache/docs/http-handler"},next:{title:"REST description",permalink:"/pistache/docs/rest-description"}},c=[{value:"Installing Pistache",id:"installing-pistache",children:[]},{value:"Serving requests",id:"serving-requests",children:[{value:"Include",id:"include",children:[]},{value:"Hello world",id:"hello-world",children:[]},{value:"Final touch",id:"final-touch",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pistache is a web framework written in Modern C++ that focuses on performance and provides an elegant and asynchronous API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <pistache/pistache.h>\n")),(0,i.kt)("h2",{id:"installing-pistache"},"Installing Pistache"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com"},"git")," is needed to retrieve the sources. Compiling the sources will require ",(0,i.kt)("a",{parentName:"p",href:"https://cmake.org"},"CMake")," to generate build files and a recent compiler that supports C++17."),(0,i.kt)("p",null,"If you're on Ubuntu and want to skip the compilation process you can add the official PPA providing nightly builds:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo add-apt-repository ppa:pistache+team/unstable\nsudo apt update\nsudo apt install libpistache-dev\n")),(0,i.kt)("p",null,"Otherwise, here's how to build and install the latest release:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/pistacheio/pistache.git\ncd pistache\nmeson setup build\nmeson install -C build\n")),(0,i.kt)("p",null,"Also, Pistache does not support Windows yet, but should work fine under ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/windows/wsl/about"},"WSL"),"."),(0,i.kt)("h2",{id:"serving-requests"},"Serving requests"),(0,i.kt)("h3",{id:"include"},"Include"),(0,i.kt)("p",null,"First, let\u2019s start by including the right header."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <pistache/endpoint.h>\n")),(0,i.kt)("h3",{id:"hello-world"},"Hello world"),(0,i.kt)("p",null,"Requests received by Pistache are handled with an ",(0,i.kt)("inlineCode",{parentName:"p"},"Http::Handler"),"."),(0,i.kt)("p",null,"Let\u2019s start by defining a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"HelloHandler"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'using namespace Pistache;\n\nclass HelloHandler : public Http::Handler {\npublic:\n\n    HTTP_PROTOTYPE(HelloHandler)\n\n    void onRequest(const Http::Request& request, Http::ResponseWriter response) {\n        response.send(Http::Code::Ok, "Hello, World\\n");\n    }\n};\n')),(0,i.kt)("p",null,"Handlers must inherit the ",(0,i.kt)("inlineCode",{parentName:"p"},"Http::Handler")," class and at least define the ",(0,i.kt)("inlineCode",{parentName:"p"},"onRequest")," member function. They must also define a ",(0,i.kt)("inlineCode",{parentName:"p"},"clone()")," member function. Simple handlers can use the special ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP_PROTOTYPE")," macro, passing in the name of the class. The macro will take care of defining the ",(0,i.kt)("inlineCode",{parentName:"p"},"clone()")," member function for you."),(0,i.kt)("h3",{id:"final-touch"},"Final touch"),(0,i.kt)("p",null,"After defining the handler, the server can now be started:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int main() {\n    Address addr(Ipv4::any(), Port(9080));\n\n    auto opts = Http::Endpoint::options().threads(1);\n    Http::Endpoint server(addr);\n    server.init(opts);\n    server.setHandler(Http::make_handler<HelloHandler>());\n    server.serve();\n}\n")),(0,i.kt)("p",null,"For simplicity, you can also use the special ",(0,i.kt)("inlineCode",{parentName:"p"},"listenAndServe")," function that will automatically create an endpoint and instantiate your handler:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'int main() {\n    Http::listenAndServe<HelloHandler>("*:9080");\n}\n')),(0,i.kt)("p",null,"And that\u2019s it, now you can fire up your favorite curl request and observe the final result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:9080/\nHello, World\n")),(0,i.kt)("p",null,"Complete code for this example can be found on GitHub: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pistacheio/pistache/blob/master/examples/hello_server.cc"},"examples/hello_server.cc")))}u.isMDXComponent=!0}}]);