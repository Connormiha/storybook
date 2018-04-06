webpackJsonp([0xf4b7fb19cc9b],{665:function(e,t){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/","/basics/quick-start-guide/","/basics/slow-start-guide/","/basics/guide-react/","/basics/guide-vue/","/basics/guide-angular/","/basics/writing-stories/","/basics/exporting-storybook/","/basics/faq/","/basics/community/","/basics/live-examples/"],configurations:["/configurations/default-config/","/configurations/custom-webpack-config/","/configurations/custom-babel-config/","/configurations/typescript-config/","/configurations/add-custom-head-tags/","/configurations/serving-static-files/","/configurations/env-vars/","/configurations/cli-options/"],testing:["/testing/react-ui-testing/","/testing/structural-testing/","/testing/interaction-testing/","/testing/css-style-testing/","/testing/manual-testing/"],addons:["/addons/introduction/","/addons/using-addons/","/addons/addon-gallery/","/addons/writing-addons/","/addons/api/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/addon-gallery/"},frontmatter:{title:"Addon Gallery",id:"addon-gallery"}}},{node:{fields:{slug:"/addons/introduction/"},frontmatter:{title:"Intro to Addons",id:"introduction"}}},{node:{fields:{slug:"/addons/using-addons/"},frontmatter:{title:"Using Addons",id:"using-addons"}}},{node:{fields:{slug:"/addons/api/"},frontmatter:{title:"API",id:"api"}}},{node:{fields:{slug:"/basics/community/"},frontmatter:{title:"Community",id:"community"}}},{node:{fields:{slug:"/basics/exporting-storybook/"},frontmatter:{title:"Exporting Storybook as a Static App",id:"exporting-storybook"}}},{node:{fields:{slug:"/addons/writing-addons/"},frontmatter:{title:"Writing Addons",id:"writing-addons"}}},{node:{fields:{slug:"/basics/faq/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/guide-angular/"},frontmatter:{title:"Storybook for Angular",id:"guide-angular"}}},{node:{fields:{slug:"/basics/guide-vue/"},frontmatter:{title:"Storybook for Vue",id:"guide-vue"}}},{node:{fields:{slug:"/basics/guide-react/"},frontmatter:{title:"Storybook for React",id:"guide-react"}}},{node:{fields:{slug:"/basics/live-examples/"},frontmatter:{title:"Live Examples",id:"live-examples"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/basics/slow-start-guide/"},frontmatter:{title:"Slow start guide",id:"slow-start-guide"}}},{node:{fields:{slug:"/basics/quick-start-guide/"},frontmatter:{title:"Quick Start Guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/basics/writing-stories/"},frontmatter:{title:"Writing Stories",id:"writing-stories"}}},{node:{fields:{slug:"/configurations/add-custom-head-tags/"},frontmatter:{title:"Add Custom Head Tags",id:"add-custom-head-tags"}}},{node:{fields:{slug:"/configurations/cli-options/"},frontmatter:{title:"CLI Options",id:"cli-options"}}},{node:{fields:{slug:"/configurations/custom-babel-config/"},frontmatter:{title:"Custom Babel Config",id:"custom-babel-config"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom Webpack Config",id:"custom-webpack-config"}}},{node:{fields:{slug:"/configurations/default-config/"},frontmatter:{title:"Default Config",id:"default-config"}}},{node:{fields:{slug:"/configurations/serving-static-files/"},frontmatter:{title:"Serving Static Files",id:"serving-static-files"}}},{node:{fields:{slug:"/configurations/env-vars/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/configurations/typescript-config/"},frontmatter:{title:"Typescript Config",id:"typescript-config"}}},{node:{fields:{slug:"/testing/css-style-testing/"},frontmatter:{title:"CSS/Style Testing",id:"css-style-testing"}}},{node:{fields:{slug:"/testing/interaction-testing/"},frontmatter:{title:"Interaction Testing",id:"interaction-testing"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/testing/react-ui-testing/"},frontmatter:{title:"Introduction: React UI Testing",id:"react-ui-testing"}}},{node:{fields:{slug:"/testing/structural-testing/"},frontmatter:{title:"Structural Testing",id:"structural-testing"}}}]},markdownRemark:{html:'<p>You may have tried to use our quick start guide to setup your project for Storybook. If you want to set up Storybook manually, this is the guide for you.</p>\n<blockquote>\n<p>This will also help you understand how Storybook works.</p>\n</blockquote>\n<h2 id="starter-guide-vue"><a href="#starter-guide-vue" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Starter Guide Vue</h2>\n<p>Storybook has its own Webpack setup and a dev server.<br>\nThe Webpack setup is very similar to <a href="https://github.com/vuejs/vue-cli">Vue CLI’s</a>, but allows you to <a href="/configurations/custom-webpack-config/">configure it however you want</a>.</p>\n<p>In this guide, we are trying to set up Storybook for your Vue project.</p>\n<h2 id="table-of-contents"><a href="#table-of-contents" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Table of contents</h2>\n<ul>\n<li><a href="#add-storybookvue">Add @storybook/vue</a></li>\n<li><a href="#add-vue-and-babel-core">Add vue and babel-core</a></li>\n<li><a href="#create-the-npm-script">Create the NPM script</a></li>\n<li><a href="#create-the-config-file">Create the config file</a></li>\n<li><a href="#write-your-stories">Write your stories</a></li>\n<li><a href="#run-your-storybook">Run your Storybook</a></li>\n</ul>\n<h2 id="add-storybookvue"><a href="#add-storybookvue" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Add @storybook/vue</h2>\n<p>First of all, you need to add <code>@storybook/vue</code> to your project. To do that, simply run:</p>\n<pre><code class="language-sh">npm i --save-dev @storybook/vue\n</code></pre>\n<h2 id="add-vue-and-babel-core"><a href="#add-vue-and-babel-core" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Add vue and babel-core</h2>\n<p>Make sure that you have <code>vue</code> and <code>babel-core</code> in your dependencies as well because we list is as a peerDependency:</p>\n<pre><code class="language-sh">npm i --save vue\nnpm i --save-dev babel-core\n</code></pre>\n<h2 id="create-the-npm-script"><a href="#create-the-npm-script" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create the NPM script</h2>\n<p>Add the following NPM script to your <code>package.json</code> in order to start the storybook later in this guide:</p>\n<pre><code>{\n  "scripts": {\n    "storybook": "start-storybook -p 9001 -c .storybook"\n  }\n}\n</code></pre>\n<h2 id="create-the-config-file"><a href="#create-the-config-file" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create the config file</h2>\n<p>Storybook can be configured in several different ways.\nThat’s why we need a config directory. We’ve added a <code>-c</code> option to the above NPM script mentioning <code>.storybook</code> as the config directory.</p>\n<p>There are 3 things you need to tell Storybook to do:</p>\n<ol>\n<li>Import and globally register with <a href="https://vuejs.org/v2/api/#Vue-component"><code>Vue.component()</code></a> any global custom components just like you did with your project. (Note: <a href="https://vuejs.org/v2/guide/components.html#Local-Registration">components registered locally</a> will be brought in automatically).</li>\n<li>For any required Vue plugins (e.g. <code>vuex</code>), you’ll also need to <a href="https://vuejs.org/v2/api/#Vue-use">install these with <code>Vue.use</code></a>.</li>\n<li>Require your stories.</li>\n</ol>\n<p>Here’s an example <code>.storybook/config.js</code> to get you started:</p>\n<pre><code class="language-js">import { configure } from \'@storybook/vue\';\n\nimport Vue from \'vue\';\nimport Vuex from \'vuex\'; // Vue plugins\n\n// Import your custom components.\nimport Mybutton from \'../src/stories/Button.vue\';\n\n// Install Vue plugins.\nVue.use(Vuex);\n\n// Register custom components.\nVue.component(\'my-button\', Mybutton);\n\nfunction loadStories() {\n  // You can require as many stories as you need.\n  require(\'../src/stories\');\n}\n\nconfigure(loadStories, module);\n</code></pre>\n<p>This example registered your custom <code>Button.vue</code> component, installed the Vuex plugin, and loaded your Storybook stories defined in <code>../stories/index.js</code>.</p>\n<p>All custom components and Vue plugins should be registered before calling <code>configure()</code>.</p>\n<blockquote>\n<p>This stories folder is just an example, you can load stories from wherever you want to.\nWe think stories are best located close to the source files.</p>\n</blockquote>\n<h2 id="write-your-stories"><a href="#write-your-stories" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Write your stories</h2>\n<p>Now you can write some stories inside the <code>../stories/index.js</code> file, like this:</p>\n<pre><code class="language-js">import Vue from \'vue\';\n\nimport { storiesOf } from \'@storybook/vue\';\n\nimport MyButton from \'./Button.vue\';\n\nstoriesOf(\'MyButton\', module)\n  .add(\'story as a template\', () => \'&#x3C;my-button :rounded="true">story as a function template&#x3C;/my-button>\')\n  .add(\'story as a component\', () => ({\n    components: { MyButton },\n    template: \'&#x3C;my-button :rounded="true">rounded&#x3C;/my-button>\'\n  }));\n</code></pre>\n<p>Each story is a single state of your component. In the above case, there are two stories for the MyButton component:</p>\n<ol>\n<li>story as a template</li>\n<li>story as a component</li>\n</ol>\n<h2 id="run-your-storybook"><a href="#run-your-storybook" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run your Storybook</h2>\n<p>Now everything is ready. Simply run your storybook with:</p>\n<pre><code class="language-sh">npm run storybook\n</code></pre>\n<p>Now you can change components and write stories whenever you need to.\nYou’ll get those changes into Storybook in a snap with the help of Webpack’s HMR API.</p>',fields:{slug:"/basics/guide-vue/"},frontmatter:{title:"Storybook for Vue",id:"guide-vue"}}},pathContext:{slug:"/basics/guide-vue/"}}}});
//# sourceMappingURL=path---basics-guide-vue-ffbca5517f7a26693477.js.map