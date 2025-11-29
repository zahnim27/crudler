import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Screen from '../layout/Screen';
import { Button, ButtonTray } from '../UI/Button.js';
import Icons from '../UI/Icons.js';

const defaultModule = {
  ModuleID: null,
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage: null,
};

const ModuleAddScreen = ({ navigation, route }) => {
  // Initialisations ------------------------------
  const { onAdd } = route.params;

  // random ID + default image
  defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModule.ModuleImage =
    'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg';

  // State ----------------------------------------
  const [module, setModule] = useState(defaultModule);

  // Handlers -------------------------------------
  const handleAdd = () => onAdd(module);
  const handleCancel = () => navigation.goBack();

  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });

  // View -----------------------------------------
  return (
    <Screen>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module code</Text>
        <TextInput
          value={module.ModuleCode}
          onChangeText={(value) => handleChange('ModuleCode', value)}
          style={styles.itemInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module name</Text>
        <TextInput
          value={module.ModuleName}
          onChangeText={(value) => handleChange('ModuleName', value)}
          style={styles.itemInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module level</Text>
        <TextInput
          value={module.ModuleLevel}
          onChangeText={(value) => handleChange('ModuleLevel', value)}
          style={styles.itemInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module leader</Text>
        <TextInput
          value={module.ModuleLeaderName}
          onChangeText={(value) => handleChange('ModuleLeaderName', value)}
          style={styles.itemInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module image URL</Text>
        <TextInput
          value={module.ModuleImage}
          onChangeText={(value) => handleChange('ModuleImage', value)}
          style={styles.itemInput}
        />
      </View>

      <ButtonTray>
        <Button
          label="Add"
          icon={<Icons.Add />}
          onClick={handleAdd}
        />
        <Button
          label="Cancel" icon={<Icons.Close />} onClick={handleCancel}
        />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
  },
  itemLabel: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 4,
  },
  itemInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 16,
  },
});

export default ModuleAddScreen;
