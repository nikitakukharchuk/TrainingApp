import { TabGroupProps } from 'components/Tabs/types';
import { Tab, TabsContainer } from 'components/Tabs/styled';

export function TabsGroup({ tabs, activeTab }: TabGroupProps) {
  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Tab
          key={tab.key}
          isActive={activeTab === tab.key}
          isDisabled={tab.isDisabled}
        >
          {tab.title}
        </Tab>
      ))}
    </TabsContainer>
  );
}
