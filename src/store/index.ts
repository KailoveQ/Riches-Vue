import Vue from 'vue';
import Vuex from 'vuex';
import {defaultExpenseTags} from '@/contants/defaultTags';
import idCreator from '@/lib/idCreator';
Vue.use(Vuex);


const store=new Vuex.Store({
  state: {
    tagList: JSON.parse(window.localStorage.getItem('tag-list') || '0') || defaultExpenseTags,   //设置 defaultExpenseTags 保底值；
    recordList: JSON.parse(window.localStorage.getItem('record-list') || '[]'),
    tagListError: '',
    currentRecord: undefined,
    recordListError: ''
  }  as storeState,
  mutations: {
    /*tag-list相关操作*/
    insertTag(state,tag: TagItem){   //传入的参数为tag类型，
      state.tagListError="";
      const names=state.tagList.map(i=>i.name);
      if(names.indexOf(tag.name)>=0){
        state.tagListError='depulicate';
        return;    //插入的标签如果重名，则返回
      }else{
        state.tagList.push(tag);
        store.commit('saveTag');
      }
    },

    saveTag(state) {
      window.localStorage.setItem('tag-list',JSON.stringify(state.tagList))
    },
    
    /*record-list相关操作*/
    insertRecord (state,record: RecordItem){
      record.id=idCreator();
      record.createAt=new Date();
      record.amount=Math.abs(record.amount);
      state.recordList.push(record);
      store.commit('saveRecord');
    },

    findRecord(state,id: number){
      state.currentRecord=undefined;
      const record=state.recordList.filter(item=>item.id===id)[0];
      if(record){
        state.currentRecord=record;
      }
    },

    updateRecord(state,payload: {id: number;record: RecordItem}){
      const {id,record}=payload;    //析构赋值；
         //TODO
      for( let index=0;index<state.recordList.length;index++){
        if(state.recordList[index].id===id){
          state.recordList[index]=record;
          break;
        }
      }

      store.commit('saveRecord');
    },

    removeRecord(state,id: number){
      state.recordListError='';
      let i;
      for (i=0;i<state.recordList.length;i++){
        if(state.recordList[i].id===id){
          break;
        }
      }

      if (i === state.recordList.length) {
        state.recordListError = 'notfound';
    } else {
        state.recordList.splice(i, 1);
        store.commit('saveRecord');
    }
    },

    saveRecord(state){
      window.localStorage.setItem('record-list',JSON.stringify(state.recordList))
    },
    
    
  }
})


export default store;