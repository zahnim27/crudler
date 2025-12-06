import { useState, useEffect } from "react";
import { LogBox, StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList";
import API from "../API/API.js";
import { Button, ButtonTray } from "../UI/Button.js";
import Icons from "../UI/Icons.js";
import RenderCount from "../UI/RenderCount.js";
const ModuleListScreen = ({ navigation }) => {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  const modulesEndpoint = "https://softwarehub.uk/unibase/api/modules";

  const [modules, setModules] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const loadModules = async (endpoint) => {
    const response = await API.get(endpoint);
    setIsloading(false);
    if (response.isSuccess) setModules(response.result);
  };
  useEffect(() => {
    loadModules(modulesEndpoint);
  }, []);

  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID != module.ModuleID));

  const handleAdd = (newModule) => setModules([...modules, newModule]);
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
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });

  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

  return (
    <Screen>
      <RenderCount />
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      {isLoading && <Text>Loading records ...</Text>}
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
