import { useSelector } from 'react-redux';
import '../style/Style.scss';

export default function DoneList() {
  // 완료 목록 불러오고
  const doneList = useSelector(state => state.todo.list).filter(
    el => el.done === true,
  );
  // console.log(doneList);

  return (
    <section>
      <h3>완료 목록</h3>
      <div className="blank"></div>
      <ul>
        {doneList.map(el => {
          return <li key={el.id}>{el.text}</li>;
        })}
      </ul>
    </section>
  );
}
