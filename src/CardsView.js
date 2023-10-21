import { useState } from 'react';
import Card from './Card';

function CardsView() {
  const [idList, setIdList] = useState(() => {
    var array = [];

    for (var i = 1; i <= 12; i++) {
      array.push(i);
    }
    return array;
  });

  const loadMore = () => {
    var array = [...idList];

    for (var i = idList.length + 1; i <= idList.length + 12; i++) {
      array.push(i);
    }
    setIdList(array);
  };

  return (
    <>
      <div className='container'>
        {idList.map(id => {
          return <Card id={id}>{id}</Card>;
        })}
      </div>
      <button onClick={loadMore} className='loadButton'>
        {' '}
        Load More{' '}
      </button>
    </>
  );
}

export default CardsView;
