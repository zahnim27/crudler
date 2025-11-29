import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleForm from '../entity/modules/ModuleForm.js';

const ModuleModifyScreen = ({ navigation, route }) => {
  const { module, onModify } = route.params;

  const handleSubmit = (updatedModule) => {
    onModify(updatedModule);         
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
      <ModuleForm
        originalModule={module}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleModifyScreen;
