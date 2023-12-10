import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import FindNearbyStations from './FindNearbyStations';
import TransactionHistory from './TransactionHistory';
import UserInfo from './UserInfo';
const Tab = createBottomTabNavigator();
function Dashboard({navigation}: any) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Find" component={FindNearbyStations} />
      <Tab.Screen name="TransactionHistory" component={TransactionHistory} />
      <Tab.Screen name="UserInfo" component={UserInfo} />
    </Tab.Navigator>
  );
}

export default Dashboard;
