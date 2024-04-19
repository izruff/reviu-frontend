type TabPanelProps = {
  children?: React.ReactNode;
  tabIndex: number;
  index: number;
};

const TabPanel = (props: TabPanelProps) => {
  return (
    <div hidden={props.tabIndex !== props.index}>
      {props.tabIndex === props.index && props.children}
    </div>
  );
};

export default TabPanel;
