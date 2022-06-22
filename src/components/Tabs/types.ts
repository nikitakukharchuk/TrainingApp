export interface TabSchema {
  title: string;
  key: string;
  isDisabled?: boolean;
}

export interface TabGroupProps {
  tabs: TabSchema[];
  activeTab: string;
}
