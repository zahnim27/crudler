import { useState } from 'react';
import { LogBox, StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleList from '../entity/modules/ModuleList';

import InitialModules from '../../data/modules';
import { Button,ButtonTray } from '../UI/Button.js';
import Icons from '../UI/Icons.js';

const ModuleListScreen = ({ navigation }) => {
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

  const [modules, setModules] = useState(InitialModules);

  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID != module.ModuleID));

  const handleAdd = (module) => setModules([...modules, module]);

  const handleModify = (updatedModule) =>
    setModules(
      modules.map((module) =>
        module.ModuleID === updatedModule.ModuleID ? updatedModule : module
      )
    );

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onAdd = (module) => {
    handleAdd(module);
  };

  const onModify = (module) => {
    handleModify(module);
  };

  const gotoViewScreen = (module) =>
    navigation.navigate('ModuleViewScreen', { module, onDelete, onModify });

  const gotoAddScreen = () =>
    navigation.navigate('ModuleAddScreen', { onAdd });

  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
