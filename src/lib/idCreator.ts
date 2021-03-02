export default function idCreator(){
    let id=parseInt(window.localStorage.getItem('maxId') || '0') || 0;
    id+=1;
    window.localStorage.setItem('maxId',id.toString());
    return id;
}