'use client'
import { useState, useCallback, useMemo } from "react";
import styles from "./page.module.css";
import AddTodo from "./AddTodo";
import Header from "./header";
import TodoList from "./todoList";


export default function Home() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [num, setNum] = useState(0)
  const [search, setSearch] = useState('');
  
  // (1) 'memo' kullanilan bir componente bagli methodlar varsa bu methodlarin da 'useCallback' ile sarmalanmalari gerekir.
  const handleChange = useCallback((e) => {
    setTodo(e.target.value);
  }, []);

  // (1) Dependency array icine degisiminde tetiklenmesini istedigimiz 'state' i yazdik, eger yazilmazsa 'memory'de tutulan deger guncellenmez.
  const addTodo = useCallback(() => {
    setTodoList([...todoList, todo]);
    setTodo('');
  }, [todo]);

  console.log('app rendered');

  // 'useMemo' hesapladigimiz bazi degerleri donen bir yapiyi memoryde tutmamizi saglar, useMemo kullanilmazsa parent component her render edildiginde bu degerler degismese bile
  // yeniden hesaplar ve kullanildigi componenti yeniden render ettirir. Bunun gereksiz yere olmasini engellemek icin 'useMemo' kullanilir.
  const filteredList = useMemo(() => { 
    return todoList.filter(todoItem => { return todoItem.includes(search)});
  }, [todoList, search]);

  return (
    <main className={styles.main}>
      {/* memo */}
      <Header /> 
      {/* memo ve useCallback */}
      <AddTodo todo={todo} handleChange={handleChange} addTodo={addTodo} />
      {/* memo */}
      <TodoList todoList={filteredList} />
      <input onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => setNum(num + 1)}>INC NUM</button>
      {num}
    </main>
  );
}
