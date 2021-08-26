import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { Heading, Switch, VStack, Container, useColorMode, Text, Button, Input, Icon, HStack, Stack} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LoginForm(props) {
  const {} = props;
  const [userData, setUserData] = useState({});
  const {colorMode, toggleColorMode} = useColorMode();
  // useEffect(()=>{
  //   setcolorTheme(colorMode)
  // }, [colorMode]);
  console.log(colorMode);
    return (
      <Container
        bgColor={colorMode === "dark" ? "darkBlue.800" : "lightBlue.100"}
        alignItems="center"
        size="xl"
        >
        <Switch
          size="md"
          colorScheme={colorMode === "dark" ? "gray" : "primary"}
          onChange={()=> toggleColorMode()}/>
        <VStack alignItems="center">
          <Heading>Inicio de Sesión</Heading>
        <Input
          width="100%"
          placeholder="Ingresa Tu Correo Electrónico"
          mb={7}
          isRequired={true}
          size="md"
          variant="rounded"
          onChange={(e) => setUserData({...userData, email: e.event.text})}
        />
        <Input
          placeholder="Ingresa Tu Contraseña"
          size="md"
          width="100%"
          type="password"
          mb={7}
          variant="rounded"/>
        <Button
          width="100%"
          mb={5}>
            Iniciar Sesion
        </Button>
        </VStack>
        <Text
          mb={5}>
            Inicia Sesion Con Tu Cuenta de: 
        </Text>
        <HStack space={2}>
        <Button
          startIcon={<Icon as={MaterialCommunityIcons} name="google"/>}
          bgColor="red.500"
        >
          Google
        </Button>
        <Button
          startIcon={<Icon as={MaterialCommunityIcons} name="facebook"/>}
          bgColor="blue.500">
            Facebook
        </Button>
        </HStack>
        <Stack
          alignItems="center">
          <Text mt={5}>
            Si no tienes una cuenta puedes registrarte dando click
            <Text
              style={styles.clickAqui}
              onPress={()=> console.log("Registrar")}> Aqui </Text>
          </Text>
        </Stack>
      </Container>
    )
}

const styles = StyleSheet.create({
Input:{
  paddingBottom: "20px"
},
clickAqui:{
  color: "green"
}
})
