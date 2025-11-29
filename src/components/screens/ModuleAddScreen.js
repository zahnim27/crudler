import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleForm from "../entity/modules/ModuleForm.js";

const ModuleAddScreen = ({ navigation, route }) => {
  const { onAdd } = route.params;

  const handleSubmit = (module) => {
    onAdd(module);               
    if (navigation.canGoBack()) {
      navigation.goBack();       
    }
  };

  const handleCancel = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <Screen>
      <ModuleForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </Screen>
  );
};


const styles = StyleSheet.create({});

export default ModuleAddScreen;
