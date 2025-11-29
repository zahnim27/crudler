import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleForm from "../entity/modules/ModuleForm.js";

const ModuleAddScreen = ({ navigation, route }) => {
  // Initialisations ------------------------------
  const { onAdd } = route.params;

  // Handlers -------------------------------------
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

  // View -----------------------------------------
  return (
    <Screen>
      <ModuleForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
