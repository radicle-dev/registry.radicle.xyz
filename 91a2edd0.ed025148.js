(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(6),i=(a(0),a(120)),o={id:"submit-transactions",title:"Submit transactions",sidebar_label:"Submit transactions"},c={id:"submit-transactions",title:"Submit transactions",description:"\u26a0 Before proceeding, make sure you have [installed the required binaries](getting-started#installation)",source:"@site/docs/submit-transactions.md",permalink:"/docs/submit-transactions",editUrl:"https://github.com/radicle-dev/radicle-run/edit/master/website/docs/submit-transactions.md",sidebar_label:"Submit transactions",sidebar:"someSidebar",previous:{title:"Setup full node",permalink:"/docs/node"},next:{title:"Documentation",permalink:"/docs/docs"}},s=[{value:"Available transactions",id:"available-transactions",children:[{value:"Examples",id:"examples",children:[]}]},{value:"Command-Line Options",id:"command-line-options",children:[]},{value:"Transaction fees",id:"transaction-fees",children:[]}],l={rightToc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u26a0 Before proceeding, make sure you have ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"getting-started#installation"}),"installed the required binaries"),"\nand have followed the getting started steps regarding ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"getting-started#submitting-a-transaction"}),"submitting a transaction"),"."),Object(i.b)("h2",{id:"available-transactions"},"Available transactions"),Object(i.b)("p",null,"Discover all the available transactions that you can submit via the CLI.\nRun the provided help commands to learn more about the arguments\nand behaviour of each one of them."),Object(i.b)("p",null,"\u24d8 All the transactions provide the same ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#command-line-options"}),"Command-Line Options"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Transfer funds from an account to another"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-cli account transfer --help\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Transfer funds from an org's account to another account"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-cli org transfer --help\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Register entities"),Object(i.b)("p",{parentName:"li"},"  You can register users, orgs, and projects in the Radicle Registry."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Register a user"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-cli user register --help\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Register an org"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-cli org register --help\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Register a project"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-cli project register --help\n"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Unregister entities"),Object(i.b)("p",{parentName:"li"},"  You can unregister orgs and users from the Radicle Registry."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Unregister a user"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-cli user unregister --help\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Unregister an org"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-cli org unregister --help\n")))))),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Register a user"),Object(i.b)("p",{parentName:"li"},'This example registers a user named "neo" in the registry using a\nlocally generated account (that happens to also be) named "neo"\nto sign the transactions, specifying ',Object(i.b)("inlineCode",{parentName:"p"},"100")," as the fee."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-cli user register neo --author neo --fee 100\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Transfer funds from an account to another"),Object(i.b)("p",{parentName:"li"},"This example transfers ",Object(i.b)("inlineCode",{parentName:"p"},"500")," tokens to the account with the address\n",Object(i.b)("inlineCode",{parentName:"p"},"5HWP48i9TuP2VrRZrNeb6QzYpdUSE9BvyaptEqqHrLfH8ZPd"),", specifying ",Object(i.b)("inlineCode",{parentName:"p"},"20")," as fee. A total of\n",Object(i.b)("inlineCode",{parentName:"p"},"520")," will be withdrawn from the author's account, neo."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-cli account transfer \\\n    500 \\\n    5HWP48i9TuP2VrRZrNeb6QzYpdUSE9BvyaptEqqHrLfH8ZPd \\\n    --author neo \\\n    --fee 20\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Unregister an org"),Object(i.b)("p",{parentName:"li"},'This example unregisters an org named "Hooli". For it to succeed, such an org must be registered in\nthe Radicle Registry and it must have been registered by the author. The author will be charged\n10 tokens in any case.'),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"radicle-registry-cli org unregister Hooli --author neo --fee 10\n")))),Object(i.b)("h2",{id:"command-line-options"},"Command-Line Options"),Object(i.b)("p",null,"All the CLI commands that submit transactions provide the following options that\ncan either be specified as options at the end of a command or as environment variables."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Author")),Object(i.b)("p",{parentName:"li"},"  \u26a0 Requires having ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"getting-started#submitting-a-transaction"}),"getting started submitting a transaction"),"."),Object(i.b)("p",{parentName:"li"},"  Mandatory for all transactions. The author option lets you specify the account that is\nused to sign the transaction. You can use the ",Object(i.b)("inlineCode",{parentName:"p"},"account")," command group to manage your\naccounts.\nthat you want to use to sign a transaction."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"--author <account_name>\n    The name of the local account to be used to sign transactions\n    [env: RAD_AUTHOR=]\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Fee")),Object(i.b)("p",{parentName:"li"},"  \u24d8 See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#transaction-fees"}),"Transaction fees")," to learn more about how fees work in the Radicle Registry."),Object(i.b)("p",{parentName:"li"},"  Optional, default to the minimum acceptable fee amount."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"--fee <fee>\n    Fee that will be charged to submit transactions. The higher the fee,\n    the higher the priority of a transaction\n    [env: RAD_FEE=]\n    [default: 1]\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Node Host")),Object(i.b)("p",{parentName:"li"},"  \u24d8 See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"getting-started#running-a-node"}),"Running a node")," to be able to connect directly to\nthe node you eventually have running locally."),Object(i.b)("p",{parentName:"li"},"  Optional, default to the ffnet network. TODO(nuno) phrase this better."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"--node-host <node-host>\n    IP address or domain name that hosts the RPC API\n    [env: RAD_NODE_HOST=]\n    [default: 127.0.0.1]\n")))),Object(i.b)("h2",{id:"transaction-fees"},"Transaction fees"),Object(i.b)("p",null,"Transactions fees in the Radicle Registry let you specify the amount that you want to\npay to have your transactions included and prioritized. A higher fee leverages the\nlikelihood of your transactions being included quickly. Lower fees might lead to longer\nwaiting times for inclusion."),Object(i.b)("p",null,"The Radicle Registry defines a minimum acceptable fee, which is the same for all transactions.\nYou define how much we should charge you. It's surprise-free."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Transactions that involve an organization (except when registering one) will\nbe charged from the org's account if the author is a member of the organization.\nOtherwise, the transaction will fail and the author is charged the fee. Except when\nregistering an org, since there is no org account at the moment of the registration,\nbeing the author the one paying for that transaction."))}b.isMDXComponent=!0},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return a?r.a.createElement(d,c({ref:t},l,{components:a})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);