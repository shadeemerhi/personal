import ProjectDescription from './ProjectDescription';
import Stack from './Stack';

export default function ProjectInfo(props) {

  return (
    <div>
      <ProjectDescription description={props.description}/>
      <Stack {...props.stack}/>
    </div>
  )

}