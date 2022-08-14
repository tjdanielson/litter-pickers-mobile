import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Input, Stack, FormControl, Button } from "native-base";
import { styles } from "../../styles/styles";

export const LogCleanup = () => {
  return (
    <View style={styles.form}>
      <ScrollView>
        <FormControl>
          <Stack space={5}>
            <Stack>
              <FormControl.Label>Date</FormControl.Label>
              <Input placeholder="Date" />
            </Stack>
            <Stack>
              <FormControl.Label>Time Spent</FormControl.Label>
              <Input placeholder="Time Spent (in minutes)" />
            </Stack>
            <Stack>
              <FormControl.Label>Street 1</FormControl.Label>
              <Input placeholder="Street 1" />
            </Stack>
            <Stack>
              <FormControl.Label>Street 2</FormControl.Label>
              <Input placeholder="Street 2" />
            </Stack>
            <Stack>
              <FormControl.Label>City</FormControl.Label>
              <Input placeholder="City" />
            </Stack>
            <Stack>
              <FormControl.Label>State</FormControl.Label>
              <Input placeholder="State" />
            </Stack>
            <Stack>
              <FormControl.Label>Zip</FormControl.Label>
              <Input placeholder="Zip" />
            </Stack>
            <Button
              success
              style={{ paddingLeft: 5, marginTop: 10, marginLeft: 10 }}
            >
              <Text>Submit</Text>
            </Button>
          </Stack>
        </FormControl>
      </ScrollView>
    </View>
  );
};

export default LogCleanup;
