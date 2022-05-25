import{L as m}from"./LessonDataService.3b9046d2.js";import{_ as f,o as V,d as v,b as r,t as i,a as s,w as o,F as _,V as c,f as p}from"./index.cfd15431.js";import{V as g}from"./VForm.05fded77.js";import{V as h}from"./VTextField.4ca8866e.js";import{a as I,V as n}from"./http-common.7ed8e4db.js";const L={name:"edit-lesson",props:{tutorialId:String,lessonId:String},data(){return{lesson:Object,message:"Enter data and click save"}},methods:{retrieveLesson(){m.getLesson(this.tutorialId,this.lessonId).then(t=>{this.lesson=t.data}).catch(t=>{this.message=t.response.data.message})},saveLesson(){var t={title:this.lesson.title,description:this.lesson.description,tutorialId:this.lesson.tutorialId};m.updateLesson(this.lesson.tutorialId,this.lesson.id,t).then(e=>{this.lesson.id=e.data.id,this.$router.push({name:"view",params:{id:this.lesson.tutorialId}})}).catch(e=>{this.message=e.response.data.message})},cancel(){this.$router.push({name:"view",params:{id:this.lesson.tutorialId}})}},mounted(){this.retrieveLesson()}},x=r("h1",null,"Edit Lesson",-1),k=p("Save"),w=p("Cancel");function C(t,e,d,S,l,u){return V(),v(_,null,[x,r("h4",null,i(l.message),1),r("h4",null,"Tutorial : "+i(d.tutorialId)+" Lesson : "+i(d.lessonId),1),s(g,null,{default:o(()=>[s(h,{label:"Title",modelValue:l.lesson.title,"onUpdate:modelValue":e[0]||(e[0]=a=>l.lesson.title=a)},null,8,["modelValue"]),s(h,{label:"Description",modelValue:l.lesson.description,"onUpdate:modelValue":e[1]||(e[1]=a=>l.lesson.description=a)},null,8,["modelValue"]),s(I,{justify:"center"},{default:o(()=>[s(n,{col:"2"}),s(n,{col:"2"},{default:o(()=>[s(c,{color:"success",onClick:e[2]||(e[2]=a=>u.saveLesson())},{default:o(()=>[k]),_:1})]),_:1}),s(n,{col:"2"},{default:o(()=>[s(c,{color:"info",onClick:e[3]||(e[3]=a=>u.cancel())},{default:o(()=>[w]),_:1})]),_:1}),s(n,{col:"2"})]),_:1})]),_:1})],64)}var D=f(L,[["render",C]]);export{D as default};
