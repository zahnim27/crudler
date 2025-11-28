import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleList from '../entity/modules/ModuleList';

import InitialModules from '../../data/modules';

const ModuleListScreen = ({ navigation }) => {
  // Initialisations ------------------------------

  // State ----------------------------------------
  const [modules, setModules] = useState(InitialModules);

  // Handlers -------------------------------------
  const handleSelect = (module) => navigation.navigate('ModuleViewScreen', { module });

  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID != module.ModuleID));

  // View -----------------------------------------
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
