import { HubItem } from "../constants";

type Props = {
  hub: HubItem;
};

const HubPage = ({ hub }: Props) => {
  return <div>This is the {hub.title} hub page.</div>;
};

export default HubPage;
