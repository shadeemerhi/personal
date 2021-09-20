// React
import { useContext } from 'react';

// Contexts
import { WorkContext } from '../../../../contexts/WorkContext';

// Custom components
import WorkItem from './WorkItem';

const Work = () => {

  const { workItemState } = useContext(WorkContext);

	return (
		<>
			{workItemState.workItems.map((item, index) => {
				return <WorkItem key={index} {...item} play={item.current} />;
			})}
		</>
	);
};

export default Work;