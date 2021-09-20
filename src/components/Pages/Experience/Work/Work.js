// React
import { useContext } from 'react';

// Context
import { DataContext } from '../../../../contexts/DataContext';

// Custom components
import WorkItem from './WorkItem';

export default function Work() {

  const { workItemState } = useContext(DataContext);

  return(
    <>
      {workItemState.workItems.map((item, index) => {
        return (
          <WorkItem key={index} {...item} play={item.current} />
        )
      })}
    </>
  )
}