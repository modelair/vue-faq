import{h as r,o as d,c as m,k as e,a1 as l,a2 as o,a as i}from"./chunks/framework.477046d0.js";const p=e("h1",{id:"внесите-лепту-в-развитие-данного-faq",tabindex:"-1"},[i("Внесите лепту в развитие данного FAQ "),e("a",{class:"header-anchor",href:"#внесите-лепту-в-развитие-данного-faq","aria-label":'Permalink to "Внесите лепту в развитие данного FAQ"'},"​")],-1),_=e("p",null,"Вы можете предложить корректировку любого или добавление нового вопроса-ответа используя форму ниже.",-1),h=e("p",null,[i("GitHub way внесения изменений ("),e("i",null,"fork -> edit -> create PR"),i(") также всячески приветствуется.")],-1),f={class:"form-container",action:"action_page.php"},b=e("label",{for:"fname"},"Ваше имя и/или контакты (опционально)",-1),v=e("label",{for:"subject"},"Вопрос/ответ или сообщение",-1),k=e("label",{for:"check"},'Введите слово "vue"',-1),A=JSON.parse('{"title":"Внесите лепту в развитие данного FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"misc/contribute.md","filePath":"misc/contribute.md"}'),g={name:"misc/contribute.md"},j=Object.assign(g,{setup(y){const n=r(),t=r({name:"",email:"",message:"",check:""});async function u(){if(n.value.setAttribute("disabled",!0),t.value.check==="vue"){const c=`Сообщение с сайта Vue FAQ:


      Имя:${t.value.name}

      ${t.value.message}`;await fetch("https://api.telegram.org/bot5025156465:AAGb9Ke5_Xv8cJRRt9sjv_ZfLyHPkQ224rE/sendMessage",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({chat_id:"333530662",text:c})})&&(t.value={name:"",email:"",message:"",check:""})}else alert("Неверное проверочное слово");n.value.removeAttribute("disabled")}return(c,a)=>(d(),m("div",null,[p,_,h,e("div",f,[b,l(e("input",{id:"fname","onUpdate:modelValue":a[0]||(a[0]=s=>t.value.name=s),type:"text",name:"firstname",placeholder:""},null,512),[[o,t.value.name]]),v,l(e("textarea",{id:"subject","onUpdate:modelValue":a[1]||(a[1]=s=>t.value.message=s),name:"subject",placeholder:""},null,512),[[o,t.value.message]]),k,l(e("input",{id:"check","onUpdate:modelValue":a[2]||(a[2]=s=>t.value.check=s),type:"text",name:"check",placeholder:""},null,512),[[o,t.value.check]]),e("input",{ref_key:"submit",ref:n,type:"submit",value:"Отправить",onClick:u},null,512)])]))}});export{A as __pageData,j as default};
