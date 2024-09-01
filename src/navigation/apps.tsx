import * as React from "react";
import AppScreen from "@/pages/app";
import HomeScreen from "@/pages/home";
import HomeLogo from "@/pages/home/components/logo";
import { useDrawer } from "@/states/runtime/drawer";
import { useTheme } from "@/theme";
import { createStackNavigator } from "@react-navigation/stack";
import { IconButton } from "react-native-paper";
import { useGoBack } from "@/hooks/useGoBack";
import { AppsStackParams, NavigationProps } from "@/types/navigation";

const Stack = createStackNavigator<AppsStackParams>();

const HomeStack = () => {
  const { schemedTheme } = useTheme();
  const openDrawer = useDrawer((state) => state.openDrawer);
  const goBack = useGoBack();

  return (
    <Stack.Navigator initialRouteName="apps" id="apps-stack">
      <Stack.Screen
        name="apps"
        options={{
          headerStyle: {
            backgroundColor: schemedTheme.surfaceContainer,
          },
          headerTitle: (_) => <HomeLogo />,
          headerRight: () => <IconButton icon="menu" onPress={openDrawer} />,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="app"
        options={{
          headerStyle: {
            backgroundColor: schemedTheme.surfaceContainer,
          },
          headerTitleStyle: {
            color: schemedTheme.onSurface,
          },
          headerTitle: "",
          headerLeft: (_) => <IconButton icon="arrow-left" onPress={goBack} />,
          headerRight: () => <IconButton icon="menu" onPress={openDrawer} />,
        }}
        component={AppScreen}
      />
    </Stack.Navigator>
  );
};

HomeStack.displayName = "HomeStack";

export default HomeStack;
